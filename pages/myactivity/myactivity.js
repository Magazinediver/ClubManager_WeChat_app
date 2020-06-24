import { request } from "../../request/index.js"
// pages/myactivity/myactivity.js
Page({


  data: {
    activityItem: [
    ],
  },

  onLoad: function (options) {
    this.getUserActivityList()
  },


  onShow: function () {

  },
  getUserActivityList(){
    request({ 
      url: '/useractivity',
    })
      .then(result => {
        this.setData({
          activityItem: result.data.data.activityItem
        })
      })
  },
})