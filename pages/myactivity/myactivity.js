import { request } from "../../request/index.js"
// pages/myactivity/myactivity.js
Page({


  data: {
    activityItem: [{ //活动列表
      name: '义务维修会',
      pic: 'https://ae01.alicdn.com/kf/H02612ad5ca404b42955d6e6a3a037694r.jpg',
      time: '2019年11月24日',
      address: '教四一楼',
      status: '火热报名中！'
    },
    {
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日',
      address: '北校区音乐广场',
      status: '报名已截止'
    },
    {
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日',
      address: '北校区音乐广场',
      status: '报名已截止'
    },
    {
      name: '招新游园会',
      pic: 'https://ae01.alicdn.com/kf/Haa558f3ca46f4c698b647d73fc6460997.jpg',
      time: '2019年11月20日',
      address: '北校区音乐广场',
      status: '报名已截止'
    }
    ],
  },

  onLoad: function (options) {
    this.getUserActivityList()
  },


  onShow: function () {

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
})