// components/w-goods-item/w-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsitem: {
      type: Object,
      value: {}
    }
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
    // 跳转到详情页
    itemClick(e) {
      // console.log(this.data)
      const iid = this.data.goodsitem.iid;
      // console.log(iid)
      wx.navigateTo({
        url: `/pages/detail/detail?iid=${iid}`,
      })
    }
  }
})
