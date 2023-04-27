<template>
	<button type="button" :class="[value, pattern, isRound ? 'round' : '']" :disabled="status === 'inactive'">
		<div v-if="textBefore">{{ value }}</div>

		<SvgIcon :name="`${showIcon}${status}`" v-if="showIcon" />
		<SvgIcon name="leftArrow" v-if="leftArrow" />
		<SvgIcon name="rightArrow" v-if="rightArrow" />

		<div v-if="!textBefore">{{ value }}</div>
	</button>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
const props = defineProps({
	pattern: { type: String, required: true },
	status: { type: String, default: '' },
	showIcon: { type: String, default: '' },
	value: { type: String },
	isRound: { type: Boolean, default: false },
	rightArrow: { type: Boolean, default: false },
	leftArrow: { type: Boolean, default: false },
	textBefore: { type: Boolean, default: true },
});

// if(pattern )
</script>

<style scoped lang="scss">
@use '@/assets/base';

button {
	@include base.rowFlex($padding: 4px 8px);
	// gap: 8px;
	border-radius: 4px;
	font-family: 'Hiragino Kaku Gothic ProN';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	margin: 0;
	background: none;
	@include base.autoLayout($order: 0, $grow: 0);
	&:hover {
		cursor: pointer;
	}
	&:disabled {
		opacity: 0.6;
		&:hover {
			cursor: auto;
		}
	}
	div {
		padding: 0;
	}
}
.round {
	border-radius: 99px;
}
.red {
	width: 160px;
	padding: 8px;
	background: #de2233;
	color: #ffffff;
	border: none;
	@include base.autoLayout($order: 0, $grow: 0);

	&:hover {
		color: #de2233;
		background: #ffffff;
		border: solid 1px #de2233;
	}
}
.line {
	box-sizing: border-box;
	gap: 9px;
	padding: 8px 12px;
	background: #ffffff;
	color: #202529;
	border: 1px solid #b0b1b2;
	@include base.autoLayout($order: 1, $grow: 0);
}

.long {
	padding: 8px 39px;
}
.grey {
	box-sizing: border-box;
	@include base.rowFlex($padding: 5px 8px);
	gap: 4px;
	background: #f2f2f2;
	border: 1px solid rgba(0, 0, 0, 0.1);
	font-family: 'Hiragino Kaku Gothic ProN';
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	text-align: center;
	color: #3f454a;
	&:hover {
		color: #f2f2f2;
		background-color: rgba(0, 0, 0, 0.6);
	}

	&.back {
		padding: 8px;
	}
}

.black {
	padding: 8px 27px;
	height: 32px;
	// gap: 4px;
	font-family: 'Hiragino Kaku Gothic ProN';
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	text-align: center;
	background: #202529;
	color: #ffffff;
	&:hover {
		color: #202529;
		background: #ffffff;
		border-color: #202529;
	}
	&.newbtn {
		padding: 8px 66px;
	}
	&.settingbtn {
		padding: 8px 46px;
	}
	&.short {
		padding: 8px 14px;
	}
}

.header {
	display: inline-block;
	padding: 1px 4px 0px;
	background: #f2f2f2;
	border-radius: 2px;
	border: none;
	font-family: 'Hiragino Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 10px;
	line-height: 15px;
	color: #de2233;
	&:hover {
		cursor: auto;
	}
}

.row-btn {
	display: inline-block;
	border: none;
	background: none;
	padding: 0px;
	margin: 0;
}

.minus,
.plus {
	display: inline-block;
	padding: 0;
	border: none;
}
.noborder {
	border: none;
	padding: 0;
	margin: 0;
}
</style>
