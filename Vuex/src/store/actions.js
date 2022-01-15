export default {
 //如果有异步操作,一定要在actions(发送网络请求)
  //actions一步修改state里面的对象,必须先通过mutations, 不可以直接修改
  // aUpdataInfo(context, payload) {  //这里的默认参数是context, 在这里可以理解为content是store
  //   //用setimeout模拟网络请求 这里也可以增加payload传参
  //   setTimeout(() => {
  //      context.commit('updateInfo') //必须经过mutations
  //       console.log(payload)
  //   },1000)
  // }

  //
  aUpdataInfo(context, payload) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      context.commit('updateInfo');
      console.log(payload);
      resolve('1111')
    }, 1000)
    // 这里如果完成了,就会返回1111给到页面
  })
}



}
