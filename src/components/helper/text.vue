<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Text 文本相关</h3>
    <p class="no-margin-bottom">1. text-ellipsis 文本超出容器显示省略号</p>
    <p class="fg-gray">
      <span class="fg-dark">原文:</span>
      ISO-8859-1 的较低部分（从 1 到 127 之间的代码）是最初的 ASCII 字符集（0-9 的数字，大写和小写英文字母表，以及一些特殊字符）
    </p>
    <p class="fg-dark">加上text-ellipsis类后</p>
    <div class="dashed-box padding5" style="width: 400px;">
        <p class="text-ellipsis">
          ISO-8859-1 的较低部分（从 1 到 127 之间的代码）是最初的 ASCII 字符集（0-9 的数字，大写和小写英文字母表，以及一些特殊字符）
        </p>
    </div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div style="width:400px;"&gt;
  &lt;p class="text-ellipsis"&gt;
    ISO-8859-1 的较低部分（从 1 到 127 之间的代码）是最初的 ASCII 字符集
    （0-9 的数字，大写和小写英文字母表，以及一些特殊字符）
  &lt;/p&gt;
&lt;/div&gt;
</code></pre>

  <br>

    <p class="no-margin-bottom">2. line-clamp* 超出多行显示省略号(该class只对webkit内核的浏览器有效)</p>
    <p class="fg-gray">
      <span class="fg-dark">原文:</span>
      无论是窗外的丝丝凉意，还是独行路上的阵阵微风，有种味道会让你想起那些欢声笑语，那些温暖涟漪，原来人生最怀念不过，一起吃着火锅听着歌
    </p>
    <p class="fg-dark">line-clamp2</p>
    <div class="dashed-box padding5" style="width: 300px;">
        <p class="line-clamp2">
        无论是窗外的丝丝凉意，还是独行路上的阵阵微风，有种味道会让你想起那些欢声笑语，那些温暖涟漪，原来人生最怀念不过，一起吃着火锅听着歌
        </p>
    </div>
    <p class="fg-dark">line-clamp3</p>
      <div class="dashed-box padding5" style="width: 300px;">
      <p class="line-clamp3">
        无论是窗外的丝丝凉意，还是独行路上的阵阵微风，有种味道会让你想起那些欢声笑语，那些温暖涟漪，原来人生最怀念不过，一起吃着火锅听着歌
      </p>
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
<style lang="scss">
  
</style>
