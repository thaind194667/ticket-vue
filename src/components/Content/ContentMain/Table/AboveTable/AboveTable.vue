<template>
    <div class="above-table">
        <div class="above-table-btn">
            <!-- <button class="signup-btn">
                新規登録
            </button> -->
            <ButtonS value="新規登録" pattern="red" />
            <!-- <ImportIcon /> -->
            <ButtonS value="設定情報出力" pattern="line" showIcon="設定情報出力" :textBefore="false"/>
            <ButtonS value="初期化" pattern="line short" />
            <!-- <button class="output-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2C1 0.895431 1.89543 0 3 0H9.17157C9.70201 0 10.2107 0.210714 10.5858 0.585786L14.4142 4.41421C14.7893 4.78929 15 5.29799 15 5.82843V14C15 15.1046 14.1046 16 13 16H3C1.89543 16 1 15.1046 1 14V2ZM7.63272 4.39759C7.83068 4.18329 8.16932 4.18329 8.36728 4.39759L10.6888 6.91073C10.9846 7.23097 10.7575 7.75 10.3215 7.75H9V11.5C9 11.7761 8.77614 12 8.5 12H7.5C7.22386 12 7 11.7761 7 11.5V7.75H5.67846C5.2425 7.75 5.01536 7.23096 5.31119 6.91072L7.63272 4.39759Z" fill="#202529"/>
                </svg>
                設定情報出力
            </button>
            <button class="init-btn">
                初期化
            </button> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
// import ImportIcon from './icon/import_export.svg?component';
</script>

<style scoped lang="scss">
@use "@/assets/base";
.above-table {
    /* above_table */
    /* Auto layout */
    @include base.rowFlex($justifyContent: space-between);
    gap: 24px;
    // width: 1112px;
    // height: 36px;
    /* Inside auto layout */
    @include base.autoLayout($order: 0, $grow: 0, $align: stretch);

    .above-table-btn {
        /* Auto layout */
        @include base.rowFlex;
        gap: 16px;
        // width: 444px;
        // height: 36px;
        /* Inside auto layout */
        @include base.autoLayout($order: 0, $grow: 0);

        // button {
        //     border: none;
        //     @include base.rowFlex($padding: 8px 12px);
        //     gap: 8px;
        //     border-radius: 4px;
        //     font-family: 'Hiragino Kaku Gothic ProN';
        //     font-style: normal;
        //     font-weight: 600;
        //     font-size: 14px;
        //     line-height: 20px;
        //     /* identical to box height, or 143% */
        //     text-align: center;

        //     &:hover {
        //         cursor: pointer;
        //     }
        // }

        // .signup-btn {
        //     /* btn_s */
        //     width: 160px;
        //     // height: 36px;
        //     background: #DE2233; /* red/main */
        //     color: #FFFFFF; /* mono/#FFFFFF */
        //     /* Inside auto layout */
        //     @include base.autoLayout($order: 0, $grow: 0);
        // }

        // .output-btn {
        //     box-sizing: border-box;
        //     width: 135px;
        //     // height: 36px; 
        //     background: #FFFFFF;  /* mono/#FFFFFF */
        //     color: #202529; /* mono/#202529 */
        //     border: 1px solid #B0B1B2; /* mono/#B0B1B2 */
        //     /* Inside auto layout */
        //     @include base.autoLayout($order: 1, $grow: 0);
        // }

        // .init-btn {
        //     box-sizing: border-box;
        //     width: 120px;
        //     // height: 36px;
        //     background: #FFFFFF;  /* mono/#FFFFFF */
        //     color: #202529; /* mono/#202529 */
        //     border: 1px solid #B0B1B2; /* mono/#B0B1B2 */
        //     /* Inside auto layout */
        //     @include base.autoLayout($order: 2, $grow: 0);
        // }
    }
}
</style>