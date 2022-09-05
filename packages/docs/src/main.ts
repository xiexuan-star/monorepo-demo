import { useMock } from 'docs/hooks/useMock';
import { NAlert } from 'naive-ui';
import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from './router/index';
import cui from '~/index';
import '~/index.less';
import DemoCollapse from './component/DemoCollapse.vue';
import AnchorList from './component/AnchorList.vue';
import './styles/index.less';

const app = createApp(App);

Object.entries({ DemoCollapse, AnchorList, NAlert }).forEach(([name, component]) => app.component(name, component));

useMock();

app.use(VueRouter).use(cui).mount('#app');
