<template>
    <div >
        <div> {{ value }} </div>
        <div>
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
    value: String
})

const open = ref(true);
</script>

<style scoped lang="scss">
@use '@/assets/base';
* {
    border-radius: 4px;
    @include base.rowFlex($padding: 8px, $justifyContent: auto);
    gap: 4px;
    @include base.autoLayout($order: 0, $grow: 1, $align: stretch);
    // background-color: white;
    &:hover {
        cursor: pointer;
    }
}
</style>