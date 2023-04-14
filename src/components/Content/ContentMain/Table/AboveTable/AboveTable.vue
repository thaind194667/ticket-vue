<template>
    <div class="above-table">
        <div class="above-table-btn">
            <ButtonS value="新規登録" 
                pattern="red" 
                @click="addRecord"/>
            <ButtonS value="設定情報出力" 
                pattern="line" 
                showIcon="設定情報出力" 
                :textBefore="false"/>
            <ButtonS value="初期化" 
                pattern="line long" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
const emit = defineEmits(['addRecord']);

const addRecord = () => {
    emit('addRecord')
}

// import ImportIcon from './icon/import_export.svg?component';
</script>

<style scoped lang="scss">
@use "@/assets/base";
.above-table {
    /* above_table */
    /* Auto layout */
    position: sticky;
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