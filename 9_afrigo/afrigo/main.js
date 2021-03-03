import Vue from 'vue'
import App from './App'
import i18n from './lang/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import utils from './common/utils/functions'

Vue.use(VueAxios, axios)

// mescroll-body：下拉刷新组件
// 注册全局组件，这个是mescroll-body官方推荐的方式，省去具体页面中引入和注册mescroll组件的代码
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
Vue.component('mescroll-body', MescrollBody)


Vue.config.productionTip = false

Vue.prototype._i18n = i18n; /*必须加上这句话，否则在真机中会不好使*/
Vue.prototype.$utils = utils;

App.mpType = 'app'


const app = new Vue({
	i18n,
    ...App
})
app.$mount()
