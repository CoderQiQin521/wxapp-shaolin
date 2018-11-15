const app = getApp()
var http = require('../../http/request')
var api = require('../../config/api')

Page({
  data: {
    imgUrls: [
      'http://www.zgsssls.com/m/static/shouji/images/banner01.jpg',
      'http://www.zgsssls.com/m/static/shouji/images/banner02.jpg',
      'http://www.zgsssls.com/m/static/shouji/images/banner03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    indicatorColor: "#fff",
    indicatorActiveColor: "#9f0a04"
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  getData() {
    http.request('https://api.apiopen.top/musicRankings').then(res => {
      console.log(res)
    }).catch(err => {

    })
  },
  onLoad: function () {
    this.getData()
  }
})
