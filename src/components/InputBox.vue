<template>
	<div class="wrapper">
		<div
			ref="textbox"
			:class="`textbox ${editing ? 'edit' : 'default'}`"
			:contenteditable="status !== 'default'"
			@input="send"
			@focus="makeEdit"
			@blur="makeNormal"
			v-text="inputText"
		></div>
	</div>
	{{ unit }}
	<div v-show="errorNoti" class="error-noti">Error: {{ errorNoti }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
	modelValue: { type: String, required: true },
	status: { type: String, required: true },
	type: { type: String, required: true },
	unit: { type: String, default: '' },
	placeholder: { type: String, default: '備考' },
});

const emit = defineEmits(['send']);

const editing = ref<boolean>(false);
const textbox = ref<HTMLParagraphElement>();
const inputText = ref<string>(props.placeholder);
const errorNoti = ref<string>('');

const makeEdit = () => {
	editing.value = true;
	inputText.value = props.modelValue || '';
};

const makeNormal = () => {
	editing.value = false;
	inputText.value = props.modelValue ? props.modelValue : props.placeholder;
};

const send = () => {
	var val = textbox.value!.innerText;
	console.log(val);
	emit('send', val);
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 300px;
	white-space: nowrap;
	.textbox {
		display: block;
		padding: 7px 8px;
		border-radius: 4px;
		background: none;
		border: solid 1px;
		font-family: 'Hiragino Kaku Gothic ProN';
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 18px;
		// z-index: 1;
		&.default {
			width: 50%;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&.edit {
			z-index: 1;

			background-color: rgb(255, 255, 255);
			min-width: 50%;
			max-width: 500px;
			overflow: visible;
			// border: 1px solid;
			outline: none;

			&:hover {
				cursor: text;
			}
		}
	}
}
</style>
