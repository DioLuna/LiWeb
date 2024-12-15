import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  head: [
     [
         'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
         { rel: 'icon', href: 'logo.png' }
     ]
    ],
  base: "/LiWeb/",
  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
