import { request } from "../../request/index.js"

//Page Object
Page({
  data: {
    floorstatus: '',//回到顶部
    clubheight: 0,//社团部分高度计算结果
    activityheight: 0,//活动部分高度计算结果
    currentTab: 0,//当前选中的tab
    swiperList: [],//轮播图
    cateList: [],
    cateList1: [ //分类第一行
      {
        name: '兴趣',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/H4a75576ce3fe43ef8491f3af55274c68N.jpg',
        query: 'photo'
      },
      {
        name: '游戏',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/H4ce19cabf3ae4b16886e10efa81dd4caO.jpg',
        query: 'game'
      },
      {
        name: '艺术',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/Ha44e97419a554a17804bea754af82d37t.jpg',
        query: 'music'
      },
      {
        name: '组织',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/H3d6fdba9f5a24ef7bb6f7ab4e47d8155w.jpg',
        query: 'organization'
      }
    ],
    cateList2: [ //分类第二行
      {
        name: '志愿',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/Hcd3c9ff863ee4fb0af5a7b79e182615bV.jpg',
        query: 'volunteer'
      },
      {
        name: '动漫',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/Hc5289561f252435b95a9c7b27c70d27aS.jpg',
        query: 'comic'
      },
      {
        name: '学术',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/He4172403d8e44fc887c65c752ae9863aO.jpg',
        query: 'film'
      },
      {
        name: '运动',
        open_type: 'switchTab',
        image_src: 'https://ae01.alicdn.com/kf/H1ef7dd70722b49b5867dea0e8c0ad5edn.jpg',
        query: 'chess'
      }
    ],
    activityItem: [{ //活动列表
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
    },
    {
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    },
    {
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日 9:00～19:00',
      address: '北校区音乐广场',
      status: '报名已截止'
    }
    ],
    clubItem: [
      {
        name: '流云梦社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '流云梦社“读万卷书，行万里路”为宗旨，以提升校园人文素质为己任。激发同学们的读书兴趣。传播文化，传播思想，丰富大学生活，充实精神世界，共建良好的读书氛围，引发思想的碰撞。',
      },
      {
        name: '流云梦社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '流云梦社“读万卷书，行万里路”为宗旨，以提升校园人文素质为己任。激发同学们的读书兴趣。传播文化，传播思想，丰富大学生活，充实精神世界，共建良好的读书氛围，引发思想的碰撞。',
      },
      {
        name: '流云梦社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '流云梦社“读万卷书，行万里路”为宗旨，以提升校园人文素质为己任。激发同学们的读书兴趣。传播文化，传播思想，丰富大学生活，充实精神世界，共建良好的读书氛围，引发思想的碰撞。',
      },
      {
        name: '流云梦社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '流云梦社“读万卷书，行万里路”为宗旨，以提升校园人文素质为己任。激发同学们的读书兴趣。传播文化，传播思想，丰富大学生活，充实精神世界，共建良好的读书氛围，引发思想的碰撞。',
      },
      {
        name: '流云梦社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '学生社团（英答文名：students society），是指学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、专自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是我国高校第二课堂的引领者属。',
      }
    ]
  },
  sendmessage:function(e) {
    var app=getApp();     // 取得全局App
    app.globalData.clubtab = e.currentTarget.dataset.index
    // let index = e.currentTarget.dataset.index
    // wx.setStorageSync("clubtab",index);
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

  //options(Object)
  onLoad: function (options) {

    this.getSwiperList()
   

    this.setcHeight()
    this.setaHeight()
  },

  onShow(){
    this.getUserClubList()
    this.getUserActivityList()
  },


  setaHeight() {
    var that = this;
    this.setData({ activityheight: this.data.activityItem.length * 750 })
    // console.log(this.data.activityheight);
  },
  setcHeight() {
    var that = this;
    this.setData({ clubheight: this.data.clubItem.length * 560 })
    // console.log(this.data.clubheight);
  },
  bindsearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    });
  },

  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击切换选项卡
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  switchTab(event) {
    var cur = event.detail.current;
    this.setData({
      currentTab: cur,
    });
  },

  getSwiperList() {
    request({ 
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },

  getUserActivityList(){
    request({ 
      url: '/useractivity',
    })
      .then(result => {
        this.setData({
          activityItem: result.data.activityItem
        })
      })
  },
    
  getUserClubList(){
    request({ 
      url: '/userclub',
    })
      .then(result => {
        this.setData({
          clubItem: result.data.clubItem
        })
      })
  },



  onPageScroll: function (e) {
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


});