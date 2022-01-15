export default { //类似于计算属性,当数据经过一系类变化,再使用时,可以使用getters
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
}
