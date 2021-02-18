// components/mCom/mCom.js
Component({
  options: {
    styleIsolation: 'shared',
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // str:String,
    str: {
      type: String,
      value: '你没给我传，😒'
    },
  },
  lifetimes: {
    attached: function () {
      console.log('页面🈶组件');
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      console.log('页面无组件');
      // 在组件实例被从页面节点树移除时执行
    },
  },


  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add() {
      this.triggerEvent('myEvent', {
        message: '哈哈哈😸'
      });
    }
  }
})