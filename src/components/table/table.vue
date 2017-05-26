<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Table</h3>
    <div class="box">
      <section>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="striped">
          <span class="check"></span>
          <span class="caption">striped</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="hovered">
          <span class="check"></span>
          <span class="caption">hovered</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type ="checkbox" value="cell-hovered">
          <span class="check"></span>
          <span class="caption">cell-hovered</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="border">
          <span class="check"></span>
          <span class="caption">border</span>
        </label>
        <label class="input-control checkbox">
          <input v-model="className" type="checkbox" value="bordered">
          <span class="check"></span>
          <span class="caption">bordered</span>
        </label>
      </section>
      <table :class="clsName">
        <thead>
          <tr>
            <th>Column1</th>
            <th>Column2</th>
            <th>Column3</th>
            <th>Column4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          className: []
        }
      },
      computed: {
        clsName() {
          return `table ${this.className.join(' ')}`
        }
      }
    }
</script>
<style></style>
