<template>
  <div id="app">
<!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!-- <router-link to="/about" active-class="active">关于我们</router-link>-->
<!--    <router-link to="/home">首页</router-link>-->
<!--    <router-link to="/about">关于我们</router-link>-->

<!--
 router-link 其他属性
1. tag 可指定router-link渲染成什么属性 button/li 都行, 默认a标签
2.replace 禁止浏览器的返回
3.router-link-active 默认表示活跃的状态,就是当前谁被点击了,谁就会增加一个类名router-link-active
4.active-class  修改默认活跃状态的类名,就是把router-link-active改成其他名称,但是这样一个个修改很麻烦,
可在配置中统一修改,但是一般不需要用
  -->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于我们</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于我们</router-link>
<!-- 传参的方法一   -->
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/user/3">用户</router-link>-->
    <!-- 传参的方法二   -->
    <router-link :to="{path:'/profile',query: {name: 'aaa', age: 18}}">档案</router-link>
<!-- 这里使用传递对象的方式   -->


    <br>
    <br>
    <br>
<!--    使用按钮点击的方式跳转-->
   <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="profile,user">
      <router-view></router-view>
    </keep-alive>
<!-- keep-alive保持组件不会被频繁的销毁和创建,组件被缓存
exclude排除,排除的组件会被频繁的创建和销毁,记住里面写多个的时候不要加空格
include,包含的组件,会被缓存,一般不用
-->
 <!--  router-view占位 就是内容去哪里渲染  -->
  </div>
</template>

<script>
import * as path from "path";

export default {
  name: 'App',
  data() {
   return{
     userId: 'lisa'
   }
  },
  methods: {
    homeClick() {
      // 通过代码修改路由 vue $router 按钮点击跳或者传参
      this.$router.push('/home',()=>{})
    },
    aboutClick() {
      this.$router.push('/about',()=>{})
    },
    userClick() {
      this.$router.push('/user/'+ this.userId)
     },
    profileClick() {
      this.$router.push({
      path: '/profile',
      query: {
        name: 'bbb',
         age: 100
      }
      })
    }
  }
}
</script>

<style>
.active{
  color: #ff0000;
}
</style>
