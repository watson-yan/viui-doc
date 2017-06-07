<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Upload 上传组件</h3>
    <div style="width: 220px;">
      <upload :name="'img'" @fileChanged="fileChanged"></upload>
    </div>

    <p class="fg-gray">HTML代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div style="width: 220px;"&gt;
  &lt;!--宽度由外层容器决定，总是占满外层容器--&gt;
  &lt;upload :name="'img'" @fileChanged="fileChanged"&gt;&lt;/upload&gt;
&lt;/div&gt;
</code></pre>

      <p class="fg-gray">Script代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>data() {
  return {}
},
methods: {
  fileChanged(file) {
    const msg = file ? `文件名：${file.name}` : '没有选取任何文件'
    const msgType = file ? 'success' : 'warning'
    this.$message({
      content: msg,
      type: msgType
    })
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
            <td>name</td>
            <td>String</td>
            <td>False</td>
            <td></td>
            <td>input[type="file"]标签的name, 用于嵌在form标签中使用</td>
          </tr>
        </tbody>
      </table>

      <br>
    <p class="fg-gray">Binding attributes 绑定属性</p>
    <table class="table striped hovered bordered border">
      <thead>
        <th>Attribute Name</th>
        <th>Type</th>
        <th>Argument</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>fileChanged</td>
          <td>Function</td>
          <td>file(选中的文件)</td>
          <td>文件变动后的回调事件</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      fileChanged(file) {
        const msg = file ? `文件名：${file.name}` : '没有选取任何文件'
        const msgType = file ? 'success' : 'warning'
        this.$message({
          content: msg,
          type: msgType
        })
      }
    }
  }
</script>
