// miniprogram/pages/todoList/todoList.js
const db = wx.cloud.database();
const DB45 = db.collection('fellow45');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal: '',
    todoList: [],
    isDone: false,
    idList: []
  },
  getVal(e) {
    this.setData({
      inpVal: e.detail.value
    })
  },
  addTodo() {
    if (this.data.inpVal) {
      DB45.add({
        data: {
          title: this.data.inpVal,
          isTodo: true,
          isDone: false
        }
      }).then(res => {
        this.getTodoList();
        this.setData({
          inpVal: ''
        })
      })
    } else {
      wx.showToast({
        title: '记录不能是空',
        icon: 'none',
        duration: 2000
      })
    }
  },
  getTodoList() {
    DB45.where({
      isTodo: true,
      isDone: this.data.isDone
    }).get().then(res => {
      console.log(res);
      this.setData({
        todoList: res.data
      })
    })
  },
  finish(e) {
    DB45.doc(e.target.dataset.id).update({
      data: {
        isDone: true
      }
    }).then(res => {
      this.getTodoList()
    })
  },
  del(e) {
    DB45.doc(e.target.dataset.id).remove().then(res => {
      this.getTodoList()
    })
  },
  changeShow() {
    this.setData({
      isDone: !this.data.isDone
    })
    this.getTodoList();
  },
  selectChange(e) {
    this.setData({
      idList: e.detail.value
    })
  },
  batchHadle(e) {
    let type = e.target.dataset.type;
    wx.cloud.callFunction({
      name: 'fellow45_todo',
      data: {
        type,
        idList: this.data.idList
      }
    }).then(res => {
      this.getTodoList()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodoList();
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