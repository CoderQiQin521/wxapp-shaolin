// pages/product/product.js
var http = require('../../http/request')
var api = require('../../config/api')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type === "news") this.getData(options.id)
    if (options.type === "cases") this.getCases(options.id)  
    if (app.globalData.title) {
      wx.setNavigationBarTitle({
        title: app.globalData.title
      })
    }  
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
  getData: function(id){
    http.request(api.ApiNewsDetail + '?id=' + id).then(res => {
      res.msg.content = res.msg.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
      this.setData({
        detail: res.msg
      })
      // console.log(res.msg)
    })
  },
  getCases: function(id){
    http.request(api.ApiCasesDetail + '?id=' + id).then(res => {
      res.msg.content = res.msg.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
      this.setData({
        detail: res.msg
      })
      // console.log(res.msg)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})