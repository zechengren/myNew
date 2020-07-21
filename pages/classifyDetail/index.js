// pages/classifyDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: []
     
  },
  handleDetail(e) {
    // console.log(e);
    const content = e.currentTarget.dataset.content;
    
    wx.setStorage({
      data: content,
      key: 'data',
      
      success: (res) => {
        console.log("保存成功");
        
      }
    })

    wx.navigateTo({
      url: '../detail/index',
     
      success: (result) => {
        console.log("跳转成功");
        
      }
    })
  },
 
  onLoad: function (options) {
    
    wx.request({
      url: 'https://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=0&num=20&appkey=ebd139a160380fdf',
      
      success: (result) => {
        // console.log(result);
        this.setData({
          newsList: result.data.result.list
          // numLength: result.data.result.list.length
        })
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'name',
      success: (result) => {
        console.log(result.data);
        // this.setData({
        //   name: result.data
        // })
        const name = result.data;
        wx.request({
          url: 'https://api.jisuapi.com/news/get?channel='+name+'&start=0&num=10&appkey=ebd139a160380fdf',
          
          success: (result) => {
            // console.log(result.data.result.list);
            this.setData({
              newsList: result.data.result.list
            })
            
          }
        })
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})