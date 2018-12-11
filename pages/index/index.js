const app = getApp()
var http = require('../../http/request')
var api = require('../../config/api')
var util = require('../../utils/util')

Page({
  data: {
    formInfo: {
      username: '',
      phone: '',
      age: ''
    },
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    indicatorColor: "#fff",
    indicatorActiveColor: "#9f0a04"
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  getData() {
    http.request(api.ApiIndex).then(res => {
      // console.log(res)
      this.setData({
        about: res.msg.about,
        course: res.msg.course,
        footer: res.msg.footer,
        lb: res.msg.lb,
        news: res.msg.news,
        notice: res.msg.notice,
        phone: res.msg.phone,
        rules: res.msg.rules,
        school: res.msg.school
      })
    })
  },
  formSubmit: function(e) {
    var formData = this.data.formInfo,
      msg = '',
      isOk = true
    //遍历对象全部都有值
    for (let k in formData) {
      if (formData[k] === '') {
        isOk = false
        break
      }
    }
    //若全部都有值的话判断手机号格式
    if (isOk) {
      if (util.verifyPhone(parseInt(formData.phone))) {
        http.request(api.ApiSigUp, formData, 'POST').then(res => {
          util.showToast(res.msg)
          this.setData({
            formInfo: {
              username: res.msg.username,
              phone: res.msg.phone,
              age: res.msg.age
            }
          })
          
        }).catch(res => {
          util.showToast(res.msg, 'none')
        })
      }else {
        util.showToast('手机号格式不正确', 'none')
      }

    } else {
      if (formData.username === "") msg = '请输入姓名'
      else if (formData.phone === '') msg = '请输入手机号'
      util.showToast(msg,'none')
    }
  },
  inputForm: function(e) {
    var [formValue, formType, formInfo] = [e.detail.value, e.currentTarget.dataset.type, this.data.formInfo]

    formInfo[formType] = formValue
    this.setData({
      formInfo: formInfo
    })
  },
  toDetail: function(e){
    var id = e.currentTarget.dataset.id,
        types = e.currentTarget.dataset.type

    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id + '&type=' + types,
    })
    // console.log(types)
  },
  viewPic: function(e){
    // console.log(this.data.footer.qrcode)
    let qrcode = this.data.footer.qrcode
    wx.previewImage({
      urls: [qrcode],
    })
  },
  onLoad: function() {
    this.getData()
  }
})