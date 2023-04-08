<template>
    <div class="contents-main">
        <Search />
        <Table />
    </div>
</template>

<script setup lang="ts">
import Search from './Search/Search.vue';
import Table from './Table/Table.vue';
</script>

<style scoped lang="scss">
@use '@/assets/base';
.contents-main {
    /* contents_main */
    /* Auto layout */
    @include base.columnFlex;
    gap: 24px;
    // width: 1112px;
    // height: 858px;
    /* Inside auto layout */
    @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
}

</style>