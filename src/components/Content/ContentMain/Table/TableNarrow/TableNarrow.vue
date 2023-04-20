<template>
    <div class="table-narrow">
        <table cellpadding="0" cellspacing="0">
            <colgroup span="2"></colgroup>  
            <col>
            <col>
            <col>
            <colgroup span="11"></colgroup>
            <col>
            <col>
            <thead >
                <tr>
                    <th :id="obj.key" 
                        v-for="obj of tableHead" 
                        :key="obj.key" 
                        :rowspan="obj.rowspan || 2" 
                        :colspan="obj.colspan"
                        class="primary-th"
                        >
                        <template v-if="obj.value"> 
                            <div>{{ obj.value}}  </div>
                            <div class="require-header" v-if="obj.require">
                                必須
                            </div>
                        </template>
                    </th>
                </tr>
                <tr >
                    <th 
                        scope="col" 
                        v-for="obj of belowHeaderRow" 
                        :key="obj.key" 
                        class="secondary-th"
                        :id="obj.key" >

                        <div>{{ obj.value}}  </div>
                        <div class="require-header" v-if="obj.require">
                            必須
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody v-for="(row, index) in tableBodyRows" :key="row.pattern + row.name + row.status"  :class="row.pattern + ' bodyRow ' + row.status"> 
                <TableRow 
                :myRow="row" 
                :index="index" 
                @change="setChange" 
                @deleteRow="deleteRow"
                />
            </tbody>

            <tr></tr>

        </table>
    </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import TableRow from './TableRow.vue';

const emit = defineEmits(['change', 'deleteRow'])

type TableHead = {
    key: string, 
    value:  string,
    require: boolean,
    rowspan?: number,
    colspan?: number,
}

type TableBody = {
    pattern: string, 
    status: string, 
    rowCount: number, 
    name: string, 
    value: Array<Object>,
}

const props = defineProps({
    tableHead: Array<TableHead>,
    belowHeaderRow: Array<TableHead>,
    tableBody: {type: Array<TableBody>, required: true},
    startIndex: {type: Number, required: true},
    endIndex: {type: Number, required: true},
})

const tableBodyRows = ref<TableBody[]>([]);
tableBodyRows.value = props.tableBody.slice(props.startIndex, props.endIndex)


const setChange = (index: number, newVal: any) =>{
    emit('change', index + props.startIndex, newVal)
}

const deleteRow = (index: number) => {
    emit('deleteRow', index + props.startIndex)
}

watch(() => props.startIndex, () => {
    tableBodyRows.value = props.tableBody.slice(props.startIndex, props.endIndex)
    // console.log(props.tableBody);
    // force
}, {deep: true})

watch(() => props.tableBody, () => {
    tableBodyRows.value = props.tableBody.slice(props.startIndex, props.endIndex)

}, {deep: true})



</script>

<style lang="scss" scoped>
@use '@/assets/base';

.table-narrow {
    display: inline-block;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-radius: 8px 8px 0px 0px;
}

table, td, tr {
    height: 100%;
}

table {
    white-space: nowrap;
    border-radius: 8px;
    background: #FFFFFF; /* mono/#FFFFFF */
    border-style: hidden;
    border-collapse: collapse;
    // border-spacing: 0;
    // cellpadding : 0; cellspacing : 0
}

thead {
    min-height: 32px;
    max-height: 64px;
    background: #FFFFFF;  /* mono/#FFFFFF */
    color: black;
    border-bottom: solid 2px #DE2233;
    
    /* mono/#87898B */
    color: #87898B;
    th {
        vertical-align: middle;
        gap: 8px;
        font-family: 'Hiragino Kaku Gothic ProN';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
            padding: 6px 16px;
        &.primary-th {
            min-height: 32px;
            max-height: 64px;
        }
        &.secondary-th {
            // padding: 6px 16px;
            max-height: 32px;
        }
        div {
            display: inline-block;
        }
    }
    th {
        &:not(#note, #edit) {
            // padding: 8px;
            border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
        &#queueSetting {
            border-bottom: solid 1px;
        }
        // &#edit, &#delete {
        //     // padding: 0;
        // }
        .require-header {
            display: inline-block;
            padding: 1px 4px 0px;
            // @include base.rowFlex($padding: 1px 4px 0px);
            background: #F2F2F2;
            border-radius: 2px;
            border: none;
            font-family: 'Hiragino Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 10px;
            line-height: 15px;
            /* identical to box height */
            /* red/main */
            color: #DE2233;
        }
    }
}

tbody {

    border: 1px solid rgba(0, 0, 0, 0.2);
    &.default {
        background-color: #FFFFFF;
    }

    &.new, &.edit {
        background-color: #F2F2F2;
    }

    &:hover {
        background-color:  #FCE8EA;
    }
    
}
</style>