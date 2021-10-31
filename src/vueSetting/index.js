import Vue from 'vue'

import Cookies from 'js-cookie'
Vue.prototype.$cookies = Cookies

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

// 注册自定义组件
import Components from '@/components'
Vue.use(Components)

// 全局注册自定义指令
// import * as directives from '@/directives'
// Object.keys(directives).forEach((key) => {
//   Vue.directive(key, directives[key])
// })

// 全局注册自定义过滤器
// import * as filters from '@/filters'
// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key])
// })

import { Toast, Button } from 'vant'

Vue.use(Toast) //轻提示
Vue.use(Button) //轻提示

// 将所有 Toast 的展示时长设置为 1000 毫秒
Toast.setDefaultOptions({ duration: 1000 })
Toast.setDefaultOptions('loading', { duration: 0 })

Vue.prototype.$toast = Toast
