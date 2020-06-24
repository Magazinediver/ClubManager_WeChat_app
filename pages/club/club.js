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
      
    ],
    //被点击的导航条索引
    currentIndexNav: 0,
    //导航条数据
  
    all:[
     
    ],
    hobby:[
      
    ],
    game:[
      
    ],
    art:[
      
    ],
    organ:[
      
    ],
    volun:[
     
    ],
    comic:[
      
    ],
    study:[
     
    ],
    sport:[
     
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
    // console.log(this.data.all.length);
    
    // console.log(this.data.clubheight);
    
  },

  switchTab(event) {
    // console.log(event)
    var cur = event.detail.current;
    if(event.detail.source === 'touch'){
      setTimeout(()=>{
        this.setData({
          currentIndexNav: cur,
        });
      },50)
    }
    
    // if(cur === 0){
    //   this.setData({ clubheight: this.data.all.length * 600 })
    // }else if(cur === 1){
    //   this.setData({ clubheight: this.data.hobby.length * 600 })
    // }else if(cur === 2){
    //   this.setData({ clubheight: this.data.game.length * 600 })
    // }else if(cur === 3){
    //   this.setData({ clubheight: this.data.art.length * 600 })
    // }else if(cur === 4){
    //   this.setData({ clubheight: this.data.organ.length * 600 })
    // }else if(cur === 5){
    //   this.setData({ clubheight: this.data.volun.length * 600 })
    // }else if(cur === 6){
    //   this.setData({ clubheight: this.data.comic.length * 600 })
    // }else if(cur === 7){
    //   this.setData({ clubheight: this.data.study.length * 600 })
    // }else if(cur === 8){
    //   this.setData({ clubheight: this.data.sport.length * 600 })
    // }
    // if (this.data.clubheight < 1000){
    //   this.setData({ clubheight: 1000 })
    // }
    
    // console.log(this.data.clubheight)
  
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
    if(this.data.currentIndexNav !== e.target.dataset.index){
      setTimeout(()=>{
        this.setData({
          currentIndexNav: e.target.dataset.index
        })
      },50)
    } 
  },

  getSwiperList(){
    request({ 
      url: '/clubswiperlist'
    })
      .then(result => {
        // console.log(result)
        this.setData({
          swiperList: result.data.data.pic
        })
        // console.log(this.data.swiperList)
      })
  },

  getClub() {
    request({ 
      url: '/userclubcate'
    })
      .then(res => {
        this.setData({
          all:res.data.data.all,
          hobby:res.data.data.hobby,
          game:res.data.data.game,
          art:res.data.data.art,
          organ:res.data.data.organ,
          volun:res.data.data.volun,
          comic:res.data.data.comic,
          study:res.data.data.study,
          sport:res.data.data.sport
        })
        this.setcHeight()
      })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getClub()
    this.calcHeight()
    
    
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