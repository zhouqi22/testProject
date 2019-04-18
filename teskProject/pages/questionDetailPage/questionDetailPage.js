// pages/questionDetialPage/questionDetailPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHidden: true,
    aaa_style: 'aaa_animotion',
    animation_1: '',
    radioData:[
      {
        isSelect: false,
        content: 'sdfasf'
      },
      {
        isSelect: false,
        content: '是'
      },
      {
        isSelect: false,
        content: '否'
      },
      {
        isSelect: false,
        content: 'sdfasd为恶犬热热我确认委屈热热我却惹我去热热我却惹我惹我惹我去热情热热我却热情为f'
      }
    ],
    checkboxData:[
      {
        isSelect: false,
        content: 'sdfasddasfdafdsfasccxsdsa sfdafdsafa fdafdsafdsaf'
      },
      {
        isSelect: false,
        content: '去热热我却惹我惹我惹范德萨发大我去热情热热我却热情为f'
      },
      {
        isSelect: false,
        content: '去热热我却惹我惹范德发大水范德萨分否多少啊发送 范德萨范德萨否范德萨饭撒风阿方索大 范德萨范德萨饭撒范德萨f s萨饭撒fdaf范德萨发大我惹我去热情热热我却热情为f'
      },
      {
        isSelect: false,
        content: '去热热我却惹我惹范德萨分范德萨范德萨发范德萨发大睡范德萨分卅饭店范德萨范德萨饭店啊范德萨分师傅多少啊范德萨范德萨否范德萨分否安抚范德萨范德萨发大发范德萨范德萨f d我惹我去热情热热我却热情为f'
      }
    ],
    images: [
      {
        imageUrl: '/images/banner_02.jpg',
      },
      {
        imageUrl: '/images/banner_02.jpg',
      }
    ]
  },
  
  // 点击我还行说
  clickIWantToSay: function(e) {
    if (!this.data.isHidden) return;
   this.setData({
     isHidden: false,
   });
   this.setData({
     aaa_style: 'aaa_animotion'
   })
  },

  closeIwantToSay: function(e) {
    this.setData({
      isHidden: true,
      aaa_style: ''
    });
  },
// 选择照片
  clickAddPhoto: function(e) {
    console.log('#clickAddPhoto');
    var self = this;
    wx.chooseImage({
      sourceType: ['camera'],
      success: function(res) {
        self.data.images.push({ imageUrl: res.tempFilePaths[0]});
        self.setData({
          images: self.data.images
        })
      },
      fail: function(err) {
        console.log('#fail', err);
      }
    })

  },
  //删除照片
  deleteImage: function (e) {
     var index = e.currentTarget.dataset.index;
     this.data.images.splice(index, 1);
     this.setData({
       images: this.data.images,
     })
  },
  // 预览照片
  preImage:function(e) {
    var index = e.currentTarget.dataset.index;
    let imagePath = this.data.images[index].imageUrl;
    wx.previewImage({
      current: imagePath,
      urls: [imagePath]
    })
  },
 handleRadio: function(e) {
    // console.log('=====', e.currentTarget.dataset.index)
    for (let i = 0; i < this.data.radioData.length; i++) {
      if (e.currentTarget.dataset.index == i) {
        this.data.radioData[i].isSelect = true;
      } else {
        this.data.radioData[i].isSelect = false;
      }
    }
    this.setData({
      radioData: this.data.radioData
    })
  },
  handleCheckbox: function(e){
    this.data.checkboxData[e.currentTarget.dataset.index].isSelect = !this.data.checkboxData[e.currentTarget.dataset.index].isSelect;
    this.setData({
      checkboxData: this.data.checkboxData
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