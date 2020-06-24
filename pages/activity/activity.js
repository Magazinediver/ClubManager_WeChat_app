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
      
    ],
    //被点击的导航条索引
    currentIndexNav: 0,
    //导航条数据
    all: [
    ],
    hobby:[],
    study:[],
    charity:[],
    sports:[],

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
    if(event.detail.source === 'touch'){
      this.setData({
        currentIndexNav: cur,
      });
    }
    // if(cur === 0){
    //   this.setData({ activityheight: this.data.all.length * 750 })
    // }else if(cur === 1){
    //   this.setData({ activityheight: this.data.hobby.length * 750 })
    // }else if(cur === 2){
    //   this.setData({ activityheight: this.data.study.length * 750 })
    // }else if(cur === 3){
    //   this.setData({ activityheight: this.data.charity.length * 750 })
    // }else if(cur === 4){
    //   this.setData({ activityheight: this.data.sports.length * 750 })
    // }
    // if (this.data.activityheight < 1400){
    //   this.setData({ activityheight: 1400 })
    // }
   
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
        this.setaHeight()
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