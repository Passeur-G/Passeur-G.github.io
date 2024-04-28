import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "fa-solid fa-gear",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "全文导航",
      icon: "fa-solid fa-magnifying-glass",
      prefix: "posts/",
      children: [
        { 
          text: "Eclipse", 
          icon: "fa-solid fa-e", 
          link: "developmentkit/eclipse/" 
        },
        { 
          text: "Idea", 
          icon: "fa-solid fa-i", 
          link: "developmentkit/idea/" 
        },
        { 
          text: "VScode", 
          icon: "fa-solid fa-code", 
          link: "developmentkit/vscode/" 
        },
        {     
          text: "PowerDesigner", 
          icon: "fa-solid fa-database", 
          link: "database/powerdesigner/" 
        },
        { 
          text: "VMware", 
          icon: "fa-solid fa-v", 
          link: "database/vmware/" 
        },
        { 
          text: "蓝奏云", 
          icon: "fa-solid fa-folder", 
          link: "https://up.woozooo.com/" 
        },
          
        { 
          text: "大圣盘", 
          icon: "fa-solid fa-folder-open", 
          link: "https://www.dashengpan.com/#/main/search?restype=1" 
        },
        { 
          text: "编码规范", 
          icon: "fa-solid fa-scroll", 
          link: "othertutorials/encoding/"  
        },
        { 
          text: "Over Wall", 
          icon: "fa-solid fa-joint", 
          link: "othertutorials/overwall/" 
        },
        { 
          text: "记笔记", 
          icon: "fa-solid fa-t", 
          link: "othertutorials/note/" 
        },
        { 
          text: "Java", 
          icon: "fab fa-java", 
          link: "learningnotes/java/" 
        },
        { 
          text: "Python", 
          icon: "fab fa-python", 
          link: "learningnotes/python/" 
        },
        { 
          text: "Go", 
          icon: "fab fa-golang", 
          link: "learningnotes/go/" 
        },
        {
          text: "计算机组成原理",
          icon: "fa-solid fa-desktop",
          link: "learningnotes/principles/",
        },
        {
          text: "数据结构",
          icon: "fa-solid fa-cubes-stacked",
          link: "learningnotes/datastructure/",
        },
        {
          text: "计算机网络",
          icon: "fab fa-internet-explorer",
          link: "learningnotes/networks/",
        },
        {
          text: "操作系统",
          icon: "fa-solid fa-microchip",
          link: "learningnotes/system/",
        },
        { 
          text: "算法笔记", 
          icon: "fa-solid fa-chart-bar", 
          link: "learningnotes/algorithm/" 
        },
        { 
          text: "常用命令备忘录", 
          icon: "fa-solid fa-book-bookmark", 
          link: "learningnotes/commandmemo/" 
        },
        { 
          text: "Liunx", 
          icon: "iconfont icon-liunx-", 
          link: "learningnotes/liunx/" 
        },
        { 
          text: "Maven", 
          icon: "iconfont icon-maven", 
          link: "toolset/maven/" 
        },
        { 
          text: "Git", 
          icon: "fab fa-git-alt", 
          link: "toolset/git/" 
        },
        { 
          text: "Postman", 
          icon: "iconfont icon-postman", 
          link: "toolset/postman/" 
        },
        { 
          text: "Docker", 
          icon: "fab fa-docker", 
          link: "toolset/docker/" 
        },
        { 
          text: "GitHub", 
          icon: "fa-solid fa-code-branch", 
          link: "toolset/github/" 
        },
        { 
          text: "Navicat", 
          icon: "iconfont icon-navicat", 
          link: "toolset/navicat/" 
        },
        { 
          text: "Redis", 
          icon: "iconfont icon-Redis", 
          link: "toolset/redis/" 
        },
        { 
          text: "MySQL", 
          icon: "iconfont icon-mysql-copy", 
          link: "toolset/mysql/" 
        },
        { 
          text: "React", 
          icon: "fab fa-react", 
          link: "frameset/react/" 
        },
        { 
          text: "Vue", 
          icon: "fab fa-vuejs", 
          link: "frameset/vue/" 
        },
        { 
          text: "Mybatis", 
          icon: "iconfont icon-mybatis", 
          link: "frameset/mybatis/" 
        },
        { 
          text: "MybatisPlus", 
          icon: "iconfont icon-mybatisplus", 
          link: "frameset/mybatisplus/" 
        },
        { 
          text: "微信小程序",
          icon: "fab fa-weixin",
          link: "frameset/wechat/", 
        },
        {
          text: "Spring",
          icon: "iconfont icon-spring",
          link: "springall/spring/",
        },
        {
          text: "SpringBoot",
          icon: "iconfont icon-SpringBoot",
          link: "springall/springboot/",
        },
        {
          text: "SpringCloud",
          icon: "iconfont icon-SpringCloud",
          link: "springall/springcloud/",
        },
        {
          text: "SpringMVC",
          icon: "iconfont icon-spring_",
          link: "springall/springmvc/",
        },
        {
          text: "CSS",
          icon: "fab fa-css3-alt",
          link: "frontend/css/",
        },
        {
          text: "JavaScript",
          icon: "fab fa-js",
          link: "frontend/javascript/",
        },
        {
          text: "HTML",
          icon: "fab fa-html5",
          link: "frontend/html/",
        },
        {
          text: "Nginx",
          icon: "fab fa-neos",
          link: "frontend/nginx/",
        },
        {
          text: "相关内容集",
          icon: "fab fa-node",
          link: "frontend/nodeeles/",
        },
      ],
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
  "/zh/posts/database/": "structure",
  "/zh/posts/developmentkit/eclipse/": "structure",
  "/zh/posts/developmentkit/idea/": "structure",
  "/zh/posts/developmentkit/vscode/": "structure",
  "/zh/posts/frameset/mybatis/": "structure",
  "/zh/posts/frameset/mybatisplus/": "structure",
  "/zh/posts/frameset/react/": "structure",
  "/zh/posts/frameset/vue/": "structure",
  "/zh/posts/frontend/css/": "structure",
  "/zh/posts/frontend/html/": "structure",
  "/zh/posts/frontend/javascript/": "structure",
  "/zh/posts/frontend/nginx/": "structure",
  "/zh/posts/frontend/nodeeles/": "structure",
  "/zh/posts/learningnotes/algorithm/": "structure",
  "/zh/posts/learningnotes/commandmemo/": "structure",
  "/zh/posts/learningnotes/datastructure/": "structure",
  "/zh/posts/learningnotes/go/": "structure",
  "/zh/posts/learningnotes/java/": "structure",
  "/zh/posts/learningnotes/liunx/": "structure",
  "/zh/posts/learningnotes/networks/": "structure",
  "/zh/posts/learningnotes/principles/": "structure",
  "/zh/posts/learningnotes/python/": "structure",
  "/zh/posts/learningnotes/system/": "structure",
  "/zh/posts/othertutorials/": "structure",
  "/zh/posts/springall/spring/": "structure",
  "/zh/posts/springall/springboot/": "structure",
  "/zh/posts/springall/springcloud/": "structure",
  "/zh/posts/springall/springmvc/": "structure",
  "/zh/posts/toolset/docker/": "structure",
  "/zh/posts/toolset/git/": "structure",
  "/zh/posts/toolset/github/": "structure",
  "/zh/posts/toolset/maven/": "structure",
  "/zh/posts/toolset/mysql/": "structure",
  "/zh/posts/toolset/navicat/": "structure",
  "/zh/posts/toolset/postman/": "structure",
  "/zh/posts/othertutorials/encoding/": "structure",
  "/zh/posts/othertutorials/note/": "structure",
  "/zh/posts/othertutorials/overwall/": "structure",
});
