<template>
	<div class="fieldwrap" v-if="status === 'default'">
		<textarea
			:class="`input-field ${status} ${type}`"
			:placeholder="placeholder"
			v-if="type === 'text long'"
			disabled
		>
            {{ inputValue + unit }}
        </textarea>

		<input
			v-else
			type="text"
			:class="`input-field ${status} ${type}`"
			:placeholder="placeholder"
			:value="inputValue + unit"
			disabled
		/>
	</div>
	<div class="fieldwrap" v-else>
		<div :class="`input-field ${status} ${type}`" v-if="type === 'text long'">
			<textarea :placeholder="placeholder" class="inside-text" v-model="inputValue"> </textarea>
			<div class="delete-text">
				<ButtonS pattern="noborder" showIcon="text-delete" @click="textDelete" />
			</div>
		</div>

		<input v-else :class="`input-field ${status} ${type}`" v-model="inputValue" :placeholder="placeholder" />
		{{ unit }}
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ButtonS from '@/components/ButtonS.vue';
import { moneyFormat } from '@/utility';
const props = defineProps({
	status: { type: String, required: true },
	value: { type: String, default: null, required: false },
	type: { type: String, required: true },
	icon: { type: String },
	unit: { type: String, default: '' },
	placeholder: { type: String, default: '備考' },
});

const inputValue = ref<string>(props.value);

const textDelete = () => {
	inputValue.value = '';
};

onMounted(() => {
	if (props.unit === '円') inputValue.value = moneyFormat(props.value);
});
</script>

<style scoped lang="scss">
@use '@/assets/base';

.fieldwrap {
	$padding: 16px;
	padding: $padding;
	@include base.rowFlex();
	height: calc(100% - 2 * $padding);
	.input-field {
		@include base.rowFlex($justifyContent: auto);
		align-items: flex-start;
		font-family: 'Hiragino Kaku Gothic ProN';
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 18px;
		padding: 7px 8px;
		border-radius: 4px;
		background: none;
		border: none;
		word-break: break-word;
		white-space: initial;
		margin: 0;
		margin-right: 8px;
		.inside-text {
			flex-grow: 1;
			order: 0;
		}
		.delete-text {
			order: 1;
			flex-grow: 0;
			align-self: center;
		}
		&.number {
			width: 32px;
			&.medium {
				width: 56px;
			}
			&.big {
				width: 80px;
			}
		}
		&.text {
			@include base.textOverflow();
			&.short {
				width: 120px;
			}
			&.long {
				width: 320px;
				height: calc(100% - 16px);
				textarea {
					height: 100%;
					resize: none;
					padding: 0;
					border: none;
					overflow: auto;
					outline: none;
					// -webkit-box-shadow: none;
					// -moz-box-shadow: none;
					// box-shadow: none;
					&:focus {
						border: none;
					}
				}
			}
		}

		&.edit {
			background-color: white;
			border: 1px solid rgba(0, 0, 0, 0.1);
		}

		&.new {
			background-color: white;
			border: 1px solid rgba(0, 0, 0, 0.1);
			color: #87898b;
		}
	}
}

textarea {
	line-height: 18px;

	resize: none;
	padding: 0;
	border: none;
	overflow: hidden;
	outline: none;

	// -webkit-box-shadow: none;
	// -moz-box-shadow: none;
	// box-shadow: none;
	font-family: 'Hiragino Kaku Gothic ProN';
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
}
</style>
