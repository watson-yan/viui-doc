<template>
  <div class="content">
    <button @click="showMessage" class="button info">Click</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      showMessage() {
        this.$message({ text: '12312', duration: 20000 })
      }
    }
  }
</script>
<style lang="scss">
  
</style>
