import type { Plugin } from 'rollup';
import { pathRewriter } from '../build-utils';
import { extname } from 'path';

export function CnHisDesignAlias(): Plugin {
	return {
		name: 'cnhis-design-alias-plugin',
		resolveId(id, importer) {
			if (['.png', 'jpg', '.vue'].includes(extname(id))) {
				id = id.replace(/\.(png|jpg|vue)$/, '');
			}
			if (id.startsWith('~/') || id.startsWith('@/')) {
				return {
					id: pathRewriter(id, importer!),
					external: 'absolute'
				};
			}
		}
	};
}
