import { NavbarGroup } from "vuepress-theme-hope";

export const databaseNav: NavbarGroup = {
  text: "Database",
  icon: "code",
  link: "/database/",
  children: [
    { text: "SQL", icon: "code", link: "/database/sql/" },
    { text: "MySQL", icon: "mysql", link: "/database/mysql/" },
    { text: "MongoDB", icon: "mongodb", link: "/database/mongodb/" },
  ],
};
