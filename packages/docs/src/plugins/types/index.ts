export interface CommonPluginOption {
	include?: Array<string | RegExp> | string | RegExp | null;
	exclude?: Array<string | RegExp> | string | RegExp | null;
}
export type ArrayAble<T> = T | T[];
export type Func<T extends Array<any> = any[], P = any> = (...args: T) => P;
