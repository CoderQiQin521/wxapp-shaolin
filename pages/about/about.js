// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 0,
    about: {
      pic: 'http://jiasu.zzqifan.cn/shaolinxxcom/d/file/about/2017-06-01/af4b70c3543b27831323ef070e658f85.jpg',
      intro: '嵩山少林寺文武学校创办1997年，2001年由嵩山少林寺方丈释永信大和尚亲题命名。是嵩山少林寺院内负责对外教学、表演、访问和继承弘扬少林禅武文化，培育少林后继人才的大型武术学校。...'
    },
    markers: [{
      iconPath: "/image/location.png",
      id: 0,
      latitude: 34.520218,
      longitude: 112.961645,
      width: 30,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 112.961645,
        latitude: 34.520218
      }, {
          longitude: 112.961645,
          latitude: 34.520218
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]
  },

  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
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

  menuTap: function (e) {
    var current = e.currentTarget.dataset.current;//获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    if (this.data.menuTapCurrent == e.currentTarget.dataset.current) {
      return
    }
    this.setData({
      menuTapCurrent: current
    });
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