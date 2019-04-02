import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import About from './views/About.vue'
import Donate from './views/Donate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      /**
       * 下边这种方式属于惰性加载，路由级别的代码分解，这将为该路由生成一个单独的块(大约.[hash].js)
       */
      // component: () => import('./views/About.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate,
      /**
       * 下边这种方式属于惰性加载，路由级别的代码分解，这将为该路由生成一个单独的块(大约.[hash].js)
       */
      // component: () => import('./views/Donate.vue')
    }
  ]
})
