import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  
  data: {

    clubheight: 0,
    floorstatus: '',
    swiperTop: 0,
    tabTop: 0,
    tabFix: '',
    tabHeight: 0,

    navbarInitTop: 0, //导航栏初始化距顶部的距离
    isFixedTop: false, //是否固定顶部

    swiperList: [],
    //被点击的导航条索引
    currentIndexNav: 0,
    //导航条数据
    clubItem: [{
      name: '流云梦社',
      tag: '热门社团',
      member: '70',
      fans: '200',
      tips: ['动漫', '颜值', 'cosplay'],
      describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
    },
    {
      name: '流云梦社',
      tag: '热门社团',
      member: '70',
      fans: '200',
      tips: ['动漫', '颜值', 'cosplay'],
      describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
    },
    {
      name: '流云梦社',
      tag: '热门社团',
      member: '70',
      fans: '200',
      tips: ['动漫', '颜值', 'cosplay'],
      describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
    },
    {
      name: '流云梦社',
      tag: '热门社团',
      member: '70',
      fans: '200',
      tips: ['动漫', '颜值', 'cosplay'],
      describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
    }
    ],
    activityItem: [{
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日 9:00～11:00',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    }
    ],
    tabs: [{
      name: '全部',
      isActive: true
    },
    {
      name: '兴趣',
      isActive: false
    },
    {

      name: '游戏',
      isActive: false
    },
    {
      id: 3,
      name: '艺术',
      isActive: false
    },
    {
      id: 4,
      name: '组织',
      isActive: false
    },
    {
      id: 5,
      name: '志愿',
      isActive: false
    },
    {
      id: 6,
      name: '动漫',
      isActive: false
    },
    {
      id: 7,
      name: '学术',
      isActive: false
    },
    {
      id: 8,
      name: '运动',
      isActive: false
    }
    ]
  },

  setcHeight() {
    var that = this;
    this.setData({ clubheight: this.data.clubItem.length * 560 })
    // console.log(this.data.clubheight);
  },

  switchTab(event) {
    var cur = event.detail.current;
    this.setData({
      currentIndexNav: cur,
    });
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

  handlerGobackClick: function () {
    wx.navigateBack({
      delta: 1,  // 返回上一级页面。
      success: function () {
        console.log('成功！')
      }
    })
  },
  // 头部首页按钮
  handlerGohomeClick: function () {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  calcHeight() {
    let that = this;
    //获取tab的距离顶部高度
    const query = wx.createSelectorQuery();
    query.select('#swiper').boundingClientRect(function (res) {
      console.log(res.top)
      // that.data.swiperTop = res.top
      that.setData({
        swiperTop: res.top
      })
    }).exec();
    query.select('#navbar').boundingClientRect(function (res) {
      console.log(res.top)
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

  getSwiperList() {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata' })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })

      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.calcHeight()
    this.setcHeight()
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
    // this.goTop()
    // this.calcHeight()
    // console.log(getApp().globalData.clubtab)
    let j = getApp().globalData.clubtab
    if(j !== 0){
      this.setData({
        currentIndexNav:getApp().globalData.clubtab
      })
    }
    
    // console.log(this.data.currentIndexNav)
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