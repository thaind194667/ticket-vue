<template>
    <tr v-for="count in row.rowCount" :class="row.status" :key="`row${count}`">

        <td v-if="count === 1" class="action edit" :rowspan="row.rowCount">
            <ButtonS class="row-btn" :pattern="row.status" showIcon="edit" v-if="row.status === 'default'"
                @click="setEdit" />
            <ButtonS class="row-btn" :pattern="row.status" showIcon="save" v-else @click="setSave" />
        </td>

        <td v-if="count === 1" class="action delete" :rowspan="row.rowCount">
            <ButtonS class="row-btn" :pattern="row.status" showIcon="delete"
                :status="row.status === 'new' ? 'inactive' : ''" @click="deleteRow" />
        </td>

        <td v-if="count === 1" class="name" :rowspan="row.rowCount">
            <EditField 
            :status="row.status" 
            type="text short" 
            placehoder="カテゴリ名" 
            :value="row.name" />
            <!-- <input type="text" placeholder="カテゴリ名" :class="row.status === 'new' ? 'new' : ''" v-model="row.name"
                :disabled="row.status === 'default'" /> -->
        </td>

        <td v-if="count === 1" :rowspan="row.rowCount">
            <div class="customer-setting">
                <RouterLink to="/targetCustomer">
                    <ButtonS class="customer-choose" :pattern="`black ${row.status === 'new' ? 'newbtn' : ''}`"
                        v-if="row.status !== 'default'" value="設定" />
                </RouterLink>
                <div class="customer" v-if="row.status !== 'new'">
                    <div class="customer-info">
                        {{
                            mergeText('個人以外',
                                'A, B, CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
                        }}
                    </div>
                    <div class="note-option">
                        後日請求あり
                    </div>
                </div>
            </div>
        </td>

        <td v-if="count === 1" class="discount" :rowspan="row.rowCount">
            <EditField type="number" :status="row.status" unit="%" value="99" />
            <!-- <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">99</span>% -->
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
                        @click="minusMiniRow" />

                    <ButtonS pattern="plus" showIcon="plus" @click="plusMiniRow" />
                </div>
                <DropDown :class="'dropdown' + row.status" class="selectTicketType" value="観戦券" :status="row.status"
                    type="long">
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

        <td class="seatType">
            <div class="hasDropBox">
                <DropDown :class="'dropdown' + row.status" class="selectSeatType" value="ゲスト観戦券" :status="row.status"
                    type="long" />
            </div>
        </td>

        <td class="seatClass">
            <div class="hasDropBox">
                <DropDown :class="'dropdown' + row.status" class="selectSeatClass" value="大人" :status="row.status"
                    type="short" />
            </div>
        </td>

        <td class="storageMedia">
            <div class="hasDropBox">
                <DropDown :class="'dropdown' + row.status" class="selectStorageMedia" value="電子" :status="row.status"
                    type="short" />
            </div>
        </td>

        <td class="discountedPrice">6,600円</td>

        <td class="adjustedPrice">
            <EditField type="number big" :status="row.status" value="3000" unit="円" />
            <!-- <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">6000</span>円 -->
        </td>

        <td class="publicFee">
            <EditField type="number big" :status="row.status" value="110" unit="円" />
            <!-- <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">6000</span>円 -->
        </td>

        <td>
            <div class="publicPeriod">
                <DateChoose :status="row.status" /> ~
                <DateChoose :status="row.status" />
                <label class="checkbox-round" v-if="row.status !== 'default'">
                    <input type="checkbox" name="public" id="public" />
                    <span class="checkbox-label" for="public"></span>
                    非公開
                </label>
            </div>
        </td>

        <td>
            <div class="salePeriod">
                <DateChoose :status="row.status" /> ~
                <DateChoose :status="row.status" />
            </div>
        </td>

        <td class="electricTicketPublicDate">
            <DateChoose :status="row.status" />
        </td>

        <td class="purchaseLimit">
            <EditField type="number medium" :status="row.status" value="3000" unit="枚" />
            <!-- <span :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">6000</span>枚 -->
        </td>

        <td v-if="count === 1" :rowspan="row.rowCount" class="lotterySetting">
            <ButtonS pattern="black settingbtn" value="設定" v-if="row.status !== 'default'"></ButtonS>
            <div v-else>観戦券グループA</div>
        </td>

        <td v-if="count === 1" :rowspan="row.rowCount" class="note">

            <EditField :status="row.status" type="text long" />
            <!-- <div :class="'number-input'+row.status" role="textbox" :contenteditable="row.status === 'edit'">aaa
            </div> -->
        </td>
        

    </tr>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';
import DropDown from './DropDown.vue';
import EditField from './EditField.vue';
import DateChoose from './DateChoose.vue';
import { ref, watch, type PropType } from 'vue'
import { mergeText } from '@/utility';

type TableBody = {
    pattern: string,
    status: string,
    rowCount: number,
    name: string,
    value: Array<Object>,
}

const props = defineProps({
    myRow: { type: Object as PropType<TableBody>, required: true },
    index: { type: Number }
})

const emit = defineEmits(['change', 'deleteRow'])

const row = ref({ ...props.myRow });

const setEdit = () => {
    row.value.status = 'edit'
    emit('change', props.index, row.value)
}

const setSave = () => {
    row.value.status = 'default'
    emit('change', props.index, row.value)
}

const deleteRow = () => {
    emit('deleteRow', props.index)
}

const plusMiniRow = () => {
    row.value.rowCount++;
    if (row.value.rowCount > 1) row.value.pattern = 'multirows'
    emit('change', props.index, row.value)
}

const minusMiniRow = () => {
    row.value.rowCount--;
    if (row.value.rowCount === 1) row.value.pattern = 'onerow'
    emit('change', props.index, row.value)
}

watch(() => props.myRow, () => {
    console.log(props.myRow);
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

    // display: table-cell;
    // align: center;
    &.action {
        // display: flex;
        // flex-direction: row;
        // font-size: 0;
        border: none;
        padding: 13px 16px;
        $gap : 3px;
        // gap: 8px;

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
            // gap: 8xp;
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