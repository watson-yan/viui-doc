<template>
  <div class="content">
    <h3 class="title fg-darkCyan">大小</h3>
    <div class="box">
      <button class="button small">Small</button>
      <button class="button">Default</button>
      <button class="button large">Large</button>
    </div>
   
    <br>
    <h3 class="title fg-darkCyan">颜色</h3>
    <div class="box">
      <button class="button primary">Primary</button>
      <button class="button success">Success</button>
      <button class="button info">Info</button>
      <button class="button danger">Danger</button>
      <button class="button warning">Warning</button>
      <button class="button link">Link</button>
    </div>
    <br>
    <h3 class="title fg-darkCyan">形状</h3>
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
    </div>

    <h3 class="title fg-darkCyan">带Icon的按钮  (font-awesome)</h3>
    <div class="box">
      <button class="button large info">
        <i class="fa fa-commenting"></i> Comment</button>
      <button class="button large primary">
        <i class="fa fa-check"></i> Submit</button>
      <button class="button large danger">
        <i class="fa fa-remove"></i> Cancel</button>
    </div>

    <h3 class="title fg-darkCyan">线形按钮</h3>
    <section class="box">
      <button class="button primary outline">primary</button>
      <button class="button success outline">success</button>
      <button class="button info outline">info</button>
      <button class="button warning outline">warning</button>
      <button class="button danger outline">danger</button>
    </section>

    <h3 class="title fg-darkCyan">按钮组</h3>
    <div class="box">
      <div class="btn-group">
        <button class="button">One</button>
        <button class="button">Two</button>
        <button class="button">Three</button>
      </div>
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
