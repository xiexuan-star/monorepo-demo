import fs from 'fs';
import { relative, resolve } from 'path';
import { ComponentInfo, MdParser, ScriptInfo } from '../../types';

const TEMPLATE_STRING_TAG = '__#__{__';

const demoMatcher = /(::: demo\s*([^]*?)\s:::)/g;

const getVueImportMatcher = (flags?: string) => new RegExp('([\\\\/.a-zA-Z-_\\d]+\\.vue)(\\[.+?])?(\\{.+?})?', flags);

function escape(code: string) {
	return code
		.replace(/<script/g, '&#60;script')
		.replace(/<\/script/g, '&#60;/script')
		.replace(/`/g, '\\`')
		.replace(/\${/g, TEMPLATE_STRING_TAG)
		.replace(/\t/g, '  ')
		.replace(/import\s+(\{[^}]+})\s+from\s+['"][~@][^'"~@]+['"]/g, 'import $1 from "cnhis-design-vue"');
}

export const parseDemo: MdParser = (template, id) => {
	let totalIndex = 0;
	const resultComponents: ComponentInfo[] = [];

	const resultTemplate = template.replace(demoMatcher, (_, wrapper, innerContent) => {
		if (!wrapper || !innerContent) return '';

		const vueDemos: string[] = innerContent.match(getVueImportMatcher('g')) || [];
		const componentList = vueDemos.map(createComponentInfo);
		resultComponents.push(...componentList);

		return componentList.reduce((fin, cur) => {
			return fin + generateTemplateString(cur, cur.alias);
		}, '');
	});

	const scripts: Required<ScriptInfo> = {
		imports: generateImports(),
		components: generateComponents(),
		varDeclares: generateVarDeclare(),
		setupReturns: generateSetupReturn()
	};

	provideContext();

	return { template: resultTemplate, scripts };

	function provideContext() {
		scripts.imports.push(`import hljs from 'highlight.js';`);
		scripts.varDeclares.push(
			`function templateStringTransfer(str){return str.replace(/${TEMPLATE_STRING_TAG}/g,'\${')}`
		);
	}

	function generateTemplateString(info: ComponentInfo, alias: string) {
		return `<demo-collapse>
            ${generateTitleString(info)}
            ${generateDescriptionString(info)}
           <template #source>
              <pre><code class="hljs" v-html="code__${alias}"/></pre>
           </template>
           <${info.alias}/>
         </demo-collapse>\n`;
	}

	function generateTitleString(info: ComponentInfo) {
		return info.title ? `<template #title>${info.title.replace(/[\[\]]/g, '')}</template>` : '';
	}

	function generateDescriptionString(info: ComponentInfo) {
		return info.description ? `<template #description>${info.description.replace(/[{}]/g, '')}</template>` : '';
	}

	function createComponentInfo(pathAndInfo: string): ComponentInfo {
		const [, path, title, description] = pathAndInfo.match(getVueImportMatcher()) || [];
		return {
			alias: `Component${totalIndex++}`,
			title,
			description,
			path: resolveIdPath(path),
			code: getCodeFromPath(path)
		};
	}

	function getCodeFromPath(path: string) {
		return escape(fs.readFileSync(resolveIdPath(path), 'utf-8'));
	}

	function resolveIdPath(path: string) {
		return resolve(id, '..', path).replace(/\\/g, '/')
	}

	function generateImports() {
		return resultComponents.map(({ alias, path }) => `import ${alias} from "${path}";`);
	}

	function generateComponents() {
		return resultComponents.map(({ alias }) => `${alias}`);
	}

	function generateVarDeclare() {
		return resultComponents.map(({ code, alias }) => `const code__${alias} = ${bindHljs(unescape(code))}`);

		function unescape(code: string) {
			return `templateStringTransfer(\`${code}\`.replace(\/&#60;\/g,'<'))`;
		}

		function bindHljs(code: string) {
			return `hljs.highlight(${code}, { language: 'xml' }).value`;
		}
	}

	function generateSetupReturn() {
		return resultComponents.map(({ alias }) => `code__${alias}`);
	}
};
