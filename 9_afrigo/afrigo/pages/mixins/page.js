/**
	分页的相关操作，依赖：mescroll
*/
export default {
	data() {
		return {
			dataList: [],
			page: ''
		}
	},
	computed: { //在vue的生命周期内，computed中的数据是在data之后的，因为i18n是mixin到computed中，所以必须在这里通过this.i18n拿到
		upOption() {
			return {
				auto: false, // 是否自动加载
				textLoading:this.$t('index.loading.title'),
				empty: {
					tip:this.$t('index.mescroll.empty')
				},
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 5 // 每页数据的数量
				},
				noMoreSize: 1
			}
		}
	},
	methods: {
		/**
		 * @param {Object} url 请求数据地址
		 * @param {Object} options 请求数据时的参数
		 */
		loadData(url, options) {
			let defaultSetting = {
				url,
				data: {
					pageNum: this.page.num,
					pageSize: 5
				}
			};

			options = this.$utils.deepMerge(defaultSetting, options); //合并参数

			return uni.request(options)
				.then(res => {
					try {
						let {
							list: currPageData = [],
							totalPage
						} = res[1].data;

						let currPageLen = currPageData.length;
						// 请求成功,隐藏加载状态
						this.mescroll.endByPage(currPageLen, totalPage);

						//设置列表数据
						if (this.page.num === 1) this.dataList = []; //如果是第一页需手动置空列表
						this.dataList = this.dataList.concat(currPageData); //追加新数据
					} catch (err) {
						console.log(err)
					}
					return this.dataList;
				})
				.catch(err => err);
		}
	}
}
