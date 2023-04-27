<template>
	<div class="content-title">
		<RouterLink to="/lottery">
			<ButtonS pattern="grey back" value="戻る" :isRound="true" :leftArrow="true" :textBefore="false" />
		</RouterLink>
		<div class="title">
			<b>{{title_name}}</b>
		</div>
	</div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
const props = defineProps({
	title_name: String,
})
</script>

<style scoped lang="scss">
@use '@/assets/base';
.content-title {
	@include base.rowFlex();
	gap: 8px;
	// width: 1112px;
	// height: 41px;
	border-radius: 4px;
	@include base.autoLayout($order: 0, $grow: 0);
	.return-btn {
		box-sizing: border-box;
		@include base.rowFlex($padding: 5px 8px);
		gap: 4px;
		// width: 54px;
		// height: 32px;
		background: #f2f2f2;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 99px;
		@include base.autoLayout($order: 0, $grow: 1);
		.return-icon {
			width: 10px;
			height: 10px;
			@include base.autoLayout($order: 0, $grow: 0);
		}
		.return-text {
			width: 24px;
			height: 16px;
			font-family: 'Hiragino Kaku Gothic ProN';
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			line-height: 16px;
			text-align: center;
			color: #3f454a;
			@include base.autoLayout($order: 1, $grow: 0);
		}
		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}
	}
	.title {
		box-sizing: border-box;
		font-family: 'Hiragino Kaku Gothic ProN';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 120%;
		color: #000000;
		// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		@include base.autoLayout($order: 0, $grow: 0);
	}
}
</style>
