import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "Navigation", icon: "discover", link: "/demo/" },
  {
    text: "Notes Classification",
    icon: "edit",
    children: [
      {
        text: "Code Notes",
        prefix:"/posts/",
        children: [
          { text: "iOS Notes", icon: "hk-apple", link: "iOS/" },
          { text: "Frontend Notes", icon: "code", link: "Web/" },
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "Rust", icon: "hk-rust", link: "Rust/" },
          { text: "React", icon: "react", link: "cross-platform/ReactNative/" },
          {
            text: "Flutter",
            icon: "hk-flutter",
            link: "cross-platform/Flutter/",
          },
        ],
      },
      {
        text: "Blog Related",
        prefix:"/blog/",
        children: [
          { text: "Blog Related", icon: "blog", link: "" },
        ],
      },
    ],
  },
  {
    text: "Software Tutorials",
    icon: "software",
    link: "/tutorial/",
  },
  {
    text: "Collections",
    icon: "hk-shoucang1",
    link: "/collect",
  },
  {
    text: "Say Something",
    icon: "news",
    link: "/news/",
  },
  {
    text: "Message Board",
    icon: "mark",
    link: "/visitorsbook",
  },
  {
    text: "Friend Links",
    icon: "link",
    link: "/friend",
  },
  {
    text: "About",
    icon: "info",
    children:[
      { text: "About Me", icon: "people", link: "/intro" },
      { text: "About This Site", icon: "info", link: "/about" },
    ]
  },
]);
