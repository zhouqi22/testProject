// components/ErrorComponent/ErrorComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    errorType: {  // 1表示没有祝福，2表示没有网络
      type: String,
      value: '1',
      observer: function(n, o) {
        if (n == '1') {
          this.setData({
            imageUrl: '../../images/notGoods.png',
            errorContent: '暂无相关信息！',
            errorDes:''
          })
        } else if(n == '2'){
          this.setData({
            imageUrl: '../../images/notNetworking.png',
            errorContent: '没有网络！',
            errorDes: '请检查您的网络状况'
          })
        } else if (n == '3'){
          this.setData({
            imageUrl: '../../images/notGoods.png',
            errorContent: '此祝福已经被删除！',
            errorDes: ''
          })
        }
      }
    },
    showView: {
      type: Boolean,
      value: false
    },
    showSquare:{
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageUrl: '../../images/notGoods.png',
    errorContent: '暂无相关信息',
    errorDes: ''
  },

  goSquare:function(){
       
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goSquare: function (e) {
      this.triggerEvent('goSquare')
    },
  }
})
