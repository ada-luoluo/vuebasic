import Vue from 'vue'
//导入vue
import Router from 'vue-router'
//导入路由

// import home from '@/components/home'
// import about from'@/components/about'
// import user from'@/components/user'
//使用路由懒加载的写法的话,以上import的方式就不需要了

//以下是路由懒加载的写法,导入路由,一个路由懒加载,打包之后对应一个js文件
//以后用这种写法
const home = () => import('../components/home')
const homeNews = () => import('../components/homeNews')
const homeMessage = () => import('../components/homeMessage')

const about = () => import('../components/about')
const user = () => import('../components/user')
const profile = () => import('../components/profile')

Vue.use(Router)
//1.通过vue.use(插件),安装插件


//2.创建vuerouter对象 3.导出
const router = new Router({
  //4.配置映射关系
  routes: [
    {
      path: '/', //非嵌套页面前面必须要有/
       redirect: '/home'  //redirect重定向,默认打开是首页,这里是默认路劲
    },
    {
      path: '/home',
      component: home,
      meta: {
        title:'首页'
      },
      //嵌套路由
      children: [
        // {
        //   path: '/',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: homeNews
        },
        {
          path: 'message',
          component: homeMessage
        }
      ]
    },
    {
      path: '/about', //非嵌套页面前面必须要有/
      component: about,
      meta: {
        title:'关于我们'
      },
      //路由独享守卫,进入页面之前执行,其他可以看vue router官网
      beforeEnter: ((to, form, next) => {
        console.log('aaaa')
        next()
      }),
    },
    {
      path: '/user/:userId', //记得加冒号,代表传值
      component: user,
      meta: {
        title:'用户'
      },
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        title:'档案'
      },
    }
  ],
  mode: 'history', // 模式可使用H5的history,默认的那个/#就没了
  linkActiveClass: 'active' //统一修改当前状态的类名的方式

})
//前置钩子(钩子就是回调)
//全局导航守卫,监听页面跳转
router.beforeEach((to, form, next) => {
  //从form跳转到to
   // document.title = to.title //但是现在to.title里面没有东西,但是他的类型是router,所以可以去router里面弄一个title
  //document.title = to.meta.title //如果页面没有嵌套路由,可以使用这种方式

   document.title = to.matched[0].meta.title //拿到meta的title
  //next必须执行
  next()
})
export default router
