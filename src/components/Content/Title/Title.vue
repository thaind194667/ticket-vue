<template>
    <div class="content-title">
        <RouterLink to="/lottery">
            <ButtonS 
            pattern="grey" 
            value="戻る" 
            :isRound="true" 
            :leftArrow="true" 
            :textBefore="false" 
            />
        </RouterLink>
        <!-- <div class="return-btn">
            <svg class="return-icon" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.79297 10.301L2.4082 5.80099C2.34329 5.71444 2.30859 5.60913 2.30859 5.50094C2.30859 5.39276 2.34329 5.28744 2.4082 5.20089L5.79297 0.700892C5.83237 0.648364 5.88295 0.604219 5.93945 0.570765C5.99595 0.537312 6.05805 0.515354 6.12305 0.506068C6.18805 0.496782 6.2528 0.50027 6.31641 0.516566C6.38001 0.532862 6.44161 0.561642 6.49414 0.601039L7.30078 1.20797C7.40512 1.2888 7.47352 1.40715 7.49219 1.53781C7.51085 1.66846 7.47792 1.80111 7.40039 1.90792L4.70117 5.49606L7.40039 9.08395C7.44134 9.13676 7.47111 9.19735 7.48828 9.26193C7.50546 9.32651 7.5093 9.39375 7.5 9.45993C7.49158 9.52455 7.4703 9.58695 7.4375 9.64328C7.4047 9.6996 7.36064 9.74883 7.30859 9.78805L6.50195 10.395C6.41579 10.4606 6.31144 10.4957 6.20312 10.4948C6.1245 10.497 6.04568 10.4807 5.97461 10.447C5.90354 10.4133 5.84108 10.3632 5.79297 10.301Z" fill="#3F454A"/>
            </svg>
            <div class="return-text">
                戻る
            </div>
            
        </div> -->

        <div class="title">
            <b>カテゴリ設定</b>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
// import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
@use '@/assets/base';
.content-title {
    /* content-title */

    /* Auto layout */
    @include base.rowFlex();
    gap: 8px;

    // width: 1112px;
    // height: 41px;
    border-radius: 4px;

    /* Inside auto layout */
    @include base.autoLayout($order: 0, $grow: 0);

    .return-btn {
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
        border-radius: 99px;

        /* Inside auto layout */
        @include base.autoLayout($order: 0, $grow: 1);
        .return-icon {
            /* return-icon */
            width: 10px;
            height: 10px;

            /* Inside auto layout */
            @include base.autoLayout($order: 0, $grow: 0);
        }
        .return-text {
            /* 登録 */
            width: 24px;
            height: 16px;

            font-family: 'Hiragino Kaku Gothic ProN';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            /* identical to box height, or 133% */
            text-align: center;

            /* mono/#3F454A */
            color: #3F454A;
            /* Inside auto layout */
            @include base.autoLayout($order: 1, $grow: 0)
        }

        &:hover {
            opacity: 0.8;
            cursor: pointer;
        }
    }

    .title {
        /* 走行日 */

        box-sizing: border-box;
        /* 24 b */
        font-family: 'Hiragino Kaku Gothic ProN';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;

        /* identical to box height, or 29px */
        /* mono/#000000 */
        color: #000000;
        // border: 1px solid #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        /* Inside auto layout */
        @include base.autoLayout($order: 0, $grow: 0);
    }
}
</style>