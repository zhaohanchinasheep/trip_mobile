import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from  './utils/filters'
// 导入vantUI组件库
import Vant from 'vant'
import 'vant/lib/index.css'
// 将Vant当作一个vue插件全局导入
Vue.use(Vant)


// 统一全部注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k,filters[k]))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
