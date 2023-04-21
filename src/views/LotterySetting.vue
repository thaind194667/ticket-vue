import InputBox from '@/components/InputBox.vue';

<template>
	<RouterLink to="/">Back</RouterLink>
	<div>This is lottery setting page</div>
	<!-- <div class="wrapper">
        <span ref="titleElement" 
        class="edit-text"
        contenteditable 
        @input="change">
            {{ title }} 
        </span>{{ unit }}
    </div> -->
	<InputBox v-model="inputVal" unit="$" placeholder="input here" @send="recv" type="text short" status="edit" />
	Text: {{ inputVal }}
</template>

<script setup lang="ts">
import InputBox from '@/components/InputBox.vue';
import { ref, watch } from 'vue';

const title = ref('My title');
const unit = '$';
const titleElement = ref();

const inputVal = ref<string>('');

const recv = (val: string) => {
	inputVal.value = val;
};

function change(event: Event) {
	//   (event.target as HTMLInputElement).blur()
	title.value = titleElement.value.innerText.trim();
}

defineExpose({ titleElement });

watch(title, () => console.log(title.value));
// import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.wrapper {
	// display: inline-block;
	border: solid 1px;
	padding: 4px;
	// width: 50px;
	width: 100px;
	height: 30px;
	// overflow: hidden;
	text-overflow: ellipsis;
	// word-break: break-word;
	// white-space: initial;

	.edit-text {
		&:focus {
			width: 100vh;
		}
		z-index: 1;
	}
}
</style>
