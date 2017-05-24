import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Button from '@/components/element/button'
import Tag from '@/components/element/tag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    /*
    * Element
    */
    { path: '/button', name: 'Button', component: Button },
    { path: '/tag', name: 'Tag', component: Tag }
  ]
  // mode: 'history'
})
