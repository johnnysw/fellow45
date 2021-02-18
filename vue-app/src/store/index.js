import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
  },
  mutations: {
=======
    curMenu: {
      name: '剧集',
      bgColor: '#ff0000'
    }
  },
  mutations: {
    setCurMenu(state, menu) {
      state.curMenu = menu;
    }
>>>>>>> 99a7f0e8cd769d47ed77fd80b50851b8f11a88b9
  },
  actions: {
  },
  modules: {
  }
})
