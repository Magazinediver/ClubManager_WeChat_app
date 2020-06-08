// pages/clubpage/clubpage.js
Page({
  data: {
    text: '对天地:纵横驰骋,俯视群雄; 对朋友:忠肝义胆,福难同当; 对对手:坦诚相待,公平较量; 对敌人:心狠手辣,绝不手软!',

    clubItem:
    {
      name: '流云梦社',
      tag: '热门社团',
      member: '70',
      fans: '200',
      tips: ['动漫', '颜值', 'cosplay'],
      describe: '流云梦社“读万卷书，行万里路”为宗旨，以提升校园人文素质为己任。激发同学们的读书兴趣。传播文化，传播思想，丰富大学生活，充实精神世界，共建良好的读书氛围，引发思想的碰撞。',
    },
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
  },
  goback(){
    wx.navigateBack({
      delta: 1,
    })
  }

})