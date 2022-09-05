import { series, parallel } from 'gulp';
import { run, runTask, withTaskName } from './src';

export default series([
	// 移除旧的es文件夹
	withTaskName('clean', () => run('rimraf es')),
	parallel(
		// js
		runTask('buildModules'),
		// css
		runTask('buildStyles'),
		// dts
		runTask('buildTypes'),
		// static
		runTask('buildAssets')
	)
]) as unknown;

export * from './src';
