<template>
	<div class="c-info-header__hidden" :style="wrapperStyle">
		<div class="c-info-header__hidden--content">
			<info-ellipsis :content-style="parsedContentStyle" :content="displayContent" :tip="tip" />
		</div>
		<i
			@click="toggleHidden"
			:class="['c-info-header__hidden--icon', 'iconfont', `icon-${hidden ? 'guanbi-yanjing' : 'faxian-yanjing'}`]"
		/>
	</div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, PropType, ref } from 'vue';
import InfoEllipsis from './InfoEllipsis.vue';

const props = defineProps({
	content: { type: String, default: '' },
	tip: String,
	width: { type: Number },
	contentStyle: { type: Object as PropType<CSSProperties>, default: () => ({}) }
});

const hidden = ref(true);

function toggleHidden() {
	hidden.value = !hidden.value;
}

const wrapperStyle = computed(() => {
	const width = props.width + 'px';
	return { maxWidth: width, width };
});

const parsedContentStyle = computed(() => {
	if (!props.width) return {};
	const maxWidth = props.width - 40 + 'px';
	return Object.assign({}, props.contentStyle, { maxWidth });
});

const displayContent = computed(() => {
	let { content } = props;
	content += '';

	if (!hidden.value) return content;

	if (!content) return '-';

	const length = content.length;
	if (!length || length === 1) return content;

	const hiddenNum = Math.floor(length / 2);
	const prefixNum = Math.floor((length - hiddenNum) / 2);

	return `${content.substring(0, prefixNum)}${'*'.repeat(hiddenNum)}${content?.substring(prefixNum + hiddenNum)}`;
});
</script>
