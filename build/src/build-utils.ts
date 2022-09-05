import { spawn } from 'child_process';
import fs from 'fs/promises';
import { dirname, relative, resolve } from 'path';
import chalk from 'chalk';
import consola from 'consola';
import { buildRoot, PKG_NAME, projRoot } from './build-constants';

export const excludeFiles = (files: string[]) => {
	const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist'];
	return files.filter(path => !excludes.some(exclude => path.includes(exclude)));
};

export const withTaskName = <T>(name: string, fn: T) => Object.assign(fn, { displayName: name });

export const runTask = (name: string) =>
	withTaskName(`shellTask:${name}`, () => run(`npm run start ${name}`, buildRoot));

export const run = async (command: string, cwd: string = projRoot) =>
	new Promise<void>((resolve, reject) => {
		const [cmd, ...args] = command.split(' ');
		consola.info(`run: ${chalk.green(`${cmd} ${args.join(' ')}`)}`);
		const app = spawn(cmd, args, {
			cwd,
			stdio: 'inherit',
			shell: process.platform === 'win32'
		});

		const onProcessExit = () => app.kill('SIGHUP');

		app.on('close', code => {
			process.removeListener('exit', onProcessExit);

			if (code === 0) {
				resolve();
			} else {
				reject(new Error(`Command failed. \n Command: ${command} \n Code: ${code}`));
			}
		});
		process.on('exit', onProcessExit);
	});

export const pathRewriter = (source: string, id?: string) => {
	let prePath = PKG_NAME;
	if (id) {
		prePath = relative(resolve(id, '..'), resolve(process.cwd(), '..')).replace(/\\/g, '/');
		if (id.includes('/es/')) {
			prePath += '/es';
		}
	}
	source = source.replace(/@\//g, `${prePath}/src/`).replace(/~\//g, `${prePath}/packages/`);
	return source;
};

export async function copyJSFile(inputPath: string, outputPath: string, preWrite = (content: string) => content) {
	await fs.mkdir(dirname(outputPath), { recursive: true });
	await fs.writeFile(outputPath, preWrite(await fs.readFile(inputPath, 'utf-8')), 'utf8');
}

export function toEsDir(id: string) {
	return id.replace(`\/${PKG_NAME}\/`, `\/${PKG_NAME}\/es\/`);
}
