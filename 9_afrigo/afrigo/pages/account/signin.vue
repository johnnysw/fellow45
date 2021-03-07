<template>
	<view class="app">
		<view class="header">
			<text class="afrigo-icon icon-close"></text>
		</view>
		<view class="content">
			<view class="title">{{$t('index.welcome')}}</view>
			<view class="body">
				<uni-forms ref="form">
					<uni-forms-item label="手机">
						<input type="text" v-model="tel" placeholder="请输入手机" />
					</uni-forms-item>
	
					<uni-forms-item label="密码">
						<input type="password" v-model="pass" placeholder="请输入密码" />
					</uni-forms-item>
				</uni-forms>
			</view>
			<view class="footer">
				<button type="default" @click="doSignin">SIGN IN</button>
			</view>
		</view>
	</view>
</template>

<script>
	// import request from '@/common/utils/request.js'
	
	export default {
		data(){
			return {
				tel: '',
				pass: ''
			}
		},
		onLoad(){
		},
		methods: {
			doSignin(){
				/* this.$request({
					url: '/user/signin',
					data: {
						
					}
				}); */
				this.$post('/user/signin', {
					data: {
						tel: this.tel,
						pass: this.pass
					}
				}).then(res => {
					let {state, token} = res;
					if(state == 'success'){
						uni.setStorageSync('afrigo-token', token);
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				});
				
				
				/* uni.request({
					method: 'post',
					url: 'http://localhost:3000/user/signin',
					data: {
						tel: this.tel,
						pass: this.pass
					}
				}).then(res => {
					let {state, token} = res[1].data;
					if(state == 'success'){
						// localStorage.setItem('uni-token', token)
						uni.setStorageSync('uni-token', token);
						uni.navigateTo({
							url: '/pages/index/index'
						})
					}
				}); */
			}
		}
	}
</script>

<style lang="scss">
	.app {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.header {
		height: 88rpx;
		position: relative;

		.icon-close {
			position: absolute;
			left: 20rpx;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 40rpx;
	}
</style>
