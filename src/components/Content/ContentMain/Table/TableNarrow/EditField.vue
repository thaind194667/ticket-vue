<template>
    <div class="fieldwrap" v-if="status === 'default'">
        <div :class="`input-field ${status} ${type}`">
            {{ value ? value : placehoder + unit }}
        </div>
    </div>
    <div class="fieldwrap" v-else>
        <div :class="`input-field ${status} ${type}`" 
            :contentEditable="status !== 'default'"
            :placeholder="placehoder">
            {{ value ? value : placehoder }}
        </div>
        <!-- <div :class="'field' + status" v-else>
            {{ value }}

            <SvgIcon :name="icon + status" v-if="icon" />
        </div> -->
        {{ unit }}
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps({
    status: { type: String, required: true },
    value: { default: '-' },
    type: { type: String, required: true },
    icon: { type: String },
    unit: { type: String, default: '' },
    placehoder: { type: String, default: '-' }
})

const inputValue = ref('');
</script>

<style scoped lang="scss">
@use '@/assets/base';

.fieldwrap {
    padding: 16px;
    @include base.rowFlex();
    height: calc(100% - 32px);
    .input-field {
        height: 100%;
        padding: 7px 8px;
        border-radius: 4px;
        background: none;
        // border: 1px solid rgba(0, 0, 0, 0.1);
        margin-right: 8px;

        &.number {
            height: auto;
            width: 48px;
            // padding-right: 20px;

            &.big {
                // padding-right: 40px;
            }
        }

        &.text {
            font-family: 'Hiragino Kaku Gothic ProN';
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 18px;

            &.short {
                width: 120px;
                height: auto;
                // box-sizing: border-box;
            }

            &.long {
                width: 320px;
                // height: calc(100% - 32px);
                // box-sizing: border-box;
            }
        }

        &.edit {
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.1);
            // margin-right: 6px;
        }

        &.new {
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: #87898B;
        }

        // &.default {
        //     margin: 0;
        //     // width: 0;
        //     // width:fit-content;
        // }


    }

}

// [contentEditable="true"]:empty:not(:focus):before {
//     content: attr(data-placeholder);
// }

// [contentEditable="true"]:empty:focus:before {
//     content: " ";
// }
</style>