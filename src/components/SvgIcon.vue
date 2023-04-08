<template>
    <img :src="url" :alt="name">
</template>

<script setup lang="ts">

const props = defineProps({
    name: {type: String, required: true}
})
const url = "/src/assets/icons/"+ props.name + ".svg";
</script>

<style scoped>
img {
    margin: 0;
    padding: 0;
}
</style>