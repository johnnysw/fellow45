// miniprogram/pages/pageFour/pageFour.js
const db = wx.cloud.database(); //初始化数据库
const DB45 = db.collection('fellow45'); //获取要操纵的集合
const _ = db.command; //获取查询指令
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal: '',
  },
  getVal(e) {
    console.log(e);
    this.setData({
      inpVal: e.detail.value
    })
  },
  add() {
    DB45.add({
      data: {
        msg: this.data.inpVal,
        isShow: true
      }
    }).then(res => console.log(res))
  },
  getDB() {
    //获取集合中的全部数据
    // DB45.get().then(res => {
    //   console.log(res);
    // })

    // 获取集合当中的部分数据
    // DB45.where({
    //   isShow: true
    // }).get().then(res => {
    //   console.log(res);
    // })
    // DB45.where({
    //   msg: _.in(['hello', 'word'])
    // }).get().then(res => {
    //   console.log(res);
    // })

    // 获取具体的某一条记录
    DB45.doc("b00064a76016194301f1b8a65f7f8bea").get().then(res => {
      console.log(res);
    })
  },
  updateDB() {
    DB45.doc("b00064a76016194301f1b8a65f7f8bea").update({
      data: {
        isShow: false
      }
    }).then(res => {
      console.log(res);
    })
  },
  delDB() {
    DB45.doc("b00064a76016194301f1b8a65f7f8bea").remove().then(res => {
      console.log(res);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})