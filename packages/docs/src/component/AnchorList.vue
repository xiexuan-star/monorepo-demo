<template>
	<div class="auto-anchor auto-anchor__wrapper">
		<div class="auto-anchor__scroll" ref="scrollSectionRef">
			<slot></slot>
		</div>
		<section class="auto-anchor__list">
			<ul>
				<li v-for="anchor in anchorList" :class="['auto-anchor__item']" :key="anchor.name">
					<div
						class="auto-anchor__itemText"
						:class="[anchor.tag, { 'is-active': anchor === currentActive }]"
						@click="itemClick(anchor)"
						:title="anchor.name"
					>
						{{ anchor.name }}
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script lang="ts" setup>
import { doAnimation } from '@/utils/anime';
import { useEventListener, useStorage } from '@vueuse/core';
import { throttle } from 'lodash-es';
import { nextTick, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

type AnchorItem = {
	name: string;
	node: HTMLElement;
	active?: boolean;
	tag: string;
};

const scrollSectionRef = ref<HTMLElement>();
const anchorList = ref<AnchorItem[]>([]);

const currentActive = ref<AnchorItem>();

function generate() {
	if (!scrollSectionRef.value) return;
	let children = scrollSectionRef.value?.children;
	if (!children) return;
	const childNodes = Array.from(children).filter(node => node.tagName?.startsWith('H')) as HTMLElement[];
	anchorList.value = childNodes.map<AnchorItem>(node => {
		return {
			name: node.innerText,
			tag: node.tagName,
			node
		};
	});
}

const updateActive = throttle(
	(scrollTop: number, viewportHeight: number) => {
		currentActive.value =
			anchorList.value.find((anchor, idx) => {
				const nextAnchor = anchorList.value[idx + 1]?.node;
				if (!nextAnchor) return true;
				return nextAnchor.offsetTop > scrollTop + viewportHeight / 2;
			}) || anchorList.value.at(-1);
	},
	200,
	{ leading: false, trailing: true }
);

const route = useRoute();
const scrollCache = useStorage('anchor__scroll=>' + route.path, 0, sessionStorage);

let scrollLock = false;
useEventListener(scrollSectionRef, 'scroll', () => {
	if (!scrollSectionRef.value || scrollLock) return;
	const { scrollTop, clientHeight } = scrollSectionRef.value;
	updateActive(scrollTop, clientHeight);
	scrollCache.value = scrollTop;
});

onMounted(async () => {
	generate();
	await nextTick();
	if (!scrollSectionRef.value) return;
	const { scrollTop, clientHeight } = scrollSectionRef.value;
	updateActive(scrollTop, clientHeight);
	scrollSectionRef.value.scrollTop = scrollCache.value;
});

function itemClick(item: AnchorItem) {
	currentActive.value = item;
	if (!scrollSectionRef.value) return;
	scrollLock = true;
	doAnimation(
		scrollSectionRef.value.scrollTop,
		item.node.offsetTop,
		300,
		v => {
			scrollSectionRef.value!.scrollTo({ top: v - 2 });
		},
		'easeInOutBounce',
		async () => {
			await new Promise(resolve => setTimeout(resolve, 200));
			scrollLock = false;
		}
	);
}

defineExpose({
	generate,
	updateActive
});
</script>
<style lang="less" scoped>
@block: ~'auto-anchor';

.@{block} {
	&__wrapper {
		display: flex;
	}

	ul {
		padding-left: 0;
		margin-top: 24px;
		width: 260px;
	}

	&__item {
		display: flex;
		align-items: center;
		height: 30px;
		list-style-type: none;
		cursor: pointer;

		&Text {
			display: inline-block;
			box-sizing: border-box;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			max-width: 260px;
			padding: 2px 16px;
			border-radius: 4px;
			font-size: 13px;

			&.is-active {
				color: var(--active-text-color);
				background: var(--active-bg-color);
			}
		}

		&:hover {
			color: #5585f5;
		}

		&:active {
			color: #5585f5;
		}

		@header-types: 1, 2, 3, 4;
		each(@header-types, {
      .H@{value} {
        margin-left: calc(10px * @value);
      }
    });
	}

	&__scroll {
		flex: 1;
		padding: 0 24px 24px;
		box-sizing: border-box;
		height: calc(100vh - 64px);
		overflow-y: auto;
		overflow-x: hidden;
		position: relative;
	}

	&__list {
		border-left: 1px solid var(--border-color);
		height: calc(100vh - 64px);
		overflow-y: auto;
		overflow-x: hidden;
	}
}
</style>
