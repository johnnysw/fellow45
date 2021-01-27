import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入样式重置文件和 rem 计算文件
import './assets/css/reset.css'
import './assets/js/rem.js'

// 引入第三方库
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
