<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Datepicker 日期选择</h3>
    <div style="width: 200px;">
      <datepicker :moment.sync="moment"></datepicker>
    </div>
    <p class="fg-gray">Html代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;!--直接使用datepicker标签, datepicker的宽度由外层容器的宽度决定(占满)--&gt;
&lt;div style="width: 200px;"&gt;
&lt;datepicker :moment.sync="moment"&gt;&lt;/datepicker&gt;
&lt;/div&gt;
</code></pre>
    <p class="fg-gray">js代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre> data() {
  return {
    // 为了解决js在计算时间时跟后端算法不同，采用了毫秒计数
    moment: new Date().getTime()
  }
}
</code></pre>
      <p class="fg-gray">Props 列表</p>
      <table class="table striped hovered bordered border">
        <thead>
          <th>Prop</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>moment</td>
            <td>Number</td>
            <td>True</td>
            <td></td>
            <td>默认时间(为了配合双向绑定，改为必填项)</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        moment: new Date().getTime()
      }
    },
    watch: {
      moment() {
        const date = new Date(this.moment)
        const msg = `你选择了${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
        this.$message({
          caption: '时间选择',
          content: msg,
          type: 'info'
        })
      }
    }
  }
</script>
<style lang="scss">
  
</style>
