import { compose, concat, converge, join, map, nAry, prop, reject } from 'ramda';
import { Func } from '../types';
import traverse from '@babel/traverse';
import { createFilter } from 'rollup-pluginutils';
import { PluginOption } from 'vite';
import { CommonPluginOption } from '../types';
import * as t from '@babel/types';
import generator from '@babel/generator';
import { parse } from '@babel/parser';

const excludeStringLiteral = reject<t.Node>(t.isStringLiteral);

const node2Code = compose(prop('code'), nAry(1, generator));

const escapeTemplateString = (str: string) => str.replace(/([`"'])/g, '\\$1');

const insertInfoArgs = converge(concat as Func<[t.Expression[], t.Expression[]], t.Expression[]>, [
	compose(map(compose(t.stringLiteral, escapeTemplateString)), node2InfoList),
	prop('arguments')
]);

function node2InfoList(node: t.CallExpression) {
	const title = `行[${node.loc?.start.line}] 列[${node.loc?.start.column}]`;
	const info = compose(join(','), map(node2Code), excludeStringLiteral)(node.arguments) || '无';
	return [
		`%c ${title} %c ${info} %c`,
		'background:#409EFF; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
		'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
		'background:transparent'
	];
}

export function codeTransfer(originCode: string) {
	const ast = parse(originCode, { plugins: ['typescript'], sourceType: 'module' });
	traverse(ast, {
		CallExpression({ node }) {
			if (!t.isMemberExpression(node.callee) || !t.isIdentifier(node.callee.object, { name: 'console' })) return;
			node.arguments = insertInfoArgs(node);
		}
	});
	return generator(ast);
}

export function InsertConsoleInfoPlugin(option: CommonPluginOption = {}): PluginOption {
	const filter = createFilter(option.include, option.exclude);
	return {
		name: 'InsertConsoleInfoPlugin',
		transform(src, id) {
			return filter(id) ? codeTransfer(src) : undefined;
		}
	};
}
