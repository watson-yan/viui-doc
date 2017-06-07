<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Select 下拉框</h3>
    <vi-select :options="options" :selected.sync="selected" :width="220"></vi-select>
    <p class="fg-gray">Html代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;!--直接使用vi-select标签--&gt;
&lt;vi-select :options="options" :selected.sync="selected" :width="220"&gt;&lt;/vi-select&gt;
</code></pre>
<p class="fg-gray">js代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>export default {
    data() {
      return {
        options: [
          { value: 1, text: '中国工商银行' },
          { value: 2, text: '中国农业银行' },
          { value: 3, text: '中国建设银行' },
          { value: 4, text: '中国交通银行' },
          { value: 5, text: '招商银行' },
          { value: 6, text: '平安银行' },
          { value: 7, text: '农村信用社' },
          { value: 8, text: '华夏银行' },
          { value: 9, text: '农商银行' },
          { value: 10, text: '浦发银行' }
        ],
        selected: { value: 3, text: '中国建设银行' }
      }
    },
    watch: {
      selected() {
        this.$message({
          caption: '提示',
          content: `你选择了${this.selected.text}`,
          type: 'alert'
        })
      }
    }
  }
</code></pre>
  <br>
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
        <td>options</td>
        <td>Array</td>
        <td>True</td>
        <td></td>
        <td>选项列表{value: x, text: xxx}</td>
      </tr>
      <tr>
        <td>selected.sync</td>
        <td>Object</td>
        <td>False</td>
        <td></td>
        <td>默认选择项(options中的一项),可不传</td>
      </tr>
      <tr>
        <td>width</td>
        <td>Number</td>
        <td>False</td>
        <td>200</td>
        <td>下拉框的宽度</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          { value: 1, text: '中国工商银行' },
          { value: 2, text: '中国农业银行' },
          { value: 3, text: '中国建设银行' },
          { value: 4, text: '中国交通银行' },
          { value: 5, text: '招商银行' },
          { value: 6, text: '平安银行' },
          { value: 7, text: '农村信用社' },
          { value: 8, text: '华夏银行' },
          { value: 9, text: '农商银行' },
          { value: 10, text: '浦发银行' }
        ],
        selected: { value: 3, text: '中国建设银行' }
      }
    },
    watch: {
      selected() {
        this.$message({
          caption: '提示',
          content: `你选择了${this.selected.text}`,
          type: 'alert'
        })
      }
    }
  }
</script>
<style lang="scss">  
</style>
