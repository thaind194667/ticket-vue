<template>
    <button :class="[value, pattern, isRound? 'round' : '']" :disabled="status === 'inactive'">
        <div v-if="textBefore"> {{ value }}</div>
        <SvgIcon :name="showIcon + status" v-if="showIcon" />
        <SvgIcon name="leftArrow" v-if="leftArrow" />
        <SvgIcon name="rightArrow" v-if="rightArrow" />
        <!-- <div v-if="value">{{ value }}</div> -->
        <div v-if="!textBefore">{{ value }}</div>
    </button>
</template>

<script setup lang="ts">

import SvgIcon from '@/components/SvgIcon.vue';
const props = defineProps({
    pattern: {type: String, required: true},
    status: {type: String, default: '', required: false},
    showIcon: {type: String, default: '', required: false},
    value: {type: String, required: false},
    isRound: {type: Boolean, default: false},
    rightArrow: {type: Boolean, default: false},
    leftArrow: {type: Boolean, default: false},
    textBefore : {type: Boolean, default: true}
})

// if(pattern )

</script>

<style scoped lang="scss">
@use '@/assets/base';
* {
    @include base.rowFlex($padding: 8px 12px);
    // padding: 8px 12px;
    gap: 8px;
    border-radius: 4px;
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    text-align: center;
    margin: 0;
    background: none;
    // align-self: stretch;
    @include base.autoLayout($order: 0, $grow: 0);

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.6;
        &:hover {
            cursor:auto;
        }
    }
}

.round {
    border-radius: 99px;
}

.red {
    /* btn_s */
    width: 160px;
    // height: 36px;
    background: #DE2233; /* red/main */
    color: #FFFFFF; /* mono/#FFFFFF */
    border: none;
    /* Inside auto layout */
    @include base.autoLayout($order: 0, $grow: 0);
}

.line {
    box-sizing: border-box;
    width: 135px;
    // height: 36px; 
    background: #FFFFFF;  /* mono/#FFFFFF */
    color: #202529; /* mono/#202529 */
    border: 1px solid #B0B1B2; /* mono/#B0B1B2 */
    /* Inside auto layout */
    @include base.autoLayout($order: 1, $grow: 0);
}
.short {
    width: 120px;
}

.grey {
    /* return-btn */
    box-sizing: border-box;

    /* Auto layout */
    @include base.rowFlex($padding: 5px 8px);
    gap: 4px;
    // width: 54px;
    // height: 32px;
    /* mono/#F2F2F2 */
    background: #F2F2F2;
    /* mono/#000000 10% */
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    text-align: center;
    /* mono/#3F454A */
    color: #3F454A;
}

.black {

    // @include base.rowFlex($padding: 5px 8px);
    flex: none;
    display: inline-block;
    padding: 5px 8px;
    gap: 4px;
    width: 160px;
    /* mono/#202529 */
    background: #202529;
    color: #FFFFFF;
}

.header {
    display: inline-block;
    padding: 1px 4px 0px;
    // @include base.rowFlex($padding: 1px 4px 0px);
    background: #F2F2F2;
    border-radius: 2px;
    border: none;
    font-family: 'Hiragino Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height */
    /* red/main */
    color: #DE2233;
    &:hover {
        cursor:auto;
    }
}
.row-btn {
    flex: none;
    display: inline-block;
    border: none;
    background: none;
    // padding: 0px 16px;
    // padding: -4px;
    // gap: 0;
}

.minus, .plus {
    display: inline-block;
    padding: 0;
    // margin-right: 6px;
    border: none;
}

.noborder {
    border: none;
}
</style>