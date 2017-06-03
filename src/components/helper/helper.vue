<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Helper 帮助类</h3>
    <p class="no-margin-bottom">Margin相关</p>
    <div class="dashed-box">
      <div class="fg-white bg-cyan no-margin">
        .no-margin
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan margin5">
        .margin5
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan margin10">
        .margin10
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan margin15">
        .margin15
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan margin20">
        .margin20
      </div>
    </div>
    <br>
    <br>
    <div class="dashed-box">
      <div class="fg-white bg-cyan margin20 no-margin-top">
        .no-margin-top
      </div>
    </div>
        <div class="dashed-box">
      <div class="fg-white bg-cyan margin20 no-margin-right">
        .no-margin-right
      </div>
    </div>
        <div class="dashed-box">
      <div class="fg-white bg-cyan margin20 no-margin-bottom">
        .no-margin-bottom
      </div>
    </div>
        <div class="dashed-box">
      <div class="fg-white bg-cyan margin20 no-margin-left">
        .no-margin-left
      </div>
    </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="no-margin"&gt;&lt;/div&gt;
&lt;div class="margin5"&gt;&lt;/div&gt;
&lt;div class="margin10"&gt;&lt;/div&gt;
&lt;div class="margin20 no-margin-left"&gt;&lt;/div&gt;
&lt;div class="margin20 no-margin-bottom"&gt;&lt;/div&gt;
</code></pre>
    <br>
    <p class="no-margin-bottom">Padding相关</p>
    <div class="dashed-box">
      <div class="fg-white bg-cyan padding0">
        .padding0
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan padding5">
        .padding5
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan padding10">
        .padding10
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan padding15">
        .padding15
      </div>
    </div>
    <div class="dashed-box">
      <div class="fg-white bg-cyan padding20">
        .padding20
      </div>
    </div>
     <br>
    <br>
    <div class="dashed-box">
      <div class="fg-white bg-cyan padding20 no-padding-top">
        .no-padding-top
      </div>
    </div>
        <div class="dashed-box">
      <div class="fg-white bg-cyan padding20 no-padding-right">
        .no-padding-right
      </div>
    </div>
        <div class="dashed-box">
      <div class="fg-white bg-cyan padding20 no-padding-bottom">
        .no-padding-bottom
      </div>
    </div>
        <div class="dashed-box">
      <div class="fg-white bg-cyan padding20 no-padding-left">
        .no-padding-left
      </div>
    </div>
    <pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="no-padding"&gt;&lt;/div&gt;
&lt;div class="padding5"&gt;&lt;/div&gt;
&lt;div class="padding10"&gt;&lt;/div&gt;
&lt;div class="padding20 no-padding-left"&gt;&lt;/div&gt;
&lt;div class="padding20 no-padding-bottom"&gt;&lt;/div&gt;
</code></pre>
    <br>
    <p class="no-margin-bottom">Float 相关</p>
    <article class="clearfix" style="padding: 10px; border: 1px solid #eee;">
      <section class="pull-left padding15 bg-amber fg-white">
        .pull-left
      </section>
      <section class="pull-right padding15 bg-amber fg-white">
        .pull-right
      </section>
    </article>
    <pre v-prettify class="prettyprint linenums"><code v-pre>&lt;!--clearfix清除父元素浮动--&gt;
&lt;article class="clearfix"&gt;
&lt;!--pull-left向左浮动--&gt;
  &lt;section class="pull-left"&gt;.pull-left&lt;/section&gt;
  &lt;!--pull-right 向右浮动--&gt;
  &lt;section class="pull-right"&gt;.pull-right&lt;/section&gt;
&lt;/article&gt;</code></pre>
    
    <br>
    <p class="no-margin-bottom">List 列表(清除padding-left和list-style)</p>
    <ul class="unstyled-list">
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
      <li>Item4</li>
      <li>Item5</li>
    </ul>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;ul class="unstyled-list"&gt;
  &lt;li&gt;Item1&lt;/li&gt;
  &lt;li&gt;Item2&lt;/li&gt;
  &lt;li&gt;Item3&lt;/li&gt;
  &lt;li&gt;Item4&lt;/li&gt;
  &lt;li&gt;Item5&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

    <br>
    <p class="no-margin-bottom">Shadow 阴影</p>
    <div class="demo-box">
      <div class="margin10 padding20 shadow ">
        .shadow
      </div>
    </div>
    <div class="demo-box">
      <div class="margin10 padding20 block-shadow">
        .block-shadow
      </div>
    </div>
    <div class="demo-box">
      <div class="margin10 padding20 bottom-shadow">
        .bottom-shadow
      </div>
    </div>
    <div class="demo-box">
      <div class="margin10 padding20 text-shadow">
        .text-shadow
      </div>
    </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="shadow"&gt;shadow&lt;/div&gt;
&lt;div class="block-shadow"&gt;block-shadow&lt;/div&gt;
&lt;div class="bottom-shadow"&gt;bottom-shadow&lt;/div&gt;
&lt;div class="text-shadow"&gt;text-shadow&lt;/div&gt;
</code></pre>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style lang="scss">
.dashed-box {
  display: inline-block;
  border: 1px dashed #666;
}
.demo-box {
  display: inline-block;
  div {
    border: 1px solid #ececec;
  }
}
</style>
