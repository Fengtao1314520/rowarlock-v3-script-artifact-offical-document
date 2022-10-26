<template>
  <v-card flat>
    <v-row class="ma-0">
      <v-col cols="2">
        <v-btn class="ml-4 text-h4" depressed color="primary" x-large>RoWarlock 3</v-btn>
      </v-col>
      <v-spacer />
      <span>BETA</span>
    </v-row>
    <v-card class="ml-6" outlined>
      <v-card-title class="text-h4">Launch</v-card-title>
      <v-card-text>
        <v-alert class="mt-4" border="left" dense colored-border type="info" elevation="0">
          Launch是执行器的核心实现，Launch方法是初始化和启动PWDriver实体类的唯一办法
        </v-alert>
        <v-card class="my-2" outlined>
          <v-card-text>
            <v-row>
              <v-col cols="7">
                <CodeShow :code="launcher.code" codetype="typescript" :height="launcher.height" />
                <v-alert type="info" dense color="blue accent-4" outlined class="mt-4 mb-0">
                  <span>{{ launcher.desc }}</span>
                </v-alert>
                <v-card class="mt-2" elevation="0">
                  <v-card-title>
                    <v-toolbar color="indigo lighten-1" dark dense>
                      <v-toolbar-title>示例</v-toolbar-title>
                    </v-toolbar>
                  </v-card-title>
                  <v-card-text>
                    <CodeShow
                      :code="launcher.codesample.content"
                      codetype="typescript"
                      :height="launcher.codesample.height"
                    />
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col>
                <v-data-table hide-default-footer dense :headers="lapwheaders" :items="launcher.detail">
                  <template v-slot:[`item.name`]="{ item }">
                    <v-chip color="blue darken-2" dark label small>
                      {{ item.name }}
                    </v-chip>
                  </template>
                  <template v-slot:[`item.types`]="{ item }">
                    <v-chip color="purple lighten-2" dark label small>
                      {{ item.types }}
                    </v-chip>
                  </template>
                  <template v-slot:[`item.sample`]="{ item }">
                    <v-chip v-if="item.sample" color="yellow darken-4" outlined label small>
                      {{ item.sample }}
                    </v-chip>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
    <v-card class="ml-6 mt-4" outlined>
      <v-card-title class="text-h4">
        PWDriver
        <v-btn depressed to="/pwapi" color="primary" class="ml-6">心法秘籍</v-btn>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-alert class="mt-4" border="left" dense colored-border type="info" elevation="0">
            PWDriver是执行器的核心实现，PWDriver实体类是用户实际操作的步骤的抽象表达
          </v-alert>
          <v-spacer />
        </v-row>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import CodeShow from './CodeShow.vue'
import * as TypeDesc from '../scripts/typedesc'
export default {
  name: 'RoEntrance',
  components: { CodeShow },
  data: () => ({
    lapwheaders: [
      {
        text: '参数名',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      {
        text: '参数类型',
        sortable: false,
        value: 'types'
      },
      {
        text: '是否必须',
        sortable: false,
        value: 'mustornot'
      },
      {
        text: '示例',
        sortable: false,
        value: 'sample'
      }
    ],
    launcher: TypeDesc.Launcher
  })
}
</script>

<style></style>
