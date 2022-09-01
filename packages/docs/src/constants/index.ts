import { InjectionKey, Ref } from 'vue';

export const InjectionTheme = <InjectionKey<Ref<any | null>>>Symbol('主题');
