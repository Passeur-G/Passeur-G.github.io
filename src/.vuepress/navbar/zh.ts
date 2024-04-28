import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "环境配置和教程",
    icon: "fa-solid fa-download",
    children: [
      {
        text: "开发工具",
        prefix:"/zh/posts/developmentkit/",
        children: [
          { text: "Eclipse", icon: "fa-solid fa-e", link: "eclipse/" },
          { text: "Idea", icon: "fa-solid fa-i", link: "idea/" },
          { text: "VScode", icon: "fa-solid fa-code", link: "vscode/" },
        ],
      },
      {
        text: "数据库设计及虚拟机",
        prefix:"/zh/posts/database/",
        children: [
          { text: "PowerDesigner", icon: "fa-solid fa-database", link: "powerdesigner/" },
          { text: "VMware", icon: "fa-solid fa-v", link: "vmware/" },
        ],
      },
      {
        text: "网盘工具及搜索工具",
        children: [
          { text: "蓝奏云", icon: "fa-solid fa-folder", link: "https://up.woozooo.com/" },
          { text: "大圣盘", icon: "fa-solid fa-folder-open", link: "https://www.dashengpan.com/#/main/search?restype=1" },
        ],
      },
      {
        text: "其他小教程",
        prefix:"/zh/posts/othertutorials/",
        children: [
          { text: "编码规范", icon: "fa-solid fa-scroll", link: "encoding/"  },
          { text: "Over Wall", icon: "fa-solid fa-joint", link: "overwall/" },
          { text: "记笔记", icon: "fa-solid fa-t", link: "note/" },
        ],
      },
    ],
  },
  {
    text: "学习笔记",
    icon: "iconfont icon-Notes",
    prefix: "/zh/posts/learningnotes/",
    children: [
      {
        text: "编程语言",
        children: [
          { text: "Java", icon: "fab fa-java", link: "java/" },
          { text: "Python", icon: "fab fa-python", link: "python/" },
          { text: "Go", icon: "fab fa-golang", link: "go/" },
        ],
      },
      {
        text: "计算机408",
        children: [
          {
            text: "计算机组成原理",
            icon: "fa-solid fa-desktop",
            link: "principles/",
          },
          {
            text: "数据结构",
            icon: "fa-solid fa-cubes-stacked",
            link: "datastructure/",
          },
          {
            text: "计算机网络",
            icon: "fab fa-internet-explorer",
            link: "networks/",
          },
          {
            text: "操作系统",
            icon: "fa-solid fa-microchip",
            link: "system/",
          },
        ],
      },
      {
        text: "知识大杂烩",
        children: [
          { 
            text: "算法笔记", 
            icon: "fa-solid fa-chart-bar", 
            link: "algorithm/" 
          },
          { 
            text: "常用命令备忘录", 
            icon: "fa-solid fa-book-bookmark", 
            link: "commandmemo/" 
          },
          { 
            text: "Liunx", 
            icon: "iconfont icon-liunx-", 
            link: "liunx/" 
          },
        ]
      },
    ],
  },
  {
    text: "工具集合",
    icon: "fa-solid fa-wrench",
    prefix: "/zh/posts/toolset/",
    children: [
      {
        text: "仓库配置",
        children: [
          { text: "Maven", icon: "iconfont icon-maven", link: "maven/" },
          { text: "Git", icon: "fab fa-git-alt", link: "git/" },
        ],
      },
      {
        text: "请求测试",
        children: [
          { text: "Postman", icon: "iconfont icon-postman", link: "postman/" },
        ],
      },
      {
        text: "部署工具",
        children: [
          { text: "Docker", icon: "fab fa-docker", link: "docker/" },
          { text: "GitHub", icon: "fa-solid fa-code-branch", link: "github/" },
        ],
      },
      {
        text: "数据库工具",
        children: [
          { text: "Navicat", icon: "iconfont icon-navicat", link: "navicat/" },
          { text: "Redis", icon: "iconfont icon-Redis", link: "redis/" },
          { text: "MySQL", icon: "iconfont icon-mysql-copy", link: "mysql/" },
        ],
      },
    ],
  },
  {
    text: "框架集合",
    icon: "fa-solid fa-boxes-packing",
    prefix: "/zh/posts/frameset/",
    children: [
      {
        text: "前端框架",
        children: [
          { text: "React", icon: "fab fa-react", link: "react/" },
          { text: "Vue", icon: "fab fa-vuejs", link: "vue/" },
        ],
      },
      {
        text: "ORM框架",
        children: [
          { text: "Mybatis", icon: "iconfont icon-mybatis", link: "mybatis/" },
          { text: "MybatisPlus", icon: "iconfont icon-mybatisplus", link: "mybatisplus/" },
        ],
      },
      { 
        text: "客户端开发",
        children: [
          { 
            text: "微信小程序",
            icon: "fab fa-weixin",
            link: "wechat/", 
          },
        ],
      },
    ],
  },
  {
    text: "Sping全家桶",
    icon: "iconfont icon-spring",
    prefix: "/zh/posts/springall/",
    children: [
      {
        text: "Spring",
        icon: "iconfont icon-spring",
        link: "spring/",
      },
      {
        text: "SpringBoot",
        icon: "iconfont icon-SpringBoot",
        link: "springboot/",
      },
      {
        text: "SpringCloud",
        icon: "iconfont icon-SpringCloud",
        link: "springcloud/",
      },
      {
        text: "SpringMVC",
        icon: "iconfont icon-spring_",
        link: "springmvc/",
      },
    ],
  },
  {
    text: "前端知识集",
    icon: "fab fa-grav",
    prefix: "/zh/posts/frontend/",
    children: [
      {
        text: "CSS",
        icon: "fab fa-css3-alt",
        link: "css/",
      },
      {
        text: "JavaScript",
        icon: "fab fa-js",
        link: "javascript/",
      },
      {
        text: "HTML",
        icon: "fab fa-html5",
        link: "html/",
      },
      {
        text: "Nginx",
        icon: "fab fa-neos",
        link: "nginx/",
      },
      {
        text: "相关内容集",
        icon: "fab fa-node",
        link: "nodeeles/",
      },
      
    ],
  },
]);
