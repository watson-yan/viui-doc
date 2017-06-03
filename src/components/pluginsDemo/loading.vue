<template>
  <div class="content">
      <h3 class="title fg-darkCyan">Loading 加载动画</h3>
      <button @click="showLoading" class="button">Loading</button>
<p>Script</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>showLoading() {
  this.$showLoading() // 显示加载框
  setTimeout(() => {
    this.$hideLoading()   // 关闭加载框
  }, 5000)
}</code></pre>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      showLoading() {
        this.$showLoading()
        setTimeout(() => {
          this.$hideLoading()
        }, 5000)
      }
    }
  }
</script>
<style lang="scss">

</style>
