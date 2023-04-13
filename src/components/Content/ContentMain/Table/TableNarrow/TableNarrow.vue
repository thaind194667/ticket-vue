<template>
    <div class="table-narrow">
        <table>
            <colgroup span="2"></colgroup>  
            <col>
            <col>
            <col>
            <colgroup span="11"></colgroup>
            <col>
            <col>
            <thead >
                    <tr>
                        <th :id="obj.key" v-for="obj of tableHead" :key="obj.key" :rowspan="!obj.inside ? 2 : 1" :colspan="obj.inside ">
                            <template v-if="obj.value"> 
                                {{ obj.value}}  
                                <ButtonS pattern="header" value="必須" v-if="obj.require" />
                            </template>
                        </th>
                    </tr>
                    <tr >
                        <th scope="col" v-for="obj of belowHeaderRow" :key="obj.key" :id="obj.key">
                            {{ obj.value }}  
                            <ButtonS pattern="header" value="必須" v-if="obj.require" />
                        </th>
                    </tr>
            </thead>

            <tbody v-for="(row, index) in tableBody" :key="row.pattern + ' ' + row.status"  :class="row.pattern + ' bodyRow ' + row.status"> 
                <TableBody :myRow="row" :index="index" @change="setChange"></TableBody>
                <!-- <tr v-for="count in row.rowCount">
                    <td v-if="count === 1" class="action edit" :rowspan="row.rowCount" >
                        <ButtonS class="row-btn" :pattern="row.status" showIcon="edit" v-if="row.status === 'default'" @click="setEdit(row)"/>
                        <ButtonS class="row-btn" :pattern="row.status" showIcon="save" v-else @click="setSave(row)"/>
                    </td>
                    <td v-if="count === 1" class="action delete" :rowspan="row.rowCount">
                        <ButtonS class="row-btn" :pattern="row.status" showIcon="delete" :status="row.status === 'new' ? 'inactive' : ''" />
                    </td>
                    <td v-if="count === 1" class="name" :rowspan="row.rowCount">
                        <input type="text" placeholder="カテゴリ名" :disabled="row.status === 'default'" />
                    </td>
                    <td v-if="count === 1" :rowspan="row.rowCount">
                        <div class="customer-setting">
                        <ButtonS class="customer-choose" pattern="black" v-if="row.status !== 'default'" value="設定"/>
                        <div class="customer">
                            <div class="customer-info">
                                <div class="customer-type">
                                    個人以外
                                </div>
                                <div class="selected-customers">
                                    A, B, CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                </div>
                            </div>
                            <div class="note-option">
                                後日請求あり    
                            </div>      
                        </div>
                        </div>
                    </td>

                    <td v-if="count === 1" class="discount" :rowspan="row.rowCount" >
                        <input type="number" min="0" max="99" placeholder="-" :disabled="row.status === 'default'" value="99"/> %
                    </td>
                    <td class="queueSetting">
                        <div class="ticketType"> 
                            <div class="modify-btn">
                                <ButtonS pattern="minus" 
                                showIcon="minus" 
                                v-if="row.status !== 'default'" 
                                :status="row.rowCount < 2 ? 'inactive' : ''" 
                                @click="row.rowCount--" />
                                <ButtonS 
                                pattern="plus"  
                                showIcon="plus"  
                                v-if="row.status !== 'default'" 
                                @click="row.rowCount++" />
                            </div>
                            <div>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    </td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td>AA</td>
                    <td v-if="count === 1" :rowspan="row.rowCount">BB</td>
                    <td v-if="count === 1" :rowspan="row.rowCount">BB</td>
                    
                    
                </tr> -->
                
            </tbody>

        </table>
    </div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
import { watch, ref } from 'vue';
import TableBody from './TableBody.vue';

const tableHead = [
    {key: 'edit', value: '編集', require: false}, 
    {key: 'delete', value: '削除', require: false},
    {key: 'name', value: 'カテゴリ名' , require: true }, 
    {key: 'customer', value: '対象顧客', require: true },
    {key: 'discount', value: '全体割引', require: true },
    {   key: 'queueSetting', 
        value:  '先着販売設定',
        style: 'row',
        require: false,
        inside: 11
    },
    {key: 'ticketSetting', value: '抽選設定', require: false},
    {key: 'note', value: '備考', require: false}
]

var belowHeaderRow = [
    {key: 'ticketType', value: '券種', require: false},
    {key: 'seatType', value: '席種', require: true},
    {key: 'seatClass', value: '席種区分', require: true},
    {key: 'storageMedia', value: '媒体', require: true},
    {key: 'discountedPrice', value: "割引価格", },
    {key: 'adjustedPrice', value: "調整価格", require: true},
    {key: 'publicFee', value: '発行手数料', require: true},
    {key: 'publicPeriod', value: '公開期間', require: true},
    {key: 'salePeriod', value: '販売期間', require: true},
    {key: 'electricTicketPublicDate', value: '電子チケット発行日', require: false},
    {key: 'purchaseLimit', value: '購入上限数', require: true}
]

const tableBody = ref([
    {pattern: 'onerow', status: 'new', rowCount: 1, name: '', },
    {pattern: 'onerow', status: 'edit', rowCount: 1, name: '取引先', },
    {pattern: 'onerow', status: 'default', rowCount: 1, name: 'スポンサー', },
    // {pattern: 'onerow', status: 'hover', rowCount: 1},
    {
        pattern: 'multirows', status: 'edit', rowCount: 2, name: '取引先',
        value: [],
    },
    {
        pattern: 'multirows', status: 'default', rowCount: 2, name: 'スポンサー', 
        value: [],
    },
    // {pattern: 'multirows', status: 'hover', rowCount: 2},
])

const setChange = (index: number, newVal: any) =>{
    tableBody.value[index] = newVal
}

watch(tableBody, (newVal) => {
    console.log(newVal)
}, {deep: true})
// alert(JSON.stringify(tableBody.value))

const maxRowCount = ref(5);

// watch(tableBody, (newVal) => {
//     alert(JSON.stringify(tableBody.value))
// }, {deep: true})

// const addRowCount = (row: any) => {
//     row.rowCount++;
//     if
// }

// const setEdit = (row: any) => {
//     row.status = 'edit'
//     alert(row.status)
// }

// const setSave = (row: any) => {
//     row.status = 'default'
//     alert(row.status)
// }

</script>

<style lang="scss" scoped>
@use '@/assets/base';
* {
    margin: 0;
    padding: 0;
    border-spacing: 0;
    border-collapse: collapse;
}

.table-narrow {
    width: 100%;
}

table, td, tr {
    
    border-spacing: 0;
    border-collapse: collapse;
}

table {
    white-space: nowrap;
    overflow-x: scroll;
    border-radius: 8px;
    background: #FFFFFF; /* mono/#FFFFFF */
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05); /* Content_shadow */
    table-layout: fixed;
}

thead {
    /* Auto layout */
    // @include base.rowFlex;   
    background: #FFFFFF;  /* mono/#FFFFFF */
    color: black;
    /* Inside auto layout */
    @include base.autoLayout($order: 0, $grow: 0);
    border-bottom: solid 2px #DE2233;
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    /* mono/#87898B */
    color: #87898B;
    th:not(#note, #edit) {
        padding: 8px;
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        &#queueSetting {
            border-bottom: solid 1px;
        }
    }
    #action {
        padding: 16px;
    }
}

input{
    line-height: 32px;
    padding: 0px 0px 0px 8px;
    border: none;
    &:disabled {
        box-shadow: none;
        background: none;
    }
}

input[type="number"] {
    width: 4vh;
}

tbody {

    border: 1px solid rgba(0, 0, 0, 0.2);
    // &.onerow {

    // }

    // &.multirows {

    // }
    &.default {
        background-color: #FFFFFF;
    }

    &.new {
        background-color: #F2F2F2;
    }

    &.edit {
        background-color: #F2F2F2;
    }

    &:hover {
        background-color:  #FCE8EA;
    }
    
}


</style>