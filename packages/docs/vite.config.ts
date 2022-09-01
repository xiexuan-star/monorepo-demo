import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig, PluginOption } from 'vite';
// @ts-ignore
import { InsertConsoleInfoPlugin, AutoRouterPlugin, MDPlugin } from './src/plugins';

// common plugin
const plugins: PluginOption[] = [
  MDPlugin(),
  vue(),
  vueJsx(),
  AutoRouterPlugin({ rootPath: './src/views' }),
  // InsertConsoleInfoPlugin({ include: /\.(tsx?|vue)$/ })
];
const isDocs = process.env.CUI_DOCS;

// https://vitejs.dev/config/
export default defineConfig({
  base: isDocs ? '/v3/' : './',
  assetsInclude: ['./docs/assets/*.(png)'],
  plugins,
  // 支持 less 样式
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, '../shared'),
      '~': resolve(__dirname, '../components'),
      docs: resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: 3200,
    open: false,
    cors: true,
    proxy: {
      '/sit_crmpcapi': {
        target: 'http://192.168.1.225',
        changeOrigin: true
      },
      '/storage/checkFileMd5Exist': {
        target: 'http://192.168.1.223:12060',
        changeOrigin: true
      },
      '/storage/partFileMerge': {
        target: 'http://192.168.1.223:12060',
        changeOrigin: true
      },
      '/storage/partFileUpload': {
        target: 'http://192.168.1.223:12060',
        changeOrigin: true
      },
      '/fdp-api': {
        target: 'http://192.168.1.210',
        changeOrigin: true
      }
    }
  }
});
