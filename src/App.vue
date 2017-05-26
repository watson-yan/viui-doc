<template>
  <div id="app">
    <header class="bg-dark">
      <div class="logo fg-white">
        VIUI
      </div>
    </header>
        <article>
      <div class="nav-menu bg-darkBlue">
          <ul v-if="active" class="unstyled-list no-margin lv1-menu">
              <li v-for="m of menu" @click="active = m" :class="{'active': active==m}" :title="m.title">
                <i :class="m.icon"></i>
              </li>
          </ul>
          <div class="assistant">
            <h3 class="no-margin align-center">{{active.title}}</h3>
            <ul v-if="activeNode" class="unstyled-list no-margin lv2-menu">
              <li v-for="item of active.nodes"
                @click="activeNode = item"
                :class="{'active': activeNode.name == item.name}">
                <a class="text-ellipsis"><i :class="item.icon"></i> {{item.name}}</a>
              </li>
            </ul>
          </div>
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
  name: 'app',
  data() {
    return {
      active: null,
      activeNode: null,
      menu: [
        {
          title: 'Home',
          icon: 'fa fa-home',
          nodes: [
            { name: 'Page1', icon: 'fa fa-laptop', link: '/demo' },
            { name: 'Page2', icon: 'fa fa-laptop', link: '/demo1' }
          ]
        },
        {
          title: '元素',
          icon: 'fa fa-list-ul',
          nodes: [
            { name: 'Button 按钮', icon: 'fa fa-hand-pointer-o', link: '/button' },
            { name: 'Tag 标签', icon: 'fa fa-tag', link: '/tag' }
          ]
        },
        {
          title: '颜色',
          icon: 'fa fa-paint-brush',
          nodes: [
            { name: 'Background 背景色', icon: 'fa fa-sticky-note-o', link: '/background' }
          ]
        },
        {
          title: '表格',
          icon: 'fa fa-table',
          nodes: [
            { name: 'Table 表格', icon: 'fa fa-table', link: '/table' }
          ]
        },
        {
          title: 'Form',
          icon: 'fa fa-wpforms',
          nodes: [
            { name: 'Input 输入框', icon: 'fa fa-italic', link: '/input' },
            { name: 'RadioBox 单选框', icon: 'fa fa-circle-o', link: '/radio' },
            { name: 'CheckBox 复选框', icon: 'fa fa-check-square-o', link: '/checkbox' },
            { name: 'Switch 开关', icon: 'fa fa-toggle-off', link: '/switch' }
          ]
        }
      ]
    }
  },
  created() {
    // init menu
    this.initMenu()
  },
  watch: {
    active() {
      if (this.active.nodes.length > 0) {
        this.activeNode = this.active.nodes[0]
      } else {
        this.activeNode = null
      }
    },
    activeNode() {
      if (!this.activeNode) {
        this.$router.push({
          path: '/'
        })
      } else {
        this.$router.push({
          path: this.activeNode.link
        })
      }
    }
  },
  methods: {
    initMenu() {
      if (this.menu.length > 0) {
        this.active = this.menu[0]
        if (this.menu[0].nodes.length > 0) {
          this.activeNode = this.menu[0].nodes[0]
        }
      }
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
