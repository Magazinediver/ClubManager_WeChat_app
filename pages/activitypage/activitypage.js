import { request } from "../../request/index.js"
// pages/activitypage/activitypage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityid: '',
    active: 0,
    activityItem:{},
    clubItem:{}
     
  },


  onLoad:function(options){
   
    
    let i = options.activityid
    console.log(options.activityid);
    
    this.setData({
      activityid : i
    })
   

    this.getData()
  },

  join(){
    request({ 
      url: '/joinactivity',
      data:{
        activityid:this.data.activityid
      }
    })
      .then(result => {
        if(result.data.meta.status !== 200){
          wx.showToast({
            icon: 'none',
            title: '请勿再次申请',
            duration: 2000//持续的时间
       
          })
        }
      })

  },

  getData() {
    request({ 
      url: '/activitydetail',
      data:{
        activityid:this.data.activityid
      }
    })
      .then(result => {
        this.setData({
          clubItem: result.data.data.clubItem,
          activityItem: result.data.data.activityItem
        })
      })
  },

})