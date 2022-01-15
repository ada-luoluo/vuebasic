import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
//
// Vue.prototype.$ajax = axios  //使用cli2 要加上这句


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({ //默认情况下是get请求
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'  //默认是get, 如果想自定义请求方式,可使用method
// }).then(res => {
//   console.log(res)
// })
//
// // axios.get()
// // axios.post()
//
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=3', //拼接的方式
// }).then(res => {
//   console.log(res)
// })
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: { //不拼接的方式
//      type: 'sell',
//     page:1
//   }
// }).then(res => { //只需要再then这里拿结果就可以了
//   console.log(res)
// })
//
//
// //发送多个并发请求,而且需要2个请求同时到达才可以继续下一步
//
// //axios并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: { //不拼接的方式
//     type: 'sell',
//     page:1
//   }
// // })]).then(results =>{  //直接拿全部的results
// //    console.log(results)
// //   })
// //分别拿2个结果
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))



// 全局配置!!!!!!!! .all是全局配置进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
// axios.defaults.timeout = 5000 //甚至访问接口的超时时间, 可以不设置.超时后可以有其他操作
//
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page:1
//   }
// })]).then(results =>{  //直接拿全部的results
//    console.log(results)
//   })



//如果服务器提供的接口地址出现不一样的情况

//创建axios的实例  这样每个实例都自己独立的配置   实例1
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/hy66',
//   timeout:5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res =>{
//   console.log(res)
// })
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page:1
//   }
// }).then(res =>{
//   console.log(res)
// })

//实例2  以下是演示 没有实际的接口地址
// const instance2 = axios.create({
//   baseURL: 'http://222.555.27.44:8000', //另外一个不同的借口地址
//   headers: {  //如果有单独的headers 也可以单独加
//
//   }
// })
//
// instance2({
//   url: '/home/multidata'
// }).then(res =>{
//   console.log(res)
// })

// 封装request模块
import {request} from './network/request';

//最终方案
request({
  url: '/home/multidata'
}).then(res =>{
  console.log(res)
}).catch(err =>{
  console.log(err)
})



// 方法1
// request({
//  url: '/home/multidata'
// }, res => { //为了拿到结果 这里必须再传入一个函数 就是request的 succ
// console.log(res)
// }, err => {
//   console.log(err)
// })

//方法2
// request({
//   baseConfig: {
//
//   },
//   success: function (res) {
//
//   },
//   failture: function (err) {
//
//   }
// })
