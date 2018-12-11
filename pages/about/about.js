// pages/about/about.js
var http = require('../../http/request')
var api = require('../../config/api')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footer: '',
    menuTapCurrent: 0,
    markers: [{
      iconPath: "/image/location.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 50,
      height: 50
    }]
  },
  regionchange(e) {
    // console.log(e.type)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData()
    if (app.globalData.title) {
      wx.setNavigationBarTitle({
        title: app.globalData.title
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  menuTap: function(e) {
    var current = e.currentTarget.dataset.current; //获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    if (this.data.menuTapCurrent == e.currentTarget.dataset.current) {
      return
    }
    this.setData({
      menuTapCurrent: current
    });
  },
  getData: function(e) {
    http.request(api.ApiIndex).then(res => {
      // console.log(res)
      this.setData({
        footer: res.msg.footer
      })
    })
    http.request(api.ApiAbout).then(res => {
      this.setData({
        aboutData: res.msg
      })
    })
    http.request(api.ApiCall).then(res => {
      this.setData({
        callData: res.msg,
        markers: [{
          iconPath: "/image/location.png",
          id: 0,
          latitude: res.msg.lats,
          longitude: res.msg.longs,
          width: 30,
          height: 30
        }]
      })
    })
  },

  toMap: function (e) {
    let latitude = parseFloat(this.data.markers[0].latitude)
    let longitude = parseFloat(this.data.markers[0].longitude)
    wx.openLocation({
      latitude: latitude,
      longitude: longitude
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})