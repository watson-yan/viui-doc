import message from './message/index'
import alert from './alert/index'

export default {
  install(Vue) {
    Vue.prototype.$message = message
    Vue.prototype.$alert = alert
  }
}

