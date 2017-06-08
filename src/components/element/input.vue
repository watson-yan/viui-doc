<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Text 文本框</h3>
    <div class="box">
        <form class="flex-grid">
          <div class="row form-group">
            <label class="label align-right cell">文本</label>
            <div class="input-control cell colspan4">
              <input type="text">
            </div>
          </div>
          <div class="row form-group">
            <label class="label align-right cell">密码</label>
            <div class="input-control cell colspan4">
              <input type="password">
            </div>
          </div>
          <pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="row form-group"&gt;
  &lt;label class="label align-right cell"&gt;文本框&lt;/label&gt;
  &lt;div class="input-control cell colspan4"&gt;
    &lt;input type="text"&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="row form-group"&gt;
  &lt;label class="label align-right cell"&gt;密码&lt;/label&gt;
  &lt;div class="input-control cell colspan4"&gt;
    &lt;input type="password"&gt;
  &lt;/div&gt;
&lt;/div&gt; </code></pre>
          <br>
          <h5 class="no-margin fg-gray">带Placehoder</h5>
          <div class="row form-group">
            <label class="label align-right cell">Email</label>
            <div class="input-control cell colspan4">
              <input type="email" placeholder="请输入您的Email地址">
            </div>
          </div>
          <h5 class="no-margin fg-gray">Readonly 只读状态</h5>
          <div class="row form-group">
            <label class="label align-right cell">Readonly</label>
            <div class="input-control cell colspan4">
              <input type="text" value="Readonly" readonly>
            </div>
          </div>
          <h5 class="no-margin fg-gray">Disabled 禁用状态</h5>
          <div class="row form-group">
            <label class="label align-right cell">Disabled</label>
            <div class="input-control cell colspan4">
              <input type="text" disabled>
            </div>
          </div>
        </form>
    </div>
    <br>
    <h3 class="title fg-darkCyan">Text field states 文本框状态</h3>
    <div class="box">
        <h5 class="no-margin">1. error</h5>
        <div class="input-control error">
            <input type="text">
        </div>
        <h5 class="no-margin">2. warning</h5>
        <div class="input-control warning">
            <input type="text">
        </div>
        <h5 class="no-margin">3. success</h5>
        <div class="input-control success">
            <input type="text">
        </div>
        <h5 class="no-margin">4. required</h5>
        <div class="input-control required">
          <input type="text">
        </div>

<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="input-control error"&gt;
    &lt;input type="text"&gt;
&lt;/div&gt;
&lt;div class="input-control warning"&gt;
    &lt;input type="text"&gt;
&lt;/div&gt;
&lt;div class="input-control success"&gt;
    &lt;input type="text"&gt;
&lt;/div&gt;
  &lt;div class="input-control required"&gt;
  &lt;input type="text"&gt;
&lt;/div&gt;
</code></pre>
      </div>

    <br>
    <h3 class="title fg-darkCyan">Input with buttons 带按钮的输入框</h3>
    <div class="input-control text" style="width: 300px;">
      <input type="text" placeholder="Search ..." style="padding-right: 58px;">
      <button class="button">
        <i class="fa fa-search"></i></button>
    </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="input-control text" style="width: 300px;"&gt;
  &lt;input type="text" placeholder="Search ..." style="padding-right: 58px;"&gt;
  &lt;button class="button"&gt;
    &lt;i class="fa fa-search"&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/div>
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
