<template>
    <div class="icon">
        <img :src="url" :alt="name">
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    name: {type: String, required: true}
})
const url = "/src/assets/icons/"+ props.name + ".svg";
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