import nodeResolve from '@rollup/plugin-node-resolve';
import { Plugin, RollupOptions } from 'rollup';
import vue from '@vitejs/plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import vueJsx from '@vitejs/plugin-vue-jsx';
import commonjs from '@rollup/plugin-commonjs';
import alias, { ResolverObject } from '@rollup/plugin-alias';
import { resolve } from 'path';
import { pkgPath } from './build-constants';
import { CnHisDesignAlias } from './plugins/alias-plugin';

function getPackageDependencies(pkgPath: string) {
	const manifest = require(pkgPath);
	const { dependencies = {}, peerDependencies = {} } = manifest;

	return {
		dependencies: Object.keys(dependencies),
		peerDependencies: Object.keys(peerDependencies)
	};
}

/**
 * @param {String} pkgPath
 * @description 生成需要排除依赖的判断条件
 */
function generateExternal(pkgPath: string) {
	const { dependencies, peerDependencies } = getPackageDependencies(pkgPath);

	return (id: string) => {
		const packages = peerDependencies;
		packages.push('@vue', ...dependencies);

		return [...new Set(packages)].some(pkg => id === pkg || id.startsWith(`${pkg}/`));
	};
}

const customResolver = nodeResolve({
	extensions: ['.vue', '.js', '.ts', '.tsx', '.json', '.mjs', '.jsx']
}) as ResolverObject;

const rollupConfig: RollupOptions = {
	external: generateExternal(pkgPath),
	plugins: [
		alias({
			entries: [
				{ find: '@', replacement: resolve(__dirname, '../../../src') },
				{ find: '~', replacement: resolve(__dirname, '../../../packages') }
			],
			customResolver
		}),
		CnHisDesignAlias(),
		vue({ isProduction: true }) as Plugin,
		vueJsx() as Plugin,
		nodeResolve({
			extensions: ['.mjs', '.js', '.json', '.ts']
		}),
		commonjs({ exclude: [/\.vue/] }),
		esbuild({
			sourceMap: true,
			target: 'es2018',
			loaders: {
				'.vue': 'ts'
			}
		})
		// terser()
	]
};

export default rollupConfig;
