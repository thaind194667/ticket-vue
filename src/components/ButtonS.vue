<template>
    <button type="button" :class="[value, pattern, isRound ? 'round' : '']" :disabled="status === 'inactive'">
        <div v-if="textBefore"> {{ value }}</div>
        
        <SvgIcon :name="showIcon + status" v-if="showIcon" />
        <SvgIcon name="leftArrow" v-if="leftArrow" />
        <SvgIcon name="rightArrow" v-if="rightArrow" />
        
        <div v-if="!textBefore">{{ value }}</div>
    </button>
</template>

<script setup lang="ts">

import SvgIcon from '@/components/SvgIcon.vue';
const props = defineProps({
    pattern: { type: String, required: true },
    status: { type: String, default: '', },
    showIcon: { type: String, default: '', },
    value: { type: String, },
    isRound: { type: Boolean, default: false },
    rightArrow: { type: Boolean, default: false },
    leftArrow: { type: Boolean, default: false },
    textBefore: { type: Boolean, default: true }
})

// if(pattern )

</script>

<style scoped lang="scss">
@use '@/assets/base';

button {
    @include base.rowFlex($padding: 4px 8px);
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
    @include base.autoLayout($order: 0, $grow: 0);
    &:hover {
        cursor: pointer;
    }
    &:disabled {
        opacity: 0.6;
        &:hover {
            cursor: auto;
        }
    }
    div {
        padding: 0;
    }
}
.round {
    border-radius: 99px;
}
.red {
    /* btn_s */
    width: 160px;
    padding: 8px;
    background: #DE2233;
    /* red/main */
    color: #FFFFFF;
    /* mono/#FFFFFF */
    border: none;
    /* Inside auto layout */
    @include base.autoLayout($order: 0, $grow: 0);

    &:hover {
        color: #DE2233;
        background: #FFFFFF;
        border: solid 1px #DE2233;
    }
}
.line {
    box-sizing: border-box;
    padding: 8px 16px;
    // width: 135px;
    // height: 36px;
    background: #FFFFFF;
    /* mono/#FFFFFF */
    color: #202529;
    /* mono/#202529 */
    border: 1px solid #B0B1B2;
    /* mono/#B0B1B2 */
    @include base.autoLayout($order: 1, $grow: 0);

}

.long {
    padding: 8px 39px;
}
.grey {
    /* return-btn */
    box-sizing: border-box;
    /* Auto layout */
    @include base.rowFlex($padding: 5px 8px);
    gap: 4px;
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

    &:hover {
        color: #F2F2F2;
        background-color: rgba(0, 0, 0, 0.6);
    }
}

.black {
    padding: 8px 27px;
    height: 32px;
    gap: 4px;
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    text-align: center;
    /* mono/#202529 */
    background: #202529;
    color: #FFFFFF;
    &:hover {
        color: #202529;
        background: #FFFFFF;
        border-color: #202529;
    }
    &.newbtn {
        padding: 8px 66px;
    }    
    &.settingbtn {
        padding: 8px 46px;
    }
}

.header {
    display: inline-block;
    padding: 1px 4px 0px;
    background: #F2F2F2;
    border-radius: 2px;
    border: none;
    font-family: 'Hiragino Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    /* red/main */
    color: #DE2233;

    &:hover {
        cursor: auto;
    }
}

.row-btn {
    display: inline-block;
    border: none;
    background: none;
    padding: 0px;
    margin: 0;
}

.minus, .plus {
    display: inline-block;
    padding: 0;
    border: none;
}
.noborder {
    border: none;
    padding: 0;
    margin: 0;
}

</style>