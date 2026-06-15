import { NavbarItem } from "vuepress-theme-hope";

export const otherNav: NavbarItem[] = [
  {
    text: "Algorithms",
    icon: "algorithm",
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
    icon: "project",
    link: "/project/",
    children: [
      { text: "BachHoa", icon: "project", link: "/project/BachHoa/" },
      { text: "NT131", icon: "project", link: "/project/NT131/" },
    ],
  },
];
