import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import '@/style/index.less'

import '@/vueSetting' //配置和vue有关的一下东西

Vue.config.productionTip = false

// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      FastClick.attach(document.body)
    },
    false
  )
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
