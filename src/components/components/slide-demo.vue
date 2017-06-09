<template>
    <div class="content">
      <h3 class="title fg-darkCyan">Slide 幻灯片</h3>
      <div style="height: 250px; width: 500px;">
        <slide :list="list" :duration="5000"></slide>
      </div>
      <br>
      <p class="fg-gray">Html代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div style="height: 250px; width: 500px;"&gt;
  &lt;slide :list="list" :duration="5000"&gt;&lt;/slide&gt;
&lt;/div&gt;
</code></pre>

    <p class="fg-gray">Script代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>  export default {
    data() {
      return {
        list: [
          // 传入的数据格式如下:
          // imgUrl为图片地址, url为点击图片时的跳转
          { imgUrl: './static/imgs/1.jpg', url: '' },
          { imgUrl: './static/imgs/2.jpg', url: '' },
          { imgUrl: './static/imgs/3.jpg', url: '' },
          { imgUrl: './static/imgs/4.jpg', url: '' }
        ]
      }
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
          <td>list</td>
          <td>Array</td>
          <td>True</td>
          <td></td>
          <td>幻灯片的图片列表</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>Number</td>
          <td>False</td>
          <td>5000</td>
          <td>每张图片的停留时间</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          { imgUrl: '/static/imgs/1.jpg', url: '' },
          { imgUrl: '/static/imgs/2.jpg', url: '' },
          { imgUrl: '/static/imgs/3.jpg', url: '' },
          { imgUrl: '/static/imgs/4.jpg', url: '' }
        ]
      }
    }
  }
</script>
<style lang="scss">
  
</style>
