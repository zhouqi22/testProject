// pages/myPage/myPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectList: [
      {
        "icon": '/images/user_ico_01.png',
        "content":"实名认证",
      },
      {
        "icon": '/images/user_ico_02.png',
        "content": "我的好友",
      },
      {
        "icon": '/images/user_ico_03.png',
        "content": "关注门店",
      },
      {
        "icon": '/images/user_ico_03.png',
        "content": "站内信"
      }
    ]

  },
  clickMyMoney: function(e) {
   wx.navigateTo({
     url: '/pages/myMoneyDetail/myMoneyDetail',
   })
  },
  clickedItem: function(e){
   var index = e.currentTarget.dataset.index;
   if (index == 3) {
    wx.navigateTo({
      url: '/pages/systemMessagePage/systemMessagePage',
    })
    return;
   }
   wx.showToast({
     title: '模块开发中...',
   })
  },
  clickedInfoDetail: function(e){
    wx.navigateTo({
      url: '/pages/myInfoDetailPage/myInfoDetailPage',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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