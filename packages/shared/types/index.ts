import { App } from '@vue/runtime-core';

export type SFCWithInstall<T> = T & { install: (app: App, ...options: any[]) => any };

export type AnyObject = Record<string, any>;

export type Func<T extends Array<any> = any[], P = any> = (...args: T) => P;

export type Nullable<T> = T | null | undefined;

export type UndefinedAble<T> = T | undefined;

export type ArrayAble<T> = T | T[];

export type MapValue<T> = T extends Map<any, infer P> ? P : any;
