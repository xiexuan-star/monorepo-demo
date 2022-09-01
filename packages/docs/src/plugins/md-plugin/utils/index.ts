import {
	SimpleExpressionNode,
	ExpressionNode,
	CompoundExpressionNode,
	DirectiveNode,
	ElementNode,
	ForNode,
	IfBranchNode,
	IfNode,
	TemplateChildNode,
	AttributeNode
} from '@vue/compiler-core';

export function isElementNode(node: TemplateChildNode): node is ElementNode {
	return node.type === 1;
}

export function isIfNode(node: TemplateChildNode): node is IfNode {
	return node.type === 9;
}

export function isIfBranchNode(node: TemplateChildNode): node is IfBranchNode {
	return node.type === 10;
}

export function isForNode(node: TemplateChildNode): node is ForNode {
	return node.type === 11;
}

export function isSimpleExp(node: ExpressionNode): node is SimpleExpressionNode {
	return node.type === 4;
}

export function isCompoundExp(node: ExpressionNode): node is CompoundExpressionNode {
	return node.type === 8;
}

export function isDirectiveNode(node: AttributeNode | DirectiveNode): node is DirectiveNode {
	return node.type === 7;
}
