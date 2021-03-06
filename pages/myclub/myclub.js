import { request } from "../../request/index.js"
Page({

  
  data: {
    clubItem: [
      
    ]
  },
  quitclub(e){
    // console.log(e.currentTarget.dataset.cid)
    request({ 
      url: '/withdrawclub',
      data:{
        clubname:e.currentTarget.dataset.cid
      }
    })
      .then(result => {
        if(result.data.meta.status !== 200){
          wx.showToast({
            icon: 'none',
            title: '退出社团失败',
            duration: 2000//持续的时间
       
          })
          return null
        }
        wx.showToast({
          icon: 'none',
          title: '退出社团成功',
          duration: 2000//持续的时间
     
        })
        this.getUserClubList()
      })
  
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