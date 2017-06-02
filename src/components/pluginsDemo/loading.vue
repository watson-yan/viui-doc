<template>
  <div class="content">
      <h3 class="title fg-darkCyan">Loading 加载动画</h3>
      <button @click="showLoading" class="button">Loading</button>
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
