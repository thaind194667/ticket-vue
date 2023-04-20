<template>
    <div class="contents-main">
        <Search :search-res="searchRes" />
        <TableContent :table-data="tableData"/>
    </div>
</template>

<script setup lang="ts">
import Search from './Search/Search.vue';
import TableContent from './Table/TableContent.vue';
import data from '@/data.json'
import { ref, onBeforeMount, reactive } from 'vue';
import { dateFormat, dateFormatDayOFWeek } from '@/utility';

type ResultPattern = {
    IdRace: number,
    NmRace: string,
    YmdOpenStart: string,
    YmdOpenEnd: string,
}

const tableData = reactive(data.ListCategoriesSetting.CategoriesSettings)
const searchRes = reactive<ResultPattern>({
    IdRace: data.IdRace,
    NmRace: data.NmRace,
    YmdOpenStart: dateFormatDayOFWeek(data.YmdOpenStart),
    YmdOpenEnd: dateFormatDayOFWeek(data.YmdOpenEnd),
});

onBeforeMount(() => {
    console.log(data);
    // console.log( dateFormatDayOFWeek(data.YmdOpenStart) )
    console.log('records ' + data.ListCategoriesSetting.CntRecords)
    // console.log('setting ' + JSON.stringify(data.ListCategoriesSetting.CategoriesSettings) );
    // let cateSetting = data.ListCategoriesSetting.CategoriesSettings
    // console.table(cateSetting);
    // console.log(tableData)
    
})

</script>

<style scoped lang="scss">
@use '@/assets/base';
.contents-main {
    /* contents_main */
    /* Auto layout */
    @include base.columnFlex;
    gap: 24px;
    height: 100%;
    // width: 1112px;
    // height: 858px;
    /* Inside auto layout */
    @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
}

</style>