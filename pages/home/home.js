// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    motto: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading(Object)
    var _this = this;
    wx.request({
      url: 'https://www.rosyclouds.top/api/lost',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        let back = res.data
        console.log(res.data);
        console.log(JSON.parse(back).Table[0])
        console.log(JSON.parse(back).Table[0].name)
        _this.setData({ motto: JSON.parse(back).Table[0].name});
        console.JSON;

        
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

  },

  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})