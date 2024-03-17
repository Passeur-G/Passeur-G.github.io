import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
export default hopeTheme({
  hostname: "https://nulizongyouhuibao.space",//部署的域名

  favicon:"/assets/icon/darklogo.png", //浏览器标签上的图片

  author: {
    name: "Haitong Gao",//博主 名称
    url: "https://github.com/Passeur-G/Passeur-G.github.io",//博主 网站 文章页作者处的链接
    email: "ght139439@qq.com",//博主 email
  },

  pageInfo: ['Author', 'Date', 'Original', 'Word', 'ReadingTime', 'PageView', 'Category', 'Tag'],//文章属性：作者、日期...

  //iconPrefix: "", //图标前缀用于，简化图标输入 参考文档
  //print: false,//打印按钮
  //pure: ture,//纯净模式
  fullscreen: true,//全屏模式

  iconAssets: [
    "fontawesome-with-brands",
    "https://at.alicdn.com/t/c/font_4469330_v6tbk82wf68.css"
  ],//图标支持库

  logo: "/assets/icon/logo.png",//导航栏logo图标

  logoDark: "/assets/icon/darklogo.png", //黑夜模式导航栏logo

  repo: "Passeur-G",//仓库配置，用于在导航栏中显示仓库链接 github图标链接
  
  //hotReload: true, //开发模式下是否启动热更新，显示所有更改并重新渲染

  docsDir: "src",//文档在仓库中的目录

  darkmode : "toggle", //在深色模式和浅色模式之间切换 

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: true,
  lastUpdated: true,
  editLink: false,

  breadcrumb: true, //路径导航
  breadcrumbIcon : true, //路径导航图标
  
  

  blog: {
    medias: {

      BiliBili: "https://space.bilibili.com/3461572416506787?spm_id_from=333.337.0.0",//myB站个人主页
      Gitee: "https://gitee.com/explore",
      GitHub: "https://github.com/Passeur-G",
      Gitlab: "https://gitlab.com/explore",
      Kuwo: "https://kuwo.cn/",//酷我音乐
      HuaBan:"https://huaban.com/materials",//花瓣素材网
      DuiTang:"https://www.duitang.com/category/?cat=wallpaper",//堆糖素材网
      

    },
    avatar:"/assets/icon/avatar1.png",//博主头像
    //roundAvatar: true,//头像切割成圆形
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Powered by <a href=\"https://v2.vuepress.vuejs.org/zh/\" target=\"_blank\"> VuePress </a> | Theme <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\"> Hope </a>",
      copyright: 'Copyright © 2024 - present Passeur',
      displayFooter: false,

      blog: {
        description: "Bachelor of Software Engineering",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "Powered by <a href=\"https://v2.vuepress.vuejs.org/zh/\" target=\"_blank\"> VuePress </a> | Theme <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\"> Hope </a>",
      copyright: '',
      displayFooter: false,

      blog: {
        description: "软件工程在读学士",
        intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo","Wormhole", "Travelling", "Outlook", "Search"],
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,
    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    comment: {
      provider: "Waline",
      serverURL: "https://talk.nulizongyouhuibao.space/", // your server url https://waline-ei4xxxyay-passeur-gs-projects.vercel.app/
      reaction: true,
      requiredMeta: ["nick"],
      wordLimit: 300,
      emoji: [
        "https://unpkg.com/@waline/emojis@1.1.0/tieba",
        "https://unpkg.com/@waline/emojis@1.1.0/weibo",
        "https://emoji.shojo.cn/bili/webp/tv_小电视_动图",
        "https://emoji.shojo.cn/bili/webp/罗小黑战记",
        "https://emoji.shojo.cn/bili/webp/2233娘",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐梦幻冬季",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐·秋日午后",
        "https://emoji.shojo.cn/bili/webp/星尘",
        "https://emoji.shojo.cn/bili/webp/池年"
      ],
      locales: {
        "/": {
          placeholder:
            "Welcome message ~ _≧∇≦ fill in the usual mailbox can quickly receive a reply notice ~",
        },
        "/zh/": {
          placeholder:
            "欢迎留言~ _(≧∇≦」∠)_ (填写常用邮箱即可快速收到回复通知~)",
        }
      },
    },
    prismjs: false,
    copyright: {
      author: "Passeur",
      license: "CC BY-NC-SA 4.0",
      global: true,
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true, //是否启用自定义对齐格式支持
      attrs: true, //是否启用自定义属性支持
      codetabs: true, //是否启用代码组
      component: true, //是否启用组件支持
      demo: true, //是否启用代码案例支持
      figure: true, //是否启用图片 Figure 支持
      imgLazyload: true, //是否使用原生方式懒加载页面图片
      imgSize: true, //是否启用图片尺寸支持
      include: true, //是否启用 Markdown 导入支持。你可以传入一个函数进行路径解析
      mark: true, //是否启用标记格式支持
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ], //对行内语法进行样式化以创建代码片段
      sub:  true, //是否启用下角标格式支持
      sup:  true, //是否启用上角标格式支持
      tabs: true, //是否启用选项卡
      vPre: true, //是否启用 v-pre 容器
      hint: true, //是否启用提示容器支持
      // linkify: false, //是否将文字中的链接格式文字转换为链接

      // alert: false, //是否启用 GFM 警告

      // footnpte: false, //是否启用脚注格式支持

      // imgMark: false, //是否启用图片标注支持

      // obsidianImgSize: false, //是否启用 obsidian 图片尺寸支持

      // tasklist: false, //是否启用任务列表格式支持。你可以传入一个对象作为任务列表的配置选项
      
      // checkLinks: { status: "dev" }, //是否启用链接检查

      // breaks: false, //是否将段落中的 \n 转换为 <br>

      // delay: 800, //操作页面 DOM 的延时，单位 ms

      // locales: //Markdown 增强插件的国际化配置

      // install chart.js before enabling it
      // 是否启用图表支持
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // 是否启用 ECharts 图表支持
      // echarts: true,

      // install flowchart.ts before enabling it
      // 是否启用流程图支持
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support 是否支持完整的 GFM 语法
      // gfm: true,

      // install katex before enabling it
      // 是否通过 KaTeX 启用 
      // 语法支持。你可以传入一个对象作为 KaTeX 的配置选项。
      // 特别地，你可以通过 katex.copy: true 和 katex.mhchem: true 来启用 copy 和 mhchem 扩展
      // katex: true,

      // install mathjax-full before enabling it
      // 是否通过 Math Jax 启用语法支持。你可以传递一个对象来配置 Math Jax
      // mathjax: true,

      // install mermaid before enabling it
      // 是否启用 Mermaid 支持，你可以传入一个对象作为 Mermaid 的配置选项
      // mermaid: true,

       playground: {
          presets: ["ts", "vue"],
       }, //交互演示选项

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // }, //是否启用幻灯片支持。你可以传递选项控制导入的插件和主题

      // install @vue/repl before enabling it
      // vuePlayground: true, //是否启用 Vue 交互演示支持

      // install sandpack-vue3 before enabling it
      // sandpack: true, //是否启用 Sandpack 交互演示支持

      
    
    },
    feed: {
      rss: true,
    },
    // docsearch: {
    //   appId: 'MZQB6L70BB',
    //   apiKey: '92cb627abf2b4e1ea88d05cf67beb39d',
    //   indexName: 'nulizongyouhuibao',
      
    // },
    docsearch: {
      appId: "MZQB6L70BB",
      apiKey: "92cb627abf2b4e1ea88d05cf67beb39d",
      indexName: "nulizongyouhuibao",
      
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
        "/": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation",
            },
          },
        },
    },
  },
    // install vuepress-plugin-pwa2 and uncomment these if you want a PWA
    pwa: {
      favicon: "/assets/icon/darklogo.png",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/avatar1.png",
            sizes: "1380x1376",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/darklogo.png",
            sizes: "306x376",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/logo.png",
            sizes: "306x376",
            type: "image/png",
          },
          {
            src: "/assets/icon/logo2.png",
            sizes: "598x669",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
},{custom:true});