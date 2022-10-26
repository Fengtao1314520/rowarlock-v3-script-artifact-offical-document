<template>
  <v-card flat>
    <v-sheet>
      <v-row class="d-flex justify-center">
        <v-img contain max-height="300" max-width="500" src="../assets/rowarlock-logo.png"></v-img>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-alert color="grey lighten-4" class="text-h2 blue--text text--accent-2">RoWarlock自动化测试框架</v-alert>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-alert class="text-h6">
          <p>RoWarlock-Script-Artifact是RoWarlock 3大框架内，底层脚本解释器，基于Playwaright框架进行开发</p>
        </v-alert>
      </v-row>
      <v-row class="d-flex justify-center">
        Support by
        <v-img contain max-height="60" max-width="60" src="../assets/playwright-logo.svg" class="mt-0 mb-6"></v-img>
        <v-btn text x-large class="text-h3 font-weight-black" color="#45ba4b" @click="openPlaywright()">
          Playwright
        </v-btn>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-btn depressed large class="mr-4 text-h6" color="primary" to="/history">
          <v-icon left dark>mdi-timer-play-outline</v-icon>
          登高望远
        </v-btn>
        <v-btn depressed large outlined class="mr-4 text-h6" color="pink accent-1" dark to="/refeature">
          <v-icon left dark>mdi-sign-direction-plus</v-icon>
          重新启程
        </v-btn>
        <v-btn depressed large class="mr-4 text-h6" color="success" dark to="/reentrance">
          <v-icon left dark>mdi-book-search-outline</v-icon>
          初入江湖
        </v-btn>
        <v-btn depressed large outlined class="mr-4 text-h6" color="deep-purple darken-3" dark to="/pwapi">
          <v-icon left dark>mdi-book-open-page-variant</v-icon>
          心法秘籍
        </v-btn>
      </v-row>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'HomeIndex',
  date: () => ({}),
  methods: {
    openPlaywright() {
      window.location.href = 'https://playwright.dev/'
    }
  }
}
</script>

<style></style>
