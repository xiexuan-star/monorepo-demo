import { useTitle } from '@vueuse/core';
import { ref } from 'vue';

const title = ref('VUE3组件库文档');
useTitle(title);

export function useDocTitle() {
	function setDocTitle(_title: string) {
		title.value = _title;
	}

	return { setDocTitle };
}
