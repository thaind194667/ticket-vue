<template>
    <div class="table-container">
        <AboveTable 
        @add-record="addNewRecord"
        />
        <TableNarrow 
        :start-index="startIndex"
        :end-index="endIndex"
        :table-head="tableHead" 
        :table-body="tableBody" 
        :below-header-row="belowHeaderRow"
        @change="setChange"
        @delete-row="deleteRecord"
        />

        <BelowTable
        :rows-in-page="rowsInPage"
        :max-page="maxPage"
        :current-page="currentPage"
        :max-row="maxRow"
        :start-index="startIndex + 1"
        @changePage="changePage"
        />
        
    </div>
</template>

<script setup lang="ts">
import AboveTable from './AboveTable/AboveTable.vue';
import TableNarrow from './TableNarrow/TableNarrow.vue';
import BelowTable from './BelowTable/BelowTable.vue';
import {ref, watch, onBeforeMount} from 'vue'
import { mergeText } from '@/utility';

type TableBody = {
    pattern: string, 
    status: string, 
    rowCount: number, 
    name: string, 
    value: Array<Object>,
}

const tableHead = [
    {   key: 'action', value: mergeText('編集\xa0\xa0', '削除\xa0\xa0'), require: false,
        colspan: 2,
        rowspan: 2,
    },
    // {key: 'edit', value: '編集', require: false}, 
    // {key: 'delete', value: '削除', require: false},
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

const tableBody = ref([
    
    {   pattern: 'onerow', status: 'new', rowCount: 1, name: '1', 
        value: [],
    },
    {   pattern: 'onerow', status: 'edit', rowCount: 1, name: '2', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '3', 
        value: [],
    },
    // {pattern: 'onerow', status: 'hover', rowCount: 1},
    {
        pattern: 'multirows', status: 'edit', rowCount: 2, name: '4',
        value: [],
    },
    {
        pattern: 'multirows', status: 'default', rowCount: 2, name: '5', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '6', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '7', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '8', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '9', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '10', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '11', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '12', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '13', 
        value: [],
    },
    {   pattern: 'onerow', status: 'default', rowCount: 1, name: '14', 
        value: [],
    },
    // {   pattern: 'onerow', status: 'default', rowCount: 1, name: '15', 
    //     value: [],
    // },
    // {   pattern: 'onerow', status: 'default', rowCount: 1, name: 'スポンサー', 
    //     value: [],
    // },
    // {pattern: 'multirows', status: 'hover', rowCount: 2},
])

const defaultRow = {   
    pattern: 'onerow', 
    status: 'new', 
    rowCount: 1, 
    name: '', 
    value: [],
}

const rowsInPage = ref(3);
const currentPage = ref(1);
const maxRow = ref(0);
const maxPage = ref(0);
const startIndex = ref(0);
const endIndex = ref(0);

const calBegin = () => {
    maxRow.value = tableBody.value.length
    maxPage.value = Math.ceil(maxRow.value / rowsInPage.value)
    startIndex.value = (currentPage.value - 1) * rowsInPage.value
    endIndex.value = startIndex.value + rowsInPage.value
    // console.log(tableBody.value)
    console.log(rowsInPage.value);
    console.log(currentPage.value);    
    console.log(maxPage.value);
    console.log(startIndex.value );
    // console.log(tableBodyRows.value)
}

onBeforeMount(() => {
    calBegin()
})

const setChange = (index: number, newVal: any) =>{
    tableBody.value[index] = newVal
}

const addNewRecord = () => {
    tableBody.value.push(defaultRow);
}

const deleteRecord = (index: number) => {
    tableBody.value.splice(index, 1);
}

const changePage = (index: number) => {
    currentPage.value = index;
    calBegin();
}

watch(tableBody, (newVal) => {
    console.log(newVal)
}, {deep: true})

// watch(tableBodyRows, (newVal) => {

// }, {deep: true})

</script>

<style scoped lang="scss">
@use '@/assets/base';
.table-container {
    /* Auto layout */
    @include base.columnFlex;
    gap: 12px;
    // width: 1112px;
    height: 100%;
    // overflow-x: hidden;
    overflow: hidden;
    // overflow-y: hidden; 
    /* Inside auto layout */

    @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
}
</style>