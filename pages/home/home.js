// pages/home/home.js

function Detail(name, phone) {
  this.name = name;
  this.phone = phone;
}
function Info() {
  this.details = [];
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    info: {}
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
        let back = JSON.parse(res.data);
        console.log(res.data);
        console.log(back.Table[1])
        console.log(back.Table[0].name)
        //console.JSON;
        _this.setData({
          info: new Info(),
        });
        for (var i = 0; i < back.Table.length; i++)
        {
          console.log(back.Table[i]);
          let infom = _this.data.info;
          infom.details.push(new Detail(back.Table[i].name, back.Table[i].phone));
          _this.setData({
            info: infom
          });
        }
        console.log(_this.data.info)
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