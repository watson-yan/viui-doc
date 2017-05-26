<template>
    <div class="content">
      <h3 class="title fg-darkCyan">Tag 标签</h3>
      <div class="box">
        <span class="tag">tag</span>

        <span class="tag success">sucess</span>

        <span class="tag info">info</span>

        <span class="tag warning">warning</span>

        <span class="tag alert">alert</span>

      </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;!--普通标签--&gt;
&lt;span class="tag"&gt;tag&lt;/span&gt;
&lt;!--完成标签--&gt;
&lt;span class="tag success"&gt;sucess&lt;/span&gt;
&lt;!--信息标签--&gt;
&lt;span class="tag info"&gt;info&lt;/span&gt;
&lt;!--警告标签--&gt;
&lt;span class="tag warning"&gt;warning&lt;/span&gt;
&lt;!--提醒标签--&gt;
&lt;span class="tag alert"&gt;alert&lt;/span&gt;
</code></pre>
    </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style>
</style>
