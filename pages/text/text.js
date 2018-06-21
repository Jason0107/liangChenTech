// pages/text/text.js

// wx.getLocation({
//   type: 'wgs84',
//   success: (res) => {
//     var latitude = res.latitude // 经度
//     var longitude = res.longitude // 纬度
//   }
// })

// wx.scanCode({
//   success: (res) => {
//     console.log(res)
//   }
// })

Page({

  /**
   * 页面的初始数据
   */

  data: {
    array: [1, 2, 3, 4, 5],
    staffA: {
      firstName: 'Hulk',
      lastName: 'Hu'
    },
    staffB: {
      firstName: 'Shang',
      lastName: 'You'
    },
    staffC: {
      firstName: 'Gideon',
      lastName: 'Lin'
    },
    zero: 0,
    a: 0,
    b: 1,
    
    input_data: [{
        id: 1,
        unique: "unique1"
      },
      {
        id: 2,
        unique: "unique2"
      },
      {
        id: 3,
        unique: "unique3"
      },
      {
        id: 4,
        unique: "unique4"
      },
    ],
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    }
  },

  /**
   * 我加的，点击事件
   */
  tapName: function(event) {
    console.log(event)
  },



  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})