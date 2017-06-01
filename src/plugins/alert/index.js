import Vue from 'vue'
import Alert from './alert'

const alertBox = document.createElement('div')
document.body.appendChild(alertBox)

const alertComponent = new Vue(Alert).$mount(alertBox)

export default (option) => {
  if (typeof option === 'string') {
    alertComponent.queue.push({
      content: option
    })
  }
  if (typeof option === 'object') {
    alertComponent.queue.push({
      caption: option.caption,
      content: option.content,
      type: option.type,
      cb: option.cb
    })
  }
}

