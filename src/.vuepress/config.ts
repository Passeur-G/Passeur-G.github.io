import { defineUserConfig } from "vuepress";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { canvasPlugin , CanvasPluginType} from "./plugins/vuepress-plugin-canvas";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import metingPlugin  from "vuepress-plugin-meting2";
import { copyrightPlugin } from "@vuepress/plugin-copyright";
//import { feedPlugin } from "@vuepress/plugin-feed";
//import { shikiPlugin } from "@vuepress/plugin-shiki";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  
  locales: {
    "/": {
      lang: "en-US",
      title: "GaLaXy",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "GaLaXy",
    },
  },
  plugins: [
  //音乐插件
  metingPlugin({
    metingOptions: {
      global:true, // 开启关闭全局播放器
      server: "netease",
      api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
      type: "playlist",
      mid: "2465726847",
    },
  }),
  //看板娘
  oml2dPlugin ({
    // 在这里配置选项
    menus: {
      style:{
        left:'auto',
        right: 10,
      },
    },
    models: [
      // {
      //   path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
      //   scale: 0.12,
      //   position: [-20, 50],
      //   stageStyle: {
      //     width: 350
      //   },
        
      // },
      // {
      //   path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/Fox%20Hime%20Zero/mori_mikoc/mori_mikoc.model3.json',
      //   position: [50, 100],
      //   stageStyle: {
      //     width: 300,
      //     height: 470,
      //   },
      // },
      // {
      //   path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/LOVE³-LOVE%20CUBE-/live2d/kuroneko/kuroneko.model3.json',
      //   position: [50, 100],
      //   stageStyle: {
      //     width: 300,
      //     height: 330,
      //   },
        
      // },
      {
        path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/魂器学院%20(炼铜学院)/live2d/11110/Lead_00.model.json',
        position: [50, 100],
        stageStyle: {
          width: 350,
          height: 480,
        },
        scale:0.06,
      
      },
      // {
      //   path: 'https://model.oml2d.com/pio/model.json',
      //   position: [0, 95],
      //   stageStyle: {
      //     height: 410,
      //   },
      //   scale:0.5,
      // },
      // {
      //   path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
      //   scale: 0.12,
      //   position: [-10, 50],
      //   stageStyle: {
      //     width: 350
      //   }
      // },
    ],
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
  copyrightPlugin({
    global: true,
    triggerLength: 160,
    author:"Gao HaiTong",
    license:"MIT",
  }),
  // 搜索插件
  // docsearchPlugin({
  //   appId: "MZQB6L70BB",
  //   apiKey: "92cb627abf2b4e1ea88d05cf67beb39d",
  //   indexName: "nulizongyouhuibao",
  //   searchParameters:{
  //     facetFilters: "",
  //   },}),
  //   locales: {
  //     "/": {
  //       placeholder: "search",
  //       translations: {
  //         button: {
  //           buttonText: "search",
  //           buttonAriaLabel: "search",
  //         },
  //         modal: {
  //           searchBox: {
  //             resetButtonTitle: "清除查询条件",
  //             resetButtonAriaLabel: "清除查询条件",
  //             cancelButtonText: "取消",
  //             cancelButtonAriaLabel: "取消",
  //           },
  //           startScreen: {
  //             recentSearchesTitle: "搜索历史",
  //             noRecentSearchesText: "没有搜索历史",
  //             saveRecentSearchButtonTitle: "保存至搜索历史",
  //             removeRecentSearchButtonTitle: "从搜索历史中移除",
  //             favoriteSearchesTitle: "收藏",
  //             removeFavoriteSearchButtonTitle: "从收藏中移除",
  //           },
  //           errorScreen: {
  //             titleText: "无法获取结果",
  //             helpText: "你可能需要检查你的网络连接",
  //           },
  //           footer: {
  //             selectText: "选择",
  //             navigateText: "切换",
  //             closeText: "关闭",
  //             searchByText: "搜索提供者",
  //           },
  //           noResultsScreen: {
  //             noResultsText: "无法找到相关结果",
  //             suggestedQueryText: "你可以尝试查询",
  //             reportMissingResultsText: "你认为该查询应该有结果？",
  //             reportMissingResultsLinkText: "点击反馈",
  //           },
  //         },
  //       },
  //     },
  //     "/zh/": {
  //       placeholder: "搜索内容",
  //       translations: {
  //         button: {
  //           buttonText: "搜索",
  //           buttonAriaLabel: "搜索",
  //         },
  //         modal: {
  //           searchBox: {
  //             resetButtonTitle: "清除查询条件",
  //             resetButtonAriaLabel: "清除查询条件",
  //             cancelButtonText: "取消",
  //             cancelButtonAriaLabel: "取消",
  //           },
  //           startScreen: {
  //             recentSearchesTitle: "搜索历史",
  //             noRecentSearchesText: "没有搜索历史",
  //             saveRecentSearchButtonTitle: "保存至搜索历史",
  //             removeRecentSearchButtonTitle: "从搜索历史中移除",
  //             favoriteSearchesTitle: "收藏",
  //             removeFavoriteSearchButtonTitle: "从收藏中移除",
  //           },
  //           errorScreen: {
  //             titleText: "无法获取结果",
  //             helpText: "你可能需要检查你的网络连接",
  //           },
  //           footer: {
  //             selectText: "选择",
  //             navigateText: "切换",
  //             closeText: "关闭",
  //             searchByText: "搜索提供者",
  //           },
  //           noResultsScreen: {
  //             noResultsText: "无法找到相关结果",
  //             suggestedQueryText: "你可以尝试查询",
  //             reportMissingResultsText: "你认为该查询应该有结果？",
  //             reportMissingResultsLinkText: "点击反馈",
  //           },
  //         },
  //       },
  //     },
  //   },
  // }),
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
