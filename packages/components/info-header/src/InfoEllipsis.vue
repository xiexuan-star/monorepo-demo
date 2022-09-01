<template>
	<n-tooltip :disabled="!tip">
		<template #trigger>
			<section>
				<n-ellipsis :style="contentStyle" :tooltip="{ placement: tip ? 'bottom' : 'top' }">
					{{ content ?? '-' }}
				</n-ellipsis>
			</section>
		</template>
		{{ tip }}
	</n-tooltip>
</template>

<script lang="ts" setup>
import { CSSProperties, PropType } from 'vue';
import { NEllipsis, NTooltip } from 'naive-ui';

defineProps({
	content: { type: String, default: '' },
	tip: { type: String },
	contentStyle: { type: Object as PropType<CSSProperties>, default: () => ({}) }
});
</script>
