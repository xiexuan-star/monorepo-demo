<template>
	<div
		:class="['c-info-header', { 'is-compact': compact }]"
		:style="{ '--row-height': rowHeight, '--column-width': maxColumnWidth }"
	>
		<section class="c-info-header__operation">
			<slot name="operation" />
		</section>
		<div v-if="$slots.operation" class="c-info-header__divider" />
		<section class="c-info-header__patient">
			<slot name="patientModule" />
			<template v-if="!$slots.avatarModule">
				<slot name="avatar" />
				<section>
					<header class="c-info-header__patientHeader">
						<div class="c-info-header__patientHeader--name" v-if="patientInfo.name">
							{{ patientInfo.name }}
						</div>
						<div class="c-info-header__patientHeader--sex" v-if="patientInfo.sex">/ {{ patientInfo.sex }}</div>
						<div class="c-info-header__patientHeader--age" v-if="patientInfo.age">
							/ {{ patientInfo.age }}{{ patientInfo.ageUnit || '岁' }}
						</div>
						<n-tag
							:key="tag.content"
							v-for="tag in patientInfo.tagList || []"
							size="medium"
							:bordered="false"
							v-show="tag.content"
							:color="getTagColor(tag.type || 'warning')"
						>
							{{ tag.content }}
						</n-tag>
					</header>
					<slot name="avatarInfo"></slot>
				</section>
			</template>
		</section>

		<section class="c-info-header__info" :style="{ '--row-num': compact ? 1 : 2 }" ref="infoRef">
			<slot name="info">
				<n-descriptions
					label-align="right"
					:style="{ width: '100%' }"
					label-placement="left"
					separator=":"
					:column="columnNum"
				>
					<NDescriptionsItem v-for="(item, index) in infoList" :key="item[labelField]" :label="item[labelField]">
						<slot-render
							v-if="item.slot"
							:renderer="item.slot"
							:root-slots="$slots"
							:item="item"
							:style="getDescriptionItemStyle(item)"
							:width="descriptionWidthList[index]"
						/>
						<hidden-content
							v-else-if="needHidden(item)"
							:content="item[valueField]"
							:tip="item.tip"
							:content-style="getDescriptionItemStyle(item)"
							:width="descriptionWidthList[index]"
						/>
						<template v-else>
							<info-ellipsis
								:content-style="getEllipsisStyle(index, item)"
								:content="item[valueField]"
								:tip="item.tip"
							/>
						</template>
					</NDescriptionsItem>
				</n-descriptions>
			</slot>
		</section>

		<section class="c-info-header__setting">
			<slot name="setting"></slot>
			<template v-if="!$slots.setting">
				<div class="c-info-header__settingIcon" @click="openPatientInfo">
					<slot name="patientInfoIcon">
						<i class="iconfont icon-bianji" />
					</slot>
				</div>
				<div class="c-info-header__settingIcon" @click="fieldSet">
					<slot name="fieldSetIcon">
						<i class="iconfont icon-setting" />
					</slot>
				</div>
				<div class="c-info-header__settingIcon" @click="toggleCompact">
					<slot name="compactIcon">
						<i class="iconfont icon-double_down"></i>
					</slot>
				</div>
			</template>
		</section>
	</div>
</template>

<script lang="ts" setup>
import { AnyObject } from '@/types';
import { NDescriptions, NDescriptionsItem, NTag } from 'naive-ui';
import { CSSProperties, nextTick, onMounted, PropType, ref, watch } from 'vue';
import { useEventListener, useThrottleFn } from '@vueuse/core';
import InfoEllipsis from './InfoEllipsis.vue';
import HiddenContent from './HiddenContent.vue';

type PatientInfo = Partial<{
	name: string;
	sex: string;
	age: string;
	ageUnit?: string;
	tagList?: Partial<{ type: 'warning' | 'info'; content: string }>[];
}>;

const props = defineProps({
	// 是否为紧凑模式
	compact: { type: Boolean, required: true },
	// info区域分隔符
	separator: { type: String, default: ':' },
	// 患者信息
	patientInfo: { type: Object as PropType<PatientInfo>, default: () => ({}) },
	// info区数据源
	infoList: { type: Array as PropType<AnyObject[]>, required: true },
	// info区数据源label字段
	labelField: { type: String, default: 'label' },
	// info区数据源value字段
	valueField: { type: String, default: 'value' },
	// info区列最小宽度
	minColumnWidth: { type: [String, Number], default: 240 },
	// info区行高
	rowHeight: { type: [String, Number], default: 32 }
});

const emit = defineEmits([
	// 点击患者信息图标回调
	'openPatientInfo',
	// 点击修改field图标回调
	'fieldSet',
	// 点击模式切换按钮回调
	'update:compact'
]);

function toggleCompact() {
	emit('update:compact', !props.compact);
}

function openPatientInfo() {
	emit('openPatientInfo');
}

function fieldSet() {
	emit('fieldSet');
}

function getTagColor(type: 'warning' | 'info') {
	return {
		color: type === 'warning' ? '#fcc200' : 'rgba(45, 122, 255, 0.1)',
		textColor: type === 'warning' ? '#ffffff' : '#2563F4'
	};
}

function getDescriptionItemStyle({ bold = true, contentStyle = {} }: AnyObject = {}): CSSProperties {
	return { fontWeight: bold ? 700 : 500, ...contentStyle };
}

function getEllipsisStyle(index: number, { bold = true, contentStyle = {} }: AnyObject = {}): CSSProperties {
	const width = descriptionWidthList.value[index] + 'px';
	return { width, maxWidth: width, fontWeight: bold ? 700 : 500, ...contentStyle };
}

function needHidden(item: AnyObject) {
	return ['电话', '身份证'].some(key => item[props.labelField]?.includes?.(key));
}

const infoRef = ref<HTMLElement>();
const columnNum = ref(3);
const maxColumnWidth = ref(0);

const descriptionWidthList = ref<Number[]>([]);

const updateColumn = useThrottleFn(
	async function () {
		await nextTick();
		const infoWrapper = infoRef.value;
		if (!infoWrapper) return;
		// 计算 列数和单列最大宽度
		const { clientWidth } = infoWrapper;
		columnNum.value = Math.floor(clientWidth / +props.minColumnWidth);
		maxColumnWidth.value = Math.floor(clientWidth / columnNum.value);
		await nextTick();
		// 计算所有内容区最大宽度
		const labels = infoWrapper.querySelectorAll<HTMLElement>('.n-descriptions-table-content__label');
		if (!labels) return;
		descriptionWidthList.value = Array.from(labels).map(label => {
			// 内容区宽度 = 单列最大宽度 - label宽度 - 20
			return maxColumnWidth.value - label.clientWidth - 20;
		});
	},
	100,
	true,
	false
);

onMounted(updateColumn);

watch([() => props.minColumnWidth, () => props.infoList], updateColumn, {
	flush: 'post',
	deep: true
});

defineExpose({
	// 手动触发info区域宽度重新计算
	update: updateColumn
});

useEventListener(window, 'resize', updateColumn);
</script>
