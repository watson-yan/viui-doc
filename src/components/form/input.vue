<template>
  <div class="content">
    <h3 class="no-margin fg-darkCyan">Input</h3>
    <div class="box">
              <form>
          <section class="form-group">
            <label>Text</label>
            <div class="input-control text">
                <input type="text">
            </div>
          </section>
          <section class="form-group">
            <label>Password</label>
            <div class="input-control text">
                <input type="password">
            </div>
          </section>
          <section class="form-group">
            <label>Placeholder</label>
            <div class="input-control text">
                <input type="text" placeholder="Input your text here...">
            </div>
          </section>
          <section class="form-group">
            <label>Readonly Input</label>
            <div class="input-control text">
                <input type="text" value="Metro UI" readonly>
            </div>
          </section>
          <section class="form-group">
            <label>Disabled Input</label>
            <div class="input-control text">
                <input type="text" value="Metro UI" disabled>
            </div>
          </section>
        </form>
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
