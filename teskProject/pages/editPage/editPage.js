// pages/editPage/editPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rangeData:[
      '小学',
      '中学',
      '高中',
      '本科',
      '研究生',
      '博士'
    ],
    index: 0,
    type: '1',
    saveStr: 'aaa',
    inputContent: '',
    showPicker: '',
  },

  clickSaveBtn: function(e){
    wx.showToast({
      title: '保存成功！',
    })
    setTimeout(function(){
      wx.navigateBack({
      });
    }, 1000);
    
  },
  bindPickerChange:function(e){
    console.log('# bindPickerChange:', e.detail);
    this.setData({
      showPicker: this.data.rangeData[e.detail.value]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('# option', options);
    this.data.type = options.type;
    this.data.saveStr = options.saveStr;
    this.data.inputContent = options.content;
    this.data.showPicker = options.content;
    this.setData({
      type: this.data.type,
      showPicker: this.data.showPicker,
      inputContent: this.data.inputContent,
    })
    wx:wx.setNavigationBarTitle({
      title: options.title,
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