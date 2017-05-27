<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Flex grid 栅格布局</h3>
    <section class="box flex-grid demo-grid">
      <p class="fg-gray no-margin">默认cell大小</p>
      <div class="row">
        <div class="cell bg-teal">cell</div>
      </div>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;article class="flex-grid"&gt;
    &lt;!--row相当于12个普通cell的宽度，也就是100%--&gt;
    &lt;div class="row"&gt;
        &lt;div class="cell bg-teal"&gt;cell&lt;/div&gt;
    &lt;/div&gt;
&lt;/article&gt;
</code></pre>
      <br>
      <p class="fg-gray no-margin">多个cell</p>
      <div class="row">
        <div class="cell bg-teal">cell</div>
        <div class="cell bg-teal">cell</div>
        <div class="cell bg-teal">cell</div>
        <div class="cell bg-teal">cell</div>
        <div class="cell bg-teal">cell</div>
      </div>
      <br>
      <p class="fg-gray no-margin">占5列的cell</p>
      <div class="row">
        <div class="cell colspan5 bg-amber">cell colspan5</div>
      </div>

<pre v-prettify class="prettyprint linenums"><code v-pre>
&lt;article class="flex-grid"&gt;
    &lt;div class="row"&gt;
        &lt;div class="cell bg-teal"&gt;cell&lt;/div&gt;
        &lt;div class="cell bg-teal"&gt;cell&lt;/div&gt;
        &lt;div class="cell bg-teal"&gt;cell&lt;/div&gt;
        &lt;div class="cell bg-teal"&gt;cell&lt;/div&gt;
        &lt;div class="cell bg-teal"&gt;cell&lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="row"&gt;
        &lt;!--<span class="tag alert fg-white">colspan*</span>表示占几列--&gt;
        &lt;div class="cell colspan5 bg-amber"&gt;cell colspan5&lt;/div&gt;
    &lt;/div&gt;
&lt;/article&gt;
</code></pre>

      <br>

      <h3 class="fg-darkCyan">Justify 对齐方式</h3>
      <p class="fg-gray no-margin">justify-start 左对齐</p>
      <div class="row">
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
      </div>
      <br>

      <p class="fg-gray no-margin">justify-end 右对齐</p>
      <div class="row flex-just-end">
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
      </div>
      <br>
      <p class="fg-gray no-margin">justify-center 居中</p>
      <div class="row flex-just-center">
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
      </div>
      <br>
      <p class="fg-gray no-margin">space-around 平均分布(左右间隔相等)</p>
      <div class="row flex-just-sa">
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
      </div>
      <br>
      <p class="fg-gray no-margin">space-between 两端对齐</p>
      <div class="row flex-just-sb">
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
        <section class="cell bg-lightBlue">cell</section>
      </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>
&lt;!--justify-start 左对齐--&gt;
&lt;div class="row"&gt;&lt;/div&gt;
&lt;!--justify-end 右对齐--&gt;
&lt;div class="row flex-just-end"&gt;&lt;/div&gt;
&lt;!--justify-center 居中--&gt;
&lt;div class="row flex-just-center"&gt;&lt;/div&gt;
&lt;!--space-around 平均分布(左右间隔相等)--&gt;
&lt;div class="row flex-just-sa"&gt;&lt;/div&gt;
&lt;!--space-between 两端对齐--&gt;
&lt;div class="row flex-just-sb"&gt;&lt;/div&gt;
</code></pre>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style lang="scss">
.demo-grid {
  .cell {
    padding: 10px;
    color: #fff;
    text-align: center;
    border: 1px solid #fff;
  }
}
</style>
