import * as babel from '@babel/core';
import { compileScript, compileTemplate, parse, SFCDescriptor } from '@vue/compiler-sfc';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import { extname } from 'path';
import { PluginOption } from 'vite';
import { CommonPluginOption } from '../types';
import { parseDemo, parseSfcInfo, parseTip } from './script/block';
import { bindHMRInfo } from './script/hmr';
import { ScriptInfo } from './types';
import { createFilter } from 'rollup-pluginutils';

function assignScripts(pre: ScriptInfo, next: ScriptInfo) {
	const keySet = new Set([...Object.keys(pre), ...Object.keys(next)]);
	return [...keySet].reduce((fin: ScriptInfo, key) => {
		fin[key] = [...(pre[key] || []), ...(next[key] || [])];
		return fin;
	}, <ScriptInfo>{});
}

function highlight(str: string, lang = 'xml') {
	if (lang && hljs.getLanguage(lang)) {
		try {
			return `<pre><code class="hljs">${
				hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
			}</code></pre>`;
		} catch (e) {
			console.warn(e);
			return '';
		}
	}
	return '';
}

const md2html = MarkdownIt({ highlight }).use(function (md) {
	const text = md.renderer.rules.text as any;
	md.renderer.rules.text = (...args) => {
		const rawCode: string = text(...args);
		return rawCode.replace(/&lt;::.+?::&gt;/g, '');
	};
});

function transformMd2Html(md: string) {
	return md2html.render(md);
}

function parseMarkdown(md: string, id: string) {
	const template = transformMd2Html(md);

	return [parseDemo, parseTip, parseSfcInfo].reduce(
		(fin, parser) => {
			const { template, scripts } = parser(fin.template, id);

			return { template, scripts: assignScripts(fin.scripts, scripts) };
		},
		{ template, scripts: <ScriptInfo>{} }
	);
}

export function transformMd2VueComponent(src: string, id: string) {
	const { template, scripts } = parseMarkdown(src, id);
	const { descriptor } = parse(generateSourceCode());

	const code = combine(getTemplateCode(descriptor), getScriptCode(descriptor));
	return babel.transformSync(code, {
		babelrc: false,
		ast: true,
		sourceMaps: true,
		sourceFileName: id,
		configFile: false
	})!;

	function generateSourceCode() {
		return `
<template>
  <div class='markdown'>
   <anchor-list>
     ${template}
   </anchor-list>
  </div>
</template>
<script>
import {defineComponent} from 'vue';\n
${scripts.imports?.join('\n') ?? ''}
const __script=defineComponent({
  components:{${scripts.components?.join(',') ?? ''}},
  setup(){
     ${scripts.varDeclares?.join('\n') ?? ''}
     return {${scripts.setupReturns?.join(',') ?? ''}}
  }
})
export default __script;
</script>
`;
	}

	function getTemplateCode(descriptor: SFCDescriptor) {
		return compileTemplate({
			source: descriptor.template?.content ?? '',
			id: '-1',
			filename: 'index.vue'
		}).code;
	}

	function getScriptCode(descriptor: SFCDescriptor) {
		let result = compileScript(descriptor, { id: '-1' }).content;
		if (process.env.NODE_ENV === 'development') {
			result = bindHMRInfo(result, scripts.imports || [], id) ?? result;
		}
		return result;
	}

	function combine(template: string, script: string) {
		return `
    ${template}\n${script.replace('export default __script', '__script.render=render;\nexport default __script')}`;
	}
}

export function MDPlugin(option: CommonPluginOption = {}): PluginOption {
	const filter = createFilter(option.include, option.exclude);
	return {
		name: 'MDPlugin',
		enforce: 'pre',
		transform(src, id) {
			if (!filter(id)) return;
			if (extname(id) === '.md') {
				const result = transformMd2VueComponent(src, id);
				return {
					code: result.code!,
					map: result.map
				};
			}
		}
	};
}
