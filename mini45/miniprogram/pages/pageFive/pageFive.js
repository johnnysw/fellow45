// miniprogram/pages/pageFive/pageFive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  callCloud() {
    wx.cloud.callFunction({
      // 要调用的云函数的名字
      name: 'fellow45',
      // 给云函数传参数
      data: {
        a: 111,
        b: 222
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  cloudGet() {
    wx.cloud.callFunction({
      name: 'fellow45',
    }).then(res => {
      console.log(res);
    })
  },
  cloudUpdate() {
    wx.cloud.callFunction({
      name: 'fellow45_update'
    }).then(res => {
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