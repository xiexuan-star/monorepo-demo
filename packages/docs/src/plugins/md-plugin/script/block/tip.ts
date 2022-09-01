import { MdParser } from '../../types';

const tipMatcher = /(::: tip\s*(\S*)([^]+?)\s:::)/g;

export const parseTip: MdParser = template => {
	return {
		template: template.replace(tipMatcher, (_, __, type, content) => {
			return `<n-alert type="${type}">${content}</n-alert>`;
		}),
		scripts: {}
	};
};
