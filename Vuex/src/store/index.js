import Vue from 'vue'
import Vuex from 'vuex'
//导入其他
import mutations from "./mutations"
import actions from "./actions"
import getters from"./getters"
import moduleA from "./modules/moduleA"


//1.安装插件
Vue.use(Vuex)

//2.创建对象

//代码抽离,方便查看
//state抽离出来,依然放到index.js里面的
const state = {
    counter: 1000,
    students: [
      {id: 110, name: 'aaa', age: 18},
      {id: 112, name: 'bbb', age: 24},
      {id: 113, name: 'ccc', age: 36},
      {id: 114, name: 'cc1c', age: 36},
    ],
    info:{
      name: 'xxx',
      age: 30
    }
}

//其他部分抽离,新建js文件然后导入.modules因为有多个,要先放入文件夹,然后建js,再导入
const store = new Vuex.Store({
  state,
  mutations,  //mutations必须是同步操作
  actions,//异步操作
  getters,//类似于计算属性,当数据经过一系类变化,再使用时,可以使用
  modules: { //可以将module分离出去
    a: moduleA
 }

})

//3.导出store对象  导出后去main.JS引入挂载
export default  store


