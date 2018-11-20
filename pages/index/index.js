const app = getApp()
var http = require('../../http/request')
var api = require('../../config/api')

Page({
  data: {
    imgUrls: [
      'http://jiasu.zzqifan.cn/jiaoyu/d/file/sjbanner/2017-05-19/be1489e88310e24374b1a2fbeb3c467d.jpg',
      'http://www.slszs.com/templets/default/images/img%20(19).jpg',
      'http://jiasu.zzqifan.cn/jiaoyu/d/file/sjbanner/2017-05-19/0078067b706be53cefa28c28a5bc489e.jpg'
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
    },
    notice: {
      content: '声明：任何通过微信转账、银行转帐等向家长索取报名费的行为，与我校无关，属于个人行为，请广大家长谨防上当受骗。'
    },
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
      }
    ],
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
      },{
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
    ],
    footData: {
      adr: "登封市德武功夫文化传播有限公司",
      tell: "13676910123",
      ewm: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542955286&di=49813dd05302aabd589966fbbd96ef3b&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.shaolindizi.org.cn%2FuploadFile%2Fimage%2F20160707%2F20160707170644_735.png",
      duo: "朵朵科技"
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
