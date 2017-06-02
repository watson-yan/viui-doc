<template>
  <div class="content">
    <h3 class="title fg-darkCyan">Dropdown 下拉按钮</h3>
    <div style="height: 80px;">
      <section class="pull-left padding15">
        <dropdown :title="'下拉菜单'" :menu="menu" @choice="choice"></dropdown>
      </section>
      <section class="pull-right padding15">
        <dropdown :title="'下拉菜单'" :menu="menu" :right="true" @choice="choice"></dropdown>
      </section>
    </div>
    <p class="fg-gray">Html代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre>&lt;!--菜单居左--&gt;
&lt;dropdown :title="'下拉菜单'" :menu="menu" @choice="choice"&gt;&lt;/dropdown&gt;
&lt;!--菜单居右--&gt;
&lt;dropdown :title="'下拉菜单'" :menu="menu" :right="true" @choice="choice"&gt;&lt;/dropdown&gt;
</code></pre>

    <p class="fg-gray">js代码</p>
<pre v-prettify class="prettyprint linenums"><code v-pre> data() {
  return {
    menu: [
      { value: 0, content: 'Action1' },
      { value: 1, content: 'Action2' },
      { value: 2, content: 'Action3' },
      { value: 3, content: 'Action4' },
      { value: 4, content: 'Action5', disabled: true },
      { value: 5, content: 'Action6' }
    ]
  }
},
methods: {
  choice(val) {
    this.$message({
      caption: '成功',
      content: `你选择了${this.menu[val].content}`,
      type: 'info'
    })
  }
}
</code></pre>
   <p class="fg-gray">Props 列表</p>
   <table class="table striped hovered bordered border">
      <thead>
        <th>Prop</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>false</td>
          <td>'Menu'</td>
          <td>按钮显示的文字</td>
        </tr>
        <tr>
          <td>menu</td>
          <td>Array</td>
          <td>true</td>
          <td></td>
          <td>显示的菜单列表</td>
        </tr>
        <tr>
          <td>right</td>
          <td>Boolean</td>
          <td>false</td>
          <td></td>
          <td>是否右侧对齐</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p class="fg-gray">Binding attributes 绑定属性</p>
    <table class="table striped hovered bordered border">
      <thead>
        <th>Attribute Name</th>
        <th>Type</th>
        <th>Argument</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>choice</td>
          <td>Function</td>
          <td>n</td>
          <td>选中菜单某一项后的回调事件</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menu: [
          { value: 0, content: 'Action1' },
          { value: 1, content: 'Action2' },
          { value: 2, content: 'Action3' },
          { value: 3, content: 'Action4' },
          { value: 4, content: 'Action5', disabled: true },
          { value: 5, content: 'Action6' }
        ]
      }
    },
    methods: {
      choice(val) {
        this.$message({
          caption: '成功',
          content: `你选择了${this.menu[val].content}`,
          type: 'info'
        })
      }
    }
  }
</script>
<style lang="scss">
  
</style>
