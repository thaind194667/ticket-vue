<template>
    <div class="wrapper">
        <input v-if="type === 'text'" type="text" :placeholder="placeholder" />
        <RadioButton v-else-if="type === 'radio'" v-for="item in radioList" :name="name" :value="item"/>
        <!-- <RadioButton v-else-if="type === 'radio'" :name="name" :value="value" /> -->
        <SvgIcon class="date-icon" :name="icon" v-if="icon"/>
    </div>
    <div v-show="errorNoti" class="error-noti">Error: {{ errorNoti }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import RadioButton from './RadioButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
const props = defineProps({
    status: String, 
    type: String,
    placeholder: String,
    name: String,
    radioList: String,
    icon: String,
})

const errorNoti = ref<string>('')
</script>

<style lang="scss" scoped>
$padding: 16px;
.wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-start;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: #F2F2F2;
    padding: $padding;
    color: #87898B;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    input {
        max-width: 100%;
        outline: none;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Hiragino Kaku Gothic ProN';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 22px;
        flex: none;
        order: 0;
        flex-grow: 1;
        align-self: stretch;
    }
    .date-icon {
        &:hover {
            cursor: pointer;
        }
    }
}
</style>