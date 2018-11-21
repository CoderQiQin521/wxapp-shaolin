// pages/course/course.js
var http = require('../../http/request')
var api = require('../../config/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 2,
    typeData: [],
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    this.getList(this.data.menuTapCurrent)
  },
  menuTap: function (e) {
    var current = e.currentTarget.dataset.current;//获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    if (this.data.menuTapCurrent == e.currentTarget.dataset.current) {
      return
    }
    this.setData({
      menuTapCurrent: current
    });
    this.getList(current)
  },
  //点击切换
  getData: function(){
    http.request(api.ApiCaseType).then(res => {
      this.setData({
        typeData: res.msg
      })
    })
  },
  //请求cases接口
  getList: function(id){
    http.request(api.ApiCases + '?id=' + id).then(res => {
      this.setData({
        listData: res.msg
      })
    })
  },
  toDetail: function(e){
    var id = e.currentTarget.dataset.id,
      types = e.currentTarget.dataset.type
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id + '&type=' + types,
      })
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