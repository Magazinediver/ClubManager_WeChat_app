// pages/login/login.js
import { request } from "../../request/index.js"

Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    userinfo:''
  },

  

  handlegetUserInfo(e){
    const {userInfo} = e.detail;
    wx.setStorageSync("userinfo",userInfo);
    wx.login({
      success: (res)=>{
        console.log("res.code:" + res.code);
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'wx559fbe6ebd79457b',
            secret: '99c9677c62faabdf6bc4532a2f99fb6c',
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method:"GET",
          success:function(res){
            // console.log("用户的openid: " + res.data.openid);
            const { openid } = res.data
            wx.setStorageSync("openid",openid);
            // var app=getApp();     // 取得全局App
            // app.globalData.openid = res.data.openid
          }
        })
      },
    });
    
    setTimeout(() => {
      this.setData({
        userinfo:wx.getStorageSync('userinfo')
      })
      console.log(wx.getStorageSync('userinfo'))
      console.log(this.data.userinfo)
      request({ url: '/login',
        data:
        {
          nickName:this.data.userinfo.nickName,
          avatarUrl:this.data.userinfo.avatarUrl
        }
      })
      .then(res=> {
        console.log(res)
      })
      wx.switchTab({
        url: '/pages/index/index',
      });
    }, 400);  
  },

})