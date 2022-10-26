<template>
  <prism-editor
    :style="{ height: setHeight }"
    class="my-editor"
    :readonly="true"
    v-model="localcode"
    :highlight="highlighter"
    line-numbers
  />
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
// import the styles somewhere
import 'vue-prism-editor/dist/prismeditor.min.css'
// import highlighting library (you can use any library you want just return html string)
//import { highlight, languages } from 'prismjs/components/prism-core'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-bash'
// import syntax highlighting styles
import 'prismjs/themes/prism.css'

export default {
  /**
   * 测试
   */
  name: 'CodeShow',
  components: {
    PrismEditor
  },
  props: {
    code: String,
    codetype: String,
    height: Number
  },
  data: () => ({ localcode: '', localcodetype: '', localheight: '' }),
  watch: {
    code: {
      immediate: true,
      handler(val) {
        if (val !== null && val !== undefined) {
          this.localcode = val
        }
      },
      deep: true
    },
    codetype: {
      immediate: true,
      handler(val) {
        if (val !== null && val !== undefined) {
          if (val === 'js') {
            this.localcodetype = languages.js
          } else if (val === 'markup') {
            this.localcodetype = languages.markup
          } else if (val === 'csharp') {
            this.localcodetype = languages.csharp
          } else if (val === 'bash') {
            this.localcodetype = languages.bash
          } else if (val === 'typescript') {
            this.localcodetype = languages.typescript
          }
        }
      },
      deep: true
    },

    height: {
      immediate: true,
      handler(val) {
        if (val !== null && val !== undefined) {
          this.localheight = val
        }
      },
      deep: true
    }
  },
  computed: {
    // 滚动区高度
    setHeight: function () {
      return this.localheight + 'px' //自定义高度需求
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, this.localcodetype) // languages.<insert language> to return html with markup
    }
  }
}
</script>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #f5f5f5;
  /*color: #ccc;*/

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  font-weight: 'bold';
  line-height: 1.5;
  padding: 2px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
