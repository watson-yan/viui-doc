<template>
  <div class="content">
    <h3 class="title fg-darkCyan">复选框</h3>
    <div class="box">
      <label class="input-control radio">
        <input type="radio" name="radio" checked>
        <span class="check"></span>
        <span class="caption">Select me</span>
      </label>

      <label class="input-control radio">
        <input type="radio" name="radio">
        <span class="check"></span>
        <span class="caption">Select me</span>
      </label>

      <label class="input-control radio">
        <input type="radio" name="radio" disabled>
        <span class="check"></span>
        <span class="caption">Select me</span>
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
