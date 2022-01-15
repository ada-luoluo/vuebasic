//定义模块 如果有需要抽离 可以定义模块 这里可以存放多个模块  以下a就是一个模块

export default {
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
