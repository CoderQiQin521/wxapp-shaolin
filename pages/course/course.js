// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 1,
    caseData: [
      {
        id: 1,
        title: "武术课训练环境",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/d/file/huanjing/2017-05-20/9dcc42a4cc8c587e8322d8c646806d05.jpg"
      }, {
        id: 2,
        title: "文化课教学环境",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/d/file/huanjing/2017-05-20/3f6f3a93dd349914b5a965d5d01b099c.jpg"
      }, {
        id: 3,
        title: "学员宿舍住宿环境",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/d/file/huanjing/2017-05-20/48caf812602da06082bf9efff764735b.jpg"
      }, {
        id: 4,
        title: "标准伙食食堂环境",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/d/file/huanjing/2017-05-20/be5775e4533b96696fb6538e83720b97.jpg"
      }
    ],
    courseData: [
      {
        id: 1,
        title: "文化课程",
        content: " 一、文化课学制：我校履行全国九年制义务教育与社会接轨，进行同步教学，学生毕业后均颁发国家承认学历的毕业证书。 其中小学为六年制、初中三年制、高中三年制...[详情]",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/template1/images/biye.jpg"
      }, {
        id: 2,
        title: "武术课程",
        content: " 二、武术课学制：我校履行全国九年制义务教育与社会接轨，进行同步教学，学生毕业后均颁发国家承认学历的毕业证书。 其中小学为六年制、初中三年制、高中三年制...[详情]",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/template1/images/biye.jpg"
      }, {
        id: 3,
        title: "特色课程",
        content: " 三、特色课学制：我校履行全国九年制义务教育与社会接轨，进行同步教学，学生毕业后均颁发国家承认学历的毕业证书。 其中小学为六年制、初中三年制、高中三年制...[详情]",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/template1/images/biye.jpg"
      },
      {
        id: 4,
        title: "影视表演",
        content: " 三、特色课学制：我校履行全国九年制义务教育与社会接轨，进行同步教学，学生毕业后均颁发国家承认学历的毕业证书。 其中小学为六年制、初中三年制、高中三年制...[详情]",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/template1/images/biye.jpg"
      },
      {
        id: 5,
        title: "夏令营",
        content: " 三、特色课学制：我校履行全国九年制义务教育与社会接轨，进行同步教学，学生毕业后均颁发国家承认学历的毕业证书。 其中小学为六年制、初中三年制、高中三年制...[详情]",
        thumbs: "http://jiasu.zzqifan.cn/jiaoyu/template1/images/biye.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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