<template>
    <div class="below-table">
        <div class="pager">
            <ButtonS 
            pattern="grey"
            value="前へ"
            :is-round="true"
            :status="currentPage === 1 ? 'inactive' : ''"
            @click="changePage(currentPage - 1)"
            />

            <ButtonS 
            pattern="grey"
            :is-round="true"
            v-if="numList[0] !== 1"
            :value="(1).toString()"
            :status="1 === currentPage ? 'inactive' : ''"
            @click="changePage(1)"
            />

            <div 
            v-if="frontHas"
            > ... </div>

            <ButtonS 
            pattern="grey"
            :is-round="true"
            v-for="val in numList"
            :key="`page${val}`"
            :value="val.toString()"
            :status="val === currentPage ? 'inactive' : ''"
            @click="changePage(val)"
            />
            
            <div 
            v-if="backHas"
            > ... </div>

            <ButtonS 
            pattern="grey"
            :is-round="true"
            v-if="numList[numList.length - 1] !== maxPage"
            :value="(maxPage).toString()"
            :status="maxPage === currentPage ? 'inactive' : ''"
            @click="changePage(maxPage)"
            />

            <ButtonS 
            pattern="grey"
            :is-round="true"
            value="次へ"
            :status="currentPage === maxPage ? 'inactive' : ''"
            @click="changePage(currentPage + 1)"
            />

        </div>

        <div class="table-info">
            全 {{ maxRow }} 件中 {{ startIndex }} 件 〜 {{ startIndex + rowsInPage - 1 }} 件を表示
            <ButtonS 
            pattern="grey"
            :is-round="true"
            :value="`${rowsInPage}件表示`"
            show-icon="dropdown-below"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue';

import { onBeforeMount, ref, watch, onBeforeUpdate } from 'vue';

const emit = defineEmits(['changePage'])

const props = defineProps({
    // maxRowCount: {type: Number, required: true},
    // currentRow: {type: Number, required: true},
    maxRow: {type: Number, required: true},
    maxPage: {type: Number, required: true},
    currentPage: {type: Number, required: true},
    rowsInPage: {type: Number, required: true},
    startIndex: {type: Number, required: true},
})

const numList = ref<Array<any>>([])
const frontHas = ref(false)
const backHas = ref(false)
const getList = () => {
    const cur = props.currentPage;
    const max = props.maxPage;
    if(max <= 6) {
        for(var i = 1; i <= max; i++)
            numList.value.push(i);
        frontHas.value = backHas.value = false
    }
    else {
        if(cur <= 3)  {
            numList.value = [1, 2, 3, 4]
            frontHas.value = false
            backHas.value = true
        }
        else if(cur + 2 >= max) {
            numList.value = [max - 3, max - 2, max - 1, max]
            frontHas.value = true
            backHas.value = false
        }
        else {
            numList.value = [ cur - 1, cur, cur + 1 ]
            frontHas.value = backHas.value = true
        }
    }
    console.log(numList.value);
}

onBeforeMount(() => {
    getList()
})

onBeforeUpdate(() => {
    getList()
})

const changePage = (index: number) => {
    if(index !== props.currentPage){
        emit('changePage', index)
    }
}

</script>

<style lang="scss" scoped>
@use '@/assets/base';

.below-table {
    /* below table */
    @include base.rowFlex($justifyContent: space-between);
    gap: 8px;
    // width: 3226px;
    // height: 26px;
    /* Inside auto layout */
    @include base.autoLayout($order: 2, $grow: 0, $align: stretch);

    .pager {
        /* Auto layout */
        @include base.rowFlex();
        gap: 8px;
        /* Inside auto layout */
        @include base.autoLayout($order: 0, $grow: 0);
    }

    .table-info {
        /* Auto layout */

        @include base.rowFlex();
        gap: 8px;
        color: #727578;

        // width: 263px;
        // height: 26px;


        /* Inside auto layout */

        @include base.autoLayout($order: 1, $grow: 0);
    }
}
</style>