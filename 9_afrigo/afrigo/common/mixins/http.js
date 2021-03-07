import api from '../config/api.config.js'
import utils from '../utils/functions.js'

export default {
	methods: {
		$request(options) {
			options.url = api.BASE_URL + options.url;
			
			options.header = {
				Authorization: uni.getStorageSync("afrigo-token")
			}
			
			return new Promise((resolve, reject) => {
				
				options.complete = (response) => {
					if(response.statusCode === 200){
						resolve(response.data);
						
						/* let {status} == response.data;
						if(status === 10002){
							alert('库存不够');
						} */
					}else if(response.statusCode === 400){
						alert('参数有错误，请检查后再试');
					}else if(response.statusCode === 401){
						alert('请先登录');
						uni.redirectTo({
							url: '/pages/account/signin'
						})
					}else{
						reject(response)
					}
				}
				
				uni.request(options);
			});
		},
		$post(url, options) {
			options = utils.deepMerge({
				method: 'post',
				url
			}, options);
			
			return this.$request(options);
		},
		$get(url, options) {
			options = utils.deepMerge({
				method: 'get',
				url
			}, options);
			return this.$request(options);
		}
	}
}
