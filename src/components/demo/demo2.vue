<template>
  <div class="content">
    <p></p>
    <tabs :list="list" :value.sync="active">
      <div slot="Sales Order">
        <section class="padding10">
          <div class="input-control">
            <label class="label">Category</label>
            <vi-select :options="options"></vi-select>
          </div>
          <button class="button primary">Search</button>
        </section>
        <table class="table border bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abby</td>
              <td>The npm command-line tool is bundled with Node.js</td>
              <td><span class="tag info">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Jasmine</td>
              <td>Everything you see exists together in a delicate balance</td>
              <td><span class="tag alert">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Camille</td>
              <td>Whatever is worth doing is worth doing well</td>
              <td><span class="tag success">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Vanessa</td>
              <td>In love folly is always sweet.</td>
              <td><span class="tag info">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Magical</td>
              <td>The hard part isn’t making the decision. It’s living with it</td>
              <td><span class="tag warning">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Abby</td>
              <td>The npm command-line tool is bundled with Node.js</td>
              <td><span class="tag info">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Jasmine</td>
              <td>Everything you see exists together in a delicate balance</td>
              <td><span class="tag alert">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Camille</td>
              <td>Whatever is worth doing is worth doing well</td>
              <td><span class="tag success">Javascript</span></td>
              <td>
                <button class="square-button mini">
                  <i class="fa fa-gear"></i>
                </button>
                <button class="square-button mini primary">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="square-button mini danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="margin10">
          <pagination :total="60"></pagination>
        </p>
      </div>
      <div slot="Purchase Order">
        <br>
        <div style="height: 450px;">
          <slide :list="imgList" :duration="5000"></slide>
        </div>
      </div>
      <div slot="Products">
        
      </div>
    </tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          { name: 'Sales Order' },
          { name: 'Purchase Order' },
          { name: 'Products' }
        ],
        active: 'Sales Order',
        options: [
          { value: 0, text: 'Category' },
          { value: 1, text: 'Category1' },
          { value: 2, text: 'Category2' },
          { value: 3, text: 'Category3' },
          { value: 4, text: 'Category4' }
        ],
        imgList: [
          {
            imgUrl: 'https://raw.githubusercontent.com/watson-yan/watson-yan.github.io/master/ViUI/static/imgs/1.jpg',
            url: ''
          },
          {
            imgUrl: 'https://raw.githubusercontent.com/watson-yan/watson-yan.github.io/master/ViUI/static/imgs/2.jpg',
            url: ''
          },
          {
            imgUrl: 'https://raw.githubusercontent.com/watson-yan/watson-yan.github.io/master/ViUI/static/imgs/3.jpg',
            url: ''
          },
          {
            imgUrl: 'https://raw.githubusercontent.com/watson-yan/watson-yan.github.io/master/ViUI/static/imgs/4.jpg',
            url: ''
          }
        ]
      }
    }
  }
</script>
<style lang="scss">

</style>
