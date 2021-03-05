<template>
	<view class="app">
		<view class="setting" @click="toSetting">Settings</view>
	</view>
</template>

<script>
	export default {
		onShow(){
			this._i18n.setTabbar();
		},
		methods: {
			toSetting(){
				uni.navigateTo({
					url: '/pages/account/setting'
				})
			}
		}
	}
</script>
	
<style>
</style>
