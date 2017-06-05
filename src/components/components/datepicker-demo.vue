<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Datepicker 日期选择</h3>
    <div style="width: 200px;">
      <datepicker></datepicker>
      <p class="fg-gray">Html代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>
&lt;datepicker&gt;&lt;/datepicker&gt;
</code></pre>

    <p class="fg-gray">js代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre> data() {
  return {
    menu: [
      { value: 0, content: 'Action1' },
      { value: 1, content: 'Action2' },
      { value: 2, content: 'Action3' },
      { value: 3, content: 'Action4' },
      { value: 4, content: 'Action5', disabled: true },
      { value: 5, content: 'Action6' }
    ]
  }
},
methods: {
  choice(val) {
    this.$message({
      caption: '成功',
      content: `你选择了${this.menu[val].content}`,
      type: 'info'
    })
  }
}
</code></pre>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss">
  
</style>
