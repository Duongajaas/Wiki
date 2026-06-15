import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
// import { oml2dPlugin } from "vuepress-plugin-oh-my-live2d";
import {
  canvasPlugin,
  CanvasPluginType,
} from "./plugins/vuepress-plugin-canvas";
import { live2DAssistPlugin } from "./plugins/vuepress-plugin-live2DAssist";
import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover";
import theme from "./theme.js";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import metingPlugin from "vuepress-plugin-meting2";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/Wiki/",
  lang: "vi-VN",
  head: [["meta", { name: "referrer", content: "no-referrer-when-downgrade" }]],
  extendsPage: (page) => {
    if (page.frontmatter.layout === "") {
      delete page.frontmatter.layout;
    }
  },
  locales: {
    "/": {
      lang: "vi-VN",
      title: "Duongajaas",
      description: "Duongajaas",
    },
  },
  alias: {
    "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),
    "@MyCoverLink": path.resolve(__dirname, "./components/MyCoverLink.vue"),
    "@Design": path.resolve(__dirname, "./data/design.ts"),
    "@Api": path.resolve(__dirname, "./data/api.ts"),
  },

  theme: theme,

  port: 9527,

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/bing/, ""),
          },
        },
      }
    },
    // vuePluginOptions: {},
  }),
  plugins: [
    // çœ‹æ¿å¨˜è¾…å©æ’ä»¶
    live2DAssistPlugin({
      subPageHidden: true,
    }),
    // èƒŒæ™¯æ’ä»¶
    canvasPlugin({
      type: CanvasPluginType.Figure,
      ribbonOption: {
        zIndex: 1,
        alpha: 0.8,
        size: 90,
      },
    }),
    // é®ç½©æ’ä»¶
    gradientCoverPlugin({}),
    // è°·æ­Œç»Ÿè®¡
    googleAnalyticsPlugin({
      // é…ç½®é¡¹
      id: "G-R1WPVQFH8L",
      debug: true,
    }),
    // æœç´¢æ’ä»¶
    docsearchPlugin({
      appId: "PI9QTF572N",
      apiKey: "07e2432555d8ecdd3fb72978f0a05cdc",
      indexName: "Duongajaas",
      locales: {
        "/": {
          placeholder: "Tìm kiếm bài viết...",
          translations: {
            button: {
              buttonText: "Tìm kiếm",
              buttonAriaLabel: "Tìm kiếm",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "Xóa từ khóa",
                resetButtonAriaLabel: "Xóa từ khóa",
                cancelButtonText: "Hủy",
                cancelButtonAriaLabel: "Hủy",
              },
              startScreen: {
                recentSearchesTitle: "Tìm kiếm gần đây",
                noRecentSearchesText: "Chưa có tìm kiếm gần đây",
                saveRecentSearchButtonTitle: "Lưu tìm kiếm này",
                removeRecentSearchButtonTitle: "Xóa tìm kiếm này",
                favoriteSearchesTitle: "Đã lưu",
                removeFavoriteSearchButtonTitle: "Xóa khỏi danh sách đã lưu",
              },
              errorScreen: {
                titleText: "Không thể tải kết quả",
                helpText: "Vui lòng kiểm tra kết nối mạng rồi thử lại",
              },
              footer: {
                selectText: "Chọn",
                navigateText: "Di chuyển",
                closeText: "Đóng",
                searchByText: "Tìm kiếm bởi",
              },
              noResultsScreen: {
                noResultsText: "Không tìm thấy kết quả",
                suggestedQueryText: "Thử tìm với từ khóa khác",
                reportMissingResultsText: "Bạn nghĩ nội dung này nên xuất hiện?",
                reportMissingResultsLinkText: "Gửi phản hồi",
              },
            },
          },
        },
      },
    }),
    // çœ‹æ¿å¨˜æ’ä»¶
    // oml2dPlugin({
    //   models: [
    //     {
    //       scale: 0.04,
    //       path: "https://cdn.jsdelivr.net/gh/Duongajaas/blog-assets/live2D/sipeibojue_5/sipeibojue_5.model3.json",
    //       position: [0, 70],
    //       stageStyle: {
    //         height: 350
    //       }
    //     },
    //     {
    //       scale: 0.04,
    //       path: "https://cdn.jsdelivr.net/gh/Duongajaas/blog-assets/live2D/lafei_4/lafei_4.model3.json",
    //       position: [0, 80],
    //       stageStyle: {
    //         height: 360
    //       }
    //     },
    //     {
    //       scale: 0.1,
    //       path: "https://cdn.jsdelivr.net/gh/Duongajaas/blog-assets/live2D/z46_2/z46_2.model3.json",
    //       position: [0, 60],
    //       stageStyle: {
    //         height: 330
    //       }
    //     },
    //   ],
    //   tips: {
    //     idleTips: {
    //       wordTheDay:true
    //     },
    //   },
    // })
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});

