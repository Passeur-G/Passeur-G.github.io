---
title: 操作指南
icon: fa-solid fa-pen-nib
cover: /photo/back.jpg
author: Passeur-高
date: 2024-03-19
disableCopy: true
category: 
  -Frontmatter配置
tag: 
  -页面模板
sticky: true
banner: /photo/bg7.jpeg
---

## Frontmatter元素对象

根据[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/frontmatter/info.html)关于Frontmatter的相关配置进行一个说明使用，这样每次使用时不用总翻开文档查看。
对于各类Frontmatter设置如下：

```md
---
对文档中的信息Frontmatter简单整理说明
title: 页面标题 例如本页标题-Operating guide
shortTitle: 页面短标题（为路径导航、导航栏、侧边栏的首选）
例如设置shortTitle: UseInf,那么Operating guide就会被UseInf替换显示在导航栏上
icon: 标题文字前图标 根据iconfont和fontawesome设置 例如本页显示的钢笔
cover: 页面显示图像 例如文章页上方的蓝色图片
author: 页面标题下作者显示
description: 页面描述，使用条件设置home: true在highlights下使用
category: 分类标签 例如 本页显示的Frontmatter配置
tag: 标签 例如 页面模板
license: 页面协议信息
sticky: 是否在列表中置顶（boolean|number）
star: 是否为星标文章（boolean|number）
article: 是否将文章加入文章列表
timeline: 是否加入主页时间线
image: highlights下使用
banner: 横幅图片用于分享这个属性用于在社交媒体上分享会自动提供预览图
---
```

```md
---
以下是布局Frontmatter的说明
pageInfo：默认值是theme文件中，是否加载作者、时间、阅读时间等信息:
pageview: 是否显示浏览量前提是设置waline评论
breadcrumb: 是否开启路径导航也就是标题上面的路径
breadcrumbIcon: 是否开启路径导航图标
navbar: 是否禁用导航栏
sidebar: 是否禁用侧边栏
headerDepth: 标题渲染深度
index: 是否索引当前目页面
order: 当前页面在侧边栏/目录中的顺序
dir用于叠加文件夹下的侧边栏分组，格式如下
dir:
  text: 分组标题
  icon: 分组图标
  collapsible: 分组是否可折叠
  link: 分组是否可点击
  index: 是否索引当前目录
  order: 分组在侧边栏的顺序
分组结构就是一个文件夹下多个文件夹的结构
嵌套文件夹，其分组信息由对应文件夹下的 README.md 控制
这里具体参考主题文档的演示
comment: 是否启用评论
lastUpdated: 是否显示最后更新时间
editLink: 是否显示编辑链接
contributors: 是否显示贡献者
prev: 上一篇文章链接
next: 下一篇文章链接
footer: 是否开启页脚
copyright: 版权信息
backToTop: 是否显示返回顶部按钮
toc: 是否显示标题列表
containerClass: 额外的页面容器class
layout: 页面自定义布局名词
---
```

```md
---
以下对有关插件Frontmatter进行说明
需要启用copyRight插件使用，启用后可在Frontmatter中使用
disableCopy: 是否禁用复制
disableSelection: 是否禁用选择
triggerLength: 触发版权最小字数
需要启用feed插件使用，启用后可在Frontmatter中使用格式如下
feed:
  title: Feed项目的标题
  description: Feed项目的描述
  content: Feed项目的内容
  author: Feed项目的作者
  contributor: Feed项目的贡献者
  guid: Feed项目的标识符，用于标识Feed项目
需要启用sitemap，启用后可在Frontmatter中使用
changefreq: 页面更新频率
exclude: 是否不输出此页面到sitemap
priority: 页面优先级范围0-1
---
```
关于[Feed](https://phuker.github.io/posts/web-feed.html#:~:text=%E7%AE%80%E5%8D%95%E5%9C%B0%E8%AF%B4%EF%BC%8Cfeed%20%E6%98%AF%E7%94%A8%E6%9D%A5%E5%85%B3%E6%B3%A8%E5%92%8C%E8%AE%A2%E9%98%85%E7%BD%91%E7%AB%99%E7%9A%84%E5%B7%A5%E5%85%B7%EF%BC%8C%E6%9C%80%E5%85%B8%E5%9E%8B%E7%9A%84%E5%B0%B1%E6%98%AF%E7%94%A8%E6%9D%A5%E8%AE%A2%E9%98%85%E5%8D%9A%E5%AE%A2%E6%96%87%E7%AB%A0%E3%80%82%20%E5%BE%88%E5%A4%9A%E4%BA%BA%E9%81%87%E5%88%B0%E5%A5%BD%E7%BD%91%E7%AB%99%EF%BC%8C%E5%8F%AF%E8%83%BD%E4%BC%9A%E9%9A%8F%E6%89%8B%E6%94%BE%E5%88%B0%E6%94%B6%E8%97%8F%E5%A4%B9%E9%87%8C%EF%BC%8C%E7%84%B6%E5%90%8E%E5%86%8D%E4%B9%9F%E4%B8%8D%E4%BC%9A%E7%82%B9%E5%BC%80%E3%80%82,%E8%80%8C%20feed%20%E5%8F%AF%E4%BB%A5%E8%AE%A9%E5%9C%A8%E6%94%B6%E8%97%8F%E5%A4%B9%E9%87%8C%E5%90%83%E7%81%B0%E7%9A%84%E7%BD%91%E7%AB%99%E2%80%9C%E6%B4%BB%E2%80%9D%E8%B5%B7%E6%9D%A5%E3%80%82)的相关知识

```md
---
对于主页Frontmatter进行配置
home: 设置为 true 时启用首页样式
title: 设置页面标签，会用于路径导航、页面增强等
heroText: 主页标题
tagline: 附加文字描述
heroImage: 主页图标地址
heroImageDark: 深色模式下主页图标地址
heroImageStyle: 首页图标的css样式
heroAlt: 主页图标的替代文字
bgImage: 背景图片
bgImageDark: 深色模式下的背景图片
bgImageStyle: 背景图片的css样式
heroFullScreen: 是否全屏显示Hero
action: 主页操作
highlights: 亮点描述
features: 功能描述
---
```

```md
---
对于博客主页Frontmatter进行配置
home: 设置为true时启用首页样式
hero: 是否显示主页的图标与描述
title: 设置页面标签，会用于路径导航、页面增强等
heroText: 主页标题
tagline: 附加文字描述
heroImage: 主页图标地址
heroImageDark: 深色模式下主页图标地址
heroImageStyle: 首页图标的css样式
heroAlt: 主页图标的替代文字
bgImage: 背景图片
bgImageDark: 深色模式下的背景图片
bgImageStyle: 背景图片的css样式
heroFullScreen: 是否全屏显示Hero
projects: 项目列表
---
```

对于以上的内容进行部分演示说明

![ ](https://pic.imgdb.cn/item/65fef3ad9f345e8d0349ab91.png)

::: details 代码示例
banner: 填写绝对路径
:::

![ ](https://pic.imgdb.cn/item/65fef6859f345e8d0365605d.png)

::: details 代码示例
actions:
  - text: 前往Github克隆项目
    icon: lightbulb
    link: ./demo/
    type: primary

  - text: 更多优质开源项目
    icon: lightbulb
    link: ./guide/

highlights:
  - header: 易于安装
    image: /assets/icon/open1.png
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
      - title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。
:::

为了方便日后书写笔记这里创建一个**写作模板**

``` md
---
title: 标题模板
icon: fa-solid fa-图标模板
cover: /xxx/xxx.xxx 图片模板
author: Passeur-高 or Other
date: 20xx-xx-xx 日期模板
category: 
  -分类模板
tag: 
  -标签模板
---
# 一级标题模板
  - 模板
  - 模板
## 二级标题模板
### 三级标题模板
![ 图片模板 ](https://xxx/xxx/xxx)
[图文连接模板](https://xxx/xxx/xxx)
`特殊符号模板`
[当前文章页跳转](#xxx)
文字设置：**加粗**、*倾斜*和~~删除~~、==标记==
::: tip提示/caution警告/warning注意/note注/important重要/info信息
这是提示容器，当然还有其他容器如上
:::
::: details
这是折叠容器模板
:::
::: tabs
@tab 分类模板
-`"模板"`: 模板
-`"模板"`: 模板
-`"模板"`: 模板
::: 
 ```scss title="xxx/xxx/xxx.xxx"
xxx;
::: left
左对齐的内容
:::
::: center
居中的内容
:::
::: right
右对齐的内容
:::
::: justify
两端对齐的内容
:::
---
```
<BiliBili aid="xxxxxx" cid="xxxxx" ratio="xx:x" time="xx" page="x" />
[BiliBili的文档](https://plugin-components.vuejs.press/zh/guide/media/bili-bili.html#%E6%A1%88%E4%BE%8B)

[后续参考文档补充](https://theme-hope.vuejs.press/zh/guide/component/built-in.html#%E6%9D%82%E9%A1%B9)

