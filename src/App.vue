<template>
  <v-app>
    <v-navigation-drawer app :mini-variant.sync="minimode">
      <v-list-item class="px-2">
        <v-btn icon @click.stop="minimode = !minimode">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="(item, index) in leftlsit" :key="index" link :to="item.to">
          <v-list-item-icon>
            <v-icon color="blue accent-4">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-body-2">{{ item.title }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="blue accent-2" dark height="48">
      <v-btn text>
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">RoWarlock Automatic Offical Website</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </v-main>
    <!--
    <v-footer app inset absolute padless color="blue lighten-2" height="30">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
          height="30"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
          height="30"
        />
      </div>
    </v-footer>
    -->
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    minimode: false,

    leftlsit: [
      { title: '主页', icon: 'mdi-home-city', to: '/' },
      { title: '登高望远', icon: 'mdi-timer-play-outline', to: '/history' },
      { title: '重新启程', icon: 'mdi-sign-direction-plus', to: '/feature' },
      { title: '初入江湖', icon: 'mdi-book-search-outline', to: '/entrance' },
      { title: '心法秘籍', icon: 'mdi-book-open-page-variant', to: '/pwapi' },
      { title: '高手展示', icon: 'mdi-play-box-outline', to: '/demoshow' }
    ]
  })
}
</script>

<style>
@import './assets/fonts/font.less';
</style>
