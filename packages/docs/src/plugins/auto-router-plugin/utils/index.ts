import fs from 'fs/promises';
import { resolve } from 'path';

export const targetFileMatcher = /\.(vue|md|tsx)$/;

export const getFileMatas = (flag?: string) => new RegExp('<::([^:]+?)=([^:]+?)::>', flag);

export const getRoutePathMatcher = (rootPath: string) => {
	return new RegExp(`${rootPath}([/|\]([^/\]+).+)\.(vue|md|tsx)`);
};

export const isIndexFileMatcher = (path: string) => /index\.(vue|md)$/.test(path);

export function escape(path: string) {
	return path.replace(/\\/g, '/');
}

export function readFile(path: string) {
	return fs.readFile(path, 'utf-8');
}

export async function isFile(path: string) {
	return (await fs.lstat(path)).isFile();
}

export async function isTargetFile(path: string) {
	return !!path.match(targetFileMatcher) && (await isFile(path));
}

export async function isDir(path: string) {
	return !(await isFile(path));
}

export async function searchTargetPath(path: string, solution: (path: string) => Promise<boolean>) {
	return (await fs.readdir(path)).reduce(async (fin, dir) => {
		dir = resolve(path, dir);
		if (await solution(dir)) (await fin).push(dir);
		return fin;
	}, Promise.resolve<string[]>([]));
}

export async function mapTargetFiles(dirs: string[]) {
	return dirs.reduce(async (fin, dir) => {
		const fileList = await searchTargetPath(dir, isTargetFile);
		fileList.length && (await fin).push(fileList);
		return fin;
	}, Promise.resolve<string[][]>([]));
}

export function parseMetas(code: string) {
	const matched = code.match(getFileMatas('g')) || [];
	return matched.reduce((fin, entry) => {
		const [_, key, value] = entry.match(getFileMatas()) || [];
		fin.push(`${key}:\`${value}\``);
		return fin;
	}, <string[]>[]);
}
