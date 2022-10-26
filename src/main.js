import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// 第一步: 引入router 插件
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 第二步: 创建router文件夹 引入实例
import router from './router'

// 关闭生产提示
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  // 使用路由
  router: router
}).$mount('#app')
