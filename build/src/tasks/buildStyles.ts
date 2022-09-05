import chalk from 'chalk';
import consola from 'consola';
import glob from 'fast-glob';
import { src, dest } from 'gulp';
import less from 'gulp-less';
import replace from 'gulp-replace';
import { resolve } from 'path';
import { cdOutput, pkgRoot } from '../build-constants';
import { excludeFiles, pathRewriter } from '../build-utils';
import { readFile } from 'fs/promises';
import { extname } from 'path';
import { Transform } from 'stream';

// @ts-ignore
import cssimport from 'gulp-cssimport';

const getUrlMatcher = (flag: string) => new RegExp('url\\([\'"]([^\'"]+)[\'"]\\)', flag);

function createBase64Transform(id: string) {
	return new Transform({
		objectMode: true,
		async transform(file, enc, callback) {
			if (file.isBuffer()) {
				let content = String(file.contents);
				const urls = content.match(getUrlMatcher('g'));
				if (urls) {
					for (const url of urls) {
						const [, path] = url.match(getUrlMatcher('')) ?? [];
						if (path && ['.png', 'jpg'].includes(extname(path))) {
							const _path = resolve(id, '..', path);
							const base64 = await readFile(_path, 'base64');
							content = content.replace(path, 'data:image/png;base64,' + base64);
							file.contents = Buffer.from(content);
						}
					}
				}
			}
			callback(null, file);
		}
	});
}

async function gulpLessParser(id: string) {
	const outputId = resolve(cdOutput, 'es', id.match(/(packages\/.+\/style)/)?.[1] ?? 'packages');
	await src(id)
		.pipe(cssimport())
		.pipe(replace(/(\s|\S|.)+/, v => pathRewriter(v, id)))
		.pipe(createBase64Transform(id))
		.pipe(less())
		.pipe(dest(outputId));
	consola.success(chalk.green(`Style for file: ${chalk.bold(id)} generated`));
}

export const buildStyles = async () => {
	const input = excludeFiles(
		await glob('**/index.{less,css}', {
			cwd: pkgRoot,
			absolute: true
		})
	);
	return Promise.all(input.map(gulpLessParser));
};
