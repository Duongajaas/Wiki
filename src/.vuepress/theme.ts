import { MyTheme } from "./theme/index";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default MyTheme({
  hotReload: true,
  hostname: "https://duongajaas.github.io",

  themeColor: true,
  fullscreen: true,

  author: {
    name: "Duongajaas",
    url: "https://duongajaas.github.io",
  },

  iconAssets: [
    "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
    "//at.alicdn.com/t/c/font_3941380_00g6dc2nedwir.css",
  ],

  logo: "/logo.svg",

  repo: "Duongajaas/Wiki",
  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  blog: {
    name: "Duongajaas",
    medias: {
      Email: "mailto:lequocduong060712@gmail.com",
      GitHub: "https://github.com/Duongajaas",
      Gmail: "mailto:lequocduong060712@gmail.com",
      Rss: "./rss.xml",
    },
  },

  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      footer: "Chân trang mặc định",
      displayFooter: false,

      navbarLocales: {
        langName: "Tiếng Việt",
        selectLangAriaLabel: "Chọn ngôn ngữ",
      },

      metaLocales: {
        author: "Author",
        date: "Date",
        origin: "",
        views: "Views",
        category: "Category",
        tag: "Tag",
        readingTime: "Reading Time",
        words: "Words",
        toc: "Page Contents",
        prev: "Previous Page",
        next: "Next Page",
        lastUpdated: "Last Updated",
        contributors: "Contributors",
        editLink: "Chỉnh sửa trên GitHub",
        print: "Print this page",
      },

      blogLocales: {
        article: "Article",
        articleList: "Article List",
        category: "Category",
        tag: "Tag",
        timeline: "Timeline",
        timelineTitle: "Yesterday is Gone",
        all: "Tất cả",
        intro: "Giới thiệu",
        star: "Đã ghim",
        empty: "$text trống",
      },

      paginationLocales: {
        prev: "Trang trước",
        next: "Trang sau",
        navigate: "Đi tới",
        action: "Chuyển",
        errorText: "Vui lòng nhập số từ 1 đến $page!",
      },

      outlookLocales: {
        themeColor: "Màu chủ đạo",
        darkmode: "Chế độ giao diện",
        fullscreen: "Toàn màn hình",
      },

      encryptLocales: {
        iconLabel: "Bài viết đã mã hóa",
        placeholder: "Nhập mật khẩu",
        remember: "Nhớ mật khẩu",
        errorHint: "Vui lòng nhập đúng mật khẩu!",
      },

      routeLocales: {
        skipToContent: "Bỏ qua đến nội dung chính",
        notFoundTitle: "Không tìm thấy trang",
        notFoundMsg: [
          "Không có gì ở đây.",
          "Bạn đã đến đây bằng cách nào?",
          "Đây là lỗi 404.",
          "Có vẻ bạn đã truy cập một liên kết không còn hợp lệ.",
        ],
        back: "Quay lại",
        home: "Về trang chủ",
        openInNewWindow: "Mở trong cửa sổ mới",
      },

      blog: {
        description: "Người có học mới có tiến bộ. Càng học càng tiến bộ.",
        intro: "/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    shiki: {
      themes: {
        light: "one-dark-pro",
        dark: "one-dark-pro",
      },
      lineNumbers: true,
    },

    components: {
      components: ["BiliBili", "Badge"],
    },

     blog: {
      filter: ({ filePathRelative, frontmatter }) => {
        if (!frontmatter.article && frontmatter.news) return true;

        return true;
      },

      type: [
        {
          key: "news",
          filter: (page) => page.frontmatter.news === true,
          layout: "News",
          frontmatter: () => ({ title: "Talk" }),
        },
      ],
    },

    photoSwipe: {
      selector: [
        ".theme-hope-content :not(a) > img:not([no-view])",
        ".news-content :not(a) > .vp-article-excerpt img",
      ],
    },

    git: true,

    feed: {
      rss: true,
    },


    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
    },
  },
});