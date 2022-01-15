

import {increment} from "./mutations-type";//常量写法导入
//所有的mutations都在这里
export default {

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
}
