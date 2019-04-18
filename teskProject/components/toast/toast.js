// component/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    opacity: 1,
    content: "",
    animationData: null,

  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    show(title) {
      if(title == null){
        title="";
      }
      //初始显示
      this.setData({
        isShow: true,
        content: title
      });
      var self = this;
      setTimeout(function () {
        //逐渐隐藏
        var animation = wx.createAnimation({
          duration: 1000,
          imingFunction: 'ease'
        });
        animation.opacity(0).step();
        self.setData({
          animationData: animation.export(),
        });
        //恢复初始
        setTimeout(function () {
          self.setData({
            isShow: false,
            opacity: 1,
            content: ""
          })
        }, 2000);
      }, 700);
    }
  }
})
