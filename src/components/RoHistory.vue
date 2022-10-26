<template>
  <v-card flat>
    <v-card flat elevation="0">
      <v-card-title class="text-h4 indigo--text text--accent-4">自荐书</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="5">
            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2" dense>
              <!-- <p>本文针对RoWarlock-Script-Artifact脚本进行介绍</p> -->
              <span class="text-caption">
                RoWarlock-Script-Artifact(Typescript版)是RoWarlock 3.x内底层脚本解释器，基于Playwright开发。
              </span>
              <v-list disabled dense class="ml-n6">
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in desclist" :key="i" dense>
                    <v-list-item-icon class="mr-4">
                      <v-icon small v-text="item.icon" color="pink lighten-1" />
                    </v-list-item-icon>
                    <p class="my-2 text-caption">{{ item.text }}</p>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-alert>
          </v-col>
          <v-col>
            <CodeShow :code="rawstring.RoHistoryCode.democode" codetype="js" :height="160" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card flat elevation="0">
      <v-card-title class="text-h4 indigo--text text--accent-4">过去的涌动</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="7">
            <CodeShow :code="rawstring.RoHistoryCode.roonecode_1" codetype="markup" :height="180" />
            <v-row class="ma-2" />
            <CodeShow :code="rawstring.RoHistoryCode.roonecode_2" codetype="csharp" :height="260" />
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Rowarlock 1.x~2.x</v-card-title>
              <v-card-text>
                <v-list disabled dense>
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in ro_1" :key="i" dense>
                      <v-list-item-icon class="mr-4">
                        <v-icon small v-text="item.icon" color="primary" />
                      </v-list-item-icon>
                      <p class="my-2 text-caption">{{ item.text }}</p>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card flat elevation="0">
      <v-card-title class="text-h4 indigo--text text--accent-4">目之所及，皆往未来</v-card-title>
      <v-card-text>
        <v-alert shaped outlined type="info" dense>
          <span class="blue--text text--accent-4">{{ whychange }}</span>
        </v-alert>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import CodeShow from './CodeShow.vue'
import * as RawString from '../scripts/rawstring'

export default {
  components: { CodeShow },
  name: 'RoHistory',
  data: () => ({
    rawstring: RawString,
    //简述
    desclist: [
      {
        icon: 'mdi-dots-horizontal-circle-outline',
        text: '允许以Npm install的形式安装(本地安装package)'
      },
      {
        icon: 'mdi-dots-horizontal-circle-outline',
        text: '使用Typescript编写测试脚本'
      },
      {
        icon: 'mdi-dots-horizontal-circle-outline',
        text: '默认使用Mocha架构，并允许自定义测试架构'
      },
      {
        icon: 'mdi-dots-horizontal-circle-outline',
        text: '允许单步调试和单步执行和命令行执行'
      },
      {
        icon: 'mdi-dots-horizontal-circle-outline',
        text: '对外丰富的API和调用方式'
      }
    ],

    //ro 1/2两代
    ro_1: [
      {
        icon: 'mdi-plus-circle-multiple-outline',
        text: 'Support By Selenium 3.x'
      },
      {
        icon: 'mdi-plus-circle-multiple-outline',
        text: 'XML、C#编写脚本'
      },
      {
        icon: 'mdi-plus-circle-multiple-outline',
        text: '基于.NET的动态编译、反射方法，库类开发自由'
      },
      {
        icon: 'mdi-plus-circle-multiple-outline',
        text: '引用大量自扩展书写方法'
      },
      {
        icon: 'mdi-plus-circle-multiple-outline',
        text: '特性写法，C#脚本执行依赖于特性而非顺序'
      },
      {
        icon: 'mdi-plus-circle-multiple-outline',
        text: '脚本文件自解析，自编译'
      }
    ],

    //为何改变
    whychange:
      '历史总向前发展，故步自封往往只会调入路径依赖的陷阱，每一代都有它的使命，当它走入暮光之中，我们能做的，并不是企图延续它的光辉，而是让他体面的留下怀念。'
  })
}
</script>

<style></style>
