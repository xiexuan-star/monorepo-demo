<template>
	<n-config-provider
		:locale="zhCN"
		:date-locale="dateZhCN"
		ref="wrapperRef"
		:theme="theme"
		:theme-overrides="overrides"
	>
		<n-message-provider>
			<n-dialog-provider>
				<main :style="themeStyleVars" :class="{ 'dark-mode': isDark }">
					<n-layout>
						<n-layout-header class="main__header">
							<header>
								<n-image height="48" :src="Logo" />
								<span class="main__headerLogo">Cnhis Design</span>
								<span>欢迎使用</span>
								<n-icon :component="ICON.HappyOutline" />
							</header>
							<section>
								<c-form-render
									ref="formRenderRef"
									:initial-data="initialData"
									:schema="schema"
									@formChange="formChange"
								/>
								<n-button @click="toggleTheme" text>
									<n-icon :component="theme ? ICON.MoonOutline : ICON.SunnyOutline" />
								</n-button>
							</section>
						</n-layout-header>
						<n-layout has-sider>
							<n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="260" show-trigger>
								<n-scrollbar class="main__sideBar">
									<n-menu
										:value="value"
										accordion
										:collapsed-width="64"
										:collapsed-icon-size="22"
										:options="menuOptions"
									/>
								</n-scrollbar>
							</n-layout-sider>
							<n-layout-content :native-scrollbar="false" :class="contentClassList">
								<router-view />
							</n-layout-content>
						</n-layout>
					</n-layout>
				</main>
			</n-dialog-provider>
		</n-message-provider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { AnyObject } from '@/types';
// import { ISchema } from '@formily/json-schema/esm/types';
import { InjectionTheme } from 'docs/constants';
import { useTheme } from 'docs/hooks';
import router, { routes } from 'docs/router';
import { Component, computed, h, provide, ref, watch } from 'vue';
import {
	zhCN,
	dateZhCN,
	NConfigProvider,
	NLayout,
	NLayoutHeader,
	NLayoutSider,
	NLayoutContent,
	NMenu,
	NIcon,
	NButton,
	NMessageProvider,
	NDialogProvider,
	NScrollbar,
	NImage,
	GlobalThemeOverrides
} from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import * as ICON from '@vicons/ionicons5';
import { RouteRecordRaw, RouterLink, useRoute } from 'vue-router';
// import { FormRenderExpose } from '~/form-render';
import { useScrollLock } from '@vueuse/core';
import Logo from './assets/logo.png';
useScrollLock(document.body).value = true;

function renderIcon(icon: Component) {
	return () => h(NIcon, null, { default: () => h(icon) });
}

function toLink(labelName: string, path: string) {
	return () => h(RouterLink, { to: { path } }, { default: () => labelName });
}

function parseRoute(routes?: RouteRecordRaw[]): MenuOption[] | undefined {
	if (!Array.isArray(routes)) return;
	return routes.map(route => {
		const icon: Component | undefined = Reflect.get(ICON, route.meta?.icon as string);
		const path = route.children?.length ? '' : route.path;
		return {
			label: toLink((route.meta?.title || route.name || route.path || '') as string, path),
			key: route.path,
			icon: icon ? renderIcon(icon) : undefined,
			children: parseRoute(route.children)
		};
	});
}

const menuOptions = parseRoute(routes) || [];

const route = useRoute();
const value = computed(() => {
	return route.path;
});

// const formRenderRef = ref<FormRenderExpose>();
// watch(
// 	() => route.path,
// 	v => {
// 		formRenderRef.value?.setFieldState('search', field => {
// 			field.value = v;
// 		});
// 	}
// );

const overrides: GlobalThemeOverrides = {
	common: { primaryColor: '#5585f5', primaryColorHover: '#5585f5' }
};

const { themeType, theme, themeStyleVars, toggleTheme } = useTheme();
const isDark = computed(() => {
	return themeType.value === 'dark';
});
provide(InjectionTheme, theme);

const contentClassList = computed(() => {
	return ['main__content', { 'main__content--dark': !!theme.value, 'main__content--light': !theme.value }];
});

const initialData = { version: 'v3', search: route.path };
const versionList = ['v2', 'v3'].map(v => ({ text: v, value: v }));

function parseRoute2Option(route: RouteRecordRaw) {
	const result: Record<string, any> = { text: route.meta?.title ?? route.name };
	if (route.children?.length) {
		result.type = 'group';
		result.key = route.path;
		result.children = route.children.map(parseRoute2Option);
	} else {
		result.value = route.path;
	}
	return result;
}

// const schema: ISchema = {
// 	type: 'void',
// 	properties: {
// 		search: {
// 			'x-decorator': 'FORM_ITEM',
// 			'x-decorator-props': { span: 12 },
// 			'x-component': 'SELECT',
// 			'x-component-props': {
// 				placeholder: '请输入搜索内容',
// 				filterable: true,
// 				filter(pattern: string, option: AnyObject) {
// 					return option.text?.includes(pattern);
// 				}
// 			},
// 			enum: routes.map(parseRoute2Option)
// 		},
// 		version: {
// 			'x-component': 'SELECT',
// 			enum: versionList,
// 			'x-decorator': 'FORM_ITEM',
// 			'x-decorator-props': { span: 12 }
// 		}
// 	}
// };

function formChange({ fieldKey, value }: any) {
	if (fieldKey === 'version') {
		if (value === 'v2') {
			location.href = 'http://dv.cnhis.com/home';
		}
	} else if (fieldKey === 'search') {
		router.push(value);
	}
}
</script>

<style lang="less">
@block: ~'main';

#app {
	font-family: '微软雅黑', Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	overflow: hidden;

	p {
		margin: 0;
	}
}

code {
	font-family: Consolas, Monaco, monospace;
	border-radius: 10px;
}

.@{block} {
	&__content {
		max-height: calc(100vh - 64px);
	}

	&__sideBar {
		max-height: calc(100vh - 64px);
	}

	&__header {
		height: 64px;
		border-bottom: 1px solid var(--border-color);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		box-sizing: border-box;
		gap: 16px;

		header {
			display: inline-flex;
			align-items: center;
			gap: 8px;
			flex-shrink: 0;

			.n-icon {
				color: #5585f5 !important;
			}
		}

		&Logo {
			font-family: '微软雅黑', Avenir, Helvetica, Arial, sans-serif;
			font-size: 20px;
			font-weight: 700;
		}

		> section {
			display: inline-flex;
			align-items: center;
			gap: 16px;

			.n-icon {
				font-size: 20px;
				cursor: pointer;
			}
		}
	}
}
</style>
