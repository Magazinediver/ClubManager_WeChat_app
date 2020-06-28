// pages/clubpage/clubpage.js
import { request } from "../../request/index.js"

Page({
  data: {
    clubname:'',
    

    userpic:[
    
    ],
    clubItem:
    {
      
    },
    activityItem: [
    ],
  },
  goback(){
    wx.navigateBack({
      delta: 1,
    })
  },

  onLoad:function(options){
    // console.log(options)
    
    let i = options.clubname
   
    // console.log(i);
    
    this.setData({
      clubname : i
    })

    this.getData()
    // console.log(this.data.clubname);
  },

  subscribe(){
    // console.log(this.data.clubname)
    request({ 
      url: '/addcollection',
      data:{
        clubname:this.data.clubname
      }
    })
      .then(result => {
        if(result.data.meta.status !== 200){
          wx.showToast({
            icon: 'none',
            title: '请勿再次关注',
            duration: 2000//持续的时间
       
          })
          return null
        }
        wx.showToast({
          icon: 'none',
          title: '关注成功',
          duration: 2000//持续的时间
     
        })
      })

  },
  
  join(){
    request({ 
      url: '/joinclub',
      data:{
        clubname:this.data.clubname
      }
    })
      .then(result => {
        if(result.data.meta.status !== 200){
          wx.showToast({
            icon: 'none',
            title: '请勿再次申请',
            duration: 2000//持续的时间
       
          })
          return null
        }
        wx.showToast({
          icon: 'none',
          title: '申请提交',
          duration: 2000//持续的时间
     
        })
      })

  },

  getData() {
    // console.log(this.data.clubname)
    request({ 
      url: '/clubdetail',
      data:{
        clubname:this.data.clubname
      }
    })
      .then(result => {
        this.setData({
          userpic: result.data.data.userpic,
          clubItem: result.data.data.clubItem,
          activityItem: result.data.data.activityItem
        })
      })
  },

})