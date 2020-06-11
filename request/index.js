let openid = wx.getStorageSync("openid");
export const request =(params)=>{
  //baseurl
  const baseUrl = "https://www.ximate.tech:8000/clubmanage/app"
  return new Promise((resolve,reject)=>{
    let openid = wx.getStorageSync("openid");
    // console.log(openid + "111");  
    if (!openid) { // token不存在去重新登录
      wx.redirectTo({
        url: '/pages/login/login',
      })
    } else{
      wx.request({
        ...params,
        url:baseUrl+params.url,
        header: {
          Authorization: openid
        },
        success:(result)=>{
          resolve(result)
        },
        fail:()=>{
          reject(err)
        }
      });
    }
    
  })
  
  
  
}