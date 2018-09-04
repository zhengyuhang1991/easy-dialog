import easyDialog from './easy-dialog'

// 定义dialog对象
let dialog = {}

// 使用Vue中的install方法来定义插件
dialog.install = (Vue, options) => {
  const Template = Vue.extend(easyDialog)
  let opts
  const initPlugins = () => {
    // 实例化并插入dom元素
    opts = new Template()
    let createDom = opts.$mount().$el
    document.body.appendChild(createDom)
  }

  // 挂载到vue原型并全局注册
  Vue.prototype.$easyDialog = {
    use(options) {
      if (!opts) {
        initPlugins()
      }
      Object.assign(opts, options)

      this.show()
    },
    show() {
      opts.show = true
    },
    close() {
      opts.show = false
    }
  }
}

// 模块导出
export default dialog
