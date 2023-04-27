<template>
	<thead>
		<tr>
			<th
				:id="obj.key"
				v-for="obj of tableHead"
				:key="obj.key"
				:rowspan="obj.rowspan || 2"
				:colspan="obj.colspan"
				class="primary-th"
			>
				<template v-if="obj.value">
					<div>{{ obj.value }}</div>
					<div class="require-header" v-if="obj.require">必須</div>
				</template>
			</th>
		</tr>
		<tr>
			<th scope="col" v-for="obj of belowHeaderRow" :key="obj.key" class="secondary-th" :id="obj.key">
				<div>{{ obj.value }}</div>
				<div class="require-header" v-if="obj.require">必須</div>
			</th>
		</tr>
	</thead>
</template>

<script setup lang="ts">
import { mergeText } from '@/utility';
// import TableHead from '@/components/Content/ContentMain/Table/TableNarrow/TableHead.vue';

type TableHeadType = {
	key: string,
	value: string,
	require?: boolean,
	colspan?: number,
	rowspan?: number
}

const props = defineProps({
	tableHead: {type: Array<TableHeadType>, required: true},
	belowHeaderRow: Array<TableHeadType>,
})



</script>

<style lang="scss" scoped>
@use '@/assets/base';

thead {
	min-height: 32px;
	max-height: 64px;
	background: #ffffff; /* mono/#FFFFFF */
	color: black;
	border-bottom: solid 2px #de2233;
	color: #87898b;
	th {
		vertical-align: middle;
		gap: 8px;
		font-family: 'Hiragino Kaku Gothic ProN';
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 20px;
		padding: 6px 16px;
		&.primary-th {
			min-height: 32px;
			max-height: 64px;
		}
		&.secondary-th {
			max-height: 32px;
		}
		div {
			display: inline-block;
		}
	}
	th {
		&:not(#note, #edit) {
			border-right: 1px solid rgba(0, 0, 0, 0.2);
		}
		&#queueSetting {
			border-bottom: solid 1px;
		}
		.require-header {
			display: inline-block;
			margin-left: 8px;
			padding: 1px 4px 0px;
			background: #f2f2f2;
			border-radius: 2px;
			border: none;
			font-family: 'Hiragino Sans';
			font-style: normal;
			font-weight: 600;
			font-size: 10px;
			line-height: 15px;
			color: #de2233;
		}
	}
}
</style>
