// components/slide-icon/slide-icon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toPhone: function () {
      wx.makePhoneCall({
        phoneNumber: '13676910123',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    toTalk: function(e){
      console.log(e)
    }
  }
})
