import chalk from 'chalk';
import consola from 'consola';
import glob from 'fast-glob';
import fs from 'fs/promises';
import { resolve, relative, dirname } from 'path';
import { CompilerOptions, Project, SourceFile } from 'ts-morph';
import { buildOutput, pkgRoot, projRoot } from '../build-constants';
import { copyJSFile, excludeFiles, pathRewriter, toEsDir } from '../build-utils';
import * as vueCompiler from 'vue/compiler-sfc';
import * as babel from '@babel/core';

const outDir = resolve(buildOutput, 'es', 'types');
const TSCONFIG_PATH = resolve(projRoot, 'tsconfig.json');
let fileIndex = 1;

export async function buildTypes() {
	// ts-morph配置项
	const compilerOptions: CompilerOptions = {
		emitDeclarationOnly: true,
		declaration: true,
		outDir,
		baseUrl: projRoot,
		allowJs: true,
		skipLibCheck: true,
		noImplicitAny: false
	};
	// 创建一个ts-morph任务
	const project = new Project({
		compilerOptions,
		tsConfigFilePath: TSCONFIG_PATH,
		skipAddingFilesFromTsConfig: true
	});
	// 在project中添加源文件
	const sourceFiles = await addSourceFiles(project);
	consola.success('Added source files');

	const tasks = sourceFiles.map(async sourceFile => {
		const relativePath = relative(pkgRoot, sourceFile.getFilePath());
		consola.trace(chalk.yellow(`Generating definition for file: ${chalk.bold(relativePath)}`));
		const emitOutput = sourceFile.getEmitOutput({ emitOnlyDtsFiles: true });
		const emitFiles = emitOutput.getOutputFiles();
		if (emitFiles.length === 0) {
			consola.warn(`Emit no file: ${chalk.bold(sourceFile.getFilePath())}`);
		}

		const subTasks = emitFiles.map(async outputFile => {
			const filepath = outputFile.getFilePath().replace('/types', '');

			await fs.mkdir(dirname(filepath), { recursive: true });

			await fs.writeFile(filepath, pathRewriter(outputFile.getText(), filepath), 'utf8');

			consola.success(chalk.green(`Definition for file: ${chalk.bold(relativePath)} generated`));
		});

		await Promise.all(subTasks);
	});

	await Promise.all(tasks);
}

async function addSourceFiles(project: Project) {
	project.addSourceFileAtPath(resolve(projRoot, 'global.d.ts'));
	const globSourceFile = '**/*.{js?(x),ts?(x),vue}';
	let filePaths = excludeFiles(
		await glob([globSourceFile], {
			cwd: pkgRoot,
			absolute: true,
			onlyFiles: true
		})
	);
	const srcFilePaths = excludeFiles(
		await glob([globSourceFile], {
			cwd: resolve(projRoot, 'src'),
			absolute: true,
			onlyFiles: true
		})
	);
	filePaths = filePaths.concat(srcFilePaths);
	const sourceFiles: SourceFile[] = [];
	// 拿到目标文件后, 对文件进行预处理
	await Promise.all([
		...filePaths.map(async file => {
			// sfc需要通过vue-compiler进行解析
			if (file.endsWith('.vue')) {
				const content = await fs.readFile(file, 'utf-8');
				const sfc = vueCompiler.parse(content);
				const { script, scriptSetup } = sfc.descriptor;
				if (script || scriptSetup) {
					let content = '';

					if (scriptSetup) {
						const compiled = vueCompiler.compileScript(sfc.descriptor, {
							id: fileIndex++ + ''
						});
						content += compiled.content;
					} else {
						content = script?.content ?? '';
					}

					const lang = scriptSetup?.lang || script?.lang || 'js';

					// 如果script标签lang是tsx或jsx, 那么需要提前通过babel转义
					if (['tsx', 'jsx'].includes(lang)) {
						const parsed = babel.transform(content, {
							presets: ['typescript', '@vue/babel-preset-jsx']
						});
						content = parsed?.code ?? content;
					}
					const sourceFile = project.createSourceFile(`${relative(process.cwd(), file)}.${lang}`, content);

					sourceFiles.push(sourceFile);
				}
			} else if (file.endsWith('.d.ts')) {
				await copyJSFile(file, toEsDir(file), content => pathRewriter(content, toEsDir(file)));
			} else if (file.match(/\.jsx?$/)) {
				try {
					// 只对没有对应dts文件的/\.jsx?$/文件进行编译
					await fs.access(file.replace(/\.jsx?$/, '.d.ts'));
				} catch {
					sourceFiles.push(project.addSourceFileAtPath(file));
				}
			} else {
				sourceFiles.push(project.addSourceFileAtPath(file));
			}
		})
	]);
	return sourceFiles;
}
