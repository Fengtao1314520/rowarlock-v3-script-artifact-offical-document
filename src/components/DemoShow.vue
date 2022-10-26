<template>
  <v-card flat>
    <CodeShow :code="demoshow.code" codetype="typescript" :height="demoshow.height" />
  </v-card>
</template>

<script>
import CodeShow from './CodeShow.vue'
import * as TypeDesc from '../scripts/typedesc'
export default {
  name: 'DemoShow',
  components: { CodeShow },
  data: () => ({
    demoshow: TypeDesc.DemoShow
  })
}
</script>

<style></style>
