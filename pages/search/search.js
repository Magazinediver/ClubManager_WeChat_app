import { request } from "../../request/index.js"
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    query:'',
   
    hot:[
      '棋社','演讲','比赛','竞赛','乒乓','篮球','足球','动漫'
    ],
    history:[
      '棋社','中英文脱口秀大赛','比赛','竞赛','乒乓','篮球'
    ],
    searchList:{
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
    }
  },

  onChange(e) {
    this.setData({
      [e.currentTarget.dataset.prop] : e.detail
    })
  },
  onSearch() {
    this.getSearchList()
  },


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


  getSearchList() {
    request({ url: '/search',
    data:{
      query:this.data.query
    }
    })
      .then(result => {
        this.setData({
          searchList: result.data.searchList
        })
      })
  },
 
})