import * as rstr from '../scripts/rawstring'

export const BasicType = [
  {
    name: 'Telement',
    desc: 'TElement是页面元素的单个信息类型',
    code: rstr.TelementCode,
    detail: [
      {
        typename: 'identify',
        typevalue: 'string',
        typedesc: '唯一识别码',
        typesample: 'c55170cd-c761-915c-f40a-87a534d4a620'
      },
      {
        typename: 'name',
        typevalue: 'string',
        typedesc: '元素id',
        typesample: 'Create_Btn'
      },
      {
        typename: 'locator',
        typevalue: 'string',
        typedesc: '元素定位类型',
        typesample: 'XPath'
      },
      {
        typename: 'value',
        typevalue: 'string',
        typedesc: '元素定位值',
        typesample: '//*[@id="_FormDialog"]/descendant::tbody/tr[1]/descendant::input'
      },
      {
        typename: 'index',
        typevalue: 'number',
        typedesc: '元素下标',
        typesample: '1'
      },
      {
        typename: 'explain',
        typevalue: 'string',
        typedesc: '元素描述',
        typesample: '创建按钮'
      }
    ],
    height: 220
  },
  {
    name: 'TParament',
    desc: 'TParament是参数信息，由个人设置',
    code: rstr.TParamentCode,
    detail: [
      {
        typename: 'identify',
        typevalue: 'string',
        typedesc: '唯一识别码',
        typesample: 'c55170cd-c761-915c-f40a-87a534d4a620'
      },
      {
        typename: 'name',
        typevalue: 'string',
        typedesc: '参数名',
        typesample: 'TLogFile'
      },
      {
        typename: 'value',
        typevalue: 'string',
        typedesc: '参数值',
        typesample: 'c:/temp/TLog.txt'
      },

      {
        typename: 'explain',
        typevalue: 'string',
        typedesc: '参数描述',
        typesample: '流水存放路径'
      }
    ],
    height: 180
  },
  {
    name: 'TConfig',
    desc: 'TConfig是执行PWdriver执行器配置项，用以配置单个脚本时使用到的元素、参数、执行内容和对应配置等',
    code: rstr.TConfigCode,
    detail: [
      {
        typename: 'basic.keepevn',
        typevalue: 'boolean',
        typedesc: '完成执行后是否保持环境',
        typesample: 'false'
      },
      {
        typename: 'basic.savelogpath',
        typevalue: 'string',
        typedesc: '保存日志文件路径',
        typesample: './user/logs'
      },
      {
        typename: 'basic.defaultsceenshotpixname',
        typevalue: 'string',
        typedesc: '默认截图前缀名',
        typesample: 'image_'
      },
      {
        typename: 'basic.defaulttimeout',
        typevalue: 'number',
        typedesc: '默认超时(毫秒)',
        typesample: '30000'
      },
      {
        typename: 'basic.defaulttimeoutmsg',
        typevalue: 'string',
        typedesc: '默认超时后信息',
        typesample: '已超时，请检查元素是否存在'
      },
      {
        typename: 'basic.treaterrorsaswarnings',
        typevalue: 'boolean',
        typedesc: '将错误改为警告',
        typesample: 'true'
      },
      {
        typename: 'imex.elements',
        typevalue: 'Array<TElement>',
        typedesc: '引用与导出套件配置,元素集合'
        //typesample: 'true'
      },
      {
        typename: 'imex.paraments',
        typevalue: 'Array<TParament>',
        typedesc: '引用与导出套件配置,参数集合'
        //typesample: 'true'
      },
      {
        typename: 'imex.files.fsf',
        typevalue: 'Array<string>',
        typedesc: '引用与导出套件配置,文件型待导入文件,脚本文件'
        //typesample: 'true'
      },
      {
        typename: 'imex.files.fif',
        typevalue: 'Array<string>',
        typedesc: '引用与导出套件配置,文件型待导入文件,元素文件'
        //typesample: 'true'
      },
      {
        typename: 'imex.files.fcf',
        typevalue: 'Array<string>',
        typedesc: '引用与导出套件配置,文件型待导入文件,配置文件'
        //typesample: 'true'
      },
      {
        typename: 'logic.before',
        typevalue: 'Array<TCase | string>',
        typedesc: '测试套件逻辑,执行suite前的准备'
        //typesample: 'true'
      },
      {
        typename: 'logic.after',
        typevalue: 'Array<TCase | string>',
        typedesc: '测试套件逻辑,执行suite后的清理'
        //typesample: 'true'
      }
    ],
    height: 520
  }
]

export const FmfType = [
  {
    name: 'TStep',
    desc: 'TStep是Fmf文件内步骤的定义类型，通过转义XML产生',
    code: rstr.TStepCode,
    detail: [
      {
        typename: 'identify',
        typevalue: 'string',
        typedesc: '唯一识别码',
        typesample: 'c55170cd-c761-915c-f40a-87a534d4a620'
      },
      {
        typename: 'name',
        typevalue: 'string',
        typedesc: '步骤名称',
        typesample: 'RoWebElement.Click'
      },
      {
        typename: 'actiontype',
        typevalue: 'string',
        typedesc: '步骤类型',
        typesample: 'RoWebElement.Click'
      },
      {
        typename: 'elementid',
        typevalue: 'string',
        typedesc: '步骤元素id',
        typesample: 'Index.CreateNewScale_Btn'
      },
      {
        typename: 'timeout',
        typevalue: 'number',
        typedesc: '超时时间',
        typesample: '30'
      },
      {
        typename: 'treaterrorsaswarnings',
        typevalue: 'boolean',
        typedesc: '步骤错误转为警告',
        typesample: 'true'
      },
      {
        typename: 'execseq',
        typevalue: 'number',
        typedesc: '执行排序，默认0开始',
        typesample: '1'
      },
      {
        typename: 'description',
        typevalue: 'string',
        typedesc: '步骤描述',
        typesample: '创建秤按钮'
      },
      {
        typename: ' [key: string]',
        typevalue: 'unknown',
        typedesc: '可扩展参数',
        typesample: 'extra'
      }
    ],
    height: 280
  },
  {
    name: 'TCase',
    desc: 'TStep是Fmf文件内case的定义类型，通过转义XML产生',
    code: rstr.TCaseCode,
    detail: [
      {
        typename: 'identify',
        typevalue: 'string',
        typedesc: '唯一识别码',
        typesample: 'c55170cd-c761-915c-f40a-87a534d4a620'
      },
      {
        typename: 'name',
        typevalue: 'string',
        typedesc: 'case名称',
        typesample: 'CreateNewScale'
      },
      {
        typename: 'description',
        typevalue: 'string',
        typedesc: 'case描述',
        typesample: '创建一台新秤'
      },
      {
        typename: 'execseq',
        typevalue: 'number',
        typedesc: '执行排序，默认0开始',
        typesample: '1'
      },
      {
        typename: 'steps',
        typevalue: 'Array<TStep>',
        typedesc: '步骤列表'
        //typesample: 'extra'
      }
    ],
    height: 200
  },

  {
    name: 'TSuite',
    desc: 'TSuite是Fmf文件内suite的定义类型，通过转义XML产生',
    code: rstr.TSuiteCode,
    detail: [
      {
        typename: 'identify',
        typevalue: 'string',
        typedesc: '唯一识别码',
        typesample: 'c55170cd-c761-915c-f40a-87a534d4a620'
      },
      {
        typename: 'name',
        typevalue: 'string',
        typedesc: 'suite名称',
        typesample: 'TC_001_To_002'
      },
      {
        typename: 'cases',
        typevalue: 'Array<TCase>',
        typedesc: 'case列表'
        //typesample: 'extra'
      },
      {
        typename: 'config',
        typevalue: 'TConfig',
        typedesc: '配置项目,由原xml非tests节点转义而成'
        //typesample: 'extra'
      }
    ],
    height: 175
  }
]

export const Launcher = {
  name: 'launch',
  desc: '脚本启动方法，用以初始化PWDriver,TConfig,和底层Playwright实体',
  code: rstr.LauncherCode,
  detail: [
    {
      name: 'browser',
      types: 'string',
      mustornot: true,
      sample: 'chrome'
    },
    {
      name: 'tconfig',
      types: 'TConfig',
      mustornot: true
      //sample: 'chrome'
    }
  ],
  codesample: {
    content: rstr.LauncherSampleCode,
    height: 500
  },

  height: 70
}

export const IPWDriver = {
  code: rstr.IPWDriverCode,
  height: 400
}

export const PWApi = [
  {
    name: 'FindElement',
    desc: '查找元素,PWDriver允许用户基于TElement和string两个类型查询',
    code: rstr.FindElementCode.origin,
    detail: [
      {
        name: 'elementobj',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'value',
        value: 'string',
        desc: '基于selector的string类型web ui控件筛选器',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'timeout',
        value: 'number',
        desc: '默认单步超时时间，单位：毫秒',
        required: false,
        defaultvalue: '30000'
      },
      {
        name: 'index',
        value: 'number',
        desc: '元素下标值,当查询的元素数量超过1时，需要给定此值',
        required: false,
        defaultvalue: '0'
      }
    ],
    height: 240,
    sample: {
      code: rstr.FindElementCode.sample,
      height: 200
    },
    returndetail: [
      {
        value: 'Locator',
        desc: 'Locator类型实体元素',
        allownull: true
      }
    ]
  },
  {
    name: 'DialogAccept',
    desc: 'web弹窗，点击确认，关闭',
    code: rstr.DialogAcceptCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.DialogAcceptCode.sample,
      height: 70
    }
  },
  {
    name: 'DialogDismiss',
    desc: 'web弹窗，点击确认，拒绝关闭',
    code: rstr.DialogDismissCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.DialogDismissCode.sample,
      height: 70
    }
  },
  {
    name: 'DialogSendKeys',
    desc: 'web弹窗，点击确认，输入信息后关闭',
    code: rstr.DialogSendKeysCode.origin,
    detail: [
      {
        name: 'text',
        value: 'string',
        desc: '输入值',
        required: true,
        defaultvalue: "'完成'"
      }
    ],
    height: 160,
    sample: {
      code: rstr.DialogSendKeysCode.sample,
      height: 70
    }
  },
  {
    name: 'DialogGetMessage',
    desc: 'web弹窗，获取弹窗内text/label等信息',
    code: rstr.DialogGetMessageCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.DialogGetMessageCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'string',
        desc: 'string类型文本内容',
        allownull: false
      }
    ]
  },
  {
    name: 'Forward',
    desc: '浏览器，向前',
    code: rstr.ForwardCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.ForwardCode.sample,
      height: 70
    }
  },
  {
    name: 'Back',
    desc: '浏览器，后退',
    code: rstr.BackCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.BackCode.sample,
      height: 70
    }
  },
  {
    name: 'Reload',
    desc: '浏览器，刷新',
    code: rstr.ReloadCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.ReloadCode.sample,
      height: 70
    }
  },
  {
    name: 'Close',
    desc: '浏览器，关闭tab',
    code: rstr.CloseCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.CloseCode.sample,
      height: 70
    }
  },
  {
    name: 'Minimize',
    desc: '浏览器，最小化',
    code: rstr.MinimizeCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.MinimizeCode.sample,
      height: 70
    }
  },
  {
    name: 'Maximize',
    desc: '浏览器，最大化',
    code: rstr.MaximizeCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.MaximizeCode.sample,
      height: 70
    }
  },
  {
    name: 'FullScreen',
    desc: '浏览器，全屏化',
    code: rstr.FullScreenCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.FullScreenCode.sample,
      height: 70
    }
  },
  {
    name: 'Resize',
    desc: '浏览器，重设大小',
    code: rstr.ResizeCode.origin,
    detail: [
      {
        name: 'width',
        value: 'number',
        desc: '宽度',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'height',
        value: 'number',
        desc: '高度',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.ResizeCode.sample,
      height: 70
    }
  },
  {
    name: 'GoTo',
    desc: '浏览器，前往、打开网址',
    code: rstr.GoToCode.origin,
    detail: [
      {
        name: 'url',
        value: 'string',
        desc: '网址',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.GoToCode.sample,
      height: 70
    }
  },
  {
    name: 'GetUrl',
    desc: '浏览器，获取浏览器地址',
    code: rstr.GetUrlCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.GetUrlCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'string',
        desc: '返回当前网址',
        allownull: true
      }
    ]
  },
  {
    name: 'GetTitle',
    desc: '浏览器，获取浏览器标题',
    code: rstr.GetTitleCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.GetTitleCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'string',
        desc: '返回当前标题',
        allownull: true
      }
    ]
  },
  {
    name: 'TakeSnapshot',
    desc: '截取当前页面图片',
    code: rstr.TakeSnapshotCode.origin,
    detail: [
      {
        name: 'name',
        value: 'string',
        desc: '图片名称',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.TakeSnapshotCode.sample,
      height: 70
    }
  },
  {
    name: 'ScrollTo',
    desc: '滚动, 滚动至某定位点',
    code: rstr.ScrollToCode.origin,
    detail: [
      {
        name: 'x',
        value: 'number',
        desc: '横坐标',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'y',
        value: 'number',
        desc: '纵坐标',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.ScrollToCode.sample,
      height: 70
    }
  },
  {
    name: 'ScrollToElement',
    desc: '滚动, 滚动至某元素',
    code: rstr.ScrollToElementCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.ScrollToElementCode.sample,
      height: 120
    }
  },
  {
    name: 'ScrollTop',
    desc: '滚动，滚动至顶部',
    code: rstr.ScrollTopCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.ScrollTopCode.sample,
      height: 70
    }
  },
  {
    name: 'ScrollBottom',
    desc: '滚动至底部',
    code: rstr.ScrollBottomCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.ScrollBottomCode.sample,
      height: 70
    }
  },
  {
    name: 'Click',
    desc: '点击元素',
    code: rstr.ClickCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.ClickCode.sample,
      height: 70
    }
  },
  {
    name: 'Clear',
    desc: '清除元素内的input值',
    code: rstr.ClearCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.ClearCode.sample,
      height: 70
    }
  },

  {
    name: 'SendKeys',
    desc: '输入框内输入值',
    code: rstr.SendKeysCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'text',
        value: 'string',
        desc: '输入框内输入值',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.SendKeysCode.sample,
      height: 70
    }
  },

  {
    name: 'SelectByValue',
    desc: '下拉框选择，按照待选择项的值内容进行选择',
    code: rstr.SelectByValueCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'value',
        value: 'string',
        desc: '待选择项值',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.SelectByValueCode.sample,
      height: 70
    }
  },

  {
    name: 'SelectByIndex',
    desc: '下拉框选择，按照待选择项的下标值进行选择',
    code: rstr.SelectByIndexCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'index',
        value: 'number',
        desc: '带选择项下标值',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.SelectByIndexCode.sample,
      height: 70
    }
  },

  {
    name: 'GetText',
    desc: '获取元素文本值',
    code: rstr.GetTextCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.GetTextCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'string',
        desc: '当前元素的文本值',
        allownull: true
      }
    ]
  },

  {
    name: 'GetChecked',
    desc: '获取元素自身是否已被选中',
    code: rstr.GetCheckedCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.GetCheckedCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: '当前元素的attribute内checked值',
        allownull: true
      }
    ]
  },

  {
    name: 'GetEnabled',
    desc: '获取元素自身是否可用',
    code: rstr.GetEnabledCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.GetEnabledCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: '当前元素的attribute内enabled值',
        allownull: true
      }
    ]
  },

  {
    name: 'GetVisibled',
    desc: '获取元素自身是否可见',
    code: rstr.GetVisibledCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.GetVisibledCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: '当前元素的attribute内visibled值',
        allownull: true
      }
    ]
  },

  {
    name: 'AssertExist',
    desc: '验证元素自身是否存在',
    code: rstr.AssertExistCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.AssertExistCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: 'page/frame内是否包含此元素',
        allownull: true
      }
    ]
  },

  {
    name: 'AssertStatus',
    desc: '验证元素的状态值是否与预期值一致',
    code: rstr.AssertStatusCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'text',
        value: 'string',
        desc: '元素的文本值预期值',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.AssertStatusCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: '预期值是否是对应元素实际状态值',
        allownull: true
      }
    ]
  },

  {
    name: 'AssertText',
    desc: '验证元素的文本值是否与预期值一致',
    code: rstr.AssertTextCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'text',
        value: 'string',
        desc: '元素的文本值预期值',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.AssertTextCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: '预期值是否是对应元素实际文本值',
        allownull: true
      }
    ]
  },

  {
    name: 'AssertContains',
    desc: '验证元素的文本值是否包含预期值',
    code: rstr.AssertContainsCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'text',
        value: 'string',
        desc: '元素的文本值预期值',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.AssertContainsCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: '预期值是否是在对应元素实际文本值内',
        allownull: true
      }
    ]
  },

  {
    name: 'Assert',
    desc: '验证预期值是否和实际值一致',
    code: rstr.AssertCode.origin,
    detail: [
      {
        name: 'expandvalue',
        value: 'any',
        desc: '预期值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'actualvalue',
        value: 'any',
        desc: '实际值',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.AssertCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'boolean',
        desc: '预期值是否与实际值一致',
        allownull: true
      }
    ]
  },

  {
    name: 'UploadFile',
    desc: '上传文件',
    code: rstr.UploadFileCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'filepath',
        value: 'string',
        desc: '文件路径',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.UploadFileCode.sample,
      height: 70
    }
  },

  {
    name: 'DownloadFile',
    desc: '下载文件保存',
    code: rstr.DownloadFileCode.origin,
    detail: [
      {
        name: 'element',
        value: 'string',
        desc: '元素selector值',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'TElement',
        desc: 'TElement类型元素实体',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'element',
        value: 'Locator',
        desc: 'Locator类型实体元素',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'filepath',
        value: 'string',
        desc: '文件路径',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.DownloadFileCode.sample,
      height: 70
    }
  },

  {
    name: 'Sleep',
    desc: '暂停等待',
    code: rstr.SleepCode.origin,
    detail: [
      {
        name: 'timeout',
        value: 'number',
        desc: '等待时长，毫秒',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'message',
        value: 'string',
        desc: '等待时，展示信息',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.SleepCode.sample,
      height: 70
    }
  },

  {
    name: 'SwitchToIframe',
    desc: '切换Page至Frame内',
    code: rstr.SwitchToIframeCode.origin,
    detail: [
      {
        name: 'framekeyvalue',
        value: '{ key: any; value: any }',
        desc: 'Key-Value键值, Key类型支持index, title, url',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.SwitchToIframeCode.sample,
      height: 70
    }
  },

  {
    name: 'SwitchToMainFrame',
    desc: '切换Frame至Page內',
    code: rstr.SwitchToMainFrameCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.SwitchToMainFrameCode.sample,
      height: 70
    }
  },

  {
    name: 'MouseMove',
    desc: '鼠标移动至固定点位上',
    code: rstr.MouseMoveCode.origin,
    detail: [
      {
        name: 'x',
        value: 'number',
        desc: '横坐标',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'y',
        value: 'number',
        desc: '纵坐标',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.MouseMoveCode.sample,
      height: 70
    }
  },

  {
    name: 'MouseClick',
    desc: '鼠标点击固定点位',
    code: rstr.MouseClickCode.origin,
    detail: [
      {
        name: 'x',
        value: 'number',
        desc: '横坐标',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'y',
        value: 'number',
        desc: '纵坐标',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.MouseClickCode.sample,
      height: 70
    }
  },

  {
    name: 'MouseDoubleClick',
    desc: '鼠标双击固定点位',
    code: rstr.MouseDoubleClickCode.origin,
    detail: [
      {
        name: 'x',
        value: 'number',
        desc: '横坐标',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'y',
        value: 'number',
        desc: '纵坐标',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.MouseDoubleClickCode.sample,
      height: 70
    }
  },

  {
    name: 'MouseWheel',
    desc: '鼠标在当前固定点位拖拽至固定点位',
    code: rstr.MouseWheelCode.origin,
    detail: [
      {
        name: 'x',
        value: 'number',
        desc: '横坐标',
        required: true,
        defaultvalue: ''
      },
      {
        name: 'y',
        value: 'number',
        desc: '纵坐标',
        required: true,
        defaultvalue: ''
      }
    ],
    height: 160,
    sample: {
      code: rstr.MouseWheelCode.sample,
      height: 70
    }
  },

  {
    name: 'GetPage',
    desc: '返回原生Page',
    code: rstr.GetPageCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.GetPageCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'Page',
        desc: '当前Page类型对象',
        allownull: false
      }
    ]
  },

  {
    name: 'GetFrame',
    desc: '返回原生Frame',
    code: rstr.GetFrameCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.GetFrameCode.sample,
      height: 70
    },
    returndetail: [
      {
        value: 'Frame',
        desc: '当前Frame类型对象',
        allownull: false
      }
    ]
  },

  {
    name: 'HanderPage',
    desc: '基于Page进行回调操作',
    code: rstr.HanderPageCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.GetFrameCode.sample,
      height: 70
    }
  },

  {
    name: 'HanderFrame',
    desc: '基于Frame进行回调操作',
    code: rstr.HanderFrameCode.origin,
    //detail: [],
    height: 160,
    sample: {
      code: rstr.HanderFrameCode.sample,
      height: 70
    }
  }
]

export const DemoShow = {
  code: rstr.DemoShowCode,
  height: 800
}
