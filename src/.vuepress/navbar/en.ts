import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "configuration/tutorials",
    icon: "fa-solid fa-download",
    children: [
      {
        text: "development kit",
        prefix:"/posts/DevelopmentKit/",
        children: [
          { text: "Eclipse", icon: "fa-solid fa-e", link: "Eclipse/" },
          { text: "Idea", icon: "fa-solid fa-i", link: "Idea/" },
          { text: "VScode", icon: "fa-solid fa-code", link: "VScode/" },
        ],
      },
      {
        text: "Database/virtual",
        prefix:"/posts/Database/",
        children: [
          { text: "PowerDesigner", icon: "fa-solid fa-database", link: "PowerDesigner/" },
          { text: "VMware", icon: "fa-solid fa-v", link: "VMware/" },
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
        prefix:"/posts/OtherTutorials/",
        children: [
          { text: "encoding specification", icon: "fa-solid fa-scroll", link: "encoding/"  },
          { text: "Over Wall", icon: "fa-solid fa-joint", link: "OverWall/" },
          { text: "Note", icon: "fa-solid fa-t", link: "Note/" },
        ],
      },
    ],
  },
  {
    text: "learning notes",
    icon: "iconfont icon-Notes",
    prefix: "/posts/LearningNotes/",
    children: [
      {
        text: "programming language",
        children: [
          { text: "Java", icon: "fab fa-java", link: "Java/" },
          { text: "Python", icon: "fab fa-python", link: "Python/" },
          { text: "Go", icon: "fab fa-golang", link: "Go/" },
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
            link: "DataStructure/",
          },
          {
            text: "computer networks",
            icon: "fab fa-internet-explorer",
            link: "Networks/",
          },
          {
            text: "operating system",
            icon: "fa-solid fa-microchip",
            link: "System/",
          },
        ],
      },
      {
        text: "A hodgepodge of knowledge",
        children: [
          { 
            text: "Algorithm note", 
            icon: "fa-solid fa-chart-bar", 
            link: "Algorithm/" 
          },
          { 
            text: "Common command memo", 
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
    text: "Tool set",
    icon: "fa-solid fa-wrench",
    prefix: "/posts/ToolSet/",
    children: [
      {
        text: "Warehouse configuration",
        children: [
          { text: "Maven", icon: "iconfont icon-maven", link: "Maven/" },
          { text: "Git", icon: "fab fa-git-alt", link: "Git/" },
        ],
      },
      {
        text: "request for test",
        children: [
          { text: "Postman", icon: "iconfont icon-postman", link: "Postman/" },
        ],
      },
      {
        text: "Deployment tool",
        children: [
          { text: "Docker", icon: "fab fa-docker", link: "Docker/" },
          { text: "GitHub", icon: "fa-solid fa-code-branch", link: "Github/" },
        ],
      },
      {
        text: "data base tool",
        children: [
          { text: "Navicat", icon: "iconfont icon-navicat", link: "Navicat/" },
          { text: "Redis", icon: "iconfont icon-Redis", link: "Redis/" },
          { text: "MySQL", icon: "iconfont icon-mysql-copy", link: "MySQL/" },
        ],
      },
    ],
  },
  {
    text: "Frame set",
    icon: "fa-solid fa-boxes-packing",
    prefix: "/posts/FrameSet/",
    children: [
      {
        text: "Front-end frame",
        children: [
          { text: "React", icon: "fab fa-react", link: "React/" },
          { text: "Vue", icon: "fab fa-vuejs", link: "Vue/" },
        ],
      },
      {
        text: "ORM framework",
        children: [
          { text: "Mybatis", icon: "iconfont icon-mybatis", link: "Mybatis/" },
          { text: "MybatisPlus", icon: "iconfont icon-mybatisplus", link: "MybatisPlus/" },
        ],
      },
      { 
        text: "Client development",
        children: [
          { 
            text: "WeChat Mini Program",
            icon: "fab fa-weixin",
            link: "Wechat/", 
          },
        ],
      },
    ],
  },
  {
    text: "Sping family bucket",
    icon: "iconfont icon-spring",
    prefix: "/posts/SpringAll/",
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
    text: "Front-end knowledge set",
    icon: "fab fa-grav",
    prefix: "/posts/FrontEnd/",
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
        text: "Related content set",
        icon: "fab fa-node",
        link: "NodeEles/",
      },
      
    ],
  },
]);
