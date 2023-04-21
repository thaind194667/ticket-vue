<template>
	<div class="above-table-btn">
		<ButtonS value="新規登録" pattern="red" @click="addRecord" />
		<ButtonS value="設定情報出力" pattern="line" showIcon="設定情報出力" :textBefore="false" />
		<ButtonS value="初期化" pattern="line long" />
	</div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
const emit = defineEmits(['addRecord']);

const addRecord = () => {
	emit('addRecord');
};
</script>

<style scoped lang="scss">
@use '@/assets/base';
.above-table {
	@include base.rowFlex($justifyContent: space-between);
	gap: 24px;
	@include base.autoLayout($order: 0, $grow: 0, $align: stretch);
}

.above-table-btn {
	position: sticky;
	@include base.rowFlex($justifyContent: space-between);
	gap: 16px;
	@include base.autoLayout($order: 0, $grow: 0);
}
</style>
