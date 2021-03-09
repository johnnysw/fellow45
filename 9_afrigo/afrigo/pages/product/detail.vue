<template>
	<view class="app">
		<view class="header"></view>
		<view class="banner">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="item in imgList" :key="item.img_id">
					<!-- <view class="swiper-item uni-bg-red">A</view> -->
					<image class="prod-img" :src="item.pic_url" mode="aspectFit"></image>
				</swiper-item>
				
			</swiper>
		</view>
		<view class="product-info">
			<text class="title">{{prodInfo.title}}</text>
			<view class="price-sales">
				<text class="price">{{prodInfo.original_price}}</text>
				<text class="sales">{{prodInfo.sales}}</text>
			</view>
		</view>
		<view class="product-params"></view>
		<view class="product-qa" @click="toQuestion">
			<text class="afrigo-icon icon-question"></text>
			<text class="title">Q&A</text>
			<text class="afrigo-icon icon-right-arrow"></text>
		</view>
		<view class="product-feedback"></view>
		<view class="product-detail" v-html="prodInfo.detail">
			
		</view>
		<view class="footer"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
				productId: -1,
				imgList: [],
				prodInfo: {}
			}
		},
		onLoad(params){
			this.productId = params.productId
			this.loadProductData();
		},
		methods: {
			loadProductData(){
				this.$get('/product/detail', {
					data: {
						productId: this.productId
					}
				}).then(res => {
					let {state, imgList, product} = res;
					if(state === 'success'){
						this.imgList = imgList;
						this.prodInfo = product;
					}
				});
			},
			toQuestion(){
				uni.navigateTo({
					url: '/pages/product/question?productId='+this.productId
				})
			}
		}
	}
</script>

<style lang="scss">
	.app{
		background-color: #F8F8F8;
	}
	.swiper{			
		height: 750rpx;
		
		.prod-img{
			width: 100%;
			height: 750rpx;
		}
	}
	
	.product-info{
		background: #fff;
		padding: 24rpx;
		display: flex;
		flex-direction: column;
		
		.price-sales{
			display: flex;
			justify-content: space-between;
		}
	}
	
	.product-qa{
		margin: 10rpx 0;
		padding: 24rpx;
		display: flex;
		align-items: center;
		background: #fff;
		
		.icon-question, .icon-right-arrow{
			width: 32rpx;
			height: 32rpx;
		}
		
		.icon-question:before{
			font-size: 36rpx;
		}
		
		.title{
			flex: 1;
			margin: 0 24rpx;
		}
		
		
	}
	
	
</style>
