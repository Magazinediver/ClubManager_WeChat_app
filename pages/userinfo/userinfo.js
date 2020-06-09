// pages/userinfo/userinfo.js
import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    id: ""
  },

  onChange(e) {
    this.setData({
      [e.currentTarget.dataset.prop] : e.detail
    })
  },

  handleUserinfo(){
    
    wx.setStorageSync("name", this.data.name);
    wx.setStorageSync("id", this.data.id);
    request({ url: '/userinfo',
      data:{
        name:this.name,
        id:this.id
      }
    })
      .then(res => {
        
      })
    wx.switchTab({
      url: '/pages/setting/setting',
    });
  },

  
})