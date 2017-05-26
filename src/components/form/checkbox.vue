<template>
  <div class="content">
    <h3 class="title fg-darkCyan">复选框</h3>
    <div class="box">
      <label class="input-control checkbox">
        <input type="checkbox" checked>
        <span class="check"></span>
        <span class="caption">Check me</span>
      </label>
            <label class="input-control checkbox">
        <input type="checkbox">
        <span class="check"></span>
        <span class="caption">Check me</span>
      </label>
      <label class="input-control checkbox">
        <input type="checkbox" disabled>
        <span class="check"></span>
        <span class="caption">Check me</span>
      </label>
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
