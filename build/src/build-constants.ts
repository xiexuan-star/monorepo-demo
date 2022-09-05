import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..', '..');
export const pkgPath = resolve(projRoot, 'package.json');
const { name: pkgName = 'cnhis-design-vue' } = require(pkgPath);
export const PKG_NAME = pkgName;

export const pkgRoot = resolve(projRoot, 'packages');
export const srcRoot = resolve(projRoot, 'src');
export const cdRoot = resolve(pkgRoot, PKG_NAME);
export const buildRoot = resolve(projRoot);

export const buildOutput = resolve(projRoot);
export const cdOutput = resolve(buildOutput);
