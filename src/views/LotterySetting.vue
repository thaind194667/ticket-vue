<template>
    <RouterLink to="/">Back</RouterLink>
    <div>
        This is lottery setting page
    </div>
    <div ref="titleElement" 
    class="edit-text"
    contenteditable 
    @input="change">
        {{ title }} 
    </div>{{ unit }}

</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const title = ref('My title')
const unit = "$"
const titleElement = ref()

function change(event : Event) {
//   (event.target as HTMLInputElement).blur()
  title.value = titleElement.value.innerText.trim()
}

defineExpose({ titleElement })

watch(title, () => console.log(title.value));
// import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.edit-text {
    display: inline-block;
    border: solid 1px;
    padding: 4px;
    // width: 50px;
    width: 100px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: initial;
}
</style>