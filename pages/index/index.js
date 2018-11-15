const app = getApp()

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
    indicatorActiveColor: "#9f0a04",
    about: {
      pic: 'http://jiasu.zzqifan.cn/shaolinxxcom/d/file/about/2017-06-01/af4b70c3543b27831323ef070e658f85.jpg',
      intro: '嵩山少林寺文武学校创办1997年，2001年由嵩山少林寺方丈释永信大和尚亲题命名。是嵩山少林寺院内负责对外教学、表演、访问和继承弘扬少林禅武文化，培育少林后继人才的大型武术学校。...'
    }
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
  onLoad: function () {
    
  }
})
