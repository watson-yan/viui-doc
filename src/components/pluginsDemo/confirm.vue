<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Confirm 确认框</h3>
    <button @click="confirm()" class="button">Confirm</button>
    <br>
    <p>Script</p>
    <pre v-prettify class="prettyprint linenums"><code v-pre>this.$confirm({
        caption: 'confirm Title',   // 确认框Title（可不填）
        content: 'confirm Content',       // 内容
    }).then(() => {    // 使用了Promise语法糖, 点击确定后可以触发回调
      // 确认的回调
    }).catch(() => {
      // 取消的回调
    })</code></pre>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      confirm() {
        this.$confirm('你是否通过了终极考验你是否通过了终极考验你是否通过了终极考验你是否通过了终极考验？').then(() => {
          this.$message({
            caption: '通过',
            content: '恭喜你，通过了考验',
            type: 'success'
          })
        }).catch(() => {
          this.$message({
            caption: '拒绝',
            content: '很遗憾，你被拒绝了',
            type: 'alert'
          })
        })
      }
    }
  }
</script>
<style lang="scss">
  
</style>
