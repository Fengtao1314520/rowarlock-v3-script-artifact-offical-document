// 该文件是专门用于创建整个应用的路由器
// 第一步引入插件(本质是一个构造函数)
import VueRouter from 'vue-router'

//主页
import HomeIndex from '../components/HomeIndex.vue'
// 登高望远
import RoHistory from '../components/RoHistory.vue'
// 重新启程
import RoFeature from '../components/RoFeature.vue'
// 初入江湖
import RoEntrance from '../components/RoEntrance.vue'
// 心法秘籍
import PWApi from '../components/PWApi.vue'

// 招式打一遍
import DemoShow from '../components/DemoShow.vue'

// 第二步创建router实例对象并暴露
export default new VueRouter({
  routes: [
    {
      // path是路径
      path: '/',
      //跳转的组件
      component: HomeIndex
    },

    {
      // path是路径
      path: '/history',
      //跳转的组件
      component: RoHistory
    },
    {
      // path是路径
      path: '/feature',
      //跳转的组件
      component: RoFeature
    },
    {
      // path是路径
      path: '/entrance',
      //跳转的组件
      component: RoEntrance
    },
    {
      // path是路径
      path: '/pwapi',
      //跳转的组件
      component: PWApi
    },
    {
      // path是路径
      path: '/demoshow',
      //跳转的组件
      component: DemoShow
    }
  ]
})
// 然后去main.js中引入router实例
