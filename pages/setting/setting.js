// pages/setting/setting.js
import { request } from "../../request/index.js"

Page({

  data: {
    club:'0',
    subscribe:'0',
    activity:'0',
    userinfo:{}, 
  },
  
  onLoad(){
    this.getData()
  },
  onShow(){
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({userinfo})
    this.getData()
  },

  logout(){
    wx.clearStorage()
    this.onShow()
  },
  getData(){
    request({ 
      url: '/mysetting'
    })
      .then(result => {
        this.setData({
          club:result.data.data.club,
          subscribe:result.data.data.subscribe,
          activity:result.data.data.activity,
        })
      })
  },
  
})