import { AnyObject } from '@/types';
import * as babel from '@babel/core';
import * as parser from '@babel/parser';
import { default as traverse } from '@babel/traverse';
import * as t from '@babel/types';
import { ElementNode, TemplateChildNode } from '@vue/compiler-core';
import fs from 'fs';
import { relative, resolve } from 'path';
import * as vueCompiler from 'vue/compiler-sfc';
import { MdParser, SFCEmits, SFCExpose, SFCProps, SFCSlots, SFCTableContext } from '../../types';
import { isDirectiveNode, isElementNode, isForNode, isIfBranchNode, isIfNode } from '../../utils';

const sfcMatcher = /(::: sfc\s*([^]*?)\s:::)/g;
const fileInfoMatcher = /\/([\da-zA-Z-_.]+)\/[\da-zA-Z-_]+.md$/;
const orderMatcher = /^\d+\.*\d*-([a-zA-z\d]+)/;
const getVueImportMatcher = (flags?: string) => new RegExp('([\\\\/.a-zA-Z-_\\d]+\\.vue)(\\[.+?])?(\\{.+?})?', flags);

function escape(path: string) {
	return path.replace(/\\/g, '/');
}

function escapeString(str: string) {
	return str.replace(/`/, '\\`');
}

function isFileExist(id: string) {
	return fs.existsSync(id);
}

function upperCamel(str: string) {
	return str
		.split('-')
		.map(s => `${s[0].toUpperCase()}${s.slice(1)}`)
		.join('');
}

function getDefaultPath(id: string) {
	let [, dirName] = id.match(fileInfoMatcher) || [];
	if (!dirName) return [];
	dirName = dirName.replace(orderMatcher, '$1');
	const pre = id.replace(escape(relative(process.cwd(), id)), '');
	const extensions = ['vue'];
	return extensions.map(extension => {
		return `${pre}packages/${dirName}/src/${upperCamel(dirName)}.${extension}[${upperCamel(dirName)}]`;
	});
}

function parseSourceCode(code: string, titlePrefix?: string) {
	const context = { slots: [], props: [], expose: [], emits: [] };
	parseVueCode(code, context);
	return renderSFCInfo(context, titlePrefix);
}

function parseVueCode(code: string, context: SFCTableContext) {
	const sfc = vueCompiler.parse(code);
	parseVueScriptCode(sfc, context);
	parseVueTemplateCode(sfc, context);
}

function parseVueTemplateCode(sfc: vueCompiler.SFCParseResult, context: SFCTableContext) {
	const {
		descriptor: { template }
	} = sfc;
	if (!template) return;
	const parsed = vueCompiler.compileTemplate({
		source: template.content,
		id: '-1',
		filename: 'index.vue'
	});
	if (!parsed.ast) return;
	traverseTemplateNodes(parsed.ast.children as any);

	function traverseTemplateNodes(nodes: TemplateChildNode[]) {
		nodes.forEach(node => {
			if (isElementNode(node)) {
				if (node.tag === 'slot') {
					context.slots.push(parseSlotNode(node));
				}
				if (node.children) {
					traverseTemplateNodes(node.children);
				}
			} else if (isIfNode(node)) {
				traverseTemplateNodes(node.branches);
			} else if (isForNode(node) || isIfBranchNode(node)) {
				traverseTemplateNodes(node.children);
			}
		});
	}

	function parseSlotNode(node: ElementNode): SFCSlots {
		let name = 'default';
		const description = '';
		node.props.forEach(propNode => {
			if (propNode.name === 'name') {
				if (isDirectiveNode(propNode)) return;
				name = propNode.value?.content ?? 'default';
			}
		});
		return { name, description };
	}
}

function parseVueScriptCode(sfc: vueCompiler.SFCParseResult, context: SFCTableContext) {
	const { script, scriptSetup } = sfc.descriptor;
	let content = '';

	if (scriptSetup) {
		const compiled = vueCompiler.compileScript(sfc.descriptor, {
			id: '-1'
		});
		content += compiled.content;
	} else {
		content = script?.content ?? '';
	}
	const { code: babelCode } = babel.transform(content, { presets: ['typescript', '@vue/babel-preset-jsx'] }) || {};
	if (!babelCode) return;
	const ast = parser.parse(babelCode, { sourceType: 'module' });
	if (!ast) return;
	traverse(ast, {
		CallExpression({ node }) {
			if (!t.isIdentifier(node.callee)) return;
			if (node.callee.name === '_defineComponent') {
				if (!t.isObjectExpression(node.arguments[0])) return;
				const optionNodes = node.arguments[0].properties;
				optionNodes.forEach(propNode => {
					if (!t.isObjectProperty(propNode)) return;
					if (!t.isIdentifier(propNode.key)) return;
					switch (propNode.key.name) {
						case 'props':
							if (!t.isObjectExpression(propNode.value)) return;
							propNode.value.properties.forEach(valueNode => {
								if (!t.isObjectProperty(valueNode)) return;
								context.props.push(getPropInfoFromNode(valueNode));
							});
							break;
						case 'emits':
							if (!t.isArrayExpression(propNode.value)) return;
							propNode.value.elements.forEach(element => {
								element && context.emits.push(getEmitInfoFromNode(element));
							});
							break;
					}
				});
			} else if (node.callee.name === 'expose') {
				if (!node.arguments.length) return;
				if (!t.isObjectExpression(node.arguments[0])) return;
				node.arguments[0].properties.forEach(propNode => {
					context.expose.push(getExposeInfoFromNode(propNode));
				});
			}
		}
	});

	function getPropInfoFromNode({ leadingComments, key, value }: t.ObjectProperty): SFCProps {
		const name = t.isIdentifier(key) ? key.name : '';
		const description =
			leadingComments
				?.map(comment => {
					return comment.value?.replace(/\*/g, '');
				})
				.join('\n') ?? '';
		let type = '',
			defaultValue = '';
		if (t.isObjectExpression(value)) {
			value.properties.forEach(propNode => {
				if (t.isObjectProperty(propNode) && t.isIdentifier(propNode.key)) {
					if (propNode.key.name === 'type') {
						type = getNodeSource(propNode.value);
					} else if (propNode.key.name === 'default') {
						defaultValue = getNodeSource(propNode.value);
					}
				} else if (t.isObjectMethod(propNode) && t.isIdentifier(propNode.key)) {
					if (propNode.key.name === 'default' && t.isBlockStatement(propNode.body)) {
						defaultValue = getNodeSource(propNode.body);
					}
				}
			});
		} else {
			type = getNodeSource(value);
		}
		return {
			name,
			type,
			defaultValue,
			description
		};
	}

	function getEmitInfoFromNode(node: t.Node): SFCEmits {
		let name = '';
		if (t.isStringLiteral(node)) {
			name = node.value;
		}
		const description =
			node.leadingComments
				?.map(comment => {
					return comment.value?.replace(/\*/g, '');
				})
				.join('\n') ?? '';
		return { name, description };
	}

	function getExposeInfoFromNode(node: t.Node): SFCExpose {
		let name = '',
			params = '';
		if (t.isObjectMethod(node)) {
			if (node.params.length) {
				params = node.params
					.map(paramNode => {
						return getNodeSource(paramNode);
					})
					.join(',');
			}
			if (t.isIdentifier(node.key)) {
				name = node.key.name;
			}
		} else if (t.isObjectProperty(node)) {
			if (t.isFunctionExpression(node.value) || t.isArrowFunctionExpression(node.value)) {
				params = node.value.params
					.map(paramNode => {
						return getNodeSource(paramNode);
					})
					.join(',');
			}
			if (t.isIdentifier(node.key)) {
				name = node.key.name;
			}
		}
		const description =
			node.leadingComments
				?.map(comment => {
					return comment.value?.replace(/\*/g, '');
				})
				.join('\n') ?? '';
		return { name, params, description };
	}

	function getNodeSource(node: t.Node) {
		return babelCode!.substring(node.start!, node.end!);
	}
}

function renderSFCInfo({ slots, props, expose, emits }: SFCTableContext, titlePrefix?: string) {
	return `${renderProps()}\n${renderEmits()}\n${renderSlots()}\n${renderExpose()}`;

	function renderTitle(titleName: string) {
		return `<h2 style="margin:1em 0;font-size: 1.35rem">${titlePrefix} ${titleName}</h2>`;
	}

	function renderProps() {
		if (!props.length) return '';
		return `${renderTitle('Props')}${renderTable(
			[
				{ title: '属性', key: 'name' },
				{ title: '类型', key: 'type' },
				{ title: '默认值', key: 'defaultValue' },
				{ title: '描述', key: 'description' }
			],
			props
		)}`;
	}

	function renderSlots() {
		if (!slots.length) return '';
		return `${renderTitle('Slots')}${renderTable(
			[
				{ title: '属性', key: 'name' },
				{ title: '描述', key: 'description' }
			],
			slots
		)}`;
	}

	function renderEmits() {
		if (!emits.length) return '';
		return `${renderTitle('Emits')}${renderTable(
			[
				{ title: '事件名', key: 'name' },
				{ title: '描述', key: 'description' }
			],
			emits
		)}`;
	}

	function renderExpose() {
		if (!expose.length) return '';
		return `${renderTitle('Expose')}${renderTable(
			[
				{ title: '属性', key: 'name' },
				{ title: '参数', key: 'params' },
				{ title: '描述', key: 'description' }
			],
			expose
		)}`;
	}
}

function renderTable(columns: { title: string; key: string }[], data: AnyObject[]) {
	return `<n-data-table striped size="small" :data="${formatArray(data)}" :columns="${formatArray(columns)}"/>\n`;
}

function formatArray(list: Record<string, string>[]) {
	return `[${list.map(
		item =>
			`{${Object.entries(item)
				.map(([k, v]) => {
					return `[\`${k}\`]:\`${escapeString(v || '-')}\``;
				})
				.join(',')}}`
	)}]`;
}

export const parseSfcInfo: MdParser = (template, id) => {
	id = escape(id);
	let path = '';
	template = template.replace(sfcMatcher, (_, __, p) => {
		path = p;
		return '';
	});
	const vues: string[] = path.match(getVueImportMatcher('g')) || [];

	const _path: string[] = vues.length ? vues : getDefaultPath(id);
	let result = '';

	_path.forEach(pathInfo => {
		// eslint-disable-next-line prefer-const
		let [, path, title] = pathInfo.match(getVueImportMatcher()) || [];
		if (!isFileExist(path)) {
			path = resolve(id, path);
			if (!isFileExist(path)) return;
		}
		title && (title = title.replace(/\[|\]/g, ''));
		return (result += parseSourceCode(fs.readFileSync(path, 'utf-8'), title || ''));
	});

	return {
		template: template + result,
		scripts: { imports: [`import { NDataTable } from 'naive-ui';`], components: ['NDataTable'] }
	};
};
