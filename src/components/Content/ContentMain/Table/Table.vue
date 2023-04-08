<template>
    
    <div class="table-container">
        <AboveTable />
        <TableNarrow />
    </div>
</template>

<script setup lang="ts">
import AboveTable from './AboveTable/AboveTable.vue';
import TableNarrow from './TableNarrow/TableNarrow.vue';
</script>

<style scoped lang="scss">
@use '@/assets/base';
.table-container {
    /* Auto layout */
    @include base.columnFlex;
    gap: 12px;
    // width: 1112px;
    // height: 644px;
    overflow-x: scroll;
    /* Inside auto layout */

    @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
}
</style>