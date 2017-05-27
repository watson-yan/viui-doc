<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Radio 单选按钮</h3>
    <p class></p>
    <div class="box">
      <div class="form-group">
        <label class="label">Gender:</label>
        <label class="input-control radio">
          <input type="radio" name="gender" checked>
          <span class="check"></span>
          <span class="caption">Male</span>
        </label>

        <label class="input-control radio">
          <input type="radio" name="gender">
          <span class="check"></span>
          <span class="caption">Female</span>
        </label>
      </div>

      <div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="form-group"&gt;
  &lt;label class="label"&gt;Gender:&lt;/label&gt;

  &lt;!--Radio 最后的值是绑定在input[type="radio"]上--&gt;
  &lt;label class="input-control radio"&gt;
    &lt;input type="radio" name="gender" checked&gt;
    &lt;span class="check"&gt;&lt;/span&gt;
    &lt;span class="caption"&gt;Male&lt;/span&gt;
  &lt;/label&gt;
&lt;!--Radio--&gt;
  &lt;label class="input-control radio"&gt;
    &lt;input type="radio" name="gender"&gt;
    &lt;span class="check"&gt;&lt;/span&gt;
    &lt;span class="caption"&gt;Female&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>

      <h5 class="fg-gray">Disabled状态</h5>
      <label class="input-control radio">
        <input type="radio" name="radio">
        <span class="check"></span>
        <span class="caption">Select me</span>
      </label>
      <label class="input-control radio">
        <input type="radio" name="radio" disabled>
        <span class="check"></span>
        <span class="caption">Disabled状态</span>
      </label>

      <div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;label class="input-control radio"&gt;
  &lt;input type="radio" name="radio" disabled&gt;
  &lt;span class="check"&gt;&lt;/span&gt;
  &lt;span class="caption"&gt;Disabled状态&lt;/span&gt;
&lt;/label&gt;
</code></pre>

      </div>
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
