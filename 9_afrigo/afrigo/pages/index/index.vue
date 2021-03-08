<template>
	<view class="app">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" :top="headerHeight" @down="downCallback" @up="loadProductData"
		 :up="upOption">
			<view class="product-list">
				<view class="product-box" v-for="item in productList" :key="item.prod_id" @click="getProductDetail(item)">
					<image :src="item.main_pic" mode=""></image>
					<view class="product-info">
						<text class="product-title">{{item.title}}</text>
						<text class="product-price">{{item.group_price}}</text>
						<text class="prduct-sales">{{item.sales}}</text>
					</view>
				</view>
			</view>
		</mescroll-body>
	</view>
</template>

<script>
	import mescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import pageMixin from "../mixins/page.js";

	export default {
		mixins: [mescrollMixin, pageMixin],
		data() {
			return {
				headerHeight: 0,
				productList: []
			}
		},
		onLoad() {
			console.log(this);
		},
		methods: {
			async loadProductData(page) {
				this.page = page; //此处必须要这么写
				this.productList = await this.loadData('http://localhost:3000/product/getProducts');
				
			},
			getProductDetail(product){
				uni.navigateTo({
					url: '/pages/product/detail?productId='+product.prod_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.app{
		background: #F8F8F8;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.product-list{
		padding: 24rpx;
	}
	
	.product-box{
		background: #fff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 24rpx;
		
		image{
			width: 150px;
			height: 150px;
		}
		
		.product-info{
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: 24rpx;
		}
		
		
	}
</style>
