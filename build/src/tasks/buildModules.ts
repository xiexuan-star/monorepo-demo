import glob from 'fast-glob';
import { resolve } from 'path';
import { rollup } from 'rollup';
import rollupConfig from '../rollup.config';
import { cdOutput, cdRoot, pkgRoot, srcRoot } from '../build-constants';
import { copyJSFile, excludeFiles, pathRewriter, toEsDir } from '../build-utils';

export const buildModules = async () => {
	const ids = excludeFiles(
		await Promise.all([
			await glob('**/*.{js,ts,vue,tsx,jsx}', {
				cwd: pkgRoot,
				absolute: true,
				ignore: ['**/*.d.ts']
			}),
			await glob('**/*.{js,ts,vue,tsx,jsx}', {
				cwd: srcRoot,
				absolute: true,
				ignore: ['**/*.d.ts']
			})
		]).then(([pkg, src]) => {
			return [...pkg, ...src];
		})
	);

	const bundle = await rollup({
		input: await externalCompilerFiles(ids),
		...rollupConfig
	});

	await bundle.write({
		format: 'es',
		dir: resolve(cdOutput, 'es'),
		preserveModules: true,
		preserveModulesRoot: cdRoot,
		entryFileNames: '[name].js'
	});

	async function externalCompilerFiles(ids: string[]) {
		// 暂时关闭
		const lockWhiteList = true;
		if (lockWhiteList) return ids;

		const whiteList: RegExp[] = [/fabric\.js$/];

		return ids.reduce(async (fin: Promise<string[]>, id) => {
			if (whiteList.some(matcher => matcher.test(id))) {
				await copyJSFile(id, toEsDir(id), content => pathRewriter(content, toEsDir(id)));
			} else {
				(await fin).push(id);
			}
			return fin;
		}, Promise.resolve([]));
	}
};
