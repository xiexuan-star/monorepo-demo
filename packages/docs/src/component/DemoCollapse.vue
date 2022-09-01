<template>
	<section class="demo-collapse__wrapper">
		<header class="demo-collapse__header">
			<div class="demo-collapse__headerContent">
				<slot name="title">组件示例</slot>
			</div>
			<n-button-group class="demo-collapse__headerOperation">
				<n-tooltip trigger="hover">
					<template #trigger>
						<EditInCodeSandboxButton :title="title" :code="sourceCode" />
					</template>
					在CodeSandbox中编辑
				</n-tooltip>
				<n-tooltip trigger="hover">
					<template #trigger>
						<n-button text @click="copyCode">
							<n-icon size="16" :component="CopyOutline" />
						</n-button>
					</template>
					复制代码
				</n-tooltip>

				<n-tooltip trigger="hover">
					<template #trigger>
						<n-button text @click="toggleShowState">
							<n-icon size="16" :component="CodeOutline" />
						</n-button>
					</template>
					查看代码
				</n-tooltip>
			</n-button-group>
		</header>
		<section class="demo-collapse__description">
			<div class="demo-collapse__descriptionContent">
				<slot name="description" />
			</div>
		</section>
		<section class="demo-collapse__component">
			<slot />
		</section>
		<n-collapse-transition :show="show">
			<section class="demo-collapse__source">
				<slot name="source" />
			</section>
		</n-collapse-transition>
	</section>
</template>

<script lang="ts" setup>
import EditInCodeSandboxButton from './EditInCodesandbox.vue';
import { isFunction } from 'lodash-es';
import { computed, ref, render, useSlots } from 'vue';
import { NCollapseTransition, NButton, NIcon, NButtonGroup, useMessage, NTooltip } from 'naive-ui';
import { CodeOutline, CopyOutline } from '@vicons/ionicons5';
import { useClipboard } from '@vueuse/core';

const slots = useSlots();

const show = ref(false);

function toggleShowState() {
	show.value = !show.value;
}

const message = useMessage();

const { copy, text, isSupported } = useClipboard();

const sourceCode = computed(() => {
	if (!isFunction(slots.source)) return '';
	const wrapper = document.createElement('div');
	const vnodes = slots.source();
	render(vnodes[0] as any, wrapper);
	return wrapper.innerText;
});

const title = computed(() => {
	if (!isFunction(slots.title)) return '';
	const wrapper = document.createElement('div');
	const vnodes = slots.title();
	render(vnodes[0] as any, wrapper);
	return wrapper.innerText;
});

function copyCode() {
	if (!isSupported) return message.warning('当前浏览器不支持操作剪辑版');
	if (!sourceCode.value) return message.error('当前示例暂无源码');
	copy(sourceCode.value);
	message.success('复制成功');
}
</script>

<style lang="less" scoped>
@block: ~'demo-collapse';
.@{block} {
	&__wrapper {
		border: 1px solid var(--border-color);
		background: var(--bg-color);
		padding-top: 16px;
		margin: 16px 0;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;

		&Content {
			font-size: 18px;
			font-weight: 700;
		}

		&Operation {
			display: flex;
			gap: 12px;
		}
	}

	&__description {
		padding: 0 20px;

		&Content {
			font-size: 14px;
			padding: 8px 0;
		}
	}

	&__component {
		padding: 0 16px 16px;
	}

	&__source {
		padding: 0 16px;
	}
}
</style>
