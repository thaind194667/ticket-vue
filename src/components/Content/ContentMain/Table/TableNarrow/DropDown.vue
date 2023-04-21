<template>
	<div :class="`dropdown ${type} ${status}`">
		<div :class="`text ${status}`">{{ value }}</div>
		<div class="button">
			<ButtonS v-if="status !== 'default'" pattern="noborder" showIcon="dropdown" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonS from '@/components/ButtonS.vue';

const props = defineProps({
	status: String,
	value: String,
	type: String,
});

const open = ref<boolean>(true);
</script>

<style scoped lang="scss">
@use '@/assets/base';
.dropdown {
	background-color: white;
	border-radius: 4px;
	@include base.rowFlex($padding: 0px, $justifyContent: auto);

	&.new {
		color: #87898b;
	}
	&.default {
		background: none;
	}

	&:not(.default) {
		&:hover {
			cursor: pointer;
		}
	}
	&.long {
		width: 128px;
		height: 38px;
	}
	&.short {
		width: 80px;
		height: 38px;
	}
	.text {
		padding-left: 8px;
		@include base.autoLayout($order: 0, $grow: 1, $align: auto);
		font-family: 'Hiragino Kaku Gothic ProN';
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 18px;
		max-width: calc(100% - 34px);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.button {
		display: block;
		padding: 8px;
		max-width: 24px;
	}
}
</style>
