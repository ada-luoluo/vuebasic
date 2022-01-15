<template>
  <div id="app">
    <router-view></router-view>
    <main-Tabbar></main-Tabbar>
  </div>
</template>

<script>
import mainTabbar from "./components/mainTabbar";

export default {
  name: 'App',
  components: {
    mainTabbar,

  }
}
</script>

<style>
/*在style中引入样式表使用@import后加路径 ./表示同一个目录下*/
@import "./assets/css/base.css";

</style>
