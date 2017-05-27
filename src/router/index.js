import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// Element
import Button from '@/components/element/button'
import Tag from '@/components/element/tag'
// Form
import Input from '@/components/form/input'
import Radio from '@/components/form/radio'
import Checkbox from '@/components/form/checkbox'
import Switch from '@/components/form/switch'
// Table
import Table from '@/components/table/table'
// Color
import Color from '@/components/color/color'
// Grid
import Grid from '@/components/grid/grid'

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
    { path: '/tag', name: 'Tag', component: Tag },
    /*
    * Form
    */
    { path: '/input', name: 'Input', component: Input },
    { path: '/radio', name: 'Radio', component: Radio },
    { path: '/checkbox', name: 'Checkbox', component: Checkbox },
    { path: '/switch', name: 'Switch', component: Switch },
    /*
    * Table
    */
    { path: '/table', name: 'Table', component: Table },
    /*
    * Color
    */
    { path: '/color', name: 'Color', component: Color },
    /*
    * Color
    */
    { path: '/grid', name: 'Grid', component: Grid }
  ]
  // mode: 'history'
})
