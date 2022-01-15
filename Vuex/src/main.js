import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //router原理同下
  store, // Vue.prototype.$store = store 只有将store放进来 才会将$store赋值给store
  //这样所有的vue组件都有$store对象
  render: h => h(App)
})
