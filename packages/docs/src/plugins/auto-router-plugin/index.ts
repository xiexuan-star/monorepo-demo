import { createFilter } from 'rollup-pluginutils';
import { PluginOption } from 'vite';
import { relative, resolve } from 'path';
import { AutoRouterPluginOption } from './types';
import {
	escape,
	getRoutePathMatcher,
	isDir,
	isIndexFileMatcher,
	mapTargetFiles,
	parseMetas,
	readFile,
	searchTargetPath
} from './utils';

class FileRouteGenerator {
	properties = ['path', 'name', 'meta', 'component'];

	cache = new Map<string, Promise<string> | string>();

	constructor(protected filePaths: string[], protected rootPath: string, protected id: string) {}

	path() {
		const [_, path] = escape(this.filePaths[0]).match(getRoutePathMatcher(this.rootPath)) || [];
		return `'${path}'`;
	}

	name() {
		return this.path();
	}

	async meta(path = this.filePaths[0]) {
		return `{${parseMetas(await readFile(path)).join(',')}}`;
	}

	component() {
		return `()=>import('${escape(relative(resolve(this.id, '..'), this.filePaths[0]))}')`;
	}

	async generate() {
		const result = await this.properties.reduce(async (fin, prop) => {
			const val = await (this[prop] && this[prop]());
			val && (await fin).push(`${prop}:${val}`);
			return fin;
		}, Promise.resolve<string[]>([]));
		return `{${result.join(',')}}`;
	}
}

class MultiFileRouteGenerator extends FileRouteGenerator {
	properties = ['path', 'name', 'meta', 'redirect', 'component', 'children'];

	otherPaths() {
		return this.filePaths.filter(p => !isIndexFileMatcher(p));
	}

	path() {
		const [, , dirName] = escape(this.otherPaths()[0]).match(getRoutePathMatcher(this.rootPath)) || [];
		return `'/${dirName}'`;
	}

	name() {
		return this.path();
	}

	async meta() {
		const indexPath = this.filePaths.find(isIndexFileMatcher);
		return indexPath ? super.meta(indexPath) : '';
	}

	redirect() {
		const [, path] = escape(this.otherPaths()[0]).match(getRoutePathMatcher(this.rootPath)) || [];
		return `'${path}'`;
	}

	component() {
		return 'RouterView';
	}

	async children() {
		const children: string[] = [];
		for (const child of this.otherPaths()) {
			children.push(await generateFileRoute([child], this.rootPath, this.id));
		}
		return `[${children.join(',')}]`;
	}
}

async function generateMultipleRoute(filePaths: string[], rootPath: string, id: string) {
	return new MultiFileRouteGenerator(filePaths, rootPath, id).generate();
}

async function generateFileRoute(filePaths: string[], rootPath: string, id: string) {
	return new FileRouteGenerator(filePaths, rootPath, id).generate();
}

async function generateRoute(filePaths: string[], rootPath: string, id: string) {
	if (filePaths.length === 1) {
		return generateFileRoute(filePaths, rootPath, id);
	}
	return generateMultipleRoute(filePaths, rootPath, id);
}

async function mapRoute(filePathsList: string[][], rootPath: string, id: string) {
	return filePathsList.reduce(async (fin, filePaths) => {
		(await fin).push(await generateRoute(filePaths, rootPath, id));
		return fin;
	}, Promise.resolve<string[]>([]));
}

export async function generateRouteList(id: string, rootPath: string) {
	const dirs = await searchTargetPath(rootPath, isDir);

	const filePathsList = await mapTargetFiles(dirs);

	const routes = await mapRoute(filePathsList, rootPath, id);

	return `[${routes.join(',')}]`;
}

async function parseSourceCode(src: string, id: string, rootPath: string) {
	src = `import {RouterView} from 'vue-router';\n${src}`;
	return src.replace('$__AUTO_ROUTER', await generateRouteList(id, rootPath));
}

export function AutoRouterPlugin(option: AutoRouterPluginOption = { rootPath: '' }): PluginOption {
	const filter = createFilter(option.include, option.exclude);
	return {
		name: 'AutoRouterPlugin',
		async transform(src, id) {
			if (!filter(id)) return;
			// 这里限制了只转化router, 定制插件, 略微节约一些性能
			if (!id.endsWith('router/index.ts') || !src.includes('$__AUTO_ROUTER')) return;
			return { code: await parseSourceCode(src, id, option.rootPath) };
		}
	};
}
