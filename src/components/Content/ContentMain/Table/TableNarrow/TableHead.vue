<template>
        <thead >
            <tr>
                <th :id="obj.key" 
                    v-for="obj of tableHead" 
                    :key="obj.key" 
                    :rowspan="obj.rowspan || 2" 
                    :colspan="obj.colspan"
                    class="primary-th"
                    >
                    <template v-if="obj.value"> 
                        <div>{{ obj.value}}  </div>
                        <div class="require-header" v-if="obj.require">
                            必須
                        </div>
                    </template>
                </th>
            </tr>
            <tr >
                <th 
                    scope="col" 
                    v-for="obj of belowHeaderRow" 
                    :key="obj.key" 
                    class="secondary-th"
                    :id="obj.key" >

                    <div>{{ obj.value}}  </div>
                    <div class="require-header" v-if="obj.require">
                        必須
                    </div>
                </th>
            </tr>
        </thead>
</template>

<script setup lang="ts">
import { mergeText } from '@/utility';

const tableHead = [
    {   key: 'action', value: mergeText('編集\xa0\xa0', '削除\xa0\xa0'), require: false,
        colspan: 2,
        rowspan: 2,
    },
    {key: 'name', value: 'カテゴリ名' , require: true }, 
    {key: 'customer', value: '対象顧客', require: true },
    {key: 'discount', value: '全体割引', require: true },
    {   key: 'queueSetting', 
        value:  '先着販売設定',
        require: false,
        colspan: 11,
        rowspan: 1,
    },
    {key: 'lotterySetting', value: '抽選設定', require: false},
    {key: 'note', value: '備考', require: false}
]

const belowHeaderRow = [
    {key: 'ticketType', value: '券種', require: false},
    {key: 'seatType', value: '席種', require: true},
    {key: 'seatClass', value: '席種区分', require: true},
    {key: 'storageMedia', value: '媒体', require: true},
    {key: 'discountedPrice', value: "割引価格", require: false},
    {key: 'adjustedPrice', value: "調整価格", require: true},
    {key: 'publicFee', value: '発行手数料', require: true},
    {key: 'publicPeriod', value: '公開期間', require: true},
    {key: 'salePeriod', value: '販売期間', require: true},
    {key: 'electricTicketPublicDate', value: '電子チケット発行日', require: false},
    {key: 'purchaseLimit', value: '購入上限数', require: true}
]

</script>

<style lang="scss" scoped>
@use '@/assets/base';

thead {
    min-height: 32px;
    max-height: 64px;
    background: #FFFFFF;  /* mono/#FFFFFF */
    color: black;
    border-bottom: solid 2px #DE2233;
    
    /* mono/#87898B */
    color: #87898B;
    th {
        vertical-align: middle;
        gap: 8px;
        font-family: 'Hiragino Kaku Gothic ProN';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
            padding: 6px 16px;
        &.primary-th {
            min-height: 32px;
            max-height: 64px;
        }
        &.secondary-th {
            // padding: 6px 16px;
            max-height: 32px;
        }
        div {
            display: inline-block;
        }
    }
    th {
        &:not(#note, #edit) {
            // padding: 8px;
            border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
        &#queueSetting {
            border-bottom: solid 1px;
        }
        // &#edit, &#delete {
        //     // padding: 0;
        // }
        .require-header {
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
        }
    }
}

</style>