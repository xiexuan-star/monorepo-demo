import { SFCWithInstall } from '@/types';
import type { App, Component } from 'vue';
import CInfoHeader from './info-header';

type ExportComponent = SFCWithInstall<Component>;

// 存储组件列表
const components: Record<string, ExportComponent> = {
	CInfoHeader,
};

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
function install(app: App) {
	// 遍历注册全局组件
	Object.values(components).forEach(component => {
		component.install(app);
	});
}

export {
	CInfoHeader,
};

export default { install, ...components };
