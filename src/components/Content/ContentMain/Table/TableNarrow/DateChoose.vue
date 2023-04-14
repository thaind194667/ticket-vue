import SvgIcon from '@/components/SvgIcon.vue';
<template>
    <div :class="`date-choose ${status}`">
        <div contenteditable>{{ dateFormat(new Date()) }}</div>
        <div v-if="status !== 'default'"><SvgIcon name="date-btn"></SvgIcon></div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
import {dateFormat} from '@/utility'
const props = defineProps({
    status: { type: String, required: true },
})

</script>

<style scoped lang="scss">
.date-choose {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding: 0px 8px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &.default {
        background: none;
        border: none;
    }
}
</style>