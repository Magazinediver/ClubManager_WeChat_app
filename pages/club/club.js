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

    swiperList: [
      'https://ae01.alicdn.com/kf/H06978a26753d4c07bf899f39aef2949bf.jpg',
      'https://ae01.alicdn.com/kf/H54a7061e839f4d7c9ddc5679868b89f7l.jpg',
      'https://ae01.alicdn.com/kf/H0fd06a63db814c67a6160bdd8fa1ea1ag.jpg',
      'https://ae01.alicdn.com/kf/Hefdf7d749bdd46ef8f1685f87bd72b74E.jpg',
    ],
    //被点击的导航条索引
    currentIndexNav: 0,
    //导航条数据
  
    all:[
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    hobby:[
      {
        name: '兴趣社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '兴趣社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '兴趣社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '兴趣社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    game:[
      {
        name: '游戏社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '游戏社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '游戏社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    art:[
      {
        name: '艺术社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '艺术社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    organ:[
      {
        name: '组织社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '组织社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    volun:[
      {
        name: '志愿社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '志愿社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    comic:[
      {
        name: '动漫社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '动漫社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    study:[
      {
        name: '学术社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '学术社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],
    sport:[
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
      {
        name: '全部社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      },
    ],

    // tab:["all","hobby","game","art","organ","volun","comic","study","sport"],
    
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
    this.setData({ clubheight: this.data.all.length * 560 })
  },

  switchTab(event) {
    var cur = event.detail.current;
    if(cur === 0){
      this.setData({ clubheight: this.data.all.length * 600 })
    }else if(cur === 1){
      this.setData({ clubheight: this.data.hobby.length * 600 })
    }else if(cur === 2){
      this.setData({ clubheight: this.data.game.length * 600 })
    }else if(cur === 3){
      this.setData({ clubheight: this.data.art.length * 600 })
    }else if(cur === 4){
      this.setData({ clubheight: this.data.organ.length * 600 })
    }else if(cur === 5){
      this.setData({ clubheight: this.data.volun.length * 600 })
    }else if(cur === 6){
      this.setData({ clubheight: this.data.comic.length * 600 })
    }else if(cur === 7){
      this.setData({ clubheight: this.data.study.length * 600 })
    }else if(cur === 8){
      this.setData({ clubheight: this.data.sport.length * 600 })
    }
    
    // console.log(this.data.clubheight)
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
      url: '/clubswiperlist'
    })
      .then(result => {
        this.setData({
          swiperList: result.data.swiperList
        })
      })
  },

  getClub() {
    request({ 
      url: '/userclubcate'
    })
      .then(res => {
        this.setData({
          all:res.data.all,
          hobby:res.data.hobby,
          game:res.data.game,
          art:res.data.art,
          organ:res.data.organ,
          volun:res.data.volun,
          comic:res.data.comic,
          study:res.data.study,
          sport:res.data.sport
        })
      })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    // this.getClub()
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
    this.getClub()
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