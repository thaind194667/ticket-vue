import SvgIcon from '@/components/SvgIcon.vue';
<template>
    <div :class="`date-choose ${status}`">
        <input :disabled="status === 'default'" :placeholder="dateFormat('04/10/2023')" :value="value"/>
        <div class="date-icon" v-if="status !== 'default'"><SvgIcon name="date-btn"></SvgIcon></div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
import {dateFormat} from '@/utility'
const props = defineProps({
    status: { type: String , required: true },
    value: {type: String, required: false},
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
    padding-right: 0px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    width: 148px;       
    &.default {
        width: 113px;
        background: none;
        border: none;
    }

    input {
        width: 100%;
        &:focus {
            outline: none;
        }
    }
    
}
</style>