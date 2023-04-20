<template>
    <div class="search">
        <div class="search-header">
            <div class="search-header-title">
                <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.57301 1.66668L6.83967 3.00001H12.333V9.66668H8.17567L7.90901 8.33334H1.66634V1.66668H6.57301ZM7.39301 0.333344H0.666341C0.577936 0.333344 0.493151 0.368462 0.430639 0.430975C0.368127 0.493487 0.333008 0.578271 0.333008 0.666677V13.3333C0.333008 13.4217 0.368127 13.5065 0.430639 13.569C0.493151 13.6316 0.577936 13.6667 0.666341 13.6667H1.33301C1.42141 13.6667 1.5062 13.6316 1.56871 13.569C1.63122 13.5065 1.66634 13.4217 1.66634 13.3333V9.66668H6.81567L7.02901 10.7333C7.04438 10.8086 7.08529 10.8763 7.14481 10.9249C7.20434 10.9735 7.27883 11 7.35567 11H13.333C13.4214 11 13.5062 10.9649 13.5687 10.9024C13.6312 10.8399 13.6663 10.7551 13.6663 10.6667V2.00001C13.6663 1.9116 13.6312 1.82682 13.5687 1.76431C13.5062 1.7018 13.4214 1.66668 13.333 1.66668H7.93301L7.71967 0.60001C7.70431 0.524719 7.6634 0.45705 7.60387 0.408456C7.54434 0.359862 7.46985 0.333328 7.39301 0.333344Z" fill="#202529"/>
                        <path d="M10.9993 9.89715V9.66668H9.66602V8.33334H8.33268V7.00001H7.63867L7.37174 5.66668H8.33268V7.00001H9.66602V8.33334H10.9993V9.66668H12.3327V9.89715H10.9993ZM8.33268 9.89715V9.66668H8.17122L7.9056 8.33334H8.33398V9.66668H9.66732V9.89715H8.33268ZM10.9993 8.33334V6.99936L9.66602 7.00001V5.66603L8.33268 5.66668V4.33269H7.10482L6.99805 3.8034V3.00327H8.33138V4.3366H9.66471V5.66993H10.998V7.00327H12.3314V8.3366L10.9993 8.33334ZM10.9993 5.66603V4.33269H9.66602V2.99936H10.9993V4.33269H12.3327V5.66603H10.9993Z" fill="#202529"/>
                        <path d="M7.9069 8.33335H6.99935V7.00002H7.64258L7.9095 8.33335H7.9069ZM5.66602 8.33335H4.33268V7.00002H5.66602V8.33335ZM2.99935 8.33335H1.66602V7.00002H2.99935V8.33335ZM6.99935 7.00002H5.66602V5.66669H6.99935V7.00002ZM4.33268 7.00002H2.99935V5.66669H4.33268V7.00002ZM5.66602 5.66669H4.33268V4.33335H5.66602V5.66669ZM2.99935 5.66669H1.66602V4.33335H2.99935V5.66669ZM7.37695 5.66669H6.99935V4.33335H7.11003L7.37695 5.66669ZM6.99935 4.33335H5.66602V3.00002H6.83919L6.99805 3.78322V4.33466L6.99935 4.33335ZM4.33268 4.33335H2.99935V3.00002H4.33268V4.33335ZM5.66602 3.00002H4.33268V1.66669H5.66602V3.00002ZM2.99935 3.00002H1.66602V1.66669H2.99935V3.00002Z" fill="#202529"/>
                    </svg>
                </div>
                <div>   レース情報  </div>
            </div>

            <div class="search-fold" @click="foldSearch">
                <svg id="search-fold-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.62176 1.74699C4.66991 1.69443 4.72848 1.65246 4.79372 1.62374C4.85897 1.59503 4.92948 1.5802 5.00076 1.5802C5.07205 1.5802 5.14255 1.59503 5.2078 1.62374C5.27305 1.65246 5.33161 1.69443 5.37976 1.74699L9.86476 6.63999C9.93207 6.71355 9.97654 6.80509 9.99274 6.90347C10.0089 7.00185 9.99618 7.10282 9.95601 7.19407C9.91584 7.28533 9.85 7.36293 9.7665 7.41742C9.68301 7.47192 9.58547 7.50095 9.48576 7.50099L0.515761 7.50099C0.416056 7.50095 0.318514 7.47192 0.23502 7.41742C0.151525 7.36293 0.0856826 7.28533 0.0455135 7.19407C0.00534434 7.10282 -0.00741692 7.00185 0.00878443 6.90347C0.0249858 6.80509 0.0694503 6.71354 0.136761 6.63999L4.62176 1.74699Z" fill="#DE2233"/>
                </svg>
            </div>
        </div>
        
        <div class="search-container" v-show="open">
            <div class="search-info">
                <div class="search-id">
                    <div class="input-title">
                        レースID    
                    </div>
                    <div class="input-text">
                        <input type="text" name="raceID" placeholder="12345678" v-model="result.IdRace"/>
                    </div>
                </div>

                <div class="search-name">
                    <div class="input-title">
                        レース名
                    </div>
                    <div class="input-text">
                        <input type="text" name="raceName" placeholder="SUPER GT" v-model="result.NmRace"/>
                    </div>
                </div>
            </div>

            <div class="search-date">
                <div class="input-title">
                    開催期間
                </div>
                <div class="date-input">
                        <input type="text" name="fromDate" :placeholder="defaultDate" v-model="result.YmdOpenStart"/>
                     ~
                        <input type="text" name="toDate" :placeholder="defaultDate" v-model="result.YmdOpenEnd"/>
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

import {ref, type PropType} from 'vue';
import {dateFormatDayOFWeek} from '@/utility'
type ResultPattern = {
    IdRace: number,
    NmRace: string,
    YmdOpenStart: string,
    YmdOpenEnd: string,
}
const props = defineProps({
    searchRes: {type: Object as PropType<ResultPattern>, required: true},
})

const raceID = ref('');
const raceName = ref('');
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土']
// const d = new Date();
// const dateFormat = (date: Date) => {
//     return date.toLocaleDateString("ja-JP") + `(${dayOfWeek[date.getDay()]})`
// }
const defaultDate = dateFormatDayOFWeek("04/13/2023")
const fromDate = ref()
const toDate = ref()
const open = ref(true);

const result = ref({...props.searchRes})

const foldSearch = () => {
    open.value = !open.value;
    var icon = document.getElementById('search-fold-icon');
    icon!.style.transform = open.value ? '': "scale(-1)";
}

</script>

<style scoped lang="scss">
@use '@/assets/base';
input[type="text"] {
    border: none;
    font-family: 'Gothic';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */
    /* mono/#000000 */
    color: #000000;
    &::placeholder {
        color: black;
        opacity: 1; /* Firefox */
    }
}
.input-title {
    /* input-title */
    /* Auto layout */
    @include base.rowFlex($justifyContent: none);
    gap: 6px;
    // width: 258px;
    // height: 20px;
    border-radius: 4px;
    /* Inside auto layout */
    @include base.autoLayout($order: 0, $grow: 0, $align: stretch);
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #87898B;
}

.search {
    /* search */
    /* Auto layout */
    @include base.columnFlex($padding: 10px 16px);
    gap: 8px;
    isolation: isolate;
    // width: 1112px;
    // height: 104px;
    /* mono/#FFFFFF */
    background: #FFFFFF;
    /* Content_shadow */
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    /* Inside auto layout */
    @include base.autoLayout($order: 0, $grow: 0, $align: stretch);
    .search-header {
        /* search-header */
        /* Auto layout */
        @include base.rowFlex($justifyContent: space-between);
        gap: 8px;
        // width: 1080px;
        // height: 24px;
        /* Inside auto layout */
        @include base.autoLayout($order: 0, $grow: 0, $align: stretch);
        z-index: 0;
        .search-header-title {
            /* 検索条件 */
            // width: 79px;
            // height: 24px;
            /* 16 b */
            @include base.rowFlex;
            gap: 8px;

            font-family: 'Hiragino Kaku Gothic ProN';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height */
            /* mono/#202529 */
            color: #202529;
            
            /* Inside auto layout */
            @include base.autoLayout($order: 0, $grow: 0);
        }

        .search-fold {
            &:hover {
                cursor: pointer;
            }
        }
    }

    .search-container {
        /* search-container */
        /* Auto layout */
        @include base.rowFlex;
        gap: 16px;
        // width: 1080px;
        // height: 52px;
        /* Inside auto layout */
        @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
        z-index: 1;

        .search-info {
            /* search-info */
            /* Auto layout */
            @include base.rowFlex;
            gap: 16px;
            // width: 532px;
            // height: 52px;
            /* Inside auto layout */
            @include base.autoLayout($order: 0, $grow: 1);
            .search-id, .search-name {
                /* Auto layout */
                @include base.columnFlex;
                // width: 258px;
                // height: 52px;
                /* Inside auto layout */
                @include base.autoLayout($order: 0, $grow: 1);
                .input-text {
                    /* input-text */
                    /* Auto layout */
                    @include base.columnFlex;
                    gap: 4px;
                    // width: 258px;
                    // height: 32px;
                    border-radius: 4px;
                    /* Inside auto layout */
                    @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
                }
            }
        }

        .search-date {
            /* Auto layout */
            @include base.columnFlex;
            // width: 532px;
            // height: 52px;
            /* Inside auto layout */
            @include base.autoLayout($order: 1, $grow: 1);
            .date-input {
                /* Auto layout */
                @include base.rowFlex($justifyContent: none);
                gap: 12px;
                // width: 532px;
                // height: 32px;
                /* Inside auto layout */
                @include base.autoLayout($order: 1, $grow: 0, $align: stretch);
            }
        }

    }
}
</style>