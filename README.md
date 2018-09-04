# leiang-easy-dialog
vue插件leiang-easy-dialog，消息提醒框

1.安装npm包
```
npm i leiang-easy-dialog
```

2.main.js入口文件内引用
```
import easyDialog from 'leiang-easy-dialog'
Vue.use(easyDialog)
```

# 使用示例
```
this.$easyDialog.use({
  title: '标题',
  content: '描述文本',
  customBtns: [
    {
      className: 'success',
      text: '确定',
      callback: this.successFunction
    }
  ]
})

methods: {
  // 点击确定后执行的对应方法
  successFunction() {
    console.log('click success')
  }
}
```

# API
use传递参数：
- maskShow（是否显示半透明遮罩层，Boolean类型，默认：true）
- iconClass（字体图标，String类型，默认：'icon-ok'）
-- 内置三个字体图标：错误（icon-error），对勾（icon-ok），警告（icon-jinggao）。也可传入自己使用的icon className
- title（标题文本，String类型，默认：''）
- content（消息文本，String类型，默认：''）
- customBtns（自定义按钮组，Array类型，默认：）
```
[
 {
   className: 'success',  // 按钮附带的className
   text: '确定',           // 按钮文本
   callback: null         // 按钮事件（默认为空，点击后自动关闭dialog）
 }
]
```
