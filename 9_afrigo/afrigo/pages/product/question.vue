<template>
	<view>
		<uni-card :title="item.content" v-for="item in quesList" :key="item.ques_id">
			{{item.reply}}
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productId: -1,
				quesList: []
			}
		},
		onLoad(params) {
			this.productId = params.productId
			this.loadData();
		},
		methods: {
			loadData() {
				this.$get('/product/question', {
					data: {
						productId: this.productId
					}
				}).then(res => {
					let {state, questions} = res;
					if(state === 'success'){
						this.quesList = questions
					}
				});
			}
		}
	}
</script>

<style>

</style>
