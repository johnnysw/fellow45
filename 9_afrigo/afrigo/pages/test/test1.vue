<template>
	<view>
		<view>
			{{name}}
		</view>
		<view>
			{{random}}
		</view>
		<view>
			<button type="default" @click="clickMe">点我</button>
		</view>
	</view>
</template>

<script>
	import testMixin from './test-mixin.js'
	export default {
		mixins: [testMixin]
	}
</script>

<style>

</style>
