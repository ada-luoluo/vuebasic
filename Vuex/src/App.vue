<template>


  <div id="app">
    <p>------获取module数据------</p>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>全名1:{{$store.getters.fullName}}</h2>
    <h2>全名2:{{$store.getters.fullName2}}</h2>
    <h2>拼接counter:{{$store.getters.fullName3}}</h2>
    <button @click="editName">异步修改名字</button>

    <p>------验证state是否是响应式------</p>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">更新info</button>

    <h1>demo演示中app.vue与hellovuex引用相同的东西</h1>
    <p>------{{message}}的内容------</p>
    <!--counter 来自于vuexstate.counter-->
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <p>---点击一次,增加多个---</p>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <p>---添加学生---</p>
    <button @click="addStudent">添加学生</button>

    <p>------getters的相关信息------</p>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.overAge}}</h2>
    <h2>超过20岁学生的人数: {{$store.getters.overageLength}}</h2>
    <h2>传入age,这里传入的是18,返回age大于18的学生: {{$store.getters.overAgaStu(18)}}</h2>

    <p>------HelloVuex的内容------</p>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
//导入increment
import {
  increment
} from "./store/mutations-type";

export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data() {
    return{
      message: '我是APP组件',

    }
  },
  methods: {
    add() {
      this.$store.commit(increment) //推荐写法
      //this.$store.commit('increment')
      //使用commit调用vuex里面的方法
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count) {
      //1.普通的提交封装
     //this.$store.commit('incrementCount', count)

      //2.特殊的提交封装 type
      this.$store.commit({
        type:'incrementCount',
        count
      })

    },
    addStudent() {
      const stu = {id: 115, name: 'ddd', age: 30}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
     // this.$store.commit('updateInfo') 这里是使用mutations的方式同步修改信息
     //  this.$store.dispatch('aUpdataInfo')
     //  //action传参可以用payload
     //  this.$store.dispatch('aUpdataInfo', '我是payload')

      //

       this.$store
         .dispatch('aUpdataInfo', '我是携带信信息')
          .then(res => {
            console.log('里面完成了提交');
            console.log(res)
          })
      //index.js promise()then完成后将信息回调给这里,打印


    },

    //module修改名字
    updateName() {
       this.$store.commit('updateName', '555') //module也是直接$store.commit
    },
    editName() {
      this.$store.dispatch('maupdatename')
    }
  }
}
</script>

<style>

</style>
