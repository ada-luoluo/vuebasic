<template>
  <div>
    <h1>这是首页</h1>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>

  </div>

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      path: '/home/news'
    }
  },
  //生命周期函数
  created() {
   // document.title = '首页'//可在相应的组件修改title名称,修改浏览器上面的页面title,但是这种太麻烦了,使用Router.beforeEach
  }, //当组件被创建出来后,会在这里进行一次回调
  mounted() {

  },//当组件中的template被挂载在dom的时候,就会回调
  updated() {

  },//当界面发生更新时,(只要界面有改变),就会回调
  destroy() {

  },//销毁时回调
  //以下这两个函数,只有改组件使用了keep-alive时,才有效
  activated() {
   // console.log('activated')
    this.$router.push(this.path);//step1.出于活跃状态时,路径默认显示/home/news

  },//当组件出于活跃时回调
  deactivated() {
    console.log('deactivated')
  },//组件不活跃时回调
  beforeRouteLeave (to, from, next) { //step2.记录离开时的路径
    this.path = this.$route.path;
    console.log(this.$route.path);
    next()
  }//组件内的导航守卫
}
</script>

<style scoped>

</style>
