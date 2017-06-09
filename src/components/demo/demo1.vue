<template>
  <div class="content">
      <p class="bg-grayLighter padding10" style="font-size: 0.875rem;">Home / demo1</p>
      <h4 class="margin5">
        <i class="fa fa-list"></i> Panel</h4>
      <div class="flex-grid">
        <div class="row">
          <section class="cell colspan3 padding5">
            <div class="padding10 bg-red align-center fg-white">
              <i class="fa fa-reorder" style="font-size: 3rem;"></i>
              <p>New Order</p>
            </div>
          </section>
          <section class="cell colspan3 padding5">
            <div class="padding10 bg-teal align-center fg-white">
              <i class="fa fa-cube" style="font-size: 3rem;"></i>
              <p>Products</p>
            </div>
          </section>
          <section class="cell colspan3 padding5">
            <div class="padding10 bg-lightBlue align-center fg-white">
              <i class="fa fa-commenting-o" style="font-size: 3rem;"></i>
              <p>Comments</p>
            </div>
          </section>
          <section class="cell colspan3 padding5">
            <div class="padding10 bg-violet align-center fg-white">
              <i class="fa fa-random" style="font-size: 3rem;"></i>
              <p>Bussiness</p>
            </div>
          </section>
        </div>
      </div>
      <br>
      <h4 class="margin5">
        <i class="fa fa-list"></i> Order</h4>
      <div class="pull-right">
        <div class="input-control text" style="width: 300px;">
          <input type="text" placeholder="Search ..." style="padding-right: 58px;">
          <button class="button">
            <i class="fa fa-search"></i></button>
        </div>
      </div>
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
        </tbody>
      </table>
      <br>
      <h4 class="margin5">
        <i class="fa fa-list"></i> Form</h4>
      <div class="demo1-form padding10">
        <form class="flex-grid">
          <div class="row">
            <section class="cell colspan6">
              <section class="form-group row">
                <label class="label cell colspan2" for="">Name</label>
                <div class="input-control cell colspan8">
                  <input type="text" placeholder="Your name">
                </div>
              </section>
              <section class="form-group row">
                <label class="label cell colspan2" for="">Phone</label>
                <div class="input-control cell colspan8">
                  <input type="text" placeholder="Your Phone">
                </div>
              </section>
              <section class="form-group row">
                <label class="label cell colspan2" for="">Email</label>
                <div class="input-control cell colspan8">
                  <input type="text" placeholder="Your email">
                </div>
              </section>
              <section class="form-group row">
                <label class="label cell colspan2" for="">Sex</label>
                <label class="input-control radio">
                  <input type="radio" name="gender" checked>
                  <span class="check"></span>
                  <span class="caption">Male</span>
                </label>
                &nbsp;&nbsp;
                <label class="input-control radio">
                  <input type="radio" name="gender">
                  <span class="check"></span>
                  <span class="caption">Female</span>
                </label>
              </section>
              <section class="form-group row">
                <label class="label cell colspan2" for="">Type</label>
                <label class="input-control checkbox">
                  <input type="checkbox">
                  <span class="check"></span>
                  <span class="caption">Buy</span>
                </label>
                &nbsp;&nbsp;
                <label class="input-control checkbox">
                  <input type="checkbox">
                  <span class="check"></span>
                  <span class="caption">Register</span>
                </label>
                &nbsp;&nbsp;
                <label class="input-control checkbox">
                  <input type="checkbox">
                  <span class="check"></span>
                  <span class="caption">Ask Info</span>
                </label>
              </section>
            </section>
            <section class="cell colspan6">
              <div class="form-group row">
                <label class="label cell colspan2">Description</label>
                <div class="cell colspan8">
                  <textarea rows="8" style="width: 100%;"></textarea>
                </div>
              </div>
            </section>
          </div>
          <div class="row flex-just-end">
            <section class="cell colspan2" style="padding-left: 50px;">
              <button class="button primary">Submit</button>
            </section>
          </div>    
        </form>
      </div>
  </div>
</template>
<script>
  
</script>
<style lang="scss">
  .demo1-form {
    background: #f0f0f0;
    form {
      position: relative;
    }
  }
</style>
