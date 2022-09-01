import { Func } from '@/types';
import { isFunction, isString } from 'lodash-es';
import { Component, defineComponent, FunctionalComponent, h, PropType, toRaw } from 'vue';

export default defineComponent({
	name: 'SlotRender',
	props: {
		renderer: { type: [String, Function, Object] as PropType<string | Func | Component>, required: true },
		rootSlots: { type: Object as PropType<Record<string, Func>> }
	},
	setup(props, { attrs }) {
		function renderSlots(slotName: string) {
			const renderer = props.rootSlots?.[slotName];
			return isFunction(renderer) ? renderer(attrs) : null;
		}

		function renderVNode(renderer: FunctionalComponent | Component) {
			return renderer ? h(toRaw(renderer) as any, attrs) : null;
		}

		return () => {
			const { renderer } = props;
			return isString(renderer) ? renderSlots(renderer) : renderVNode(renderer);
		};
	}
});
