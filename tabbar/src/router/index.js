//先导入vue和vue-router
import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/home/Home";
import Category from "../views/category/Category";
import Cart from "../views/cart/Cart";
import Profile from "../views/profile/Profile";

const home = () => import('../views/home/Home') //组件首字母要大写
const category = () => import('../views/category/Category')
const cart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/Profile')

//1.安装插件
Vue.use(Router)

//2.创建路由对象
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/profile',
      component: profile
    },
  ],
  mode: 'history', // 模式可使用H5的history,默认的那个/#就没了
})

//3.导出router
export default  router
