<template>
<div class="ticketPurchaseBody">
    <PageHeader />
    <div class="contents">
        <Title title_name="チケット購入一覧" />
        <div class="contents-main">
            <div class="search-box">
                <SearchBox :search-res="searchRes"/>
            </div>
            <div class="table-content">
                <div class="above-table">
                    <ButtonS pattern="red" value="新規登録" @click="addNewRecord"/>
                    <ButtonS pattern="line long" value="B2データ出力"/>
                    <ButtonS pattern="line long" value="B2データ入力"/>
                    <ButtonS pattern="line" status="inactive" value="削除" />
                </div>
                <div class="table-narrow">
                    <table cellpadding="0" cellspacing="0">
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                        <!-- <TableHead :table-head="tableHead"/> -->
                        <thead>
                            <tr>
                                <th v-for="obj of tableHead" :key="obj.key" :id="obj.key">
                                    <CheckBox status="default" v-if="obj.key === 'checkbox'"/>
                                    <pre>{{ obj.value }}</pre>
                                </th>
                            </tr>
                            
                        </thead>
                        <tbody v-for="(row, index) in tableDataRows" :key="index" :class="`${row.Status}`">
                            <tr :class="`${index === tableDataRows.length - 1 ? 'last-row' : ''}`">
                                <td class="checkbox">
                                    <CheckBox @change="changeStatus(index)"
                                    :status="row.Status"/>
                                    <!-- <input type="checkbox" name="choose" /> -->
                                </td>
                                <td>
                                    <div>{{row.PurchaseID}}</div>
                                </td>
                                <td>{{ row.CustomerID }}</td>
                                <td>{{ row.CustomerName }}</td>
                                <td>{{ row.Category }}</td>
                                <td>{{ row.PurchasePeriod }}</td>
                                <td>{{ row.SaleMethod }}</td>
                                <td>{{ row.PaymentMethod }}</td>
                                <td class="payment-method"><p>{{ row.PaymentStatus }}</p></td>
                                <td>
                                    <!-- <div> -->
                                        <!-- <button style="margin: 0;">編集</button> -->
                                        <ButtonS pattern="black short" value="編集" />
                                    <!-- </div> -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- <div class="below-table"> -->
                <BelowTable
                    :empty="tableDataRows.length === 0"
                    :rows-in-page="rowsInPage"
                    :max-page="maxPage"
                    :current-page="currentPage"
                    :max-row="maxRow"
                    :start-index="startIndex + 1"
                    @changePage="changePage"
                />
                <!-- </div> -->
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue';
import Title from '@/components/Content/Title/Title.vue';
// import Search from '@/components/Content/ContentMain/Search/Search.vue';
import SearchBox from '@/views/new/SearchBox.vue'
import ButtonS from '@/components/ButtonS.vue';
import CheckBox from '@/views/Checkbox.vue'
// import TableHead from '@/components/Content/ContentMain/Table/TableNarrow/TableHead.vue'
import BelowTable from '@/components/Content/ContentMain/Table/BelowTable/BelowTable.vue';
import data from '@/data_modify.json';
import {reactive, ref, onMounted, watch} from 'vue'
import { dateFormatDayOFWeek, newDefaultTicketPurchaseRow, dateFormat } from '@/utility';

type ResultPattern = {
	IdRace: number;
	NmRace: string;
	YmdOpenStart: string;
	YmdOpenEnd: string;
};

type TableRowType = {
    PurchaseID: string,
    CustomerID: string,
    CustomerName: string,
    Category: string,
    PurchasePeriod: string,
    SaleMethod: number,
    PaymentMethod: number,
    PaymentStatus: number, 
    Status: string,
}

const searchRes = reactive<ResultPattern>({
	IdRace: data.IdRace,
	NmRace: data.NmRace,
	YmdOpenStart: dateFormatDayOFWeek(data.YmdOpenStart),
	YmdOpenEnd: dateFormatDayOFWeek(data.YmdOpenEnd),
});

const tableHead = [
    {key: "checkbox", value: ''},
    {key: "purchaseID", value: '購入ID'},
    {key: "customerID", value: '顧客ID'},
    {key: "customerName", value: '\xa0\u2003顧客名\u2003\xa0'},
    {key: "category", value: '\xa0カテゴリ'},
    {key: "purchasePeriod", value: '\xa0\u2003開催期間\u2003\xa0'},
    {key: "saleMethod", value: '販売方法'},
    {key: "paymentMethod", value: '支払方法'},
    {key: "paymentStatus", value: '支払\nステータス'},
    {key: "edit-btn", value: '編集'},
]

const tableData = ref<Array<TableRowType>>([])
const tableDataRows = ref<Array<TableRowType>>([]);

const rowsInPage = ref<number>(5);
const currentPage = ref<number>(1);
const maxRow = ref<number>(0);
const maxPage = ref<number>(0);
const startIndex = ref<number>(0);
const endIndex = ref<number>(0);

const calBegin = () => {
	maxRow.value = tableData.value.length;
	maxPage.value = Math.ceil(maxRow.value / rowsInPage.value);
	startIndex.value = (currentPage.value - 1) * rowsInPage.value;
	endIndex.value = startIndex.value + rowsInPage.value;
	tableDataRows.value = tableData.value.slice(startIndex.value, endIndex.value);
	if (!tableDataRows.value.length && currentPage.value !== 1) changePage(currentPage.value - 1);
	// console.log(rowsInPage.value);
	// console.log(currentPage.value);
	// console.log(maxPage.value);
	// console.log(startIndex.value );
	// console.log(tableBodyRows.value);
};

onMounted(() => {
    for (let i = 0; i < data.TicketPurchaseList.length; i++) {
		tableData.value[i] = { ...data.TicketPurchaseList[i], Status: 'checked' };
        tableData.value[i].PurchasePeriod = dateFormat(data.TicketPurchaseList[i].PurchasePeriod);
	}
	calBegin();
});

const setChange = (index: number, newVal: TableRowType) => {
	tableData.value[index + startIndex.value] = newVal;
};

const changeStatus = (index: number) => {
    var status = tableData.value[index + startIndex.value].Status
    if(status === 'default')
        tableData.value[index + startIndex.value].Status = 'checked'
    else tableData.value[index + startIndex.value].Status = 'default'
}

const addNewRecord = () => {
	tableData.value.push(newDefaultTicketPurchaseRow);
};

const changePage = (index: number) => {
	currentPage.value = index;
	calBegin();
};

watch(
	tableData,
	(newVal) => {
		calBegin();
	},
	{ deep: true },
);
</script>

<style lang="scss" scoped>
@use '@/assets/base';

input[type="checkbox"] {
    width: 24px;
    border: none;
    outline: none;
}
.ticketPurchaseBody {
    overflow: hidden;
    width: 100%;
    height: 100%;
    &::-webkit-scrollbar {
		display: none;
	}
}
.contents {
	@include base.columnFlex($padding: 16px 24px);
	gap: 12px;
	min-height: calc(100vh - 60px - 32px);
	overflow: hidden;
	background: #ededed;
	@include base.autoLayout($order: 1, $grow: 1, $align: stretch);
	&::-webkit-scrollbar {
		display: none;
	}
    .contents-main {
        @include base.columnFlex;
        gap: 24px;
        height: 100%;
        @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
        .search-box {
            @include base.columnFlex;
            @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
        }
        .table-content {
            @include base.columnFlex;
            gap: 12px;
	        height: 100%;
            @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
            .above-table {
                position: sticky;
                @include base.rowFlex($justifyContent: space-between);
                gap: 16px;
                @include base.autoLayout($order: 0, $grow: 0);
            }

            .table-narrow {
                display: inline-block;
		        width: 100%;
                .last-row {
                    border-bottom: none;
                }
                td {
                    white-space: pre-wrap;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-spacing: 0;
                    padding: 0;
                    margin: 0;
                    max-height: 64px;
                    height: 100%;
                    font-family: 'Hiragino Kaku Gothic ProN';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 21px;
                    padding: 16px;  
                    &.checkbox {
                        justify-items: center;
                        padding: 0;
                        width: 50px;
                    }
                }
            }
            table {
                white-space: nowrap;
                overflow: hidden;
                border-radius: 8px;
                background: #ffffff;
                border-style: hidden hidden hidden hidden;
                width: 100%;
                height: 100%;
                border-collapse: collapse;
                thead {
                    min-height: 32px;
                    max-height: 64px;
                    background: #ffffff; /* mono/#FFFFFF */
                    color: black;
                    border-bottom: solid 2px #de2233;
                    color: #87898b;
                    th {
                        vertical-align: middle;
                        gap: 8px;
                        font-family: 'Hiragino Kaku Gothic ProN';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        padding: 22px 26px;
                        div {
                            display: inline-block;
                        }
                        border-right: 1px solid rgba(0, 0, 0, 0.2);
                        pre {
                            margin: 0;
                            padding: 0;
                        }
                        // &#customerName {
                        //     padding: 22px 36px;
                        // }
                    }
                    
                }
                tbody {
                    p {
                        white-space: pre-wrap;
                        margin: 0;
                        padding: 0;
                    }
                    &.default {
                        background-color: #ffffff;
                    }
                    &.checked {
                        background-color: #d8d9d8;
                    }
                    &:hover {
                        background-color: #fce8ea;
                    }
                }
            }

        }
    }
    
}
</style>