import Vue from 'vue'
import Vuex from 'vuex'

//导入increment,下面可以直接使用
import {
  increment
} from "./mutations-type";

//1.安装插件
Vue.use(Vuex)

//2.创建对象

//module
const moduleA = {
  state: {
    name: 'moduleA的name-sss'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state, getters) { //这里的getters就是外层的getters
      return getters.fullName + '222'
    },
    fullName3(state, getters, rootState) { //这里的rootState就是下面的store里面的state
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    maupdatename(context) {  //context对应的是mutations相关
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', 'AAA') //updateName拿的就是mutations里面的updateName
      },1000)

    }
  },
}
//store
const store = new Vuex.Store({
  state: {  //state保存状态,state里面定义的数据都是响应式的
    //这里固定放对象
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
  },
  //mutations必须是同步操作
  mutations: {  //只要修改state的状态,必须通过Mutations mutation的操作必须是同步的
     //定义方法
    // increment(state) {  //这里默认有state
    //    state.counter++
    // },

    //使用常量   写mutations时最好用这种方式来写
    [increment](state) {  //这里默认有state
      state.counter++
    },

    decrement(state) {
      state.counter--
    },
    //普通的提交风格,对应 app.vue addCount 1
    // incrementCount(state, count) {
    //   console.log(count)
    //   state.counter +=count
    // },

    //特殊的提交风格,对应app.vue的2
    incrementCount(state, payload) {  //需要从payload里面取出count,因为这里是对象
      state.counter +=payload.count
    },
    addStudent(state, stu) { //传递参数, 参数也可以是对象
      state.students.push(stu)
    },
    //响应式添加数据 增改删
    updateInfo(state) {
      //修改属性
      state.info.name ='bbb'
      //state.info['address'] = 'LA' 用这个方式添加的数据不是响应式的
      //增加属性  给info增加address
      Vue.set(state.info, 'address', 'LA') // Vue.set是响应式的
      //删除属性
      Vue.delete(state.info, 'age')
    }

  },
  //异步操作
  actions: { //如果有异步操作,一定要在actions(发送网络请求)
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


  },
  getters: { //类似于计算属性,当数据经过一系类变化,再使用时,可以使用getters
     powerCounter(state) {//例如这里counter需要计算,最好使用getters,里默认有默认参数,就是state
        return state.counter * state.counter //counter的平方
     },
     overAge(state) {
       return state.students.filter(s => s.age > 20) //拿到超过20岁的学生数据
     },
    overageLength(state, getters) {// 这里的getters就是外层的getters,这里可以使用多个参数,再拿getters的其他内容
      return getters.overAge.length  //获取超过20岁学生的人数
    },
    overAgaStu(state) { //getters传参
       // return function (age) { //让别人传入age
       //   return state.students.filter(s => s.age > age)
       // }
        //将上面写成箭头函数
      return  age => {
        return state.students.filter(s => s.age > age)
      }

    }
  },
  modules: {  //定义模块 如果有需要抽离 可以定义模块 这里可以存放多个模块  以下a就是一个模块
  //    a: {  //模块里面可以再定义state\mutations等, 也可以嵌套模块,但是一般不需要嵌套
  //      state: {},
  //      mutations: {},
  //      getters: {},
  //      actions: {},
  //    }

    //可以将module分离出去
    a: moduleA

   }

})

//3.导出store对象  导出后去main.JS引入挂载
export default  store

//以上步骤同使用vue router相同


//ES6对象的解构
const obj = {
  name: 'aaa',
  age: 18
}

//以往ES5语法想拿到obj的数据需要
// const name = obj.name;
// const age = abj.age;

//E6的写法
const {name, age} = obj; //这里是按照名称拿数据的,与顺序无关
