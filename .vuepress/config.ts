import { defineConfig } from "vuepress/config";
import extraSideBar from "./extraSideBar";
import footer from "./footer";
import navbar from "./navbar";
import sidebar from "./sidebar";

const author = "程式設計師魚皮";
const domain = "https://ai.codefather.cn";
const tags = [
  "ai",
  "deepseek",
  "AI 資訊",
  "人工智慧",
  "AI 行業趨勢",
  "AI 技術",
  "AI 新聞",
  "AI 動態",
  "AI 市場分析",
  "AI 模型",
  "AI 獨家分析",
  "AI 深度解讀",
];

export default defineConfig({
  title: "魚皮 AI 知識庫",
  description:
    "魚皮 AI 知識庫 - 免費 DeepSeek 教程｜工具站｜資源庫，是一站式開源免費的人工智慧知識分享平臺，彙集 Deepseek、GPT 等熱門 AI 工具介紹、使用指南、技巧分享、應用場景、AI 變現、行業資訊、教程資源彙總，提供系統化的 AI 教程、精選 AI 資源，助你快速掌握 AI 技術，成為 AI 專家！",
  head: [
    // 站點圖示
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "ai, deepseek, AI 資訊，人工智慧，AI 行業趨勢，AI 技術，AI 新聞，AI 動態，AI 市場分析，AI 模型，AI 獨家分析，AI 深度解讀",
      },
    ],
    // 百度統計
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?6998d638562bceef30be297767e91d64";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  permalink: "/:slug",

  // 監聽檔案變化，熱更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    // 開啟程式碼塊的行號
    lineNumbers: true,
    // 支援 4 級以上的標題渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W", // 補充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title + " - 免費 DeepSeek 教程｜工具站｜資源庫",
        title: ($page) => $page.title + " - 免費 DeepSeek 教程｜工具站｜資源庫",
        description: ($page) => $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) => ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain && !$page.frontmatter.image.startsWith("http")) || "") + $page.frontmatter.image,
        publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "程式碼已複製",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自動推送的文件目錄
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
  ],
  // 主題配置
  themeConfig: {
    logo: "/logo.png",
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",

    // GitHub 倉庫位置
    repo: "liyupi/ai-guide",
    docsBranch: "master",

    // 編輯連結
    editLinks: true,
    editLinkText: "完善頁面",

    // @ts-ignore
    // 底部版權資訊
    footer,
    // 額外右側邊欄
    extraSideBar,
  },
});
