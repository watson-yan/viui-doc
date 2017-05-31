import Message from './message/index'

export default {
  install(Vue) {
    Vue.prototype.$message = Message
  }
}

