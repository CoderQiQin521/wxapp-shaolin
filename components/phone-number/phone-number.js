// components/phone-number/phone-number.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    numbers: {
      type: String
    },
    more: {
      type: String,
      value: "查看详情"
    },
    urls: {
      type: String
    },
    openType: {
      type: String,
      value: "switchTab"
    }
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
    phoneNum (){
      wx:wx.makePhoneCall({
        phoneNumber: this.data.numbers,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  }
})
