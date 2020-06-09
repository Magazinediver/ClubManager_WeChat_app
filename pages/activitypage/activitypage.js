import { request } from "../../request/index.js"
// pages/activitypage/activitypage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityid:'',
    active: 0,
    activityItem:{
      title:'我们一起开飞机',
      status:'火热进行中',
      address:'理四一楼',
      time:'2020-6-20',
      contact:'黄sir 17306411528',
      club:'滑板社',
      describe:'这是一个很好的活动',
      attention:'这个活动只有群众才能参加'
    },
    clubItem:
      {
        name: '流云梦社',
        tag: '热门社团',
        member: '70',
        fans: '200',
        tips: ['动漫', '颜值', 'cosplay'],
        describe: '流云梦社“读万卷书，行万里路”为宗旨，以提升校园人文素质为己任。激发同学们的读书兴趣。传播文化，传播思想，丰富大学生活，充实精神世界，共建良好的读书氛围，引发思想的碰撞。',
      },
  },


  onLoad:function(options){
    // console.log(options)
    
    let i = options.activityid
    // console.log(i);
    
    this.setData({
      activityid : i
    })
    // console.log(this.data.activityid);

    this.getData()
  },

  join(){
    request({ 
      url: '/joinactivity'
    })
      .then(result => {
        
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
          clubItem: result.data.clubItem,
          activityItem: result.data.activityItem
        })
      })
  },

})