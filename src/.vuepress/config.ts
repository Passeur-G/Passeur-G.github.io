import { defineUserConfig } from "vuepress";
//import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';
//import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
//import { docsearchPlugin } from "@vuepress/plugin-docsearch";  待研究
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { canvasPlugin , CanvasPluginType} from "./plugins/vuepress-plugin-canvas";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import metingPlugin  from "vuepress-plugin-meting2";
//import { shikiPlugin } from "@vuepress/plugin-shiki";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  
  locales: {
    "/": {
      lang: "en-US",
      title: "GaLaXy",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "GaLaXy",
      description: "vuepress-theme-hope 的博客演示",
    },
  },
  plugins: [
  //   [ 
  //     oml2dPlugin ({
  //       // 在这里配置选项
  //       fixed: false,
  //       models: [
  //         {
  //           path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
  //           scale: 0.12,
  //           position: [-20, 50],
  //           stageStyle: {
  //             width: 350
  //           },
            
  //         },
  //         {
  //           path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/Fox%20Hime%20Zero/mori_mikoc/mori_mikoc.model3.json',
  //           position: [50, 100],
  //           stageStyle: {
  //             width: 300,
  //             height: 470,
  //           },
  //         },
  //         {
  //           path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/LOVE³-LOVE%20CUBE-/live2d/kuroneko/kuroneko.model3.json',
  //           position: [50, 100],
  //           stageStyle: {
  //             width: 300,
  //             height: 330,
  //           },
            
  //         },
  //         {
  //           path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/魂器学院%20(炼铜学院)/live2d/11110/Lead_00.model.json',
  //           position: [50, 100],
  //           stageStyle: {
  //             width: 400,
  //             height: 480,
  //           },
  //           scale:0.06,
  //         },
  //         {
  //           path: 'https://model.oml2d.com/pio/model.json',
  //           position: [0, 95],
  //           stageStyle: {
  //             height: 410,
  //           },
  //           scale:0.5,
  //         },
  //       ],
  //     }),
  // ],
  metingPlugin({
    metingOptions: {
      global:true, // 开启关闭全局播放器
      server: "netease",
      api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
      type: "playlist",
      mid: "2465726847",
    },
  }),
  //背景插件
  canvasPlugin({
    type: CanvasPluginType.Figure,
    ribbonOption: {
    zIndex: 1,
    alpha: 0.8,
    size: 90,
  },
  }),
  // 代码高亮
  shikiPlugin({
    theme: "one-dark-pro",
  }),
  // 遮罩插件
   gradientCoverPlugin({}),
  //一言插件
  hitokotoPlugin({}),
  // 谷歌统计
  googleAnalyticsPlugin({
    // 配置项
    id: "G-QK8NZREDW4",
    debug: true,
  }),
  // 鼠标特效插件
  popperPlugin({
    config: {
      shape: PopperShape.Star,
      size: 1.95,
      numParticles: 8,
    },
  }),
  // 搜索插件
  searchProPlugin({
      autoSuggestions:true,//自动提示搜索建议
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: ({ frontmatter }): string[] => <string[]>frontmatter["tag"],
          formatter: {
            "/": "Tag: $content",
            "/zh/": "标签：$content",
          },
        },
        {
          getter: ({ frontmatter }): string[] => <string[]>frontmatter["category"],
          formatter: {
            "/": "Category: $content",
            "/zh/": "分类：$content",
          },
        },
      ],
  }),
  ],
  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
    "@theme-hope/components/PageFooter": path.resolve(
      __dirname,
      "./theme/components/PageFooter.vue"
    ),
  },
  // Enable it with pwa 启动pwa
  shouldPrefetch: false,
});
