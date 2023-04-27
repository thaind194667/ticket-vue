<template>
	<label class="container"
		> {{ value }}
		<input type="checkbox" :checked="status === 'checked'"/>
		<span class="checkmark"></span>
	</label>
</template>

<script setup lang="ts">

const props = defineProps({
    status: String,
    value: String,
})

</script>

<style scoped lang="scss">
.container {
	display: flex;
    align-items: center;
	// position: relative;
    // width: 56px;
	// padding-left: 35px;
	// margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .checkmark {
            background-color: #DE2233;
        }
        &:checked ~ .checkmark:after {
            display: block;
        }
    }
    .checkmark {
        // display: block;
        position: absolute;
        // margin: 16px;
        // top: 0;
        // left: 0;
        left: 37.5px;
        height: 25px;
        width: 25px;
        background-color: #eee;
        &:after {
            content: '';
            position: absolute;
            display: none;
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
    &:hover input ~ .checkmark {
        background-color: #ccc;
    }
}
</style>
