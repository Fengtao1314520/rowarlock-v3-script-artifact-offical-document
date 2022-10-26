<template>
  <v-card flat color="grey lighten-4">
    <v-row class="ma-0">
      <v-col cols="2">
        <v-btn class="ml-4 text-h4" depressed color="primary" x-large>RoWarlock 3</v-btn>
      </v-col>
      <v-spacer />
      <span>BETA</span>
    </v-row>

    <v-alert border="left" dense colored-border type="info" elevation="0" class="ml-6">
      <p class="text-h6">安装</p>
      <v-row>
        <v-col cols="5">
          <CodeShow :code="rowarlock.install" codetype="bash" :height="30" />
          <v-alert type="error" dense outlined class="mt-4">
            <span class="text-caption">安装包目前以本地文件的方式部署，尚未发布至npmjs官网</span>
          </v-alert>
        </v-col>
      </v-row>
    </v-alert>

    <v-alert border="left" dense colored-border type="info" elevation="0" class="ml-6">
      <p class="text-h6">基础</p>

      <!--tsuite tcase tstep-->

      <v-card>
        <v-card-title class="text-h6">脚本基础</v-card-title>
        <v-card-text>
          <!--telement tparament tconfig-->
          <v-card class="my-2" outlined v-for="(typeitem, index) in rowarlock.basictype" :key="index">
            <v-card-title>
              <v-chip label large>{{ typeitem.name }}</v-chip>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <v-alert type="info" dense color="blue accent-4" outlined>
                    <span>{{ typeitem.desc }}</span>
                  </v-alert>
                  <CodeShow :code="typeitem.code" codetype="typescript" :height="typeitem.height" />
                </v-col>
                <v-col>
                  <v-data-table hide-default-footer dense :headers="typeheaders" :items="typeitem.detail">
                    <template v-slot:[`item.typename`]="{ item }">
                      <v-chip color="blue darken-2" dark label small>
                        {{ item.typename }}
                      </v-chip>
                    </template>
                    <template v-slot:[`item.typevalue`]="{ item }">
                      <v-chip color="purple lighten-2" dark label small>
                        {{ item.typevalue }}
                      </v-chip>
                    </template>
                    <template v-slot:[`item.typedesc`]="{ item }">
                      <span style="font-family: LXG WWenKai Mono">
                        {{ item.typedesc }}
                      </span>
                    </template>
                    <template v-slot:[`item.typesample`]="{ item }">
                      <v-chip v-if="item.typesample" color="yellow darken-4" outlined label small>
                        {{ item.typesample }}
                      </v-chip>
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>

      <!--平常隐藏-->
      <v-expansion-panels class="my-2">
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6">Fmf文件</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-alert border="left" dense colored-border type="warning" elevation="0">
              <span class="grey--text">{{ rowarlock.warning }}</span>
              <v-card class="my-2" outlined v-for="(typeitem, index) in rowarlock.fmftype" :key="index">
                <v-card-title>
                  <v-chip label large>{{ typeitem.name }}</v-chip>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="4">
                      <v-alert type="info" dense color="blue accent-4" outlined>
                        <span>{{ typeitem.desc }}</span>
                      </v-alert>
                      <CodeShow :code="typeitem.code" codetype="typescript" :height="typeitem.height" />
                    </v-col>
                    <v-col>
                      <v-data-table hide-default-footer dense :headers="typeheaders" :items="typeitem.detail">
                        <template v-slot:[`item.typename`]="{ item }">
                          <v-chip color="blue darken-2" dark label small>
                            {{ item.typename }}
                          </v-chip>
                        </template>
                        <template v-slot:[`item.typevalue`]="{ item }">
                          <v-chip color="purple lighten-2" dark label small>
                            {{ item.typevalue }}
                          </v-chip>
                        </template>
                        <template v-slot:[`item.typedesc`]="{ item }">
                          <span style="font-family: LXG WWenKai Mono">
                            {{ item.typedesc }}
                          </span>
                        </template>
                        <template v-slot:[`item.typesample`]="{ item }">
                          <v-chip v-if="item.typesample" color="yellow darken-4" outlined label small>
                            {{ item.typesample }}
                          </v-chip>
                        </template>
                      </v-data-table>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-alert border="left" dense colored-border type="error" elevation="2">
                <span>{{ rowarlock.fmftypewarning }}</span>
              </v-alert>
            </v-alert>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-alert>
  </v-card>
</template>

<script>
import CodeShow from './CodeShow.vue'
import * as TypeDesc from '../scripts/typedesc'
export default {
  name: 'RoFeature',
  components: { CodeShow },
  data: () => ({
    typeheaders: [
      {
        text: '数据名称',
        align: 'start',
        sortable: false,
        value: 'typename'
      },
      {
        text: '数据类型',
        sortable: false,
        value: 'typevalue'
      },
      {
        text: '数据含义',
        sortable: false,
        value: 'typedesc'
      },
      {
        text: '数据示例',
        sortable: false,
        value: 'typesample'
      }
    ],

    rowarlock: {
      install: 'npm install rowarlock-script-artifact',
      basictype: TypeDesc.BasicType,
      warning:
        '针对纯态的Typescript脚本，所使用的基础类型仅以上三种；而对Fmf格式文件则尚支持另外三种类型。FMF文件是Rowarlock 1.x时代XML脚本的兼容体，是一种自解析的JSON文件。',
      fmftype: TypeDesc.FmfType,
      fmftypewarning:
        '对于Fmf文件，在绝大部分情况下，并不会用到，它是软件转义原态的XML后的中间文件。在实际使用场景下，您能用到的只有最开始的三个类型'
    }
  })
}
</script>

<style></style>
