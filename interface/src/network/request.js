// 可封装多个网络请求
import axios from  'axios'

//最终方案!!!!!!
export function request(config) {
  //1.创建axios的实例
  const instance = axios.create( { //create返回的就是promise 不需要在加
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  //2.axios拦截器
 // axios.intercetors  全局拦截
 //  instance.interceptors.request.use(config => {  //拦截请求
 //    //拦截请求的作用
 //    //1.比如config中的信息不符合服务器的要求,可转化
 //    //2.每次发送网络请求的时候,需要一个请求的图标,类似于加载中..... 请求成功后隐藏
 //    //3.某些网络请求必须携带一些特殊的信息,比如token,未登录的跳转登录页
 //   console.log(config);
 //   return config //拦截到config之后,记得一定要返回
 //
 //
 //  },err =>{  //网络请求失败,会来到这里.比如网络不行,一般用不上
 //    console.log(err)
 //  });


  instance.interceptors.request.use(res =>{ //拦截响应
     console.log(res)
    return res  //拦截处理后记得返回数据!!!
  }, err =>{
    console.log(err)
  });


  //3.发送网络请求
   return instance(config) //这里return promise
 }


//Promise方法
// export  function request(config) {
//  return new Promise((resolve, reject) => {
//    //1.创建axios的实例
//    const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/hy66',
//     timeout: 5000
//   })
//    //发送真正的网络请求
//    instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//      reject(err)
//     })
//  })
// }


//方法二
// export function request(config) {  //只传config,必须穿success
//   //1.创建axios的实例
//   const instance = axios.create( {
//     baseURL: 'http://152.136.185.210:7878/api/hy66',
//     timeout: 5000
//   })
//
//   //2.发送网络请求
//   instance(config.baseConfig) //要从config里面取出来success\failture
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failture(err)
//     })
//  }


// 方法1:传入3个参数
// export function request(config, success, failture) {  //需要传入3个参数
//   //1.创建axios的实例
//   const instance = axios.create( {
//     baseURL: 'http://152.136.185.210:7878/api/hy66',
//     timeout: 5000
//   })
//
//   //2.发送网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failture(err)
//     })
// }



 // export function request1() {  //多个网络请求
 //
 // }
