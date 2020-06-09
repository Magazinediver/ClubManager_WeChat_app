import { request } from "../../request/index.js"
Page({

  
  data: {
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
  onLoad: function (options) {
    this.getUserClubList()
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
})