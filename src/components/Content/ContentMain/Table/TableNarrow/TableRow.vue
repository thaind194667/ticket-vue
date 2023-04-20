<template>
    <tr v-for="count in rowCount" 
    :class="`table-row ${row.status}`" 
    :key="`row${count}`"
    >
        <td v-if="count === 1" class="action edit" 
        :rowspan="rowCount"
        >
            <ButtonS v-if="row.status === 'default'"
            class="row-btn" 
            :pattern="row.status" 
            showIcon="edit" 
            @click="setEdit" 
            />
            <ButtonS v-else 
            class="row-btn" 
            :pattern="row.status" 
            showIcon="save"  
            @click="setSave" 
            />
        </td>

        <td v-if="count === 1" class="action delete" 
        :rowspan="rowCount"
        >
            <ButtonS class="row-btn" 
            :pattern="row.status" 
            :showIcon="`delete${row.status === 'new' ? 'inactive' : ''}`"
            :status="row.status === 'new' ? 'inactive' : ''" 
            @click="deleteRow" 
            />
        </td>

        <td v-if="count === 1" class="name" 
        :rowspan="rowCount"
        >
            <EditField 
            :status="row.status" 
            type="text short" 
            placehoder="カテゴリ名" 
            :value="row.NmCategory" 
            />
        </td>

        <td v-if="count === 1" :rowspan="rowCount">
            <div class="customer-setting">
                <RouterLink to="/targetCustomer">
                    <ButtonS v-if="row.status !== 'default'"
                    class="customer-choose" 
                    :pattern="`black ${row.status === 'new' ? 'newbtn' : ''}`"
                    value="設定" 
                    />
                </RouterLink>
                <div v-if="row.status !== 'new'" class="customer" >
                    <div class="customer-info">
                        {{
                            mergeText(row.FlgCustomer ? '個人' : '個人以外', customerNames)
                        }}
                    </div>
                    <div class="note-option" v-if="row.FlgPayAfter">
                        後日請求あり
                    </div>
                </div>
            </div>
        </td>

        <td v-if="count === 1" class="sale-rate" 
        :rowspan="rowCount"
        >
            <EditField type="number" 
            :status="row.status" 
            unit="%" 
            :value="row.SaleRate.toString()" />
        </td>

        <td>
            <div class="ticketType hasDropBox">
                <div v-if="row.status !== 'default'"
                class="modify-btn"
                >
                    <ButtonS 
                    pattern="minus" 
                    showIcon="minus" 
                    :status="rowCount === 1 ? 'inactive' : ''"
                    @click="minusMiniRow(count)" 
                    />

                    <ButtonS 
                    pattern="plus" 
                    showIcon="plus" 
                    @click="plusMiniRow" 
                    />
                </div>
                <DropDown type="long"
                :class="`dropdown selectTicketType ${row.status}`" 
                :value="row.TicketSettingInformations[count - 1].NmTypeTicket" 
                :status="row.status"
                >
                </DropDown>
            </div>
        </td>

        <td class="seatType">
            <div class="hasDropBox">
                <DropDown type="long" 
                :class="`dropdown selectSeatType ${row.status}`"
                :value="row.TicketSettingInformations[count - 1].TypeSeats[0].NmTypeSeat" 
                :status="row.status"
                />
            </div>
        </td>

        <td class="seatClass">
            <div class="hasDropBox">
                <DropDown type="short"
                :class="`dropdown selectSeatClass ${row.status}`"
                :value="row.TicketSettingInformations[count - 1].TypeSeats[0].FlgInvitationTicket ? '子供': '大人'" 
                :status="row.status"
                />
            </div>
        </td>

        <td class="storageMedia">
            <div class="hasDropBox">
                <DropDown type="short"
                :class="`dropdown selectStorageMedia ${row.status}`" 
                :value="getSellSetting(count - 1).NmMedia" 
                :status="row.status"
                />
            </div>
        </td>

        <td class="discountedPrice">6,600円</td>

        <td class="adjustedPrice">
            <EditField type="number big" 
            :status="row.status"             
            :value="getSellSetting(count - 1).AdjustedPrice.toString()" 
            unit="円" 
            />
        </td>

        <td class="publicFee">
            <EditField type="number big" 
            :status="row.status" 
            :value="getSellSetting(count - 1).Price.toString()" 
            unit="円" 
            />
        </td>

        <td>
            <div class="publicPeriod">
                <DateChoose :status="row.status" 
                :value="dateFormat(getSellSetting(count - 1).DtPublicStart)"
                /> ~
                <DateChoose :status="row.status" 
                :value="dateFormat(getSellSetting(count - 1).DtPublicEnd)"
                />
                <label v-if="row.status !== 'default'"
                class="checkbox-round" 
                >
                    <input type="checkbox" name="public" id="public" />
                    <span class="checkbox-label" for="public"></span>
                    非公開
                </label>
            </div>
        </td>

        <td>
            <div class="salePeriod">
                <DateChoose :status="row.status" 
                :value="dateFormat(getSellSetting(count - 1).DtSellStart)"
                /> ~
                <DateChoose :status="row.status" 
                :value="dateFormat(getSellSetting(count - 1).DtSellEnd)"
                />
            </div>
        </td>

        <td class="electricTicketPublicDate">
            <DateChoose 
            :status="row.status" 
            :value="dateFormat(getSellSetting(count - 1).DtGenerateElectricTicket)"
            />
        </td>

        <td class="purchaseLimit">
            <EditField type="number medium" 
            :status="row.status" 
            :value="getSellSetting(count - 1).CntMaxAtOnce.toString()" 
            unit="枚" />
            <!-- <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">6000</span>枚 -->
        </td>

        <td v-if="count === 1" 
        :rowspan="rowCount" 
        class="lotterySetting">
            <ButtonS v-if="row.status !== 'default'"
            pattern="black settingbtn" 
            value="設定" 
            />
            <div v-else>観戦券グループA</div>
        </td>

        <td v-if="count === 1" 
        :rowspan="rowCount" 
        class="note"
        >
            <EditField type="text long" :status="row.status "
            :value="row.TxtNote || '-'"
            />
        </td>
        
    </tr>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
import DropDown from './DropDown.vue';
import EditField from './EditField.vue';
import DateChoose from './DateChoose.vue';
import { ref, watch, type PropType, reactive, onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';
import { mergeText, dateFormat } from '@/utility';

type TableRow = {
    IdCategory: number,
    FlgCustomer: number,
    NmCategory: string,
    SaleRate: number,
    FlgPayAfter: number,
    TxtNote: string | null,
    CategoryCustomers: Array<any>,
    TicketSettingInformations: Array<any>,
    CategoryLotteryGroups: Array<any>,
    status: string
}

const defaultTicketSettingInformations = {
    IdTypeTicket: 0,
    NmTypeTicket: '',
    TypeSeats: [],
}

// type SellSettingType = {
//     IdCategory: number,
//     IdRaceTicketDetail:number,
//     IdTypeTicket:number,
//     IdTypeSeat:number,
//     NmTypeSeat: string,
//     NmTypeTicket:string,
//     CategorySeat:string | null,
//     AdjustedPrice:number,
//     GenerateFee:number,
//     DtSellStart:string,
//     DtSellEnd:string,
//     DtPublicStart:string,
//     DtPublicEnd:string,
//     DtGenerateElectricTicket:string,
//     FlgPublic:number,
//     CntMaxAtOnce:number,
//     Price:number,
//     FlgMedia:number,
//     NmMedia:string,
// }

const props = defineProps({
    myRow: { type: Object as PropType<TableRow>, required: true },
    index: { type: Number }
})

const emit = defineEmits(['change', 'deleteRow'])

const row = reactive<TableRow>(props.myRow);
const rowCount = ref<number>(0);
const customerNames = ref<string>('');
// const sellSetting = reactive<SellSettingType>

const getVal = () => {
    Object.assign(row, props.myRow)
    rowCount.value = row.TicketSettingInformations.length
    
    for(var i = 0; i < row.CategoryCustomers.length; i++) {
        if(i !== 0) customerNames.value += '、'
        customerNames.value += `${row.CategoryCustomers[i].NmCategoryCustomer}`
    }
}

const getSellSetting = (index: number) => {
    return row.TicketSettingInformations[index].TypeSeats[0].CategorySellSetting[0]
}

onBeforeMount(() => {
    getVal()
    console.log('create ' + rowCount.value);
})

// onMounted(() => {
//     console.log('mounted ' + rowCount.value);
    
// })

onBeforeUpdate(() => {
    getVal()
    console.log('create ' + rowCount.value);
})

onUpdated(() => {

    console.log('mounted ' + rowCount.value);
})

const setEdit = () => {
    row.status = 'edit'
    emit('change', props.index, row)
}

const setSave = () => {
    row.status = 'default'
    emit('change', props.index, row)
}

const deleteRow = () => {
    emit('deleteRow', props.index)
}

const plusMiniRow = () => {
    rowCount.value++;
    row.TicketSettingInformations.push(defaultTicketSettingInformations)
    emit('change', props.index, row)
}

const minusMiniRow = (index: number) => {
    console.log(index)
    
    rowCount.value--
    row.TicketSettingInformations.splice(index - 1, 1)
    emit('change', props.index, row)
}

watch(() => props.myRow, () => {
    console.log(props.myRow)
    getVal()
    console.log(rowCount.value)
    
    // row = props.myRow;
}, { deep: true })

watch(row, (newVal) => {
    emit('change', props.index, newVal)
}, { deep: true })

</script>

<style scoped lang="scss">
@use '@/assets/base';

tr {
    &.new {
        color: #87898B;
    }
}

td {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-spacing: 0;
    padding: 0px 8px;
    min-height: 64px;
    height: 100%;
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;

    &.discount,
    &.lotterySetting {
        padding: 0px 16px;
    }

    &.action {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 13px 16px;
        $gap : 3px;

        &.edit {
            padding-right: $gap;
        }

        &.delete {
            padding-left: $gap;
        }
    }

    .customer-setting {
        @include base.rowFlex($justifyContent: auto);
        padding: 0px 8px;

        width: 320px;
        // padding: 8px;

        .customer-choose {
            // margin: 4px;
            margin-right: 8px;
        }

        .customer {
            min-width: 0;

            .customer-info {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .note-option {
                color: #727578;
            }
        }
    }

    &.discountedPrice {
        box-sizing: border-box;

        /* Auto layout */

        padding: 0px 16px;
        gap: 8px;

        /* mono/#000000 10% */
        // border-right: 1px solid rgba(0, 0, 0, 0.1);
        /* Inside auto layout */
        flex: none;
        order: 4;
        align-self: stretch;
        flex-grow: 0;
    }

    .ticketType {
        padding: 0px 8px;

        .modify-btn {
            @include base.rowFlex();
            gap: 8px;
            @include base.autoLayout($order: 0, $grow: 0);
            margin-right: 16px;
        }
    }

    &.note {
        width: 336px;
    }

    .publicPeriod,
    .salePeriod {
        @include base.rowFlex($justifyContent: auto);
        gap: 4px;
    }
}

.hasDropBox {

    @include base.rowFlex($padding: 12px 0px, $justifyContent: auto);
    gap: 8px;
    @include base.autoLayout($order: 1, $grow: 1, $align: stretch);
}

.publicPeriod {
        display: flex;
        gap: 4px;
    .checkbox-round {
        &:hover {
            cursor: pointer;
        }
        display: flex;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            &:checked ~ span{
                background-color: grey;
            }
        }
        span{
            display: inline-block;
            position: relative;
            border: solid 1px;
            border-radius: 99px;
            top: 0;
            left: 0;
            height: 16px;
            width: 16px;
            background-color: #FFFFFF;
            margin-right: 8px;
        }
    }
}

</style>