<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("./static/style.css");
	
	.product-detail {
		
		img{
			width: 100%;
			vertical-align: bottom;
			display: block;
		}
	}
</style>
