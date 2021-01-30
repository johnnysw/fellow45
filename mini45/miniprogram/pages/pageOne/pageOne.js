// miniprogram/pages/pageOne/pageOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str: 'hello word!',
    arr: ['a', 'b', 'c', 'd', 'e'],
    num: 0,
    objArr: [{
        name: 'aa',
        age: 12
      },
      {
        name: 'bb',
        age: 15
      },
      {
        name: 'cc',
        age: 18
      },
      {
        name: 'dd',
        age: 11
      },
      {
        name: 'ee',
        age: 10
      },
    ]
  },
  goTwo() {
    // wx.navigateTo({
    //   url: '../pageTwo/pageTwo?name=lisi&sex=男',
    // })
    wx.switchTab({
      url: '../pageTwo/pageTwo?name=lisi&sex=男',
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
    console.log('到底啦');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})