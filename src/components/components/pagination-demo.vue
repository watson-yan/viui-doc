<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Pagination 分页器</h3>
    <pagination :total="120" :cb="go"></pagination>
    <br>
    <p class="fg-gray">代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div&gt;
  &lt;!--全局引入后的用法--&gt;
  &lt;pagination :total="120" :cb="go"&gt;&lt;/pagination&gt;
&lt;/div&gt;
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
          <td>pn</td>
          <td>Number</td>
          <td>False</td>
          <td>1</td>
          <td>当前页(默认第1页)</td>
        </tr>
        <tr>
          <td>total</td>
          <td>Number</td>
          <td>True</td>
          <td></td>
          <td>总共数据</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td>False</td>
          <td>10</td>
          <td>分页大小(每页多少条数据)</td>
        </tr>
        <tr>
          <td>cb</td>
          <td>Function</td>
          <td>False</td>
          <td>Function</td>
          <td>选择页面之后的回调</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: '默认第1页'
      }
    },
    methods: {
      go(n) {
        this.$message(`你选择了第${n}页`)
      }
    }
  }
</script>
