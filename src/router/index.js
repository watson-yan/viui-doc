import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// Components
import Pagination from '@/components/components/pagination-demo'
import Tabs from '@/components/components/tabs-demo'
import Dropdown from '@/components/components/dropdown-demo'
import Datepicker from '@/components/components/datepicker-demo'
import Select from '@/components/components/select-demo'
// Plugins
import Message from '@/components/pluginsDemo/message'
import Alert from '@/components/pluginsDemo/alert'
import Confirm from '@/components/pluginsDemo/confirm'
import Loading from '@/components/pluginsDemo/loading'
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
// Helper
import Helper from '@/components/helper/helper'
import Text from '@/components/helper/text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    /*
    * Components
    */
    { path: '/pagination-demo', name: 'Pagination', component: Pagination },
    { path: '/tabs-demo', name: 'Tabs', component: Tabs },
    { path: '/dropdown-demo', name: 'Dropdown', component: Dropdown },
    { path: '/datepicker-demo', name: 'Datepicker', component: Datepicker },
    { path: '/select-demo', name: 'Select', component: Select },
    /*
    * Plugins
    */
    { path: '/message', name: 'Message', component: Message },
    { path: '/alert', name: 'Alert', component: Alert },
    { path: '/confirm', name: 'Confirm', component: Confirm },
    { path: '/loading', name: 'Loading', component: Loading },
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
    * Flex grid
    */
    { path: '/grid', name: 'Grid', component: Grid },
    /*
    * Helper
    */
    { path: '/helper', name: 'Helper', component: Helper },
    { path: '/text', name: 'Text', component: Text }
  ]
  // mode: 'history'
})
