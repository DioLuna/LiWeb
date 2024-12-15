import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/LiWeb/",
  lang: "zh-CN",
  title: "博客演示",
  head: [
    ['link',{ rel:'icon',href:'/images/logo.png' }]
  ],
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
