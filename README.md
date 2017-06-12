# viui-doc
一款MetroUI 风格的Vue.js组件库（ 如果喜欢这个后台模板风格记得Star哦）

### 提示
本项目暂时不支持响应式

### 下载源码
> $ git clone https://github.com/watson-yan/viui-doc.git

cd到目录

> $ cd viui-doc

下载依赖项

> $ cd npm install

在浏览器中打开项目

> $ npm run dev

### 修改页面
本项目是由通过vue-cli生成的结构，如果习惯vue-cli的同学很好改页面

### 右侧菜单栏
在/src/App.vue的data中配置:
```javascript
 menu: [
    {
      title: 'Demo',  // 主标题
      icon: 'fa fa-home', //主ICON
      // 子节点
      nodes: [
        { name: 'Demo1', icon: 'fa fa-laptop', link: '/demo1' },
        { name: 'Demo2', icon: 'fa fa-laptop', link: '/demo2' },
        { name: 'Demo3', icon: 'fa fa-laptop', link: '/demo3' }
      ]
    },
    {
      title: '组件',
      icon: 'fa fa-star',
      nodes: [
        { name: 'Dropdown 下拉按钮', icon: 'fa fa-caret-down', link: '/dropdown-demo' },
        { name: 'Select 下拉框', icon: 'fa fa-angle-down', link: '/select-demo' },
        { name: 'Pagination 分页器', icon: 'fa fa-ellipsis-h', link: '/pagination-demo' },
        { name: 'Tab 选项卡', icon: 'fa fa-clone', link: '/tabs-demo' },
        { name: 'Upload 上传组件', icon: 'fa fa-upload', link: '/upload-demo' },
        { name: 'Slide 幻灯片', icon: 'fa fa-image', link: '/slide-demo' },
        { name: 'Datepicker 日期选择器', icon: 'fa fa-calendar', link: '/datepicker-demo' }
      ]
    }
 ]
```





