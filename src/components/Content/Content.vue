<template>
    <div class="contents">
        <Title />
        <ContentMain />
    </div>
    <!-- <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.79297 10.301L2.4082 5.80099C2.34329 5.71444 2.30859 5.60913 2.30859 5.50094C2.30859 5.39276 2.34329 5.28744 2.4082 5.20089L5.79297 0.700892C5.83237 0.648364 5.88295 0.604219 5.93945 0.570765C5.99595 0.537312 6.05805 0.515354 6.12305 0.506068C6.18805 0.496782 6.2528 0.50027 6.31641 0.516566C6.38001 0.532862 6.44161 0.561642 6.49414 0.601039L7.30078 1.20797C7.40512 1.2888 7.47352 1.40715 7.49219 1.53781C7.51085 1.66846 7.47792 1.80111 7.40039 1.90792L4.70117 5.49606L7.40039 9.08395C7.44134 9.13676 7.47111 9.19735 7.48828 9.26193C7.50546 9.32651 7.5093 9.39375 7.5 9.45993C7.49158 9.52455 7.4703 9.58696 7.4375 9.64328C7.4047 9.6996 7.36064 9.74883 7.30859 9.78805L6.50195 10.395C6.41579 10.4606 6.31144 10.4957 6.20312 10.4948C6.1245 10.497 6.04568 10.4807 5.97461 10.447C5.90354 10.4133 5.84108 10.3632 5.79297 10.301Z"
        fill="#3F454A"/>
    </svg> -->

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
    min-height: calc(100vh - 60px - 32px);
    overflow: hidden;

    /* mono/#EDEDED */
    background: #EDEDED;

    /* Inside auto layout */

    @include base.autoLayout($order: 1, $grow: 1, $align: stretch);

    &::-webkit-scrollbar {
    display: none;
  }
}
</style>