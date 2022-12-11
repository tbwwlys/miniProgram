// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  // 接收外界传值的属性
  properties: {
    titles: {
      // 声明一下 一定要给个数组 校验
      type: Array,
      // 默认值是空的
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      // 1.设置最新的index
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      
      // 2.发出时间
      const data = {index: this.data.currentIndex}
      // 向外报告
      this.triggerEvent("tabclick", data, {})
    },
    setCurrentIndex(index) {
      console.log(index)
      this.setData({
        currentIndex: index
      })
    }
  }
})