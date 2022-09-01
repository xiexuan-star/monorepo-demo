import { createHash } from 'crypto';

function getHash(text: string) {
	return createHash('sha256').update(text).digest('hex').substring(0, 8);
}

function getPath(importer: string) {
	const result = importer.match(/import\s+\S+\sfrom\s+['"]([^'"]+)['"]/)?.[1] ?? null;
	return result ? `'/${result}'` : result;
}

export function bindHMRInfo(script: string, imports: string[], id: string) {
	if (!/\?vue&type=script/.test(id)) {
		const hash = getHash(id + 'default');
		script += `\n__script.__hmrId = "${hash}";` + `\n__VUE_HMR_RUNTIME__.createRecord("${hash}", __script)`;
		const callbackCode = `\n__VUE_HMR_RUNTIME__.reload("${hash}", __default)\n`;
		script += `\nimport.meta.hot.accept(({default:__default})=> {${callbackCode}})`;
		// script += `\nimport.meta.hot.accept([${ imports.map(getPath).filter(p => p) }],()=>{
		// console.log('reload');
		//   __VUE_HMR_RUNTIME__.reload("${ hash }")
		// })`;
	}
	return script;
}
