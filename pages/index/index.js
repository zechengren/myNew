Page({

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
    const random = Math.floor(Math.random()* 20);
    // console.log(random);
    wx.request({
      url: 'https://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start='+random+'&num=20&appkey=ebd139a160380fdf',
      
      success: (result) => {
        // console.log(result);
        
        this.setData({
          newsList: result.data.result.list
          
        })
        
      }
    })
    
    
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // const random = Math.floor(Math.random()* 20);
    // // console.log(random);
    // var that = this;
   

    // wx.request({
    //   url: 'https://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start='+random+'&num=20&appkey=ebd139a160380fdf',

    //   success: (result) => {
        
    //     console.log(result);
        
    //     this.setData({
    //       newsList: newsList.contat(result.data.result.list)
    //     })
        
    //   }
    // })
   

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})