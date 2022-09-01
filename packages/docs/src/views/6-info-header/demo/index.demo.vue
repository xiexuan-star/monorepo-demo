<!-- 整个组件从左到右分为 操作区 患者信息区 基本信息区 设置区 4个区域 -->
<template>
	<!-- compact 表示组件是否为收缩状态 -->
	<!-- patientInfo 表示患者基本信息 -->
	<!-- infoList
  1.表示基本信息区描述列表数据, 如果需要在描述列表的内容中使用插槽, 那么在单项中传入slot字段即可
  2.同时, 组件会对label中包含 电话｜身份证 的项进行特殊处理(点击眼睛图标隐藏)
  3如果需要自己实现info区的内容, 使用info插槽即可
  -->
	<c-info-header
		v-model:compact="compact"
		:patientInfo="patientInfo"
		:infoList="infoList"
		min-column-width="180"
		@open-patient-info="onOpenPatientInfo"
		@field-set="onFieldSet"
	>
		<!-- 操作区插槽, 需要全量使用插槽实现   -->
		<template #operation>
			<div>operation1</div>
			<!-- 为组件中的元素添加 compact-hidden 属性后, 该元素将自动在紧凑模式下隐藏-->
			<div compact-hidden>operation2</div>
		</template>

		<!--  患者信息区的头像插槽 -->
		<template #avatar>avatar</template>

		<!-- 患者信息区的底部描述插槽-->
		<template #avatarInfo>
			<div compact-hidden>avatarInfo</div>
		</template>

		<!-- 患者信息插槽, 需要自己实现整个患者信息区时使用, 一般情况不需要   -->
		<template #patientModule></template>

		<!-- 基本信息区插槽, 一般情况不需要   -->
		<template #info></template>

		<!--  设置区插槽, 一般情况不需要  -->
		<!-- <template #setting></template>-->

		<!--  信息区医师插槽,插槽名称由infoList中的配置指定,一般情况不需要  -->
		<template #doctor="{ item, style, width }">
			<div :style="{ color: 'red', width: width + 'px', maxWidth: width + 'px', ...style }">
				{{ item.value || '-' }}
			</div>
		</template>
	</c-info-header>
</template>

<script lang="ts">
import { ref, h, defineComponent } from 'vue';

export default defineComponent({
	setup() {
		const compact = ref(false);

		const patientInfo = ref({
			name: '患者',
			sex: '男',
			age: '12',
			ageUnit: '月',
			tagList: [{ type: 'warning', content: '自费' }]
		});

		const infoList = ref([
			{ label: '电话', value: '15625635269123', /* 额外的气泡内容 */ tip: '手机号' },
			{ label: '门诊号', value: 'MZ103570', /* 指定内容区样式 */ contentStyle: { color: 'red' } },
			{ label: '就诊号', value: 'R0000200658123123123', tip: '长号码' },
			{ label: '医师', value: '王烁', /* 指定该项的内容使用doctor插槽 */ slot: 'doctor' },
			{
				label: '所在科室',
				value: '社康(全科)',
				/**
				 * @description slot也可以是任意组件类型 FunctionalComponent｜Component
				 * @property {Object} item --当前item
				 * @property {number} width --组件计算所得的当前项的最大宽度,使用插槽后,需要自行实现ellipsis逻辑,否则宽度过长时会导致错位
				 */
				slot: {
					props: { width: {}, item: {} },
					render(this: any) {
						return h('div', { style: { width: this.width + 'px' } }, this.item.value);
					}
				}
			},
			{
				label: '过敏史',
				value: undefined,
				slot({ width }: { width: number }) {
					return h('div', { style: { color: 'red', width: width + 'px', maxWidth: width + 'px' } }, '啥都过敏');
				}
			},
			{
				label: '血压',
				value: null,
				tip: '高血压'
			},
			{ label: '基本余额', value: null },
			{ label: '积分', value: null }
		]);

		function onOpenPatientInfo() {
			// ...
		}

		function onFieldSet() {
			// ...
		}

		return { compact, onFieldSet, onOpenPatientInfo, patientInfo, infoList };
	}
});
</script>
