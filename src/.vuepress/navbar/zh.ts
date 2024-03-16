import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "环境配置和教程",
    icon: "fa-solid fa-download",
    children: [
      {
        text: "开发工具",
        prefix:"/zh/posts/DevelopmentKit/",
        children: [
          { text: "Eclipse", icon: "fa-solid fa-e", link: "Eclipse/" },
          { text: "Idea", icon: "fa-solid fa-i", link: "Idea/" },
          { text: "VScode", icon: "fa-solid fa-code", link: "VScode/" },
        ],
      },
      {
        text: "数据库设计及虚拟机",
        prefix:"/zh/posts/Database/",
        children: [
          { text: "PowerDesigner", icon: "fa-solid fa-database", link: "PowerDesigner/" },
          { text: "VMware", icon: "fa-solid fa-v", link: "VMware/" },
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
        prefix:"/zh/posts/OtherTutorials/",
        children: [
          { text: "编码规范", icon: "fa-solid fa-scroll", link: "encoding/"  },
          { text: "Over Wall", icon: "fa-solid fa-joint", link: "OverWall/" },
          { text: "记笔记", icon: "fa-solid fa-t", link: "Note/" },
        ],
      },
    ],
  },
  {
    text: "学习笔记",
    icon: "iconfont icon-Notes",
    prefix: "/zh/posts/LearningNotes/",
    children: [
      {
        text: "编程语言",
        children: [
          { text: "Java", icon: "fab fa-java", link: "Java/" },
          { text: "Python", icon: "fab fa-python", link: "Python/" },
          { text: "Go", icon: "fab fa-golang", link: "Go/" },
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
            link: "DataStructure/",
          },
          {
            text: "计算机网络",
            icon: "fab fa-internet-explorer",
            link: "Networks/",
          },
          {
            text: "操作系统",
            icon: "fa-solid fa-microchip",
            link: "System/",
          },
        ],
      },
      {
        text: "知识大杂烩",
        children: [
          { 
            text: "算法笔记", 
            icon: "fa-solid fa-chart-bar", 
            link: "Algorithm/" 
          },
          { 
            text: "常用命令备忘录", 
            icon: "fa-solid fa-book-bookmark", 
            link: "CommandMemo/" 
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
    prefix: "/zh/posts/ToolSet/",
    children: [
      {
        text: "仓库配置",
        children: [
          { text: "Maven", icon: "iconfont icon-maven", link: "Maven/" },
          { text: "Git", icon: "fab fa-git-alt", link: "Git/" },
        ],
      },
      {
        text: "请求测试",
        children: [
          { text: "Postman", icon: "iconfont icon-postman", link: "Postman/" },
        ],
      },
      {
        text: "部署工具",
        children: [
          { text: "Docker", icon: "fab fa-docker", link: "Docker/" },
          { text: "GitHub", icon: "fa-solid fa-code-branch", link: "Github/" },
        ],
      },
      {
        text: "数据库工具",
        children: [
          { text: "Navicat", icon: "iconfont icon-navicat", link: "Navicat/" },
          { text: "Redis", icon: "iconfont icon-Redis", link: "Redis/" },
          { text: "MySQL", icon: "iconfont icon-mysql-copy", link: "MySQL/" },
        ],
      },
    ],
  },
  {
    text: "框架集合",
    icon: "fa-solid fa-boxes-packing",
    prefix: "/zh/posts/FrameSet/",
    children: [
      {
        text: "前端框架",
        children: [
          { text: "React", icon: "fab fa-react", link: "React/" },
          { text: "Vue", icon: "fab fa-vuejs", link: "Vue/" },
        ],
      },
      {
        text: "ORM框架",
        children: [
          { text: "Mybatis", icon: "iconfont icon-mybatis", link: "Mybatis/" },
          { text: "MybatisPlus", icon: "iconfont icon-mybatisplus", link: "MybatisPlus/" },
        ],
      },
      { 
        text: "客户端开发",
        children: [
          { 
            text: "微信小程序",
            icon: "fab fa-weixin",
            link: "Wechat/", 
          },
        ],
      },
    ],
  },
  {
    text: "Sping全家桶",
    icon: "iconfont icon-spring",
    prefix: "/zh/posts/SpringAll/",
    children: [
      {
        text: "Spring",
        icon: "iconfont icon-spring",
        link: "Spring/",
      },
      {
        text: "SpringBoot",
        icon: "iconfont icon-SpringBoot",
        link: "SpringBoot/",
      },
      {
        text: "SpringCloud",
        icon: "iconfont icon-SpringCloud",
        link: "SpringCloud/",
      },
      {
        text: "SpringMVC",
        icon: "iconfont icon-spring_",
        link: "SpringMVC/",
      },
    ],
  },
  {
    text: "前端知识集",
    icon: "fab fa-grav",
    prefix: "/zh/posts/FrontEnd/",
    children: [
      {
        text: "CSS",
        icon: "fab fa-css3-alt",
        link: "CSS/",
      },
      {
        text: "JavaScript",
        icon: "fab fa-js",
        link: "JavaScript/",
      },
      {
        text: "HTML",
        icon: "fab fa-html5",
        link: "HTML/",
      },
      {
        text: "相关内容集",
        icon: "fab fa-node",
        link: "NodeEles/",
      },
      
    ],
  },
]);
