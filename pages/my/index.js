Page({

  /**
   * 页面的初始数据
   */
  data: {
    personList: {}
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getStorage({
    //   key: 'personList',
    //   success: (result) => {
    //     console.log(result.data);
    //     this.setData({
    //       personList: result.data
    //     })
    //     // console.log(personList);
        
        
    //   }
    // })
  },

  
  onShow: function () {
    wx.getStorage({
      key: 'personList',
      
      success: (result) => {
        console.log(result.data);
        this.setData({
          personList: result.data
        })
        // console.log(personList);
        
        
      }
    })
  },

  
  
})