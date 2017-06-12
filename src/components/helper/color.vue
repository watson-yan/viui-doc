<template>
  <div class="content">
    <section class="box flex-grid">
      <h3 class="title fg-darkCyan">Metro colors 主色系</h3>
      <p class="fg-gray">
        下面列出来的颜色可以用来充当背景色或文字颜色:
      </p>
      <p class="fg-gray">背景颜色: <span class="tag info">bg-*</span></p>
      <p class="fg-gray">字体颜色: <span class="tag info">fg-*</span></p>
      <ul class="row unstyled-list">
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-black">black</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-white">white</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lime">lime</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-green">green</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-emerald">emerald</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-teal">teal</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-blue">blue</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-cyan">cyan</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-cobalt">cobalt</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-indigo">indigo</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-violet">violet</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-pink">pink</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-magenta">magenta</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-crimson">crimson</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-red">red</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-orange">orange</li>

        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-amber">amber</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-yellow">yellow</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-brown">brown</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-olive">olive</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-steel">steel</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-mauve">mauve</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-taupe">taupe</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-gray">gray</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-dark">dark</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darker">darker</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkBrown">darkBrown</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkCrimson">darkCrimson</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkMagenta">darkMagenta</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkIndigo">darkIndigo</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkCyan">darkCyan</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkCobalt">darkCobalt</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkTeal">darkTeal</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkEmerald">darkEmerald</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkGreen">darkGreen</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkOrange">darkOrange</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkRed">darkRed</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkPink">darkPink</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkViolet">darkViolet</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-darkBlue">darkBlue</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lightBlue">lightBlue</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lightRed">lightRed</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lightGreen">lightGreen</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lighterBlue">lighterBlue</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lightTeal">lightTeal</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lightOlive">lightOlive</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lightOrange">lightOrange</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-lightPink">lightPink</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-grayDark">grayDark</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-grayDarker">grayDarker</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-grayLight">grayLight</li>
        <li class="padding10 cell colspan2 align-center text-shadow fg-white bg-grayLighter">grayLighter</li>
      </ul>
    </section>
    <br>
    <h5>背景色用法:</h5>
    <div class="padding30 bg-blue align-center fg-white">
        background: blue
    </div>
    <div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;div class="bg-blue"&gt;
   background: blue
&lt;/div&gt;
</code></pre>
    </div>
    <br>
    <h5 class="no-margin">字体颜色:</h5>
    <div>
      <p class="fg-blue">blue</p>
      <p class="fg-orange">orange</p>
      <p class="fg-emerald">emerald</p>
    </div>
    <div>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;p class="fg-blue"&gt;blue&lt;/p&gt;
&lt;p class="fg-orange"&gt;orange&lt;/p&gt;
&lt;p class="fg-emerald"&gt;emerald&lt;/p&gt;
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

