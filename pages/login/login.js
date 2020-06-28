// pages/login/login.js
import { request } from "../../request/index.js"

Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    rescode:'',
    userinfo:{}
  },

  

  handlegetUserInfo(e){
    const {userInfo} = e.detail;
    wx.setStorageSync("userinfo",userInfo);
    // console.log(wx.getStorageSync('userinfo'))
    wx.login({
      success: (res)=>{
        // console.log("res.code: " + res.code);
        this.setData({
          userinfo:wx.getStorageSync('userinfo'),
          rescode:res.code,
        })
        // console.log("userinfo: " + this.data.userinfo)
        // console.log("rescode: " + this.data.rescode)
        wx.request({ 
          url: 'https://www.ximate.tech:8000/clubmanage/app/login',
          data:
          {
            jscode:this.data.rescode,
            nickName:this.data.userinfo.nickName,
            avatarUrl:this.data.userinfo.avatarUrl
          },
          success(result){
            // console.log(result.data.data.openid)
            wx.setStorageSync("openid",result.data.data.openid);
            // console.log(wx.getStorageSync('openid'))
            wx.switchTab({
              url: '/pages/index/index',
            });

          },
      })   
      },
    });  
  },
})