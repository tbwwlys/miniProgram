import request from './network.js'
// 向外提供了 getMultiData 方法    
export const  getMultiData = () => {
  //如何返回什么东西，上面有then方法
  // 解决js 异步的良药
    // 立即执行一个耗时任务
    // resolve thenable
    return request({
      url: '/home/multidata',
    })
}


// export const getProducts = (type,page) => {
//   return request({
//     url: '/home/data',
//     data: {
//       type,
//       page
//     }
//   })
// },

export const getProduct = (type, page) => {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}