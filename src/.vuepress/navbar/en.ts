import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "configuration/tutorials",
    icon: "fa-solid fa-download",
    children: [
      {
        text: "development kit",
        prefix:"/posts/developmentkit/",
        children: [
          { text: "Eclipse", icon: "fa-solid fa-e", link: "eclipse/" },
          { text: "Idea", icon: "fa-solid fa-i", link: "idea/" },
          { text: "VScode", icon: "fa-solid fa-code", link: "vscode/" },
        ],
      },
      {
        text: "database/virtual",
        prefix:"/posts/database/",
        children: [
          { text: "PowerDesigner", icon: "fa-solid fa-database", link: "powerdesigner/" },
          { text: "VMware", icon: "fa-solid fa-v", link: "vmware/" },
        ],
      },
      {
        text: "Web disk/search tools",
        children: [
          { text: "蓝奏云", icon: "fa-solid fa-folder", link: "https://up.woozooo.com/" },
          { text: "大圣盘", icon: "fa-solid fa-folder-open", link: "https://www.dashengpan.com/#/main/search?restype=1" },
        ],
      },
      {
        text: "Other tutorials",
        prefix:"/posts/othertutorials/",
        children: [
          { text: "encoding specification", icon: "fa-solid fa-scroll", link: "encoding/"  },
          { text: "Over Wall", icon: "fa-solid fa-joint", link: "overwall/" },
          { text: "Note", icon: "fa-solid fa-t", link: "note/" },
        ],
      },
    ],
  },
  {
    text: "learning notes",
    icon: "iconfont icon-Notes",
    prefix: "/posts/learningnotes/",
    children: [
      {
        text: "programming language",
        children: [
          { text: "Java", icon: "fab fa-java", link: "java/" },
          { text: "Python", icon: "fab fa-python", link: "python/" },
          { text: "Go", icon: "fab fa-golang", link: "go/" },
        ],
      },
      {
        text: "Computer",
        children: [
          {
            text: "principles of computer compositio",
            icon: "fa-solid fa-desktop",
            link: "principles/",
          },
          {
            text: "data structure",
            icon: "fa-solid fa-cubes-stacked",
            link: "datastructure/",
          },
          {
            text: "computer networks",
            icon: "fab fa-internet-explorer",
            link: "networks/",
          },
          {
            text: "operating system",
            icon: "fa-solid fa-microchip",
            link: "system/",
          },
        ],
      },
      {
        text: "A hodgepodge of knowledge",
        children: [
          { 
            text: "Algorithm note", 
            icon: "fa-solid fa-chart-bar", 
            link: "algorithm/" 
          },
          { 
            text: "Common command memo", 
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
    text: "Tool set",
    icon: "fa-solid fa-wrench",
    prefix: "/posts/toolset/",
    children: [
      {
        text: "Warehouse configuration",
        children: [
          { text: "Maven", icon: "iconfont icon-maven", link: "maven/" },
          { text: "Git", icon: "fab fa-git-alt", link: "git/" },
        ],
      },
      {
        text: "request for test",
        children: [
          { text: "Postman", icon: "iconfont icon-postman", link: "postman/" },
        ],
      },
      {
        text: "Deployment tool",
        children: [
          { text: "Docker", icon: "fab fa-docker", link: "docker/" },
          { text: "GitHub", icon: "fa-solid fa-code-branch", link: "github/" },
        ],
      },
      {
        text: "data base tool",
        children: [
          { text: "Navicat", icon: "iconfont icon-navicat", link: "navicat/" },
          { text: "Redis", icon: "iconfont icon-Redis", link: "redis/" },
          { text: "MySQL", icon: "iconfont icon-mysql-copy", link: "mysql/" },
        ],
      },
    ],
  },
  {
    text: "Frame set",
    icon: "fa-solid fa-boxes-packing",
    prefix: "/posts/frameset/",
    children: [
      {
        text: "Front-end frame",
        children: [
          { text: "React", icon: "fab fa-react", link: "react/" },
          { text: "Vue", icon: "fab fa-vuejs", link: "vue/" },
        ],
      },
      {
        text: "ORM framework",
        children: [
          { text: "Mybatis", icon: "iconfont icon-mybatis", link: "mybatis/" },
          { text: "MybatisPlus", icon: "iconfont icon-mybatisplus", link: "mybatisplus/" },
        ],
      },
      { 
        text: "Client development",
        children: [
          { 
            text: "WeChat Mini Program",
            icon: "fab fa-weixin",
            link: "wechat/", 
          },
        ],
      },
    ],
  },
  {
    text: "Sping family bucket",
    icon: "iconfont icon-spring",
    prefix: "/posts/springall/",
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
    text: "Front-end knowledge set",
    icon: "fab fa-grav",
    prefix: "/posts/frontend/",
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
        text: "Related content set",
        icon: "fab fa-node",
        link: "nodeeles/",
      },
      
    ],
  },
]);
