import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 相当于 data
  state: {
    count: 0,
    num: 10
  },
  // 相当于 computed
  getters: {
    result(state) {
      return state.count * state.num;
    }
  },
  // 相当于methods,用来处理同步方法
  mutations: {
    add() {
      this.state.count++;
    },
    // 当方法需要传参数的时候第一个参数因为对应的事 state，所以必须写 state 占个位置，不然的话，会把实际传的参数识别成 state，导致参数不能正确的传过来
    addNum(state1, num) {
      state1.count += num;
    },
    reduce(state) {
      state.count--;
    }
  },
  // 处理异步的方法
  actions: {
    reduceFun() {
      setTimeout(() => {
        this.commit('reduce');
      }, 1000);
    }
  },
  modules: {
  }
})
