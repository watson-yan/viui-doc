<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Message 消息</h3>
    <button @click="showMessage()" class="button">Default Message</button>
    <button @click="showMessage('info')" class="button info">Info Message</button>
    <button @click="showMessage('success')" class="button success">Success Message</button>
    <button @click="showMessage('alert')" class="button danger">Alert Message</button>
    <button @click="showMessage('warning')" class="button warning">Warning Message</button>
    <br>
    <p>Script</p>
    <pre v-prettify class="prettyprint linenums"><code v-pre>this.$message({
        caption: 'Message Title',   // 消息Title（可不填）
        content: 'Message Content',       // 消息主题
        type: 'Message Type',      // 消息类型：default(不赋值)，info, success, alert, warning
        duration: 5000      // 持续时间（默认5s关闭）
    })</code></pre>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      showMessage(msgType) {
        this.$message({
          caption: 'Message Title',
          content: '这里是展示Message的地方',
          type: msgType,
          duration: 8000
        })
      }
    }
  }
</script>
<style lang="scss">
  
</style>
