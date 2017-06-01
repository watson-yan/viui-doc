<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Alert 弹窗提醒</h3>
    <button @click="alert()" class="button">Default Alert</button>
    <br>
    <p>Script</p>
    <pre v-prettify class="prettyprint linenums"><code v-pre>this.$alert({
        caption: 'Alert Title',   // 提示Title（可不填）
        content: 'Alert Content',       // 提示内容
        type: 'Alert Type',      // 消息类型：default(不赋值)，info, success, alert, warning
        cb: () => {}      // 点击确定按钮时的回调函数
    })</code></pre>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      alert() {
        const component = this
        component.$alert({
          caption: '这是一段消息内容',
          content: '这里应该显示的是消息内容的主体',
          cb() {
            component.$message({
              caption: '回调显示',
              content: '如果有回调就会显示我了',
              type: 'info'
            })
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  
</style>
