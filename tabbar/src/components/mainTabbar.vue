<template>

  <tabbar>
    <!-- 这里记得加上slot的名称  activeColor可以动态传当前颜色 -->
    <tabbar-item path="/home" activeColor="#1296db">
      <img src="@/assets/img/tabbar/index.svg" slot="item-icon">
      <img src="@/assets/img/tabbar/index-active.svg" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category" activeColor="#1296db">
      <img src="@/assets/img/tabbar/classification.svg" slot="item-icon">
     <img src="@/assets/img/tabbar/cate-active.svg" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="#1296db">
      <img src="@/assets/img/tabbar/cart.svg" slot="item-icon">
      <img src="@/assets/img/tabbar/cart-active.svg" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="#1296db">
      <img src="@/assets/img/tabbar/profile.svg" slot="item-icon">
      <img src="@/assets/img/tabbar/profile-active.svg" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tabbar-item>

  </tabbar>

</template>

<script>
//tabbar封装成了组件,所以要用import引入,再components引入
import Tabbar from './tabbar/tabbar'
// import tabbarItem from "./tabbar/tabbarItem";
//使用src别名的方式,写路径 src文件夹的路径 = @
import tabbarItem from "@/components/tabbar/tabbarItem"

//给路径取别名  在build/webpack.base.conf.js 中修改
// '@': resolve('src'),
// 'components': resolve('@/components'),
// 'views': resolve('@/view'),

export default {
  name: "mainTabbar",
  components: {
    Tabbar,
    tabbarItem
  }
}
</script>

<style scoped>

</style>
