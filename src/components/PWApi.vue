<template>
  <v-sheet>
    <v-card class="ma-2" flat>
      <v-alert dense color="purple lighten-1" elevation="0" dark>
        <v-row class="ma-0 mt-2">
          <span class="text-body-1">
            PWDriver是执行器的核心实现，PWDriver实体类是用户实际操作的步骤的抽象表达,PWDriver是继承IPWDriver后的方法实现
          </span>
          <v-spacer />
          <v-btn small depressed @click="showipdriverdialog = true" color="yellow lighten-1" class="black--text mt-n1">
            IPWDriver接口
          </v-btn>
        </v-row>
      </v-alert>

      <!--所有API的接口描述-->
      <v-card outlined v-for="(oneapi, i) in pwapis" :key="i" class="mb-2" color="grey lighten-4">
        <v-card-title>
          <v-row>
            <v-col cols="2">
              <v-chip label color="green" text-color="white" class="text-h6">{{ i + 1 }}. {{ oneapi.name }}</v-chip>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card flat>
          <v-card-text>
            <v-alert type="info" dense color="blue accent-4" outlined class="mb-0">
              <span>{{ oneapi.desc }}</span>
            </v-alert>
            <v-row class="ma-0">
              <v-col cols="7">
                <CodeShow :code="oneapi.code" codetype="typescript" :height="oneapi.height" />
              </v-col>
              <v-col>
                <v-row class="ma-0 mb-2">
                  <v-chip label class="text-h6">SAMPLE</v-chip>
                </v-row>
                <CodeShow :code="oneapi.sample.code" codetype="typescript" :height="oneapi.sample.height" />
              </v-col>
            </v-row>
            <v-alert v-if="oneapi.detail" class="mt-4" border="top" colored-border type="info" elevation="2">
              <v-data-table hide-default-footer dense :headers="paraheaders" :items="oneapi.detail">
                <template v-slot:[`item.name`]="{ item }">
                  <v-chip color="blue darken-2" dark label small>
                    {{ item.name }}
                  </v-chip>
                </template>
                <template v-slot:[`item.value`]="{ item }">
                  <v-chip color="purple lighten-2" dark label small>
                    {{ item.value }}
                  </v-chip>
                </template>
                <template v-slot:[`item.desc`]="{ item }">
                  <span style="font-family: LXG WWenKai Mono">
                    {{ item.desc }}
                  </span>
                </template>
              </v-data-table>
            </v-alert>
            <v-row v-if="oneapi.returndetail">
              <v-col cols="6">
                <v-chip label class="mb-2">返回类型</v-chip>
                <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2">
                  <v-data-table hide-default-footer dense :headers="returnheaders" :items="oneapi.returndetail">
                    <template v-slot:[`item.value`]="{ item }">
                      <v-chip color="purple lighten-2" dark label small>
                        {{ item.value }}
                      </v-chip>
                    </template>
                    <template v-slot:[`item.desc`]="{ item }">
                      <span style="font-family: LXG WWenKai Mono">
                        {{ item.desc }}
                      </span>
                    </template>
                  </v-data-table>
                </v-alert>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card>
    </v-card>
    <v-dialog v-model="showipdriverdialog" persistent>
      <v-card>
        <CodeShow :code="ipwdriver.code" codetype="typescript" :height="ipwdriver.height" />
        <v-card-actions>
          <v-spacer />
          <v-btn color="success" depressed @click="showipdriverdialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script>
import CodeShow from './CodeShow.vue'
import * as TypeDesc from '../scripts/typedesc'
export default {
  name: 'PWApi',
  components: { CodeShow },
  data: () => ({
    paraheaders: [
      {
        text: '数据名称',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      {
        text: '数据类型',
        sortable: false,
        value: 'value'
      },
      {
        text: '数据含义',
        sortable: false,
        value: 'desc'
      },
      {
        text: '是否必填',
        sortable: false,
        value: 'required'
      },
      {
        text: '默认值',
        sortable: false,
        value: 'defaultvalue'
      }
    ],
    returnheaders: [
      {
        text: '数据类型',
        sortable: false,
        value: 'value'
      },
      {
        text: '数据含义',
        sortable: false,
        value: 'desc'
      },
      {
        text: '是否允许为NULL',
        sortable: false,
        value: 'allownull'
      }
    ],
    //是否展示ipdriver代码
    showipdriverdialog: false,
    ipwdriver: TypeDesc.IPWDriver,
    pwapis: TypeDesc.PWApi
  })
}
</script>

<style></style>
