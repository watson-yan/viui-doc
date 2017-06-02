import message from './message/index'
import alert from './alert/index'
import confirm from './confirm/index'
import loading from './loading/index'

export default {
  install(Vue) {
    Vue.prototype.$message = message
    Vue.prototype.$alert = alert
    Vue.prototype.$confirm = confirm
    Vue.prototype.$showLoading = loading.showLoading
    Vue.prototype.$hideLoading = loading.hideLoading
  }
}

