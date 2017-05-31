<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Tabs 选项卡</h3>
    <div class="box">
      <tabs :list="list" :value.sync="value">
        <div slot="div1" class="padding15 bg-grayLighter">我是div1</div>
        <div slot="div2" class="padding15 bg-grayLighter">我是div2</div>
      </tabs>
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
            <td>list</td>
            <td>Array</td>
            <td>True</td>
            <td></td>
            <td>选项卡的Title列表</td>
          </tr>
          <tr>
            <td>value</td>
            <td>String</td>
            <td>True</td>
            <td></td>
            <td>激活的Panel(为了配合双向绑定，改为必填项)</td>
          </tr>
        </tbody>
      </table>

      <p class="fg-gray">HTML代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;!--:value.sync 为必填(以配合双向绑定)--&gt;
&lt;tabs :list="list" :value.sync="value"&gt;
  &lt;!--slot的值为该容器所对应的Title--&gt;
  &lt;div slot="div1" class="padding15 bg-grayLighter"&gt;我是div1&lt;/div&gt;
  &lt;div slot="div2" class="padding15 bg-grayLighter"&gt;我是div2&lt;/div&gt;
&lt;/tabs&gt;
</code></pre>

      <p class="fg-gray">Script代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>export default {
  data() {
    return {
      list: [
        { name: 'div1' },
        { name: 'div2' }
      ],
      value: 'div1'
    }
  }
}
</code></pre>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          { name: 'div1' },
          { name: 'div2' }
        ],
        value: 'div1'
      }
    }
  }
</script>
