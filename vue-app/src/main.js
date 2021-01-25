import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入样式重置文件和 rem 计算文件
import './assets/css/reset.css'
import './assets/js/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
