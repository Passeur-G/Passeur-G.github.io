---
date: 2024-03-12
icon: info
sidebar: false
navbar: false
category:
  - Blog
tag:
  - Blog
---
# 关于本站

:::: info 🎉🎉🎉
分享一下建站经历以及建站原因
::::

## <div style="color:#9400D3">建站原因</div>

<div style="color:#FF8C00">

搭建一个个人博客，这是我上大学以来一直的想法，最开始的想法是，博客需要的是前端技术，那么等自己把前端学明白再动手一点一点搭建博客，于是
迟迟没有开展搭建过程，学业和生活压力的伴随进一步推迟了搭建。直到23年年底，我等不了，因为需要学的太多，自己搭建实在分身乏术，于是在网上
就开始寻找心仪的博客框架。在百花之中，我找到了它[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)。
可能你会说，为什么不用[博客园](https://www.cnblogs.com/Passeur-G)、[CSDN](https://blog.csdn.net/weixin_73610250)、[知乎](https://www.zhihu.com/)、[掘金](https://juejin.cn/)....写博客呢？
博客园我注册过，对于新手很友好；CSDN我也注册过，也写过几篇博客...但始终觉得不够好，不符合自己的预期，
这就好比你使用自己的东西总比使用别人的东西舒服得来，博客也是如此

</div>

## <div style="color:#9400D3">建站经历</div>

<div style="color:#FF8C00">

建站过程很曲折，由于对于css、js、vue的使用不是很熟，文档的阅读也是过于繁琐，还有对GitHub的使用也是头一回，所以整个建站过程对于我是一个很大的挑战
建站起初的环境配置倒还好，像node.js以及包管理器pnpm都顺利配置成功，然后跟着文档一步一步走，成功启动了博客，[起初的样子](https://theme-hope.vuejs.press/zh/demo/blog-home.html)
到这里一切还好，但是样式不尽人意，于是各种百度以及查找B站视频，进行了样式增加，首先是必应的壁纸和一言，接着是加入自己的元素
第一次推送上去时，就出现了问题，自己按照视频怎么配置也不对，一顿瞎改后，似乎是成功了，也可以通过GitHub Page访问了，但是后来
改着改着就出现问题了，不知道什么原因，本地的文件全部自动更改了，目录结构也变化了，无奈之下便搁置了一段时间，那段时间正式寒假
末尾，便无心在设置了
直到开学，前几周没有什么事情便接着捅咕捯饬我的网站，删除GitHub上的仓库，并重新拉取，原先的样式全都删除了，可以说一夜回到解放前
接下来的过程就是重新建库重新设置样式，今天增加点设置明天增加点设置，一步一步，然后部署到了Netlify上，并把域名解析到上面后，
终于实现域名访问，参照着很多优秀的网站进行了修改，然后是申请SSL证书，最后是加入Algolia搜索配置，实现全站搜索，到此，我的博客
搭建成功。
如果追溯建站成功的时间的话，实在是无法确定从何算起，所幸把2024.03.26当作建站第一天，也是给自己的生日礼物。

</div>

## <div style="color:#9400D3">网站元素</div>

<div style="color:#FF8C00">

博客的名称是[GaLaXy](https://www.iciba.com/word?w=galaxy),名字的由来：起初是和宿友想一起建立一个小组织，但大家各自的未来打算以及语言方向不相同
就业的就业、读研的读研；Java、Python等原因交织在一起，就使得组织诞生即消亡。而GaLaXy取义为群英、人才荟萃，是基于大家的姓氏首字母而来
网站的网址是www.nulizongyouhuibao.space，这是在23年4月份时申请并备案的，网址取义为努力总有回报，而space的选择是因为太空比较吸引我
博客的LOGO是一只皇冠猫，很大一部分原因是自己养猫，而猫是我生活中最真挚的朋友，猫元素的LOGO我找到很多，最后母亲帮我做出了选择
头像的设置是一个狗爪印，长大成家后的第一个想法就是养一条大金毛圆我梦想

</div>

## <div style="color:#9400D3">主要目录结构</div>

```shell
.
├── .github
│   └── workflows
│       └── deploy-docs.yml # 推送脚本
├── CNAME
├── LICENSE
├── package.json #依赖、启动配置
├── pnpm-lock.yaml
├── src
│   ├── .vuepress
│   │   ├── client.ts # 客户端配置文件
│   │   ├── components
│   │   │   └── BlogHero.vue # 必应壁纸组件
│   │   ├── config.ts # vuepress配置文件
│   │   ├── navbar
│   │   ├── plugins
│   │   │   ├── vuepress-plugin-canvas #页面背景
│   │   │   ├── vuepress-plugin-gradient-cover #蒙罩插件
│   │   │   └── vuepress-plugin-popper #鼠标特效
│   │   ├── public
│   │   │   └── assets # 资源
│   │   ├── sidebar
│   │   ├── styles #个性主题设置
│   │   │   └── index.scss # 一言字体设置
│   │   ├── theme
│   │   │   ├── components #自定义组件
│   │   │   ├── layouts # 自定义布局（缺省页设置）
│   │   │   └── utils
│   │   │       ├── busuanzi.pure.js # 不蒜子统计
│   │   │       └── time.ts #运行时间
│   │   └── theme.ts # 主题配置文件
│   ├── about.md #本站简介
│   ├── intro.md #个人简介
│   ├── Collection.md #工具集
│   └── README.md #
└── tsconfig.json # 路径名转换
```

## <div style="color:#9400D3">框架支持</div>

[vuepress2.x](https://v2.vuepress.vuejs.org/zh/)

## <div style="color:#9400D3">主题支持</div>

[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)

## <div style="color:#9400D3">自由配置</div>

<div style="color:#EE7600">

基于原主题进行了更改，个性化内容如下，主要自定义内容分为
1. **<div style="color:#9400D3">自定义布局</div>**
   - NotFound.vue（缺省页组件）
   - Layout.vue(增加打赏组件)

2. **<div style="color:#9400D3">自定义组件</div>**
   - PageFooter.vue（页脚组件）
   - Sponsor.vue（打赏组件）

3. **<div style="color:#9400D3">插件使用</div>**

   - vuepress-plugin-canvas（支持彩虹背景和动态几何图形两种）
   - vuepress-plugin-gradient-cover （遮罩背景）
   - vuepress-plugin-oh-my-live2d （看板娘插件）
   - vuepress-plugin-popper （鼠标特效，基于[@moefy-canvas/theme-popper](https://github.com/moefyit/moefy-canvas)）
   - 不蒜子统计
   - [@vuepress/plugin-google-analytics](https://v2.vuepress.vuejs.org/zh/reference/plugin/google-analytics.html)

4. **<div style="color:#9400D3">配置内容</div>**
   - navbar 顶部栏
   - sidebar 侧边栏
   - 评论基于 [Waline](https://waline.js.org/)
   - 搜索基于[algolia](https://www.algolia.com/developers/?utm_content=powered_by&utm_source=localhost&utm_medium=referral&utm_campaign=docsearch)
   - 启用 copyright 版权信息插件
   - feed rss插件

5. **<div style="color:#9400D3">零碎</div>**
   - 运行时间统计
   - SCSS 样式美化
   - 引入字体，品如手写体
   - wanlie评论
   - 个性log

</div>

## <div style="color:#9400D3">致谢</div>

>[黄 坤@Oragekk](https://oragekk.me/),[Chengpeng Dong](https://tech.dongcp.top/),[Mr.Hope@主题作者](https://mister-hope.com/)
><div style="color:#EE7600">对如上作者表示感谢，本站的建成是参照如上作者的博客以及文档的参阅</div>
><div style="color:#EE7600">感谢你的停留，谢谢你的倾听，我只是互联网上的一朵碎碎叨叨的小浪花。</div>