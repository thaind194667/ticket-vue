<template>
	<div class="page-header">
		<div class="menu-fold">
			<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5.79297 9.80099L2.4082 5.30099C2.34329 5.21444 2.30859 5.10913 2.30859 5.00094C2.30859 4.89276 2.34329 4.78744 2.4082 4.70089L5.79297 0.200892C5.83237 0.148364 5.88295 0.104219 5.93945 0.0707654C5.99595 0.0373116 6.05805 0.015354 6.12305 0.00606813C6.18805 -0.00321773 6.2528 0.000270383 6.31641 0.0165662C6.38001 0.032862 6.44161 0.0616423 6.49414 0.101039L7.30078 0.707972C7.40512 0.788801 7.47352 0.907152 7.49219 1.03781C7.51085 1.16846 7.47792 1.30111 7.40039 1.40792L4.70117 4.99606L7.40039 8.58395C7.44134 8.63676 7.47111 8.69735 7.48828 8.76193C7.50546 8.82651 7.5093 8.89375 7.5 8.95993C7.49158 9.02455 7.4703 9.08696 7.4375 9.14328C7.4047 9.1996 7.36064 9.24883 7.30859 9.28805L6.50195 9.89498C6.41579 9.96062 6.31144 9.99565 6.20312 9.99484C6.1245 9.99695 6.04568 9.98069 5.97461 9.94699C5.90354 9.91328 5.84108 9.86322 5.79297 9.80099Z"
					fill="white"
					fill-opacity="0.7"
				/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.5 1C0.223858 1 0 1.22386 0 1.5V2.5C0 2.77614 0.223858 3 0.5 3H15.5C15.7761 3 16 2.77614 16 2.5V1.5C16 1.22386 15.7761 1 15.5 1H0.5Z"
					fill="white"
					fill-opacity="0.7"
				/>
				<path
					d="M0.5 7C0.223858 7 0 7.22386 0 7.5V8.5C0 8.77614 0.223858 9 0.5 9H15.5C15.7761 9 16 8.77614 16 8.5V7.5C16 7.22386 15.7761 7 15.5 7H0.5Z"
					fill="white"
					fill-opacity="0.7"
				/>
				<path
					d="M0.5 13C0.223858 13 0 13.2239 0 13.5V14.5C0 14.7761 0.223858 15 0.5 15H9.5C9.77614 15 10 14.7761 10 14.5V13.5C10 13.2239 9.77614 13 9.5 13H0.5Z"
					fill="white"
					fill-opacity="0.7"
				/>
			</svg>
		</div>

		<div class="user-info">
			<div class="user-avatar">
				<img src="" alt="avatar" />
			</div>
			<div class="user-name">User 9876t345679</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import {ref} from 'vue'
// const showMenu = ref(false);
</script>

<style scoped lang="scss">
@use '@/assets/base';
.page-header {
	@include base.rowFlex($padding: 12px, $justifyContent: space-between);
	gap: 8px;
	border-radius: 0 10px 0 0;
	// width: 100%;
	background: #de2233;
	@include base.autoLayout($order: 0, $grow: 0, $align: stretch);
	.menu-fold {
		@include base.rowFlex($padding: 10px 8px, $justifyContent: center);
		gap: 4px;
		border-radius: 8px;
		@include base.autoLayout($order: 0, $grow: 0);
	}

	.user-info {
		@include base.rowFlex();
		gap: 16px;
		// width: 202px;
		// height: 32px;
		@include base.autoLayout($order: 2, $grow: 0);
		.user-avatar {
			width: 32px;
			height: 32px;
			background: #ffffff;
			border-radius: 99px;
			@include base.autoLayout($order: 0, $grow: 0);
		}

		.user-name {
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			line-height: 21px;
			color: #ffffff;
			@include base.autoLayout($order: 1, $grow: 0);
		}
	}
}
</style>
