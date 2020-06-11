import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

    activityheight: 0,
    floorstatus: '',
    swiperTop: 0,
    tabTop: 0,
    tabFix: '',
    tabHeight: 0,

    navbarInitTop: 0, //导航栏初始化距顶部的距离
    isFixedTop: false, //是否固定顶部

    swiperList: [
      'https://ae01.alicdn.com/kf/H06978a26753d4c07bf899f39aef2949bf.jpg',
      'https://ae01.alicdn.com/kf/H54a7061e839f4d7c9ddc5679868b89f7l.jpg',
      'https://ae01.alicdn.com/kf/H0fd06a63db814c67a6160bdd8fa1ea1ag.jpg',
      'https://ae01.alicdn.com/kf/Hefdf7d749bdd46ef8f1685f87bd72b74E.jpg',
    ],
    //被点击的导航条索引
    currentIndexNav: 0,
    //导航条数据
    all: [{
      id: '1',
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日 9:00～11:00',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      id: '2',
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    }
    ],
    hobby:[{
      id: '3',
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日 9:00～11:00',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      id: '4',
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    },{
      id: '1',
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日 9:00～11:00',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      id: '1',
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    }],
    study:[{
      id: '1',
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日 9:00～11:00',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      id: '1',
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    }],
    charity:[{
      id: '1',
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日 9:00～11:00',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      id: '1',
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    }],
    sports:[{
      id: '1',
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日 9:00～11:00',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      id: '1',
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    }],

    tabs: [{
      id: 0,
      name: '全部',
      isActive: true
    },
    {
      id: 1,
      name: '兴趣爱好',
      isActive: false
    },
    {
      id: 2,
      name: '学术创新',
      isActive: false
    },
    {
      id: 3,
      name: '公益服务',
      isActive: false
    },
    {
      id: 4,
      name: '体育运动',
      isActive: false
    }
    ]
  },

  setaHeight() {
    this.setData({ activityheight: this.data.all.length * 750 })
    // console.log(this.data.activityheight);
  },

  switchTab(event) {
    var cur = event.detail.current;
    this.setData({
      currentIndexNav: cur,
    });
    if(cur === 0){
      this.setData({ activityheight: this.data.all.length * 750 })
    }else if(cur === 1){
      this.setData({ activityheight: this.data.hobby.length * 750 })
    }else if(cur === 2){
      this.setData({ activityheight: this.data.study.length * 750 })
    }else if(cur === 3){
      this.setData({ activityheight: this.data.charity.length * 750 })
    }else if(cur === 4){
      this.setData({ activityheight: this.data.sports.length * 750 })
    }

   
  },

  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  calcHeight() {
    let that = this;
    //获取tab的距离顶部高度
    const query = wx.createSelectorQuery();
    query.select('#swiper').boundingClientRect(function (res) {
      // console.log(res.top)
      // that.data.swiperTop = res.top
      that.setData({
        swiperTop: res.top
      })
    }).exec();
    query.select('#navbar').boundingClientRect(function (res) {
      // console.log(res.top)
      // that.data.tabTop = res.top
      that.setData({
        tabTop: res.top
      })
    }).exec();
  },

  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },


  getSwiperList(){
    request({ 
      url: '/activityswiperlist'
    })
      .then(result => {
        this.setData({
          swiperList: result.data.data.pic
        })
      })
  },

  getActivity(){
    request({ 
      url: '/useractivitycate'
    })
      .then(result => {
        this.setData({
          all:result.data.data.all,
          hobby:result.data.data.hobby,
          study:result.data.data.study,
          charity:result.data.data.charity,
          sports:result.data.data.sports

        })
      })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.calcHeight()
    this.setaHeight()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getActivity()
    // this.goTop()
    // this.calcHeight()
  },

  onPageScroll: function (e) {
    let me = this;
    //tab的吸顶效果
    // console.log(this.data.tabTop-this.data.swiperTop)
    // console.log(this.data.swiperTop)
    if (e.scrollTop > (this.data.tabTop - this.data.swiperTop)) {
      if (me.data.tabFix) {
        return
      } else {
        me.setData({
          tabFix: 'fixed',
          tabHeight: e.scrollTop
        })
      }
    } else {
      me.setData({
        tabFix: ''
      })
    }

    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  }
})