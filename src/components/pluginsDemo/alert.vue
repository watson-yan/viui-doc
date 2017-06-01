<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Alert 弹窗提醒</h3>
    <button @click="alert()" class="button">Default Alert</button>
    <button @click="alert('info')" class="button info">Alert(Info)</button>
    <button @click="alert('success')" class="button success">Alert(Success)</button>
    <button @click="alert('error')" class="button danger">Alert(Error)</button>
    <button @click="alert('warning')" class="button warning">Alert(Warning)</button>
    <br>
    <p>Script</p>
    <pre v-prettify class="prettyprint linenums"><code v-pre>this.$alert({
        caption: 'Alert Title',   // 提示Title（可不填）
        content: 'Alert Content',       // 提示内容
        type: 'Alert Type',      // 消息类型：default(不赋值)，info, success, error, warning
    }).then(() => {    // 使用了Promise语法糖, 点击确定后可以触发回调
      // 回调
    })</code></pre>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      alert(alertType) {
        const component = this
        component.$alert({
          caption: '组件 props 原子化',
          content: '传递过于复杂的对象使得我们不能够清楚的知道哪些属性或方法被自定义组件使用，这使得代码难以重构和维护',
          type: alertType
        }).then(() => {
          component.$message({
            caption: '回调显示',
            content: '如果有回调就会显示我了',
            type: alertType
          })
        })
      }
    }
  }
</script>
<style lang="scss">
  
</style>
