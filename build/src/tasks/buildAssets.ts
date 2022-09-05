import chalk from 'chalk';
import consola from 'consola';
import glob from 'fast-glob';
import { copy, outputFile } from 'fs-extra';
import { readFile } from 'fs/promises';
import { extname } from 'path';
import { pkgRoot, srcRoot } from '../build-constants';

export async function buildAssets() {
	const FILE_SEARCHER = '**/*.{png,jpg,ttf,svg}';
	const assets = await Promise.all([
		await glob(FILE_SEARCHER, {
			cwd: srcRoot,
			absolute: true
		}),
		await glob(FILE_SEARCHER, {
			cwd: pkgRoot,
			absolute: true
		})
	]).then(([src, pkg]) => {
		return [...src, ...pkg];
	});

	return Promise.all(
		assets.map(id => {
			if (['.png', 'jpg'].includes(extname(id))) {
				return createBase64Handler(id);
			} else {
				return createCopyHandler(id);
			}
		})
	);

	function targetPathFor(id: string) {
		return id.replace('/src', '/es/src').replace('/packages', '/es/packages');
	}

	async function createBase64Handler(id: string) {
		const content = await readFile(id, 'base64');
		await outputFile(
			targetPathFor(id).replace(/\.(png|jpg)$/, '.js'),
			`export default "data:image/png;base64,${content}"`
		);
		await outputFile(
			targetPathFor(id).replace(/\.(png|jpg)$/, '.d.ts'),
			'type source = string;\nexport default source;'
		);
		consola.success(chalk.green(`Transfer for file: ${chalk.bold(id)} completed`));
	}

	function createCopyHandler(id: string) {
		return new Promise<void>((resolve, reject) => {
			copy(id, targetPathFor(id), err => {
				if (err) {
					reject();
				} else {
					resolve();
					consola.success(chalk.green(`Copy for file: ${chalk.bold(id)} completed`));
				}
			});
		});
	}
}
