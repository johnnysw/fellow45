import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 相当于 data
  state: {
    count: 0,
  },
  // 相当于methods
  mutations: {
    add() {
      this.state.count++;
    },
    addNum(state, num) {
      state.count += num;
    }
  },
  actions: {
  },
  modules: {
  }
})
