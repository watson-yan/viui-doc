<template>
  <div class="content">
    <p class="padding10 bg-grayLighter">Form</p>
    <form action="" class="flex-grid">
      <section class="row form-group">
        <label class="label cell colspan2 align-right">Name</label>
        <div class="cell colspan4 input-control">
          <input type="text" placeholder="Your name">
        </div>
      </section>
      <section class="row form-group">
        <label class="label cell colspan2 align-right">Email</label>
        <div class="cell colspan4 input-control">
          <input type="text" placeholder="Your email">
        </div>
      </section>
      <section class="row form-group">
        <label class="label cell colspan2 align-right">Phone</label>
        <div class="cell colspan4 input-control">
          <input type="text" placeholder="Your phone number">
        </div>
      </section>
      <section class="row form-group">
        <label class="label cell colspan2 align-right">Date</label>
        <div class="cell colspan4">
          <datepicker></datepicker>
        </div>
      </section>
      <section class="row form-group">
        <label class="label cell colspan2 align-right">Company</label>
        <div class="cell colspan4">
          <vi-select :options="options"></vi-select>
        </div>
      </section>
      <section class="row form-group">
        <label class="label cell colspan2 align-right">Gender</label>
        <div class="cell colspan4">
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
      </section>
      <section class="row form-group">
        <label class="label cell colspan2 align-right">Description</label>
        <div class="cell colspan4">
          <textarea style="width: 100%;" rows="4"></textarea>
        </div>
      </section>
      <section class="row form-group">
        <section class="cell colspan8 row flex-just-center padding20">
          <button class="button">Reset</button>&nbsp;&nbsp;&nbsp;
          <button class="button primary">Submit</button>
        </section>
      </section>

    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          { value: 0, text: 'Microsoft' },
          { value: 1, text: 'Google' },
          { value: 2, text: 'Amazon' },
          { value: 3, text: 'Facebook' },
          { value: 4, text: 'Apple' }
        ]
      }
    }
  }
</script>
<style lang="scss">
  
</style>
