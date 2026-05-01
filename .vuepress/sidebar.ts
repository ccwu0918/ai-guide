import { SidebarConfig4Multiple } from "vuepress/config";
import AI from "./sidebars/ai";
// @ts-ignore
export default {
  "/AI/": AI,
  "/AI專案教程/": AI,
  // 降級，預設根據文章標題渲染側邊欄
  "/": "auto",
} as SidebarConfig4Multiple;
