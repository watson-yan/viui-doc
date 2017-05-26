<template>
  <div class="content">
    <h3 class="title fg-darkCyan">文本框</h3>
    <div class="box">
        <form class="flex-grid">
          <div class="row form-group">
            <label class="label align-right cell colspan2">文本框</label>
            <div class="input-control cell colspan4">
              <input type="text">
            </div>
          </div>
          <div class="row form-group">
            <label class="label align-right cell colspan2">密码</label>
            <div class="input-control cell colspan4">
              <input type="password">
            </div>
          </div>            
          <div class="row form-group">
            <label class="label align-right cell colspan2">手机</label>
            <div class="input-control cell colspan4">
              <input type="text" placeholder="请输入手机号码">
            </div>
          </div>
          <div class="row form-group">
            <label class="label align-right cell colspan2">Readonly</label>
            <div class="input-control cell colspan4">
              <input type="text" value="Readonly" readonly>
            </div>
          </div>

          <div class="row form-group">
            <label class="label align-right cell colspan2">Disabled</label>
            <div class="input-control cell colspan4">
              <input type="text" disabled>
            </div>
          </div>
        </form>
    </div>

    <h3 class="title fg-darkCyan">文本框状态</h3>
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
