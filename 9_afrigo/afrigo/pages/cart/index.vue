<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			this.getCartList()
		},
		methods: {
			getCartList(){
				this.$get('/user/cart')
				.then(res => {
					console.log(res);
				});
			}
		}
	}
</script>

<style>

</style>
