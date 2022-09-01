import { darkTheme } from 'naive-ui';
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useStorage } from '@vueuse/core';

let timer: any = null;

enum ThemeType {
	LIGHT = 'light',
	DARK = 'dark'
}

export function useTheme() {
	const themeType = useStorage<null | ThemeType>('themeType', null, sessionStorage);
	const theme = computed(() => {
		return themeType.value === ThemeType.DARK ? darkTheme : null;
	});

	function toggleTheme() {
		themeType.value = themeType.value === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;
		// 手动触发后就不再自动切换
		clearInterval(timer);
	}

	function checkTime() {
		const current = new Date().getHours();
		themeType.value = current > 18 || current < 6 ? ThemeType.DARK : ThemeType.LIGHT;
	}

	onMounted(() => {
		clearInterval(timer);
		// 手动设置过就不再自动切换
		if (themeType.value === null) {
			checkTime();
			timer = setInterval(checkTime, 10_000);
		}
	});

	onBeforeUnmount(() => {
		clearInterval(timer);
	});

	return {
		theme,
		themeType,
		toggleTheme,
		themeStyleVars: computed(() => {
			const isDark = themeType.value === ThemeType.DARK;
			return {
				'--border-color': isDark ? 'rgba(255, 255, 255, 0.09)' : '#f3f3f3',
				'--bg-color': isDark ? 'rgb(24, 24, 28)' : 'white',
				'--table-bg-color': isDark ? 'rgb(24,24,28)' : 'rgba(250, 250, 252, 1)',
				'--table-header-bg-color': isDark ? 'rgba(38, 38, 42, 1)' : 'rgba(250, 250, 252, 1)',
				'--text-color': isDark ? 'rgba(255, 255, 255, 0.9)' : null,
				'--active-text-color': '#5585f5',
				'--active-bg-color': isDark ? 'rgb(34, 40, 59)' : '#f0f7ff'
			};
		})
	};
}
