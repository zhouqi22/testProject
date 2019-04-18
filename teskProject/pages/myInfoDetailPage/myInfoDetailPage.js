// pages/myInfoDetailPage/myInfoDetailPage.js
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList:[
      {
        title: '头像',
        type: '2',
        content: '/images/banner_02.jpg',
        saveStr: ''
      },
      {
        title: '姓名',
        type: '1',
        content: '发达发',
        saveStr: ''
      },
      {
        title: '昵称',
        type: '1',
        content: '牛栏山',
        saveStr: ''
      },
      {
        title: '职业',
        type: '1',
        content: '程序员',
        saveStr: ''
      },
      {
        title: '年龄',
        type: '3',
        content: '30',
        saveStr: ''
      },
      {
        title: '学历',
        type: '4',
        content: '本科',
        saveStr: ''
      },
      {
        title: '性别',
        type: '4',
        content: '男',
        saveStr: ''
      },
      {
        title: '收入',
        type: '4',
        content: '10000-14999元',
        saveStr: ''
      },
      {
        title: '常驻城市',
        type: '5',
        content: '长沙',
        saveStr: ''
      },
      {
        title: '所在区域',
        type: '5',
        content: '刘洋',
        saveStr: ''
      }
    ]
  },
  clickItem:function(e) {
    let index = e.currentTarget.dataset.itemindex;
    let itemType = this.data.infoList[index].type;
    if (itemType == '2' || itemType == '5') {
      return;
    }
    let parmas = util.getGETParamsJoin({
      type: itemType,
      content: this.data.infoList[index].content,
      title: this.data.infoList[index].title,
      saveStr: this.data.infoList[index].saveStr,
    });
    wx.navigateTo({
      url: '/pages/editPage/editPage?' + parmas,
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