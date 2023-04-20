<template>
    <div class="fieldwrap" v-if="status === 'default'">
        <textarea :class="`input-field ${status} ${type}`"
            :placeholder="placehoder"
            v-if="type === 'text long'"
            disabled
        >

            {{ value + unit }}
        </textarea>

        <input v-else
            type="text"
            :class="`input-field ${status} ${type}`" 
            :placeholder="placehoder" 
            :value="value + unit" 
            disabled
        />
    </div>
    <div class="fieldwrap" v-else>
        <div 
            :class="`input-field ${status} ${type}`"
            v-if="type === 'text long'"
        >
            <textarea
                :placeholder="placehoder" 
                class="inside-text"
                v-model="inputValue"
            >
            </textarea>
            <div  class="delete-text">
                <ButtonS 
                    pattern="noborder" 
                    showIcon="text-delete" 
                    @click="textDelete"
                />
            </div>
            <!-- </div> -->
        </div>

        <input v-else
            :class="`input-field ${status} ${type}`" 
            v-model="inputValue"
            :placeholder="placehoder"
        />
        {{ unit }}
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ButtonS from '@/components/ButtonS.vue';
const props = defineProps({
    status: { type: String, required: true },
    value: {type: String, default: null, required: false },
    type: { type: String, required: true },
    icon: { type: String },
    unit: { type: String, default: '' },
    placehoder: { type: String, default: '備考' }
})

const inputValue = ref(props.value);

const textDelete = () => {
    inputValue.value = ''
}

const setInputValue = (value: string) => {
    inputValue.value = value;
}
</script>

<style scoped lang="scss">
@use '@/assets/base';

.fieldwrap {
    $padding: 16px;
    padding: $padding;
    @include base.rowFlex();
    height: calc(100% - 2 * $padding);
    .input-field {
        @include base.rowFlex($justifyContent: auto);
        align-items: flex-start;
            // align-self: flex-start;
        font-family: 'Hiragino Kaku Gothic ProN';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
        padding: 7px 8px;
        border-radius: 4px;
        background: none;
        border: none;
        word-break: break-word;
        white-space: initial;
        // border: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0;
        margin-right: 8px;
        @include base.textOverflow();

        .inside-text {
            flex-grow: 1;
            order: 0;
        }

        .delete-text {
            order: 1;
            flex-grow: 0;
            align-self: center;
        }

        &.number {
            width: 32px;
            &.medium {
                width: 56px;
            }
            &.big {
                width: 80px;
            }   
        }

        &.text {
            &.short {
                width: 120px;
            }
            &.long {
                width: 320px;
                // text-overflow: ellipsis;
                height: calc(100% - 16px);
                textarea {
                    height: 100%;
                    resize: none;
                    // margin: 0;
                    padding: 0;
                    border: none;
                    overflow: auto;
                    outline: none;

                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;

                    resize: none; /*remove the resize handle on the bottom right*/
                    &:focus {
                        border: none;
                    }
                }
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

    }

}

textarea {
    // vertical-align: middle;
    // display: block;
    // margin: auto;
    line-height: 18px;
    
    resize: none;
    // margin: 0;
    padding: 0;
    border: none;
    overflow: hidden;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    // overflow: hidden;
    // text-overflow: ellipsis;
}
</style>