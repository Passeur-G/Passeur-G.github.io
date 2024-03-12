import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "工具集合",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "仓库配置",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Maven", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: "请求测试",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Postman", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: "部署工具",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Docker", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: "数据库工具",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Navicat", icon: "pen-to-square", link: "1" },
        ],
      },
    ],
  },
  {
    text: "框架集合",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "前端框架",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "React", icon: "pen-to-square", link: "1" },
          { text: "Vue", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "ORM框架",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Mybatis", icon: "pen-to-square", link: "1" },
          { text: "MybatisPlus", icon: "pen-to-square", link: "2" },
        ],
      },
    ],
  },
  {
    text: "Sping全家桶",
    icon: "pen-to-square",
    prefix: "banana/",
    children: [
      {
        text: "Spring",
        icon: "pen-to-square",
        link: "1",
      },
      {
        text: "SpringBoot",
        icon: "pen-to-square",
        link: "2",
      },
      {
        text: "SpringCloud",
        icon: "pen-to-square",
        link: "3",
      },
      {
        text: "SpringMVC",
        icon: "pen-to-square",
        link: "4",
      },
    ],
  },
]);
