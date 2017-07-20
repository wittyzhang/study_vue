import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode:'history', //history 模式可以去掉地址栏的#号  hash 模式在地址增加一个#
  routes: [
    {
      path: '/',
      name: 'Hello',//name传参
      component: Hello
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle', //可以在括号中使用用正则
      component:Params,
      // beforeEnter:(to, from, next) => {
      //   console.log(to);
      //   console.log(from);
      //   // console.log(to);
      //   next(); //相当于跳转的开关 可以跳转到指定地址
      // }
    },
    {
      path:'/goHome',
      redirect:'/' //路由重定向
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle' //重定向带参数
    },
    {
      path:'/hi1',
      component: Hi1,
      alias: '/jspang'  //区别于重定向的是地址栏不一样
    },
    {
      path:'*',
      component: Error
    }
    // {
    //   path: '/hi',
    //   component: Hi,
    //   children:[
    //     {path:'/',name:'Hello/Hi',component:Hi},
    //     {path:'hi1',name:'hi1',component:Hi1},
    //     {path:'hi2',name:'hi2',component:Hi2},
    //   ]
    // }
  ]
})
