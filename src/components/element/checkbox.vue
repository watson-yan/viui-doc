<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Checkbox 复选框</h3>
    <div class="box">
      <div class="form-group">
        <label class="label">你最喜欢的水果：</label>
        <label class="input-control checkbox">
          <input type="checkbox" checked>
          <span class="check"></span>
          <span class="caption">苹果</span>
        </label>
        <label class="input-control checkbox">
          <input type="checkbox">
          <span class="check"></span>
          <span class="caption">香蕉</span>
        </label>
        <label class="input-control checkbox">
          <input type="checkbox">
          <span class="check"></span>
          <span class="caption">梨子</span>
        </label>
        <label class="input-control checkbox">
          <input type="checkbox">
          <span class="check"></span>
          <span class="caption">橘子</span>
        </label>
      </div>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;label class="input-control checkbox"&gt;
  &lt;input type="checkbox" checked&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
  &lt;span class="caption"&gt;苹果&lt;/span&gt;
&lt;/label&gt;
&lt;label class="input-control checkbox"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
  &lt;span class="caption"&gt;香蕉&lt;/span&gt;
&lt;/label&gt;
</code></pre>

      <h5 class="fg-gray">Disabled状态</h5>
      <div class="form-group">
        <label class="label">你喜欢我吗：</label>
        <label class="input-control checkbox">
          <input type="checkbox" checked disabled>
          <span class="check"></span>
          <span class="caption">喜欢</span>
        </label>
        <label class="input-control checkbox">
          <input type="checkbox" disabled>
          <span class="check"></span>
          <span class="caption">不喜欢</span>
        </label>
      </div>

<pre v-prettify class="prettyprint linenums"><code v-pre>
&lt;label class="input-control checkbox"&gt;
  &lt;input type="checkbox" checked disabled&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
  &lt;span class="caption"&gt;喜欢&lt;/span&gt;
&lt;/label&gt;
</code></pre>
    </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {}
      }
    }
</script>
<style></style>
