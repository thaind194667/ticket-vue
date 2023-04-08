<template>
    <div class="contents">
        <Title />
        <ContentMain />
    </div>
</template>

<script setup lang="ts">
import Title from './Title/Title.vue'
import ContentMain from './ContentMain/ContentMain.vue';

</script>

<style scoped lang="scss">
@use '@/assets/base';
.contents {
    /* contents */
    /* Auto layout */
    @include base.columnFlex($padding: 16px 24px);
    gap: 12px;

    // width: 1160px;
    // height: 960px;
    overflow: scroll;

    /* mono/#EDEDED */

    background: #EDEDED;

    /* Inside auto layout */

    @include base.autoLayout($order: 1, $grow: 1, $align: stretch);

    &::-webkit-scrollbar {
    display: none;
  }
}
</style>