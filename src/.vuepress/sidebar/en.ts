import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Demo",
      icon: "fa-solid fa-gear",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Articles",
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
          text: "Nginx",
          icon: "fab fa-neos",
          link: "FrontEnd/Nginx/",
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
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    },
  ],
  "/posts/Database/": "structure",
  "/posts/DevelopmentKit/Eclipse/": "structure",
  "/posts/DevelopmentKit/Idea/": "structure",
  "/posts/DevelopmentKit/VScode/": "structure",
  "/posts/FrameSet/Mybatis/": "structure",
  "/posts/FrameSet/MybatisPlus/": "structure",
  "/posts/FrameSet/React/": "structure",
  "/posts/FrameSet/Vue/": "structure",
  "/posts/FrontEnd/CSS/": "structure",
  "/posts/FrontEnd/HTML/": "structure",
  "/posts/FrontEnd/JavaScript/": "structure",
  "/posts/FrontEnd/Nginx/": "structure",
  "/posts/FrontEnd/NodeEles/": "structure",
  "/posts/LearningNotes/Algorithm/": "structure",
  "/posts/LearningNotes/CommandMemo/": "structure",
  "/posts/LearningNotes/DataStructure/": "structure",
  "/posts/LearningNotes/Go/": "structure",
  "/posts/LearningNotes/Java/": "structure",
  "/posts/LearningNotes/liunx/": "structure",
  "/posts/LearningNotes/Networks/": "structure",
  "/posts/LearningNotes/principles/": "structure",
  "/posts/LearningNotes/Python/": "structure",
  "/posts/LearningNotes/System/": "structure",
  "/posts/OtherTutorials/": "structure",
  "/posts/SpringAll/Spring/": "structure",
  "/posts/SpringAll/SpringBoot/": "structure",
  "/posts/SpringAll/SpringCloud/": "structure",
  "/posts/SpringAll/SpringMVC/": "structure",
  "/posts/ToolSet/Docker/": "structure",
  "/posts/ToolSet/Git/": "structure",
  "/posts/ToolSet/Github/": "structure",
  "/posts/ToolSet/Maven/": "structure",
  "/posts/ToolSet/MySQL/": "structure",
  "/posts/ToolSet/Navicat/": "structure",
  "/posts/ToolSet/Postman/": "structure",
  "/posts/OtherTutorials/encoding/": "structure",
  "/posts/OtherTutorials/Note/": "structure",
  "/posts/OtherTutorials/OverWall/": "structure",
});
