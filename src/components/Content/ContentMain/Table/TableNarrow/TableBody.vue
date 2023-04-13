<template>
    <tr v-for="count in row.rowCount" :class="row.status">

        <td v-if="count === 1" class="action edit" :rowspan="row.rowCount">
            <ButtonS class="row-btn" :pattern="row.status" showIcon="edit" v-if="row.status === 'default'"
                @click="setEdit" />
            <ButtonS class="row-btn" :pattern="row.status" showIcon="save" v-else @click="setSave" />
        </td>

        <td v-if="count === 1" class="action delete" :rowspan="row.rowCount">
            <ButtonS class="row-btn" :pattern="row.status" showIcon="delete"
                :status="row.status === 'new' ? 'inactive' : ''" />
        </td>

        <td v-if="count === 1" class="name" :rowspan="row.rowCount">
            <input type="text" placeholder="カテゴリ名" :class="row.status === 'new' ? 'new' : ''" v-model="row.name"
                :disabled="row.status === 'default'" />
        </td>

        <td v-if="count === 1" :rowspan="row.rowCount">
            <div class="customer-setting">
                <ButtonS class="customer-choose" pattern="black" v-if="row.status !== 'default'" value="設定" />
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

        <td v-if="count === 1" class="discount" :rowspan="row.rowCount">
            <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">99</span>%
            <!-- <input 
            type="number" 
            min="0" 
            max="99" 
            placeholder="-" 
            :disabled="row.status === 'default'"
            value="99" />  -->
        </td>

        <td>
            <div class="ticketType hasDropBox">
                <div class="modify-btn" v-if="row.status !== 'default'">
                    <ButtonS pattern="minus" showIcon="minus" :status="row.pattern === 'onerow' ? 'inactive' : ''"
                        @click="minusRow" />

                    <ButtonS pattern="plus" showIcon="plus" @click="plusRow" />
                </div>
                <DropDown :class="'dropdown' + row.status" class="selectTicketType" value="観戦券" :status="row.status">
                </DropDown>
                <!-- <div class="selectTicketType">
                    <div> 観戦券 &emsp;&emsp;</div>
                    <div>
                        <ButtonS 
                        v-if="row.status !== 'default'" 
                        pattern="noborder" 
                        :showIcon="row.status !== 'default' ? 'dropdown' : ''" />
                        
                    </div>
                </div> -->
            </div>
        </td>

        <td>
            <div class="seatType hasDropBox">
                <DropDown :class="'dropdown' + row.status" class="selectSeatType" value="ゲスト観戦券" :status="row.status">

                </DropDown>
            </div>
        </td>
        <td>
            <div class="seatClass hasDropBox">
                <DropDown :class="'dropdown' + row.status" class="selectSeatClass" value="大人" :status="row.status">

                </DropDown>
            </div>
        </td>
        <td>
            <div class="storageMedia hasDropBox">
                <DropDown :class="'dropdown' + row.status" class="selectStorageMedia" value="電子" :status="row.status">

                </DropDown>
            </div>
        </td>
        <td class="discountedPrice">6,600円</td>

        <td class="adjustedPrice">
            <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">6000</span>円
        </td>

        <td class="publicFee">
            <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">6000</span>円
        </td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>

        <td class="purchaseLimit">
            <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">6000</span>枚
        </td>

        <td v-if="count === 1" :rowspan="row.rowCount" class="ticketSetting">
            <ButtonS pattern="black" value="設定"></ButtonS>
        </td>
        <td v-if="count === 1" :rowspan="row.rowCount" class="note">
            <div :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">aaa
            </div>
        </td>
    </tr>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
import DropDown from './DropDown.vue';
import { ref } from 'vue'

const props = defineProps({
    myRow: { type: Object, required: true },
    index: Number
})

const emit = defineEmits(['change'])

const row = ref({ ...props.myRow });

const selectTicketType = ref(false);
const selectTicketSeat = ref(false);

// const setSelectTicketType = () => {
//     selectTicketType.value = !selectTicketType.value
// } 

// const setSelectTicketSeat = () => {
//     selectTicketSeat.value = !selectTicketSeat.value
// }

const setEdit = () => {
    row.value.status = 'edit'
    emit('change', props.index, row.value)
}

const setSave = () => {
    row.value.status = 'default'
    emit('change', props.index, row.value)
}

const plusRow = () => {
    row.value.rowCount++;
    if (row.value.rowCount > 1) row.value.pattern = 'multirows'
    emit('change', props.index, row.value)
}

const minusRow = () => {
    row.value.rowCount--;
    if (row.value.rowCount === 1) row.value.pattern = 'onerow'
    emit('change', props.index, row.value)
}

</script>

<style scoped lang="scss">
@use '@/assets/base';

td {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 12px;
    height: auto;

    // display: table-cell;
    // align: center;
    &.action {
        border: none;

        &.edit {

            padding-left: 16px;
        }

        &.delete {

            padding-right: 16px;
        }
    }

    &.name {
        gap: 4px;
        // width: 136px;
        // height: 32px;
        border-radius: 4px;
    }

    .customer-setting {
        // position: fixed    ;
        @include base.rowFlex($justifyContent: auto);
        // margin: auto;
        // justify-content: center;
        // text-align: center;
        width: 27vw;
        padding: 8px;
        // height: auto;
        // vertical-align: center;
        // padding: 12px;
        gap: 8px;
        overflow: hidden;
        text-overflow: ellipsis;

        .customer-choose {
            // @include base.autoLayout($order: 0, $grow: 0);
            margin: 8px;
            margin-right: 2px;
        }

        .customer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            // @include base.autoLayout($order: 1, $grow: 0);
            .customer-info {
                display: flex;
                flex-direction: row;
                gap: 8px;
            }

            .note-option {
                color: #727578;
            }
        }
    }

    &.discountedPrice {
        box-sizing: border-box;

        /* Auto layout */

        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        padding: 0px 16px;
        gap: 8px;

        // width: 112px;
        // height: 64px;

        /* mono/#000000 10% */

        // border-right: 1px solid rgba(0, 0, 0, 0.1);

        /* Inside auto layout */

        flex: none;
        order: 4;
        align-self: stretch;
        flex-grow: 0;
    }

    &.note {
        div {
            padding: 20px;
        }
    }
}

.hasDropBox {
    
    @include base.rowFlex($padding: 0px 8px, $justifyContent: auto);
    gap: 8px;
    @include base.autoLayout($order: 1, $grow: 1, $align: stretch);
}

.ticketType {
    // @include base.rowFlex($justifyContent: auto);
    // border: none;
    // box-sizing: border-box;
    // @include base.autoLayout($order: 0, $grow: 0, $align: stretch);

    .modify-btn {
        @include base.rowFlex();
        gap: 8px;
        @include base.autoLayout($order: 0, $grow: 0);
        margin-right: 16px;
    }
}

.seatType {
    // @include base.rowFlex($padding: 0px 8px, $justifyContent: auto);
    // gap: 8px;
    // @include base.autoLayout($order: 1, $grow: 1, $align: stretch);
}

.seatClass {
    // @include base.rowFlex($padding: 0px 8px, $justifyContent: auto);
    // gap: 8px;
    // @include base.autoLayout($order: 1, $grow: 1, $align: stretch);
}

input {
    padding: 8px;
    border: none;
    color: black;

    &:disabled {
        background: none;
    }
}

.dropdownnew {
    color: #87898B;
    background-color: white;
}

.dropdownedit {
    background-color: white;
}
span {
    padding: 8px;
    padding-right: 20px;
    display: inline-block;
}
.number-input {
    &edit {
        background-color: white;
        display: inline-block;
    }
}
</style>