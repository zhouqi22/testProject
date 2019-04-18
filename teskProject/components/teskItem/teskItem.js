// componetes/teskItem/teskItem.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickedDetail: function() {
      this.triggerEvent('clickTaskDetail', {});
      console.log('==========');
    },
    clickedButton: function() {
    console.log('----');
    },

  }
})
