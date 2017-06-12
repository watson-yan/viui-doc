// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Viui from 'viui'
import App from './App'
import router from './router'

// 引入Viui
Vue.use(Viui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/* 调用 Google code prettify*/
Vue.directive('prettify', {
  inserted() {
    // const c = el.querySelector('code')
    // c.innerHTML = c.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    window.prettyPrint()
  }
})
