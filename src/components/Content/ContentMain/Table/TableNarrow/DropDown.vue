<template>
    <div :class="`dropdown ${type} ${status}`">
        <div :class="`text ${status}`"> {{ value }} </div>
        <div class="button">
            <ButtonS 
            v-if="status !== 'default'" 
            pattern="noborder" 
            showIcon="dropdown" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ButtonS from '@/components/ButtonS.vue';

const props = defineProps({
    status: String,
    value: String,
    type: String
})

const open = ref(true);
</script>

<style scoped lang="scss">
@use '@/assets/base';
* {
    
}
.dropdown {
    background-color: white;

    &.new {
        color: #87898B;
    }

    &.default {
        background: none;
    }

    &:not(.default) {
        &:hover {
            cursor: pointer;
        }
    }

    border-radius: 4px;
    @include base.rowFlex($padding: 0px, $justifyContent: auto);
    // gap: 6px;

    &.long {
        width: 128px;
        height: 38px;
    }

    &.short {
        width: 80px;
        height: 38px;
    }

    
    .text {
        // display: inline;
        padding-left: 8px;
        @include base.autoLayout($order: 0, $grow: 1, $align: auto);
        font-family: 'Hiragino Kaku Gothic ProN';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
        // align-self: stretch;
        // width: 100%;
        max-width: calc(100% - 34px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .button {
        // @include base.autoLayout($order: 1, $grow: 1, $align: auto);
        display: block;
        padding: 8px;
        // float: right;
        max-width: 24px;
    }
}

</style>