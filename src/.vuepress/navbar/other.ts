import { NavbarItem } from "vuepress-theme-hope";

export const otherNav: NavbarItem[] = [
  {
    text: "Algorithms",
    icon: "mdi:graph-outline",
    link: "/algorithms/",
  },
  {
    text: "Data Structures",
    icon: "structure",
    link: "/dsa/",
  },
  {
    text: "Interview",
    icon: "question",
    link: "/interview/",
  },
  {
    text: "Projects",
    icon: "mdi:folder-code-outline",
    link: "/project/",
    children: [
      { text: "BachHoa", icon: "mdi:cart-outline", link: "/project/BachHoa/" },
      { text: "NT131", icon: "mdi:parking", link: "/project/NT131/" },
    ],
  },
];
