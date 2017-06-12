import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// Demos
import Demo1 from '@/components/demo/demo1'
import Demo2 from '@/components/demo/demo2'
import Demo3 from '@/components/demo/demo3'
import About from '@/components/demo/about'
// Components
import Pagination from '@/components/components/pagination-demo'
import Tabs from '@/components/components/tabs-demo'
import Dropdown from '@/components/components/dropdown-demo'
import Datepicker from '@/components/components/datepicker-demo'
import Select from '@/components/components/select-demo'
import Upload from '@/components/components/upload-demo'
import Slide from '@/components/components/slide-demo'
// Plugins
import Message from '@/components/pluginsDemo/message'
import Alert from '@/components/pluginsDemo/alert'
import Confirm from '@/components/pluginsDemo/confirm'
import Loading from '@/components/pluginsDemo/loading'
// Element
import Button from '@/components/element/button'
import Tag from '@/components/element/tag'
import Input from '@/components/element/input'
import Radio from '@/components/element/radio'
import Checkbox from '@/components/element/checkbox'
import Switch from '@/components/element/switch'
import Table from '@/components/element/table'
// Grid
import Grid from '@/components/grid/grid'
// Helper
import Color from '@/components/helper/color'
import Helper from '@/components/helper/helper'
import Text from '@/components/helper/text'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    /*
    * Demos
    */
    { path: '/demo1', name: 'Demo1', component: Demo1 },
    { path: '/demo2', name: 'Demo2', component: Demo2 },
    { path: '/demo3', name: 'Demo3', component: Demo3 },
    /*
    * Components
    */
    { path: '/pagination-demo', name: 'Pagination', component: Pagination },
    { path: '/tabs-demo', name: 'Tabs', component: Tabs },
    { path: '/dropdown-demo', name: 'Dropdown', component: Dropdown },
    { path: '/datepicker-demo', name: 'Datepicker', component: Datepicker },
    { path: '/select-demo', name: 'Select', component: Select },
    { path: '/upload-demo', name: 'Upload', component: Upload },
    { path: '/slide-demo', name: 'Slide', component: Slide },
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
