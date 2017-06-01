<template>
  <div id="app">
    <header class="flex-grid bg-dark">
      <div class="row flex-just-sb">
        <div class="intro fg-white">
          VIUI<small style="font-size:14px; font-style: italic;">Metro UI组件库 - Vue(2.x)</small>
        </div>
        <div>
          <div class="input-control text" style="width: 300px;">
            <input type="text" placeholder="Search ..." style="padding-right: 58px;">
            <button class="button">
              <i class="fa fa-search"></i></button>
          </div>
        </div>
        <div>
          <ul class="app-menu unstyled-list clearfix">
            <li class="fg-white"><a href="https://github.com/watson-yan/ViUI" target="_blank">Github</a></li>
            <li class="fg-white">About</li>
          </ul>
        </div>
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
          title: 'Demo',
          icon: 'fa fa-home',
          nodes: [
            { name: 'Demo1', icon: 'fa fa-laptop', link: '/demo1' },
            { name: 'Demo2', icon: 'fa fa-laptop', link: '/demo2' }
          ]
        },
        {
          title: '组件',
          icon: 'fa fa-paper-plane',
          nodes: [
            { name: 'Pagination 分页器', icon: 'fa fa-ellipsis-h', link: '/pagination-demo' },
            { name: 'Tab 选项卡', icon: 'fa fa-clone', link: '/tabs-demo' },
            { name: 'Upload 上传组件', icon: 'fa fa-upload', link: '/demo2' },
            { name: 'Slide 幻灯片', icon: 'fa fa-image', link: '/demo2' }
          ]
        },
        {
          title: '插件',
          icon: 'fa fa-arrows-alt',
          nodes: [
            { name: 'Message 消息', icon: '', link: '/message' },
            { name: 'Alert 弹窗提醒', icon: '', link: '/alert' }
          ]
        },
        {
          title: '布局',
          icon: 'fa fa-align-left',
          nodes: [
            { name: 'Flex-grid 栅格系统', icon: 'fa fa-align-left', link: '/grid' }
          ]
        },
        {
          title: '表单元素',
          icon: 'fa fa-wpforms',
          nodes: [
            { name: 'Input 输入框', icon: 'fa fa-italic', link: '/input' },
            { name: 'Radio 单选按钮', icon: 'fa fa-circle-o', link: '/radio' },
            { name: 'CheckBox 复选框', icon: 'fa fa-check-square-o', link: '/checkbox' },
            { name: 'Switch 开关', icon: 'fa fa-toggle-off', link: '/switch' }
          ]
        },
        {
          title: '元素',
          icon: 'fa fa-cubes',
          nodes: [
            { name: 'Button 按钮', icon: 'fa fa-hand-pointer-o', link: '/button' },
            { name: 'Tag 标签', icon: 'fa fa-tag', link: '/tag' }
          ]
        },
        {
          title: '颜色',
          icon: 'fa fa-paint-brush',
          nodes: [
            { name: 'Colors Metro色系', icon: 'fa fa-sticky-note-o', link: '/color' }
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
          title: '帮助类',
          icon: 'fa fa-question-circle-o',
          nodes: [
            { name: 'Margin', icon: 'fa fa-gear', link: '/table' },
            { name: 'Padding', icon: 'fa fa-gear', link: '/table' },
            { name: 'List', icon: 'fa fa-gear', link: '/table' },
            { name: 'Float', icon: 'fa fa-gear', link: '/table' }
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
      const link = this.activeNode ? this.activeNode.link : '/'
      this.$router.push({ path: link })
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
