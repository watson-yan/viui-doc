<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Switch 开关</h3>
    <div class="box">
      <section class="form-group">
          <h4 class="fg-gray no-margin-bottom">Modern 现代风格</h4>
          <label class="switch">
            <input type="checkbox">
            <span class="check"></span>
          </label>

          <label class="switch">
            <input type="checkbox" checked>
            <span class="check"></span>
          </label>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;label class="switch"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
&lt;/label&gt;

&lt;label class="switch"&gt;
  &lt;input type="checkbox" checked&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
&lt;/label&gt;
</code></pre>

      <p>禁用状态</p>
      <label class="switch">
        <input type="checkbox" disabled>
        <span class="check"></span>
      </label>

      <label class="switch">
        <input type="checkbox" checked disabled>
        <span class="check"></span>
      </label>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;label class="switch"&gt;
  &lt;input type="checkbox" disabled&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </section>

      <section class="form-group">
        <h4 class="fg-gray">Original 传统风格</h4>
        <label class="switch-original">
          <input type="checkbox">
          <span class="check"></span>
        </label>
        <label class="switch-original">
          <input type="checkbox" checked>
          <span class="check"></span>
        </label>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;label class="switch-original"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
&lt;/label&gt;

&lt;label class="switch-original"&gt;
  &lt;input type="checkbox" checked&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
&lt;/label&gt;
</code></pre>
        <br>
        <p>禁用状态</p>
        <label class="switch-original">
          <input type="checkbox" disabled>
          <span class="check"></span>
        </label>
        <label class="switch-original">
          <input type="checkbox" checked disabled>
          <span class="check"></span>
        </label>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;label class="switch-original"&gt;
  &lt;input type="checkbox" disabled&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
&lt;/label&gt;</code></pre>
      </section>
    </div>
  </div>
</template>
<script>
  
</script>
<style>
  
</style>
