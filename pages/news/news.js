// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 2,
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
    newsData: [
      {
        id: 1,
        titles: "确认过眼神，你就是大学想要的人！",
        intros: "2018年，首批00后成年了6月7日，他们走进高考考场了9月份，他们将迈入大学的校园若干年后，他们会有美好的未来 单招升学班蔡清主任带队  基地教育集团61名学员走进高考",
        srcs: "http://www.shaolinjiaoyu.cn/d/file/xuexiaodongtai/2018-07-28/713a9ff42fe27b9d4716eb69f4dbcfa9.jpg",
        more: "查看更多+",
        urls: "/pages/detail/detail"
      },
      {
        id: 2,
        titles: "国家体育总局领导来校为2022年冬奥会跨界选材，入选学员将冲刺奥运为国征战！",
        intros: "2018年6月10日，国家体育总局社会体育中心主任范广升一行领导莅临基地教育集团，视察备战2022年冬奥会跨项跨界选材情况。河南省政协委员、河南省武术协会副主席，基地教育集团创",
        srcs: "http://www.shaolinjiaoyu.cn/d/file/xuexiaodongtai/2018-07-28/aa52ff091d1892e6a7be0b45051e5149.jpg",
        more: "查看更多+",
        urls: "/pages/detail/detail"
      },
      {
        id: 3,
        titles: "武术考核开幕时│我们专属的武林大会，等你来看！",
        intros: "6月4日，基地教育集团迎来了2018年第一季度武术考核大赛，全体教练员及学员们都参与到此次比赛中来，这是一场武者争霸赛，更是一场校级友谊赛。武术考核共分为两大系别，散打系和套",
        srcs: "http://www.shaolinjiaoyu.cn/d/file/xuexiaodongtai/2018-07-28/9578d901a1a059822440e7a9490c5a63.jpg",
        more: "查看更多+",
        urls: "/pages/detail/detail"
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