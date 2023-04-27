<template>
	<div class="table-container">
		<AboveTable @add-record="addNewRecord" />

		<div class="table-narrow">
			<table cellpadding="0" cellspacing="0">
				<colgroup span="2"></colgroup>
				<col />
				<col />
				<col />
				<colgroup span="11"></colgroup>
				<col />
				<col />
				<TableHead :table-head="tableHead"  :below-header-row="belowHeaderRow"/>
				<tbody v-for="(row, index) in tableBodyRows" :key="row.IdCategory" :class="'bodyRow ' + row.status">
					<TableRow :myRow="row" :index="index" @change="setChange" @deleteRow="deleteRow" />
				</tbody>
			</table>
		</div>

		<BelowTable
			:empty="tableBody.length === 0"
			:rows-in-page="rowsInPage"
			:max-page="maxPage"
			:current-page="currentPage"
			:max-row="maxRow"
			:start-index="startIndex + 1"
			@changePage="changePage"
		/>
	</div>
</template>

<script setup lang="ts">
import AboveTable from './AboveTable/AboveTable.vue';
import TableRow from './TableNarrow/TableRow.vue';
import TableHead from './TableNarrow/TableHead.vue';
import BelowTable from './BelowTable/BelowTable.vue';
import { ref, watch, onBeforeMount } from 'vue';
import { mergeText, newDefaultRow } from '@/utility';

type TableBodyFromData = {
	IdCategory: number;
	FlgCustomer: number;
	NmCategory: string;
	SaleRate: number;
	FlgPayAfter: number;
	TxtNote: string | null;
	CategoryCustomers: Array<any>;
	TicketSettingInformations: Array<any>;
	CategoryLotteryGroups: Array<any>;
};

type TableBody = {
	IdCategory: number;
	FlgCustomer: number;
	NmCategory: string;
	SaleRate: number;
	FlgPayAfter: number;
	TxtNote: string | null;
	CategoryCustomers: Array<any>;
	TicketSettingInformations: Array<any>;
	CategoryLotteryGroups: Array<any>;
	status: string;
};

const tableHead = [
	{ key: 'action', value: mergeText('編集\xa0\xa0', '削除\xa0\xa0'), require: false, colspan: 2, rowspan: 2 },
	{ key: 'name', value: 'カテゴリ名', require: true },
	{ key: 'customer', value: '対象顧客', require: true },
	{ key: 'discount', value: '全体割引', require: true },
	{ key: 'queueSetting', value: '先着販売設定', require: false, colspan: 11, rowspan: 1 },
	{ key: 'lotterySetting', value: '抽選設定', require: false },
	{ key: 'note', value: '備考', require: false },
];

const belowHeaderRow = [
	{ key: 'ticketType', value: '券種', require: false },
	{ key: 'seatType', value: '席種', require: true },
	{ key: 'seatClass', value: '席種区分', require: true },
	{ key: 'storageMedia', value: '媒体', require: true },
	{ key: 'discountedPrice', value: '割引価格', require: false },
	{ key: 'adjustedPrice', value: '調整価格', require: true },
	{ key: 'publicFee', value: '発行手数料', require: true },
	{ key: 'publicPeriod', value: '公開期間', require: true },
	{ key: 'salePeriod', value: '販売期間', require: true },
	{ key: 'electricTicketPublicDate', value: '電子チケット発行日', require: false },
	{ key: 'purchaseLimit', value: '購入上限数', require: true },
];

const props = defineProps({
	tableData: { type: Array<TableBodyFromData>, required: true },
});

const tableBody = ref<TableBody[]>([]);
const tableBodyRows = ref<Array<TableBody>>([]);

const rowsInPage = ref<number>(2);
const currentPage = ref<number>(1);
const maxRow = ref<number>(0);
const maxPage = ref<number>(0);
const startIndex = ref<number>(0);
const endIndex = ref<number>(0);

const calBegin = () => {
	maxRow.value = tableBody.value.length;
	maxPage.value = Math.ceil(maxRow.value / rowsInPage.value);
	startIndex.value = (currentPage.value - 1) * rowsInPage.value;
	endIndex.value = startIndex.value + rowsInPage.value;
	tableBodyRows.value = tableBody.value.slice(startIndex.value, endIndex.value);
	if (!tableBodyRows.value.length && currentPage.value !== 1) changePage(currentPage.value - 1);
	// console.log(rowsInPage.value);
	// console.log(currentPage.value);
	// console.log(maxPage.value);
	// console.log(startIndex.value );
	// console.log(tableBodyRows.value);
};

onBeforeMount(() => {
	for (let i = 0; i < props.tableData.length; i++) {
		tableBody.value[i] = { ...props.tableData[i], status: 'default' };
	}
	// console.log(tableBody.value);
	calBegin();
});

const setChange = (index: number, newVal: TableBody) => {
	tableBody.value[index + startIndex.value] = newVal;
};

const addNewRecord = () => {
	tableBody.value.push(newDefaultRow);
};

const deleteRow = (index: number) => {
	tableBody.value.splice(index + startIndex.value, 1);
};

const changePage = (index: number) => {
	currentPage.value = index;
	calBegin();
};

watch(
	tableBody,
	(newVal) => {
		// console.log(newVal)
		calBegin();
	},
	{ deep: true },
);
</script>

<style scoped lang="scss">
@use '@/assets/base';

.table-container {
	@include base.columnFlex;
	gap: 12px;
	// width: 1112px;
	height: 100%;
	overflow: hidden;
	@include base.autoLayout($order: 1, $grow: 0, $align: stretch);

	.table-narrow {
		display: inline-block;
		width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		border-radius: 8px 8px 0px 0px;
	}

	table {
		white-space: nowrap;
		border-radius: 8px;
		background: #ffffff;
		border-style: hidden hidden hidden hidden;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		height: 100%;
		border-collapse: collapse;

		tbody {
			&.default {
				background-color: #ffffff;
			}
			&.new,
			&.edit {
				background-color: #f2f2f2;
			}
			&:hover {
				background-color: #fce8ea;
			}
		}
	}
}
</style>
