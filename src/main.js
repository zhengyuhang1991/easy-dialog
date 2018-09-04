import Vue from 'vue'
import App from './App.vue'

import easyDialog from './libs/easy-dialog/index'

Vue.use(easyDialog)

new Vue({
  el: '#app',
  render: h => h(App)
})
