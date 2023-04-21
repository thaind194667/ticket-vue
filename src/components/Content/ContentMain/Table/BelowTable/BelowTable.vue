<template>
	<div class="below-table">
		<div class="pager" v-if="!empty">
			<ButtonS
				pattern="grey"
				value="前へ"
				:is-round="true"
				:status="currentPage === 1 ? 'inactive' : ''"
				@click="changePage(currentPage - 1)"
			/>

			<ButtonS
				pattern="grey"
				:is-round="true"
				v-if="numList[0] !== 1"
				:value="(1).toString()"
				:status="1 === currentPage ? 'inactive' : ''"
				@click="changePage(1)"
			/>

			<div v-if="frontHas">...</div>

			<ButtonS
				pattern="grey"
				:is-round="true"
				v-for="val in numList"
				:key="`page${val}`"
				:value="val.toString()"
				:status="val === currentPage ? 'inactive' : ''"
				@click="changePage(val)"
			/>

			<div v-if="backHas">...</div>

			<ButtonS
				pattern="grey"
				:is-round="true"
				v-if="numList[numList.length - 1] !== maxPage"
				:value="maxPage.toString()"
				:status="maxPage === currentPage ? 'inactive' : ''"
				@click="changePage(maxPage)"
			/>

			<ButtonS
				pattern="grey"
				:is-round="true"
				value="次へ"
				:status="currentPage === maxPage ? 'inactive' : ''"
				@click="changePage(currentPage + 1)"
			/>
		</div>

		<div class="pager" v-else></div>

		<div class="table-info">
			全 {{ maxRow }} 件中 {{ empty ? 0 : startIndex }} 件 〜
			{{ empty ? 0 : endIndex > maxRow ? maxRow : endIndex }} 件を表示
			<ButtonS pattern="grey" :is-round="true" :value="`${rowsInPage}件表示`" show-icon="dropdown-below" />
		</div>
	</div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';

import { ref, onBeforeUpdate, onMounted } from 'vue';

const emit = defineEmits(['changePage']);

const props = defineProps({
	empty: { type: Boolean, required: true },
	maxRow: { type: Number, required: true },
	maxPage: { type: Number, required: true },
	currentPage: { type: Number, required: true },
	rowsInPage: { type: Number, required: true },
	startIndex: { type: Number, required: true },
});

const numList = ref<number[]>([]);
const frontHas = ref<boolean>(false);
const backHas = ref<boolean>(false);
const endIndex = ref<number>(0);
const getList = () => {
	const cur = props.currentPage;
	const max = props.maxPage;
	if (max <= 6) {
		numList.value = [];
		for (var i = 1; i <= max; i++) {
			numList.value.push(i);
		}
		frontHas.value = backHas.value = false;
	} else {
		if (cur <= 3) {
			numList.value = [1, 2, 3, 4];
			frontHas.value = false;
			backHas.value = true;
		} else if (cur + 2 >= max) {
			numList.value = [max - 3, max - 2, max - 1, max];
			frontHas.value = true;
			backHas.value = false;
		} else {
			numList.value = [cur - 1, cur, cur + 1];
			frontHas.value = backHas.value = true;
		}
	}

	endIndex.value = props.startIndex + props.rowsInPage - 1;
};

onMounted(() => {
	getList();
});

onBeforeUpdate(() => {
	getList();
});

const changePage = (index: number) => {
	if (index !== props.currentPage) {
		emit('changePage', index);
	}
};
</script>

<style lang="scss" scoped>
@use '@/assets/base';

.below-table {
	@include base.rowFlex($justifyContent: space-between);
	gap: 8px;
	// width: 3226px;
	// height: 26px;
	@include base.autoLayout($order: 2, $grow: 0, $align: stretch);
	.pager {
		@include base.rowFlex();
		gap: 8px;
		@include base.autoLayout($order: 0, $grow: 0);
	}
	.table-info {
		@include base.rowFlex();
		gap: 8px;
		font-family: 'Hiragino Kaku Gothic ProN';
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 18px;
		/* identical to box height */

		text-align: center;
		color: #727578;
		// width: 263px;
		// height: 26px;
		@include base.autoLayout($order: 1, $grow: 0);
	}
}
</style>
