import { request } from "../../request/index.js"
Page({

  
  data: {
    clubItem: [
      
    ]
  },
  undesclub(e){
    // console.log(e.currentTarget.dataset.cid)
    request({ 
      url: '/delcollection',
      data:{
        clubname:e.currentTarget.dataset.cid
      }
    })
      .then(result => {
        if(result.data.meta.status !== 200){
          wx.showToast({
            icon: 'none',
            title: '取消关注失败',
            duration: 2000//持续的时间
       
          })
          return null
        }
        wx.showToast({
          icon: 'none',
          title: '取消关注成功',
          duration: 2000//持续的时间
     
        })
        this.getUserClubList()
      })
  
  },
  onLoad: function (options) {
    this.getUserClubList()
  },
  // getUserClubList(){
  //   request({ 
  //     url: '/userclub',
  //   })
  //     .then(result => {
  //       this.setData({
  //         clubItem: result.data.data.clubItem
  //       })
  //     })
  // },
  getUserClubList(){
    request({ 
      url: '/searchcollection',
    })
      .then(result => {
        this.setData({
          clubItem: result.data.data.clubItem
        })
      })
  },
})