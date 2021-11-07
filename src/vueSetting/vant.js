import Vue from 'vue'
import { Toast, Button } from 'vant'

Vue.use(Toast) //轻提示
Vue.use(Button) //轻提示

// 将所有 Toast 的展示时长设置为 1000 毫秒
Toast.setDefaultOptions({ duration: 1000 })
Toast.setDefaultOptions('loading', { duration: 0 })

Vue.prototype.$toast = Toast
