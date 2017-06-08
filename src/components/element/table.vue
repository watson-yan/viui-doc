<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Table 表格</h3>
    <div class="box">
      <p>通过下面的复选框按钮来为表格增加样式</p>
      <section>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="striped">
          <span class="check"></span>
          <span class="caption">striped(条纹、斑马效果)</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="hovered">
          <span class="check"></span>
          <span class="caption">hovered(鼠标悬浮效果)</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type ="checkbox" value="cell-hovered">
          <span class="check"></span>
          <span class="caption">cell-hovered(鼠标单元格悬浮效果)</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="border">
          <span class="check"></span>
          <span class="caption">border(外边界效果)</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="bordered">
          <span class="check"></span>
          <span class="caption">bordered(内边界效果)</span>
        </label>
      </section>
      <table :class="clsName">
        <thead>
          <tr>
            <th>Column1</th>
            <th>Column2</th>
            <th>Column3</th>
            <th>Column4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
        </tbody>
      </table>
<br>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;!--默认--&gt;
&lt;table class="table"&gt;...&lt;/table&gt;
&lt;!--striped(条纹、斑马效果)--&gt;
&lt;table class="table striped"&gt;...&lt;/table&gt;
&lt;!--hovered(鼠标悬浮效果)--&gt;
&lt;table class="table hovered"&gt;...&lt;/table&gt;
&lt;!--cell-hovered(鼠标单元格悬浮效果)--&gt;
&lt;table class="table cell-hovered"&gt;...&lt;/table&gt;
&lt;!--border(外边界效果)--&gt;
&lt;table class="table border"&gt;...&lt;/table&gt;
&lt;!--bordered(内边界效果)--&gt;
&lt;table class="table bordered"&gt;...&lt;/table&gt;
</code></pre>

    </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          className: []
        }
      },
      computed: {
        clsName() {
          return `table ${this.className.join(' ')}`
        }
      }
    }
</script>
<style></style>
