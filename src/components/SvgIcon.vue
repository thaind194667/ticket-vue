<template>
	<div class="icon">
		<img :src="url" :alt="name" />
	</div>
</template>

<script setup lang="ts">
// import Icons from '@/assets/icons/IconCommunity.vue'
import { ref, watch } from 'vue';
const props = defineProps({
	name: { type: String, required: true },
});
// const url = "@/assets/icons/"+ props.name + ".svg";
const url = ref<string>(`/src/assets/icons/${props.name}.svg`);

watch(
	() => props.name,
	() => {
		url.value = `/src/assets/icons/${props.name}.svg`;
	},
);
</script>

<style scoped>
.icon {
	display: flex;
	font-size: 0;
}
img {
	margin: 0;
	padding: 0;
}
</style>
