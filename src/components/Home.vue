<template>
  <div class="home">
    <header class="bg-dark">
      <div class="logo fg-white">
        VIUI
      </div>
    </header>
    <article>
      <div class="nav-menu bg-darkBlue">
          <ul class="unstyled-list">
              <li class="align-center">
                <i class="fa fa-home"></i>
              </li>
              <li class="align-center">
                <i class="fa fa-tag"></i>
              </li>
              <li class="align-center">
                <i class="fa fa-image"></i>
              </li>
          </ul>
      </div>
      <div class="router-content">
        <router-view>

        </router-view>
      </div>
    </article>
    <footer>

    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style lang="scss">
.home {
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  header {
    flex-grow: 0;
    height: 60px;
    padding: 0 60px;
    .logo {
      line-height: 60px;
      font-size: 2rem;
    }
  }
  article {
    flex-grow: 1;
    display: flex;
    display: -webkit-flex;
    .nav-menu {
      width: 60px;
      flex-grow: 0;
      ul {
        li {
          color: #fff;
          line-height: 3rem;
          cursor: pointer;
          &:hover {
            background: rgb(237, 239, 240);
            color:#16499a;
            cursor: pointer;
          }
        }
      }
    }
    .router-content {
      flex-grow: 1;
    }
  }
}
</style>
