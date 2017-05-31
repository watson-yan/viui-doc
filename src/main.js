// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入组件库
import components from './components/components/index'
// 引入插件库
import plugins from './plugins/index'
// import message from './plugins/message/message'

Vue.config.productionTip = false
Vue.use(components)
Vue.use(plugins)
// Vue.prototype.$plugins = plugins

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
