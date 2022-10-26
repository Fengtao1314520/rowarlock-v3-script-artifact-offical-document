export const TelementCode = String.raw`
export type TElement = {
  identify: string;
  name: string;
  locator: string;
  value: string;
  index: number;
  explain?: string;
};
`

export const TParamentCode = String.raw`
export type TParament = {
  identify: string;
  name: string;
  value: string;
  explain?: string;
};
`

export const TConfigCode = String.raw`
export type TConfig = {
  basic: {
    keepevn: boolean;
    savelogpath: string;
    defaultsceenshotpixname: string;
    defaulttimeout: number;
    defaulttimeoutmsg: string;
    treaterrorsaswarnings: boolean;
  };
  imex?: {
    elements?: Array<TElement>;
    paraments?: Array<TParament>;
    files?: {
      fsf?: Array<string>;
      fif?: Array<string>;
      fcf?: Array<string>;
    };
  };
  logic?: {
    before?: Array<TCase | string>;
    after?: Array<TCase | string>;
  };
`

export const TStepCode = String.raw`
export type TStep = {
  identify: string;
  name: string;
  actiontype: string;
  elementid: string;
  timeout: number;
  treaterrorsaswarnings: boolean;
  execseq: number;
  description?: string;
  [key: string]: unknown;
};
`

export const TCaseCode = String.raw`
export type TCase = {
  identify: string;
  name: string;
  description?: string;
  execseq?: number;
  steps: Array<TStep>;
};
`

export const TSuiteCode = String.raw`
export type TSuite = {
  identify: string;
  name: string;
  cases: Array<TCase>;
  config?: TConfig;
};
`

export const LauncherCode = String.raw`
Launch(browser: string, tconfig: TConfig): Promise<IPWDriver>
`

export const LauncherSampleCode = String.raw`
//定义 pwdriver
let pwdriver: IPWDriver

//设定配置
const config: TConfig = {
  basic: {
    defaulttimeout: 30000,
    defaulttimeoutmsg: '已超时,请检查代码或网络',
    // 完成执行后是否保持环境
    keepevn: false,
    // 保存日志文件路径
    savelogpath: './logs',
    // 默认截图前缀名
    defaultsceenshotpixname: 'mtstar.demo',
    // 默认错误改为警告
    treaterrorsaswarnings: false
  }
}


pwdriver = await Launch('chrome', config) //初始化启动browser
`

export const IPWDriverCode = String.raw`
import { Browser, Frame, Locator, Page } from '@playwright/test';
import { TCase, TConfig, TElement, TParament } from '../../Types/Standalone/Standalone';

/**
 * PlayWright Driver 接口
 */
export interface IPWDriver {
  //#region 公有属性 1

  // 元素集合
  elementarray?: Array<TElement>;
  // 参数集合
  paramentarray?: Array<TParament>;
  // case集合，非必须
  casearray?: Array<TCase>;
  // 参数集合，非必须
  config?: TConfig;

  //#endregion

  //#region 带入设置

  /**
   * 设置各类配置
   * @param sdconfig 配置带入类型, 包含整体设置
   */
  SetDefaultConfig(sdconfig: TConfig, browser: Browser): Promise<boolean>;
  //#endregion

  //#region 查找元素

  /**
   * 查找元素
   * @param elementobj {TElement} 元素对象
   * @param timeout {number} 超时时间
   */
  FindElement(elementobj: TElement, timeout?: number): Promise<Locator | null>;

  /**
   * 查找元素
   * UPDATE: 2022-08-04 作为对外访问的查找元素，应该只有两类，一类是直接查找元素对象，一类是基于playwright查找元素
   * INFO: 可以是直接基于Playwright的查找方式
   * @param value {string} 元素值
   * @param timeout {number} 超时时间
   * @param index {number} 元素索引

   */
  FindElement(value: string, timeout?: number, index?: number): Promise<Locator | null>;

  /**
   * 查找元素
   * 反馈Array
   * @param {string} value 元素值
   * @param {number} timeout 超时时间
   */
  FindElements(value: string, timeout?: number): Promise<Locator | null>;

  //#endregion

  //#region 实际操作 dialog

  /**
   * Dialog
   * 接受
   */
  DialogAccept(): Promise<void>;

  /**
   * Dialog
   * 拒绝
   */
  DialogDismiss(): Promise<void>;

  /**
   * Dialog
   * 发送
   * @param text
   */
  DialogSendKeys(text: string): Promise<void>;

  /**
   * Dialog
   * 获取信息
   * @returns {string} 返回信息
   */
  DialogGetMessage(): Promise<string>;

  //#endregion

  //#region 浏览器

  /**
   * 浏览器
   * 前进
   */
  Forward(): Promise<void>;

  /**
   * 浏览器
   * 后退
   */
  Back(): Promise<void>;

  /**
   * 浏览器
   * 刷新
   */
  Reload(): Promise<void>;

  /**
   * 浏览器
   * 关闭
   * Tab
   */
  Close(): Promise<void>;

  /**
   * 浏览器
   * 最小化
   */
  Minimize(): Promise<void>;

  /**
   * 浏览器
   * 最大化
   */
  Maximize(): Promise<void>;

  /**
   * 浏览器
   * 全屏
   */
  FullScreen(): Promise<void>;

  /**
   * 浏览器
   * 重设窗口大小
   * @param width {number} 宽度
   * @param height {number} 高度
   */
  Resize(width: number, height: number): Promise<void>;

  /**
   * 浏览器
   * 前往网址
   * @param url {string} 网址
   */
  GoTo(url: string): Promise<void>;

  /**
   * 浏览器
   * 获取网址
   * @returns {string} 网址
   */
  GetUrl(): Promise<string>;

  /**
   * 浏览器
   * 获取title
   * @returns {string} title
   */
  GetTitle(): Promise<string>;

  //#endregion

  //#region 截图

  /**
   * 截图
   * @param name {string} 截图名称, 不带后缀
   * @returns {string} 截图完整路径
   */
  TakeSnapshot(name: string): Promise<string>;
  //#endregion

  //#region  滚动条操作

  /**
   * 滚动条
   * 滚动至
   * @param x {number} x坐标
   * @param y {number} y坐标
   */
  ScrollTo(x: number, y: number): Promise<void>;

  /**
   * 滚动条
   * 滚动至元素
   * @param element {stirng} 元素/元素locator
   */
  ScrollToElement(element: string): Promise<void>;

  /**
   * 滚动条
   * 滚动至元素
   * @param element {TElement} 元素
   */
  ScrollToElement(element: TElement): Promise<void>;

  /**
   * 滚动条
   * 滚动至元素
   * @param element {Locator} 元素
   */
  ScrollToElement(element: Locator): Promise<void>;

  /**
   * 滚动条
   * 滚动至顶部
   */
  ScrollTop(): Promise<void>;

  /**
   * 滚动条
   * 滚动至底部
   */
  ScrollBottom(): Promise<void>;
  //#endregion

  //#region 元素操作

  /**
   * 点击
   * @param element {string} 元素
   */
  Click(element: string): Promise<void>;
  /**
   * 点击
   * @param element {string} 元素
   */
  Click(element: TElement): Promise<void>;
  /**
   * 点击
   * @param element {string} 元素
   */
  Click(element: Locator): Promise<void>;

  /**
   * 清除输入框
   * @param element {string} 元素
   */
  Clear(element: string): Promise<void>;
  /**
   * 清除输入框
   * @param element {string} 元素
   */
  Clear(element: TElement): Promise<void>;
  /**
   * 清除输入框
   * @param element {string} 元素
   */
  Clear(element: Locator): Promise<void>;

  /**
   * 输入
   * @param element {string} 元素
   * @param text {string} 输入文本
   */
  SendKeys(element: string, text: string): Promise<void>;
  /**
   * 输入
   * @param element {TElement} 元素
   * @param text {string} 输入文本
   */
  SendKeys(element: TElement, text: string): Promise<void>;
  /**
   * 输入
   * @param element {Locator} 元素
   * @param text {string} 输入文本
   */
  SendKeys(element: Locator, text: string): Promise<void>;

  /**
   * 下拉框
   * 基于值选择
   * @param element {string} 元素
   * @param value {string} 值
   */
  SelectByValue(element: string, value: string): Promise<void>;
  /**
   * 下拉框
   * 基于值选择
   * @param element {TElement} 元素
   * @param value {string} 值
   */
  SelectByValue(element: TElement, value: string): Promise<void>;
  /**
   * 下拉框
   * 基于值选择
   * @param element {Locator} 元素
   * @param value {string} 值
   */
  SelectByValue(element: Locator, value: string): Promise<void>;

  /**
   * 下拉框
   * 基于索引选择
   * @param element {string} 元素
   * @param index {number} 索引
   */
  SelectByIndex(element: string, index: number): Promise<void>;
  /**
   * 下拉框
   * 基于索引选择
   * @param element {TElement} 元素
   * @param index {number} 索引
   */
  SelectByIndex(element: TElement, index: number): Promise<void>;
  /**
   * 下拉框
   * 基于索引选择
   * @param element {Locator} 元素
   * @param index {number} 索引
   */
  SelectByIndex(element: Locator, index: number): Promise<void>;

  /**
   * 获取文本值
   * @param element {string} 元素
   * @returns {string} 文本值
   */
  GetText(element: string): Promise<string>;
  /**
   * 获取文本值
   * @param element {TElement} 元素
   * @returns {string} 文本值
   */
  GetText(element: TElement): Promise<string>;
  /**
   * 获取文本值
   * @param element {Locator} 元素
   * @returns {string} 文本值
   */
  GetText(element: Locator): Promise<string>;

  /**
   * 获取是否已被选中
   * @param element {string} 元素
   * @returns {boolean} 是否已被选中
   */
  GetChecked(element: string): Promise<boolean>;
  /**
   * 获取是否已被选中
   * @param element {TElement} 元素
   * @returns {boolean} 是否已被选中
   */
  GetChecked(element: TElement): Promise<boolean>;
  /**
   * 获取是否已被选中
   * @param element {Locator} 元素
   * @returns {boolean} 是否已被选中
   */
  GetChecked(element: Locator): Promise<boolean>;

  /**
   * 获取是否可用
   * @param element {string} 元素
   * @returns {boolean} 是否可用
   */
  GetEnabled(element: string): Promise<boolean>;
  /**
   * 获取是否可用
   * @param element {TElement} 元素
   * @returns {boolean} 是否可用
   */
  GetEnabled(element: TElement): Promise<boolean>;
  /**
   * 获取是否可用
   * @param element {Locator} 元素
   * @returns {boolean} 是否可用
   */
  GetEnabled(element: Locator): Promise<boolean>;

  /**
   * 获取是否可见
   * @param element {string} 元素
   * @returns {boolean} 是否可见
   */
  GetVisibled(element: string): Promise<boolean>;
  /**
   * 获取是否可见
   * @param element {TElement} 元素
   * @returns {boolean} 是否可见
   */
  GetVisibled(element: TElement): Promise<boolean>;
  /**
   * 获取是否可见
   * @param element {Locator} 元素
   * @returns {boolean} 是否可见
   */
  GetVisibled(element: Locator): Promise<boolean>;
  //#endregion

  //#region ASSERT操作

  /**
   * assert
   * 验证是否存在
   * @param element {string} 元素
   * @returns {boolean} 是否存在
   */
  AssertExist(element: string): Promise<boolean>;
  /**
   * assert
   * 验证是否存在
   * @param element {TElement} 元素
   * @returns {boolean} 是否存在
   */
  AssertExist(element: TElement): Promise<boolean>;
  /**
   * assert
   * 验证是否存在
   * @param element {Locator} 元素
   * @returns {boolean} 是否存在
   */
  AssertExist(element: Locator): Promise<boolean>;

  /**
   * assert
   * 验证是否为对应文本
   * @param element {string} 元素
   * @param text {string} 文本值
   * @returns {boolean} 是否是对应文本
   */
  AssertText(element: string, text: string): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应文本
   * @param element {TElement} 元素
   * @param text {string} 文本值
   * @returns {boolean} 是否是对应文本
   */
  AssertText(element: TElement, text: string): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应文本
   * @param element {Locator} 元素
   * @param text {string} 文本值
   * @returns {boolean} 是否是对应文本
   */
  AssertText(element: Locator, text: string): Promise<boolean>;

  /**
   * assert
   * 验证是否为对应状态值
   * @param element {string} 元素
   * @param status {boolean} 状态
   * @returns {boolean} 是否是对应状态
   */
  AssertStatus(element: string, status: boolean): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应状态值
   * @param element {TElement} 元素
   * @param status {boolean} 状态
   * @returns {boolean} 是否是对应状态
   */
  AssertStatus(element: TElement, status: boolean): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应状态值
   * @param element {Locator} 元素
   * @param status {boolean} 状态
   * @returns {boolean} 是否是对应状态
   */
  AssertStatus(element: Locator, status: boolean): Promise<boolean>;

  /**
   * assert
   * 验证是否包含对应值
   * @param element {string} 元素
   * @param value {string} 值
   * @returns {boolean} 是否包含对应值
   */
  AssertContains(element: string, value: string): Promise<boolean>;
  /**
   * assert
   * 验证是否包含对应值
   * @param element {TElement} 元素
   * @param value {string} 值
   * @returns {boolean} 是否包含对应值
   */
  AssertContains(element: TElement, value: string): Promise<boolean>;
  /**
   * assert
   * 验证是否包含对应值
   * @param element {Locator} 元素
   * @param value {string} 值
   * @returns {boolean} 是否包含对应值
   */
  AssertContains(element: Locator, value: string): Promise<boolean>;

  /**
   * assert
   * @param expandvalue {any} 预期值
   * @param actualvalue {any} 实际值
   * @returns {boolean} 是否相等
   */
  Assert(expandvalue: any, actualvalue: any): Promise<boolean>;

  //#endregion

  //#region 上传与下载
  /**
   * 文件上传
   * @param element {string} 元素
   * @param filepath {string} 文件路径
   */
  UploadFile(element: string, filepath: string): Promise<void>;
  /**
   * 文件上传
   * @param element {TElement} 元素
   * @param filepath {string} 文件路径
   */
  UploadFile(element: TElement, filepath: string): Promise<void>;
  /**
   * 文件上传
   * @param element {Locator} 元素
   * @param filepath {string} 文件路径
   */
  UploadFile(element: Locator, filepath: string): Promise<void>;

  /**
   * 文件下载
   * @param element {string} 元素
   * @param filepath
   */
  DownloadFile(element: string, filepath: string): Promise<void>;
  /**
   * 文件下载
   * @param element {TElement} 元素
   * @param filepath
   */
  DownloadFile(element: TElement, filepath: string): Promise<void>;
  /**
   * 文件下载
   * @param element {Locator} 元素
   * @param filepath
   */
  DownloadFile(element: Locator, filepath: string): Promise<void>;

  //#endregion

  //#region 暂时冻结

  /**
   * 休眠、暂停
   * @param timeout {number} 时间
   * @param message {string} 消息
   */
  Sleep(timeout: number, message: string): Promise<void>;

  //#endregion

  //#region Frame操作

  /**
   * 切换到指定frame
   * @param framekeyvalue  {ey: any; value: any} frame key-value值
   */
  SwitchToIframe(framekeyvalue: { key: any; value: any }): Promise<void>;

  /**
   * 切换到默认frame,返回父级Page
   */
  SwitchToMainFrame(): Promise<void>;

  //#endregion

  //#region  鼠标操作

  /**
   * 鼠标移动
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseMove(x: number, y: number): Promise<void>;

  /**
   * 鼠标点击
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseClick(x: number, y: number): Promise<void>;

  /**
   * 鼠标双击
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseDoubleClick(x: number, y: number): Promise<void>;

  /**
   * 鼠标拖拽, 滚动
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseWheel(x: number, y: number): Promise<void>;

  //#endregion

  //#region 返回可以原生操作的方法

  /**
   * 返回原生操作的方法
   * Page
   */
  GetPage(): Promise<Page>;

  /**
   * 返回原生操作的方法
   * Frame
   */
  GetFrame(): Promise<Frame | null>;

  /**
   * page
   * hander 回调操作
   * @param fn {Function} 回调函数
   */
  HanderPage(fn: (page: Page) => any): Promise<any>;

  /**
   * frame
   * hander 回调操作
   * @param fn {Function} 回调函数
   */
  HanderFrame(fn: (frame: Frame | null) => any): Promise<any>;

  //#endregion
}

`

export const FindElementCode = {
  origin: String.raw`
  /**
     * 查找元素
     * @param elementobj {TElement} 元素对象
     * @param timeout {number} 超时时间
     */
    FindElement(elementobj: TElement, timeout?: number): Promise<Locator | null>;
  
    /**
     * 查找元素
     * @param value {string} 元素值
     * @param timeout {number} 超时时间
     * @param index {number} 元素索引
  
     */
    FindElement(value: string, timeout?: number, index?: number): Promise<Locator | null>;
  `,

  sample: String.raw`
  let telement:TElement = {
    // 唯一识别码
    identify: '测试',
    // 名称
    name: 'input_text_btn',
    locator: 'XPtah',
    value: '/html/body/section/div/header/input',
    explain: '输入框',
    // 下标值
    index: 0,
  };
  let element = await pwdriver.FindElement(telement);
  
  
  let input = 'body > section > div > header > input';
  let element = await pwdriver.FindElement(input);
  `
}

export const DialogAcceptCode = {
  origin: String.raw`
  /**
   * Dialog
   * 接受
   */
  DialogAccept(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.DialogAccept();
  `
}

export const DialogDismissCode = {
  origin: String.raw`
  /**
   * Dialog
   * 拒绝
   */
  DialogDismiss(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.DialogDismiss();
  `
}

export const DialogSendKeysCode = {
  origin: String.raw`
  /**
   * Dialog
   * 发送
   * @param text
   */
  DialogSendKeys(text: string): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.DialogSendKeys('完成');
  `
}

export const DialogGetMessageCode = {
  origin: String.raw`
  /**
   * Dialog
   * 获取信息
   * @returns {string} 返回信息
   */
  DialogGetMessage(): Promise<string>;
  `,
  sample: String.raw`
  let message = pwdriver.DialogGetMessage();
  `
}

export const ForwardCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 前进
   */
  Forward(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Forward();
  `
}

export const BackCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 后退
   */
  Back(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Back();
  `
}

export const ReloadCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 刷新
   */
  Reload(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Reload();
  `
}

export const CloseCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 关闭
   * Tab
   */
  Close(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Close();
  `
}

export const MinimizeCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 最小化
   */
  Minimize(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Minimize();
  `
}

export const MaximizeCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 最大化
   */
  Maximize(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Maximize();
  `
}

export const FullScreenCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 全屏
   */
  FullScreen(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.FullScreen();
  `
}

export const ResizeCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 重设窗口大小
   * @param width {number} 宽度
   * @param height {number} 高度
   */
  Resize(width: number, height: number): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Resize(1920,1080);
  `
}

export const GoToCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 前往网址
   * @param url {string} 网址
   */
  GoTo(url: string): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.GoTo('https//www.baidu.com');
  `
}

export const GetUrlCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 获取网址
   * @returns {string} 网址
   */
  GetUrl(): Promise<string>;
  `,
  sample: String.raw`
  await pwdriver.GetUrl();
  `
}

export const GetTitleCode = {
  origin: String.raw`
  /**
   * 浏览器
   * 获取title
   * @returns {string} title
   */
  GetTitle(): Promise<string>;
  `,
  sample: String.raw`
  await pwdriver.GetTitle();
  `
}

export const TakeSnapshotCode = {
  origin: String.raw`
  /**
   * 截图
   * @param name {string} 截图名称, 不带后缀
   * @returns {string} 截图完整路径
   */
  TakeSnapshot(name: string): Promise<string>;
  `,
  sample: String.raw`
  await pwdriver.TakeSnapshot('screenshot');
  `
}

export const ScrollToCode = {
  origin: String.raw`
  /**
   * 滚动条
   * 滚动至
   * @param x {number} x坐标
   * @param y {number} y坐标
   */
  ScrollTo(x: number, y: number): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.ScrollTo(1000,800);
  `
}

export const ScrollToElementCode = {
  origin: String.raw`
  /**
   * 滚动条
   * 滚动至元素
   * @param element {stirng} 元素/元素locator
   */
  ScrollToElement(element: string): Promise<void>;

  /**
   * 滚动条
   * 滚动至元素
   * @param element {TElement} 元素
   */
  ScrollToElement(element: TElement): Promise<void>;

  /**
   * 滚动条
   * 滚动至元素
   * @param element {Locator} 元素
   */
  ScrollToElement(element: Locator): Promise<void>;

  `,
  sample: String.raw`

  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';

  //使用
  await pwdriver.ScrollTo(telement);
  await pwdriver.ScrollTo(locator);
  await pwdriver.ScrollTo(selector);
  `
}

export const ScrollTopCode = {
  origin: String.raw`
  /**
   * 滚动条
   * 滚动至顶部
   */
  ScrollTop(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.ScrollTop();
  `
}

export const ScrollBottomCode = {
  origin: String.raw`
  /**
   * 滚动条
   * 滚动至底部
   */
  ScrollBottom(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.ScrollBottom();
  `
}

export const ClickCode = {
  origin: String.raw`
  /**
   * 点击
   * @param element {string} 元素
   */
  Click(element: string): Promise<void>;
  /**
   * 点击
   * @param element {string} 元素
   */
  Click(element: TElement): Promise<void>;
  /**
   * 点击
   * @param element {string} 元素
   */
  Click(element: Locator): Promise<void>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';

  //使用
  await pwdriver.Click(telement);
  await pwdriver.Click(locator);
  await pwdriver.Click(selector);
  `
}

export const ClearCode = {
  origin: String.raw`
  /**
   * 清除输入框
   * @param element {string} 元素
   */
  Clear(element: string): Promise<void>;
  /**
   * 清除输入框
   * @param element {string} 元素
   */
  Clear(element: TElement): Promise<void>;
  /**
   * 清除输入框
   * @param element {string} 元素
   */
  Clear(element: Locator): Promise<void>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';

  //使用
  await pwdriver.Clear(telement);
  await pwdriver.Clear(locator);
  await pwdriver.Clear(selector);
  `
}

export const SendKeysCode = {
  origin: String.raw`
  /**
   * 输入
   * @param element {string} 元素
   * @param text {string} 输入文本
   */
  SendKeys(element: string, text: string): Promise<void>;
  /**
   * 输入
   * @param element {TElement} 元素
   * @param text {string} 输入文本
   */
  SendKeys(element: TElement, text: string): Promise<void>;
  /**
   * 输入
   * @param element {Locator} 元素
   * @param text {string} 输入文本
   */
  SendKeys(element: Locator, text: string): Promise<void>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let inputvalue:string = '测试';

  //使用
  await pwdriver.SendKeys(telement,inputvalue);
  await pwdriver.SendKeys(locator,inputvalue);
  await pwdriver.SendKeys(selector,inputvalue);
  `
}

export const SelectByValueCode = {
  origin: String.raw`
  /**
   * 下拉框
   * 基于值选择
   * @param element {string} 元素
   * @param value {string} 值
   */
  SelectByValue(element: string, value: string): Promise<void>;
  /**
   * 下拉框
   * 基于值选择
   * @param element {TElement} 元素
   * @param value {string} 值
   */
  SelectByValue(element: TElement, value: string): Promise<void>;
  /**
   * 下拉框
   * 基于值选择
   * @param element {Locator} 元素
   * @param value {string} 值
   */
  SelectByValue(element: Locator, value: string): Promise<void>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:string = '测试';

  //使用
  await pwdriver.SelectByValue(telement,value);
  await pwdriver.SelectByValue(locator,value);
  await pwdriver.SelectByValue(selector,value);
  `
}

export const SelectByIndexCode = {
  origin: String.raw`
  /**
   * 下拉框
   * 基于索引选择
   * @param element {string} 元素
   * @param index {number} 索引
   */
  SelectByIndex(element: string, index: number): Promise<void>;
  /**
   * 下拉框
   * 基于索引选择
   * @param element {TElement} 元素
   * @param index {number} 索引
   */
  SelectByIndex(element: TElement, index: number): Promise<void>;
  /**
   * 下拉框
   * 基于索引选择
   * @param element {Locator} 元素
   * @param index {number} 索引
   */
  SelectByIndex(element: Locator, index: number): Promise<void>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let index:number = 1;

  //使用
  await pwdriver.SelectByIndex(telement,index);
  await pwdriver.SelectByIndex(locator,index);
  await pwdriver.SelectByIndex(selector,index);
  `
}

export const GetTextCode = {
  origin: String.raw`
  /**
   * 获取文本值
   * @param element {string} 元素
   * @returns {string} 文本值
   */
  GetText(element: string): Promise<string>;
  /**
   * 获取文本值
   * @param element {TElement} 元素
   * @returns {string} 文本值
   */
  GetText(element: TElement): Promise<string>;
  /**
   * 获取文本值
   * @param element {Locator} 元素
   * @returns {string} 文本值
   */
  GetText(element: Locator): Promise<string>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value='';

  //使用
  await value = pwdriver.GetText(telement);
  await value = pwdriver.GetText(locator);
  await value = pwdriver.GetText(selector);
  `
}

export const GetCheckedCode = {
  origin: String.raw`
  /**
   * 获取是否已被选中
   * @param element {string} 元素
   * @returns {boolean} 是否已被选中
   */
  GetChecked(element: string): Promise<boolean>;
  /**
   * 获取是否已被选中
   * @param element {TElement} 元素
   * @returns {boolean} 是否已被选中
   */
  GetChecked(element: TElement): Promise<boolean>;
  /**
   * 获取是否已被选中
   * @param element {Locator} 元素
   * @returns {boolean} 是否已被选中
   */
  GetChecked(element: Locator): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:boolean = false;

  //使用
  await value = pwdriver.GetChecked(telement);
  await value = pwdriver.GetChecked(locator);
  await value = pwdriver.GetChecked(selector);
  `
}

export const GetEnabledCode = {
  origin: String.raw`
  /**
   * 获取是否可用
   * @param element {string} 元素
   * @returns {boolean} 是否可用
   */
  GetEnabled(element: string): Promise<boolean>;
  /**
   * 获取是否可用
   * @param element {TElement} 元素
   * @returns {boolean} 是否可用
   */
  GetEnabled(element: TElement): Promise<boolean>;
  /**
   * 获取是否可用
   * @param element {Locator} 元素
   * @returns {boolean} 是否可用
   */
  GetEnabled(element: Locator): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:boolean = false;

  //使用
  await value = pwdriver.GetEnabled(telement);
  await value = pwdriver.GetEnabled(locator);
  await value = pwdriver.GetEnabled(selector);
  `
}

export const GetVisibledCode = {
  origin: String.raw`
  /**
   * 获取是否可见
   * @param element {string} 元素
   * @returns {boolean} 是否可见
   */
  GetVisibled(element: string): Promise<boolean>;
  /**
   * 获取是否可见
   * @param element {TElement} 元素
   * @returns {boolean} 是否可见
   */
  GetVisibled(element: TElement): Promise<boolean>;
  /**
   * 获取是否可见
   * @param element {Locator} 元素
   * @returns {boolean} 是否可见
   */
  GetVisibled(element: Locator): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:boolean = false;

  //使用
  await value = pwdriver.GetVisibled(telement);
  await value = pwdriver.GetVisibled(locator);
  await value = pwdriver.GetVisibled(selector);
  `
}

export const AssertExistCode = {
  origin: String.raw`
  /**
   * assert
   * 验证是否存在
   * @param element {string} 元素
   * @returns {boolean} 是否存在
   */
  AssertExist(element: string): Promise<boolean>;
  /**
   * assert
   * 验证是否存在
   * @param element {TElement} 元素
   * @returns {boolean} 是否存在
   */
  AssertExist(element: TElement): Promise<boolean>;
  /**
   * assert
   * 验证是否存在
   * @param element {Locator} 元素
   * @returns {boolean} 是否存在
   */
  AssertExist(element: Locator): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:boolean = false;

  //使用
  await value = pwdriver.AssertExist(telement);
  await value = pwdriver.AssertExist(locator);
  await value = pwdriver.AssertExist(selector);
  `
}

export const AssertStatusCode = {
  origin: String.raw`
  /**
   * assert
   * 验证是否为对应状态值
   * @param element {string} 元素
   * @param status {boolean} 状态
   * @returns {boolean} 是否是对应状态
   */
  AssertStatus(element: string, status: boolean): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应状态值
   * @param element {TElement} 元素
   * @param status {boolean} 状态
   * @returns {boolean} 是否是对应状态
   */
  AssertStatus(element: TElement, status: boolean): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应状态值
   * @param element {Locator} 元素
   * @param status {boolean} 状态
   * @returns {boolean} 是否是对应状态
   */
  AssertStatus(element: Locator, status: boolean): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:boolean = false;
  let expandvalue:boolean = true;

  //使用
  await value = pwdriver.AssertStatus(telement,expandvalue);
  await value = pwdriver.AssertStatus(locator,expandvalue);
  await value = pwdriver.AssertStatus(selector,expandvalue);
  `
}

export const AssertTextCode = {
  origin: String.raw`
  /**
   * assert
   * 验证是否为对应文本
   * @param element {string} 元素
   * @param text {string} 文本值
   * @returns {boolean} 是否是对应文本
   */
  AssertText(element: string, text: string): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应文本
   * @param element {TElement} 元素
   * @param text {string} 文本值
   * @returns {boolean} 是否是对应文本
   */
  AssertText(element: TElement, text: string): Promise<boolean>;
  /**
   * assert
   * 验证是否为对应文本
   * @param element {Locator} 元素
   * @param text {string} 文本值
   * @returns {boolean} 是否是对应文本
   */
  AssertText(element: Locator, text: string): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:boolean = false;
  let expandvalue:string = '测试';

  //使用
  await value = pwdriver.AssertText(telement,expandvalue);
  await value = pwdriver.AssertText(locator,expandvalue);
  await value = pwdriver.AssertText(selector,expandvalue);
  `
}

export const AssertContainsCode = {
  origin: String.raw`
  /**
   * assert
   * 验证是否包含对应值
   * @param element {string} 元素
   * @param value {string} 值
   * @returns {boolean} 是否包含对应值
   */
  AssertContains(element: string, value: string): Promise<boolean>;
  /**
   * assert
   * 验证是否包含对应值
   * @param element {TElement} 元素
   * @param value {string} 值
   * @returns {boolean} 是否包含对应值
   */
  AssertContains(element: TElement, value: string): Promise<boolean>;
  /**
   * assert
   * 验证是否包含对应值
   * @param element {Locator} 元素
   * @param value {string} 值
   * @returns {boolean} 是否包含对应值
   */
  AssertContains(element: Locator, value: string): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let value:boolean = false;
  let expandvalue:string = '测试';

  //使用
  await value = pwdriver.AssertContains(telement,expandvalue);
  await value = pwdriver.AssertContains(locator,expandvalue);
  await value = pwdriver.AssertContains(selector,expandvalue);
  `
}

export const AssertCode = {
  origin: String.raw`
  /**
   * assert
   * @param expandvalue {any} 预期值
   * @param actualvalue {any} 实际值
   * @returns {boolean} 是否相等
   */
  Assert(expandvalue: any, actualvalue: any): Promise<boolean>;
  `,
  sample: String.raw`
  //定义
  let expandvalue:boolean = true;
  let actualvalue:boolean = false;
  let result:boolean = true

  //使用
  result value = pwdriver.Assert(expandvalue,actualvalue);
  `
}

export const UploadFileCode = {
  origin: String.raw`
  /**
   * 文件上传
   * @param element {string} 元素
   * @param filepath {string} 文件路径
   */
  UploadFile(element: string, filepath: string): Promise<void>;
  /**
   * 文件上传
   * @param element {TElement} 元素
   * @param filepath {string} 文件路径
   */
  UploadFile(element: TElement, filepath: string): Promise<void>;
  /**
   * 文件上传
   * @param element {Locator} 元素
   * @param filepath {string} 文件路径
   */
  UploadFile(element: Locator, filepath: string): Promise<void>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let filepath:string = './sample.txt;

  //使用
  await pwdriver.UploadFile(telement,filepath);
  await pwdriver.UploadFile(locator,filepath);
  await pwdriver.UploadFile(selector,filepath);
  `
}

export const DownloadFileCode = {
  origin: String.raw`
  /**
   * 文件下载
   * @param element {string} 元素
   * @param filepath {string} 文件路径
   */
  DownloadFile(element: string, filepath: string): Promise<void>;
  /**
   * 文件下载
   * @param element {TElement} 元素
   * @param filepath {string} 文件路径
   */
  DownloadFile(element: TElement, filepath: string): Promise<void>;
  /**
   * 文件下载
   * @param element {Locator} 元素
   * @param filepath {string} 文件路径
   */
  DownloadFile(element: Locator, filepath: string): Promise<void>;
  `,
  sample: String.raw`
  //定义
  let telement:TElement;
  let locator:Locator;
  let selector = 'body > section > div > header > input';
  let filepath:string = './sample.txt;

  //使用
  await pwdriver.DownloadFile(telement,filepath);
  await pwdriver.DownloadFile(locator,filepath);
  await pwdriver.DownloadFile(selector,filepath);
  `
}

export const SleepCode = {
  origin: String.raw`
  /**
   * 休眠、暂停
   * @param timeout {number} 时间
   * @param message {string} 消息
   */
  Sleep(timeout: number, message: string): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.Sleep(5000,'等待5秒后重新启动');
  `
}

export const SwitchToIframeCode = {
  origin: String.raw`
  /**
   * 切换到指定frame
   * @param framekeyvalue  {ey: any; value: any} frame key-value值
   */
  SwitchToIframe(framekeyvalue: { key: any; value: any }): Promise<void>;
  `,
  sample: String.raw`
  let framekvtitle={
    key:'title',
    value:'百度一下，你就知道了'
  }

  let framekvurl={
    key:'url',
    value:'https://www.baidu.com'
  }

  let framekvindex={
    key:'Index',
    value:1
  }

  await pwdriver.SwitchToIframe(framekvtitle);
  await pwdriver.SwitchToIframe(framekvurl);
  await pwdriver.SwitchToIframe(framekvindex);
  `
}

export const SwitchToMainFrameCode = {
  origin: String.raw`
  /**
   * 切换到默认frame,返回父级Page
   */
  SwitchToMainFrame(): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.SwitchToMainFrame();
  `
}

export const MouseMoveCode = {
  origin: String.raw`
  /**
   * 鼠标移动
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseMove(x: number, y: number): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.MouseMove(800,600);
  `
}

export const MouseClickCode = {
  origin: String.raw`
  /**
   * 鼠标点击
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseClick(x: number, y: number): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.MouseClick(800,600);
  `
}

export const MouseDoubleClickCode = {
  origin: String.raw`
  /**
   * 鼠标双击
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseDoubleClick(x: number, y: number): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.MouseDoubleClick(800,600);
  `
}

export const MouseWheelCode = {
  origin: String.raw`
  /**
   * 鼠标拖拽, 滚动
   * @param x {number} x轴
   * @param y {number} y轴
   */
  MouseWheel(x: number, y: number): Promise<void>;
  `,
  sample: String.raw`
  await pwdriver.MouseWheel(800,600);
  `
}

export const GetPageCode = {
  origin: String.raw`
  /**
   * 返回原生操作的方法
   * Page
   */
  GetPage(): Promise<Page>;
  `,
  sample: String.raw`
  let page:Page;
  result page = await pwdriver.GetPage();
  `
}

export const GetFrameCode = {
  origin: String.raw`
  /**
   * 返回原生操作的方法
   * Frame
   */
  GetFrame(): Promise<Frame | null>;
  `,
  sample: String.raw`
  let farme:Frame;
  result farme = await pwdriver.GetFrame();
  `
}

export const HanderPageCode = {
  origin: String.raw`
  /**
   * page
   * hander 回调操作
   * @param fn {Function} 回调函数
   */
  HanderPage(fn: (page: Page) => any): Promise<any>;
  `,
  sample: String.raw`
  result await pwdriver.HanderPage(async (page)=>{
    await page.locator('#submit').click();
  });
  `
}

export const HanderFrameCode = {
  origin: String.raw`
  /**
   * frame
   * hander 回调操作
   * @param fn {Function} 回调函数
   */
  HanderFrame(fn: (frame: Frame | null) => any): Promise<any>;
  `,
  sample: String.raw`
  result await pwdriver.HanderFrame(async (frame)=>{
    await frame.locator('#submit').click();
  });
  `
}

export const RoHistoryCode = {
  democode: String.raw`
  test('登录mtstar', async () => {
    //初始化启动browser
    pwdriver = await Launch('chrome', config)
    //进入网址
    await pwdriver.GoTo('https://mtstar.mt.com.cn/') }),
  `,

  roonecode_1: String.raw`
    <ros:MacroReference ros:MacroID="BeforeLogin" />
    <web:RoWebElement.Click web:RoWebElementID="Index.CreateNewScale_Btn" ros:Explain="点击新建秤" />
    <web:Sleep web:Seconds="2" web:Message="等待页面刷新..." />
    <ros:MacroReference ros:MacroID="CreateScale_First" ros:Explain="创建一台秤" />
`,

  roonecode_2: String.raw`
  [CaseDesc("BeforeLogin", 1)]
  private void BeforeLogin()
  {
    //登陆
    WebFunc.CallMacro("BeforeLogin");
    "Index.CreateNewScale_Btn".Web().Click();
    WebFunc.Sleep(2, "等待页面刷新...");
    //创建一台秤
    WebFunc.CallMacro("CreateScale_First");
  }
  `
}

export const DemoShowCode = String.raw`
import { Locator, test } from '@playwright/test';
import { IPWDriver } from '../src/Framework/Cores/IPWDriver';
import { Launch } from '../src/Framework/Cores/Launch';
import { TConfig } from '../src/Types/Standalone/Standalone';
import { testJson } from './element.demo';

//定义 pwdriver
let pwdriver: IPWDriver;
// 执行配置
const config: TConfig = {
  basic: {
    defaulttimeout: 30000,
    defaulttimeoutmsg: '已超时,请检查代码或网络',
    // 完成执行后是否保持环境
    keepevn: false,
    // 保存日志文件路径
    savelogpath: './logs',
    // 默认截图前缀名
    defaultsceenshotpixname: 'mtstar.demo',
    // 默认错误改为警告
    treaterrorsaswarnings: false,
  },
};

// 顺序执行,串行执行
test.describe.serial('mtstar_basic', () => {
  test('登录mtstar', async () => {
    pwdriver = await Launch('chrome', config); //初始化启动browser

    await pwdriver.GoTo(''); //进入网址,隐去对应网址
    // 输入账号和密码

    // INFO: 检索元素，验证为null后，输入账号
    let element: Locator | null = await pwdriver.FindElement(testJson.loginname.value);
    if (element) {
      await pwdriver.SendKeys(element, '');
    }

    // 直接输入密码
    await pwdriver.SendKeys(testJson.loginpassword.value, '');
    await pwdriver.TakeSnapshot('登录mtstar_1');
    // 点击登录按钮
    await pwdriver.Click(testJson.loginbtn.value);
    // 等待3~5秒进行登录
    await pwdriver.Sleep(5000, '等待5秒');
    await pwdriver.TakeSnapshot('登录mtstar_2');
  });
  test('创建秤', async () => {
    //点击左侧菜单栏秤管理
    await pwdriver.Click(testJson.sacleviewbtn.value);
    await pwdriver.Sleep(3000, '等待3秒');
    await pwdriver.TakeSnapshot('创建秤_1');

    //点击创建秤按钮
    await pwdriver.Click(testJson.newscalebtn.value);
    await pwdriver.Sleep(3000, '等待3秒');

    //输入秤ip
    await pwdriver.SendKeys(testJson.scaleip.value, '127.0.0.2');

    // INFO: debug 验证new error是否能带出问题
    await pwdriver.AssertText(testJson.scaleip.value, '127.0.0.100');

    //输入秤号
    await pwdriver.SendKeys(testJson.scalenumber.value, '100');
    await pwdriver.TakeSnapshot('创建秤_1.1.0');

    // INFO: MTSTAR专属操作，select非select
    await pwdriver.Sleep(1000, '等待1秒');
    await pwdriver.Click(testJson.scaletype.value);
    await pwdriver.TakeSnapshot('创建秤_1.1.1');
    let element = await pwdriver.FindElement(testJson.scaletypeselect.value);
    if (element != null) {
      // WARNING: https://github.com/microsoft/playwright/issues/17525
      let bp = await pwdriver.FindElement('#_easyui_combobox_i3_5');
      if (bp != null) {
        await pwdriver.Click(bp);
      }
    }
    // MTSTAR专属操作，select非select
    await pwdriver.Sleep(3000, '等待3秒');
    await pwdriver.Click(testJson.scalesubtype.value);
    await pwdriver.TakeSnapshot('创建秤_1.1.2');
    element = await pwdriver.FindElement(testJson.scalesubtypeselect.value);
    if (element != null) {
      let bp = await pwdriver.FindElement('#_easyui_combobox_i12_1');
      if (bp != null) {
        await pwdriver.Click(bp);
      }
    }

    // 输入端口
    await pwdriver.SendKeys(testJson.scaleport.value, '3001');
    await pwdriver.TakeSnapshot('创建秤_2');
    // 点击保存按钮
    await pwdriver.Click(testJson.createbtn.value);
    await pwdriver.Sleep(3000, '等待3秒');
    await pwdriver.TakeSnapshot('创建秤_3');
  });
  test('删除操作', async () => {
    // 验证下标展示
    //console.log(pwdriver);
    await pwdriver.Sleep(3000, '等待创建秤成功');
    await pwdriver.AssertContains(testJson.rightbottomview.value, '显示1到18,共18记录');
    await pwdriver.AssertContains(testJson.rightbottomview.value, '显示1到1,共1记录');
    await pwdriver.TakeSnapshot('删除操作_1');

    //定义元素后,开始使用回调进行删除操作
    let scalelist = "tbody > tr>td[field='scaleIp']";
    let scale: Locator;
    await pwdriver.HanderPage(async (page) => {
      scale = await page.locator(scalelist, { hasText: '127.0.0.2' });
      if (scale !== null) {
        //console.log(await scale.count());
        await scale.click();
      }
    });
    await pwdriver.TakeSnapshot('删除操作_2');
    //开始删除
    await pwdriver.Click(testJson.deletebtn.value);
    await pwdriver.Click(testJson.deleteselectbtn.value);
    await pwdriver.Sleep(2000, '等待2秒');
    let element = await pwdriver.FindElement(testJson.delectokbtn.value);
    if (element != null) {
      await pwdriver.Click(element);
    }
    await pwdriver.Sleep(2000, '等待2秒');
    await pwdriver.TakeSnapshot('删除操作_3');
    await pwdriver.AssertContains(testJson.rightbottomview.value, '显示0到0,共0记录');
  });

  test('进入et', async () => {
    // 折叠左侧菜单栏
    await pwdriver.Click(testJson.foldscalebtn.value);
    await pwdriver.Sleep(1000, '等待1秒');
    await pwdriver.Click(testJson.databtn.value);
    await pwdriver.Sleep(1000, '等待1秒');
    await pwdriver.Click(testJson.ettabbtn.value);
    await pwdriver.Sleep(1000, '等待1秒');
    // 重点来了
    await pwdriver.SwitchToIframe({ key: 'url', value: 'data-management/data-folder/ET' });
    await pwdriver.Sleep(5000, '等待5秒');
    await pwdriver.AssertExist(testJson.newetfolderbtn.value);
    await pwdriver.Click(testJson.newetfolderbtn.value);
    // 截图
    await pwdriver.TakeSnapshot('新建文件夹_1');
  });
});

`
