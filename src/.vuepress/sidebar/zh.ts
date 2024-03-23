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
          link: "DevelopmentKit/Eclipse/" 
        },
        { 
          text: "Idea", 
          icon: "fa-solid fa-i", 
          link: "DevelopmentKit/Idea/" 
        },
        { 
          text: "VScode", 
          icon: "fa-solid fa-code", 
          link: "DevelopmentKit/VScode/" 
        },
        {     
          text: "PowerDesigner", 
          icon: "fa-solid fa-database", 
          link: "Database/PowerDesigner/" 
        },
        { 
          text: "VMware", 
          icon: "fa-solid fa-v", 
          link: "Database/VMware/" 
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
          link: "OtherTutorials/encoding/"  
        },
        { 
          text: "Over Wall", 
          icon: "fa-solid fa-joint", 
          link: "OtherTutorials/OverWall/" 
        },
        { 
          text: "记笔记", 
          icon: "fa-solid fa-t", 
          link: "OtherTutorials/Note/" 
        },
        { 
          text: "Java", 
          icon: "fab fa-java", 
          link: "LearningNotes/Java/" 
        },
        { 
          text: "Python", 
          icon: "fab fa-python", 
          link: "LearningNotes/Python/" 
        },
        { 
          text: "Go", 
          icon: "fab fa-golang", 
          link: "LearningNotes/Go/" 
        },
        {
          text: "计算机组成原理",
          icon: "fa-solid fa-desktop",
          link: "LearningNotes/principles/",
        },
        {
          text: "数据结构",
          icon: "fa-solid fa-cubes-stacked",
          link: "LearningNotes/DataStructure/",
        },
        {
          text: "计算机网络",
          icon: "fab fa-internet-explorer",
          link: "LearningNotes/Networks/",
        },
        {
          text: "操作系统",
          icon: "fa-solid fa-microchip",
          link: "LearningNotes/System/",
        },
        { 
          text: "算法笔记", 
          icon: "fa-solid fa-chart-bar", 
          link: "LearningNotes/Algorithm/" 
        },
        { 
          text: "常用命令备忘录", 
          icon: "fa-solid fa-book-bookmark", 
          link: "LearningNotes/CommandMemo/" 
        },
        { 
          text: "Liunx", 
          icon: "iconfont icon-liunx-", 
          link: "LearningNotes/liunx/" 
        },
        { 
          text: "Maven", 
          icon: "iconfont icon-maven", 
          link: "ToolSet/Maven/" 
        },
        { 
          text: "Git", 
          icon: "fab fa-git-alt", 
          link: "ToolSet/Git/" 
        },
        { 
          text: "Postman", 
          icon: "iconfont icon-postman", 
          link: "ToolSet/Postman/" 
        },
        { 
          text: "Docker", 
          icon: "fab fa-docker", 
          link: "ToolSet/Docker/" 
        },
        { 
          text: "GitHub", 
          icon: "fa-solid fa-code-branch", 
          link: "ToolSet/Github/" 
        },
        { 
          text: "Navicat", 
          icon: "iconfont icon-navicat", 
          link: "ToolSet/Navicat/" 
        },
        { 
          text: "Redis", 
          icon: "iconfont icon-Redis", 
          link: "ToolSet/Redis/" 
        },
        { 
          text: "MySQL", 
          icon: "iconfont icon-mysql-copy", 
          link: "ToolSet/MySQL/" 
        },
        { 
          text: "React", 
          icon: "fab fa-react", 
          link: "FrameSet/React/" 
        },
        { 
          text: "Vue", 
          icon: "fab fa-vuejs", 
          link: "FrameSet/Vue/" 
        },
        { 
          text: "Mybatis", 
          icon: "iconfont icon-mybatis", 
          link: "FrameSet/Mybatis/" 
        },
        { 
          text: "MybatisPlus", 
          icon: "iconfont icon-mybatisplus", 
          link: "FrameSet/MybatisPlus/" 
        },
        { 
          text: "微信小程序",
          icon: "fab fa-weixin",
          link: "FrameSet/Wechat/", 
        },
        {
          text: "Spring",
          icon: "iconfont icon-spring",
          link: "SpringAll/Spring/",
        },
        {
          text: "SpringBoot",
          icon: "iconfont icon-SpringBoot",
          link: "SpringAll/SpringBoot/",
        },
        {
          text: "SpringCloud",
          icon: "iconfont icon-SpringCloud",
          link: "SpringAll/SpringCloud/",
        },
        {
          text: "SpringMVC",
          icon: "iconfont icon-spring_",
          link: "SpringAll/SpringMVC/",
        },
        {
          text: "CSS",
          icon: "fab fa-css3-alt",
          link: "FrontEnd/CSS/",
        },
        {
          text: "JavaScript",
          icon: "fab fa-js",
          link: "FrontEnd/JavaScript/",
        },
        {
          text: "HTML",
          icon: "fab fa-html5",
          link: "FrontEnd/HTML/",
        },
        {
          text: "相关内容集",
          icon: "fab fa-node",
          link: "FrontEnd/NodeEles/",
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
  "/zh/posts/Database/": "structure",
  "/zh/posts/DevelopmentKit/Eclipse/": "structure",
  "/zh/posts/DevelopmentKit/Idea/": "structure",
  "/zh/posts/DevelopmentKit/VScode/": "structure",
  "/zh/posts/FrameSet/Mybatis/": "structure",
  "/zh/posts/FrameSet/MybatisPlus/": "structure",
  "/zh/posts/FrameSet/React/": "structure",
  "/zh/posts/FrameSet/Vue/": "structure",
  "/zh/posts/FrontEnd/CSS/": "structure",
  "/zh/posts/FrontEnd/HTML/": "structure",
  "/zh/posts/FrontEnd/JavaScript/": "structure",
  "/zh/posts/LearningNotes/Algorithm/": "structure",
  "/zh/posts/LearningNotes/CommandMemo/": "structure",
  "/zh/posts/LearningNotes/DataStructure/": "structure",
  "/zh/posts/LearningNotes/Go/": "structure",
  "/zh/posts/LearningNotes/Java/": "structure",
  "/zh/posts/LearningNotes/liunx/": "structure",
  "/zh/posts/LearningNotes/Networks/": "structure",
  "/zh/posts/LearningNotes/principles/": "structure",
  "/zh/posts/LearningNotes/Python/": "structure",
  "/zh/posts/LearningNotes/System/": "structure",
  "/zh/posts/OtherTutorials/": "structure",
  "/zh/posts/SpringAll/Spring/": "structure",
  "/zh/posts/SpringAll/SpringBoot/": "structure",
  "/zh/posts/SpringAll/SpringCloud/": "structure",
  "/zh/posts/SpringAll/SpringMVC/": "structure",
  "/zh/posts/ToolSet/Docker/": "structure",
  "/zh/posts/ToolSet/Git/": "structure",
  "/zh/posts/ToolSet/Github/": "structure",
  "/zh/posts/ToolSet/Maven/": "structure",
  "/zh/posts/ToolSet/MySQL/": "structure",
  "/zh/posts/ToolSet/Navicat/": "structure",
  "/zh/posts/ToolSet/Postman/": "structure",
  "/zh/posts/OtherTutorials/encoding/": "structure",
  "/zh/posts/OtherTutorials/Note/": "structure",
  "/zh/posts/OtherTutorials/OverWall/": "structure",
});
