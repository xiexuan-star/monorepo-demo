/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TYPE: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import * as Vue from 'vue';


declare module '*.vue' {
// @ts-ignore
  import type { App, defineComponent } from 'vue';
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  // // const component: DefineComponent<{}, {}, any>
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  // @ts-ignore
  export default component;
}

import { SlateDescendant, SlateElement, SlateText } from '@wangeditor/editor';

declare module '@wangeditor/editor' {
  // 扩展 Text
  interface SlateText {
    text: string;
  }

  // 扩展 Element
  interface SlateElement {
    type: string;
    children: SlateDescendant[];
  }
}

declare module '*.js';
