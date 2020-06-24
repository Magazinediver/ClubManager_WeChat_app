import { request } from "../../request/index.js"
Page({

  
  data: {
    clubItem: [
      
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
          clubItem: result.data.data.clubItem
        })
      })
  },
})