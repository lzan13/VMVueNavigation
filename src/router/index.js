import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
