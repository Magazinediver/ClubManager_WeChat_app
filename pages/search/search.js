import { request } from "../../request/index.js"
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    query:'',
   
    hot:[
      'test','志愿1','比赛','竞赛','乒乓','篮球','足球','动漫'
    ],
    history:[
      '棋社','中英文脱口秀大赛','比赛','竞赛','乒乓','篮球'
    ],
    searchList:{  
    }
  },

  onChange(e) {
    this.setData({
      [e.currentTarget.dataset.prop] : e.detail
    })
    this.getSearchList()
  },
  onSearch() {
    this.getSearchList()
  },
  onClick(e){
    console.log(e.currentTarget.dataset.prop);
    this.setData({
      query:e.currentTarget.dataset.prop
    })
    this.onSearch()
  },


  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  switchTab(event) {
    var cur = event.detail.current;
    this.setData({
      currentTab: cur,
    });
  },


  getSearchList() {
    request({ url: '/search',
    data:{
      query:this.data.query
    }
    })
      .then(result => {
        this.setData({
          searchList: result.data.data.searchList
        })
        console.log(this.data.searchList)
      })
  },
 
})