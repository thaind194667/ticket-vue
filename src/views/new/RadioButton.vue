<template>
    <!-- <div style="display: flex;"> -->
    <div style="display: flex;">
        <input type="radio"
        :name="name" 
        :id="value" :value="value"
        :checked="status === 'checked'"/>
        <label :for="value"> </label>
        <span class="checkbox-label" >{{value}}</span>
    </div>
        
            <!-- <div></div> -->
    <!-- </div> -->
    <!-- <div style="display: flex;"> -->
        <!-- <input type="checkbox"
        name="customerType" 
        id="法人" value="1"
        :checked="status === 'checked'"/>
        <label class="checkbox-round" for="法人">
        </label>
        <span class="checkbox-label" for="法人">法人</span> -->
            <!-- <div></div> -->
    <!-- </div>/ -->

    <!-- <input type="checkbox" 
    name="customerType" 
    id="法人" 
    :checked="status === 'checked'"/>
    <label class="checkbox-round" for="法人">
		<span class="checkbox-label">
			<span class="checked-label"></span>
		</span>
		<div>法人</div>
	</label> -->
</template>

<script setup lang="ts">
const props = defineProps({
	status: String,
    name: String,
    value: String,
});
</script>

<style lang="scss" scoped>
$radius: 23px;
$radiusInside: 17px;
span {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
    font-family: 'Hiragino Kaku Gothic ProN';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: #202529;
    // margin-right: 24px;
}
input {
    display: none;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ label:after {
        content: '';
        display: flex;
        position: relative;
        width: $radiusInside;
        height: $radiusInside;
        left: calc(($radius - $radiusInside) / 2);
        top: calc(($radius - $radiusInside) / 2);
        border-radius: 99px;
        background-color: #de2233;
    }
}
label {
	&:hover {
		cursor: pointer;
	}
    display: flex;
    position: relative;
    margin-right: 8px;
    border-radius: 99px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    // $radius: 24px;
    height: $radius;
    width: $radius;
    background-color: #ffffff;
    
}

</style>
