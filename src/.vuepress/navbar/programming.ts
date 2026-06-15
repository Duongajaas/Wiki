import { NavbarGroup } from "vuepress-theme-hope";

export const programmingNav: NavbarGroup = {
  text: "Programming",
  icon: "code",
  link: "/programming/",
  children: [
    { text: "JavaScript", icon: "devicon:javascript", link: "/programming/javascript/" },
    { text: "TypeScript", icon: "devicon:typescript", link: "/programming/typescript/" },
  ],
};
