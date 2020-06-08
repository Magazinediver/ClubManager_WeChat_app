// pages/setting/setting.js
Page({

  data: {
    userinfo:{}, 
  },
  onShow(){
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({userinfo})
  },

  logout(){
    wx.clearStorage()
    this.onShow()
  }
  
})