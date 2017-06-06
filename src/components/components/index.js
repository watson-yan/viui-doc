import Vue from 'vue'
import Pagination from './pagination'
import Tabs from './tabs'
import Dropdown from './dropdown'
import Datepicker from './datepicker'
import Select from './select'

export default () => {
  Vue.component('Pagination', Pagination)
  Vue.component('Tabs', Tabs)
  Vue.component('Dropdown', Dropdown)
  Vue.component('Datepicker', Datepicker)
  Vue.component('viSelect', Select)
}
