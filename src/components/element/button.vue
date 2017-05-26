<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Size 大小</h3>
    <div class="box">
      <button class="button small">Small</button>
      <button class="button">Default</button>
      <button class="button large">Large</button>
      <button class="button large" disabled>Disabled</button>
    </div>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;button class="button small"&gt;Small&lt;/button&gt;
&lt;button class="button"&gt;Default&lt;/button&gt;
&lt;button class="button large"&gt;Large&lt;/button&gt;
&lt;button class="button large" disabled&gt;Disabled&lt;/button&gt;
</code></pre>
    
    <br>

    <h3 class="title fg-darkCyan">Color 颜色</h3>
    <div class="box">
      <button class="button primary">Primary</button>
      <button class="button success">Success</button>
      <button class="button info">Info</button>
      <button class="button danger">Danger</button>
      <button class="button warning">Warning</button>
      <button class="button link">Link</button>
    </div>
<pre v-prettify class="prettyprint linenums"><code>&lt;button class="button primary"&gt;Primary&lt;/button&gt;
&lt;button class="button success"&gt;Success&lt;/button&gt;
&lt;button class="button info"&gt;Info&lt;/button&gt;
&lt;button class="button danger"&gt;Danger&lt;/button&gt;
&lt;button class="button warning"&gt;Warning&lt;/button&gt;
&lt;button class="button link"&gt;Link&lt;/button&gt;
</code></pre>

    <br>
    <h3 class="title fg-darkCyan">Shape 形状</h3>
    <div class="box">
      <div>
        <button class="square-button mini">m</button>
        <button class="square-button small">S</button>
        <button class="square-button">D</button>
        <button class="square-button large">L</button>
        <button class="square-button primary">D</button>
        <button class="square-button info">D</button>
        <button class="square-button danger">D</button>
        <button class="square-button warning">D</button>
      </div>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;button class="square-button mini"&gt;m&lt;/button&gt;
&lt;button class="square-button small"&gt;S&lt;/button&gt;
&lt;button class="square-button"&gt;D&lt;/button&gt;
&lt;button class="square-button large"&gt;L&lt;/button&gt;
</code></pre>

      <br>
      <div>
        <button class="cycle-button mini">m</button>
        <button class="cycle-button small">S</button>
        <button class="cycle-button">D</button>
        <button class="cycle-button large">L</button>
        <button class="cycle-button primary">D</button>
        <button class="cycle-button info">D</button>
        <button class="cycle-button danger">D</button>
        <button class="cycle-button warning">D</button>
      </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;button class="cycle-button mini"&gt;m&lt;/button&gt;
&lt;button class="cycle-button small"&gt;S&lt;/button&gt;
&lt;button class="cycle-button"&gt;D&lt;/button&gt;
&lt;button class="cycle-button large"&gt;L&lt;/button&gt;
</code></pre>
    </div>

    <br>
    <h3 class="title fg-darkCyan">Icon-button 带Icon的按钮  (Font-awesome)</h3>
    <div class="box">
      <button class="button large info">
        <i class="fa fa-commenting"></i> Comment</button>
      <button class="button large primary">
        <i class="fa fa-check"></i> Submit</button>
      <button class="button large danger">
        <i class="fa fa-remove"></i> Cancel</button>
    </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;button class="button large info"&gt;
  &lt;i class="fa fa-commenting"&gt;&lt;/i&gt; Comment&lt;/button&gt;
&lt;button class="button large primary"&gt;
  &lt;i class="fa fa-check"&gt;&lt;/i&gt; Submit&lt;/button&gt;
&lt;button class="button large danger"&gt;
  &lt;i class="fa fa-remove"&gt;&lt;/i&gt; Cancel&lt;/button&gt;</code></pre>

    <br>

    <h3 class="title fg-darkCyan">Outline-button 线形按钮</h3>
    <section class="box">
      <button class="button primary outline">primary</button>
      <button class="button success outline">success</button>
      <button class="button info outline">info</button>
      <button class="button warning outline">warning</button>
      <button class="button danger outline">danger</button>
    </section>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;button class="button primary outline"&gt;primary&lt;/button&gt;
&lt;button class="button success outline"&gt;success&lt;/button&gt;
&lt;button class="button info outline"&gt;info&lt;/button&gt;
&lt;button class="button warning outline"&gt;warning&lt;/button&gt;
&lt;button class="button danger outline"&gt;danger&lt;/button&gt;</code></pre>

    <br>

    <h3 class="title fg-darkCyan">Button-group 按钮组</h3>
    <div class="box">
      <div class="btn-group">
        <button class="button">One</button>
        <button class="button">Two</button>
        <button class="button">Three</button>
      </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="btn-group"&gt;
  &lt;button class="button"&gt;One&lt;/button&gt;
  &lt;button class="button"&gt;Two&lt;/button&gt;
  &lt;button class="button"&gt;Three&lt;/button&gt;
&lt;/div&gt;</code></pre>
      <br>
      <div class="btn-group">
        <button class="square-button primary outline">
          <i class="fa fa-plus"></i>
        </button>
        <button class="square-button primary outline">
          <i class="fa fa-pencil"></i>
        </button>
        <button class="square-button primary outline">
          <i class="fa fa-download"></i>
        </button>
      </div>
    </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="btn-group"&gt;
  &lt;button class="square-button primary outline"&gt;
    &lt;i class="fa fa-plus"&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;button class="square-button primary outline"&gt;
    &lt;i class="fa fa-pencil"&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;button class="square-button primary outline"&gt;
    &lt;i class="fa fa-download"&gt;&lt;/i&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>   
  </div>

</template>
<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    }
  }
</script>
<style>

</style>
