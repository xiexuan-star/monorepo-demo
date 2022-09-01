import { getParameters } from 'codesandbox/lib/api/define';

export function useCodeSandbox() {
	const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Cnhis Design Demo</title>
    <style>
      body {
        padding: 24px;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`;

	const appVue = `<template>
  <n-message-provider>
    <n-dialog-provider>
      <demo />
    </n-dialog-provider>
  </n-message-provider>
</template>

<script>
import { defineComponent } from "vue";
import Demo from "./Demo.vue";
import { NMessageProvider,NDialogProvider } from 'naive-ui';

export default defineComponent({
components: {
  Demo,
  NMessageProvider,
  NDialogProvider
},
});
</script>`;

	const mainJs = `import { createApp } from "vue";
import CUI from "cnhis-design-vue";
import "cnhis-design-vue/es/packages/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(CUI);

app.mount("#app");
`;

	function getDeps(code: string) {
		return (code.match(/from '([^']+)'\n/g) || [])
			.map(v => v.slice(6, v.length - 2))
			.reduce((prevV, dep) => {
				prevV[dep] = 'latest';
				return prevV;
			}, {});
	}

	function getCodeSandboxParams(code: string, title = '') {
		return getParameters({
			files: {
				'package.json': {
					content: {
						title,
						dependencies: {
							...getDeps(code),
							vue: 'next',
							'cnhis-design-vue': '^3.1.10',
							typescript: '4.6.4',
							'naive-ui': '^2.29.0'
						},
						devDependencies: {
							'@vue/cli-plugin-babel': '~4.5.0'
						}
					} as any,
					isBinary: false
				},
				'index.html': {
					content: indexHtml,
					isBinary: false
				},
				'src/Demo.vue': {
					content: code,
					isBinary: false
				},
				'src/App.vue': {
					content: appVue,
					isBinary: false
				},
				'src/main.js': {
					content: mainJs,
					isBinary: false
				}
			}
		});
	}

	return { getCodeSandboxParams };
}
