import { navbar } from "vuepress-theme-hope";
import { programmingNav } from "./programming.js";
import { databaseNav } from "./database.js";
import { osNav } from "./os.js";
import { networkNav } from "./network.js";
import { otherNav } from "./other.js";

export const enNavbar = navbar([
  "/",
  programmingNav,
  databaseNav,
  osNav,
  networkNav,
  ...otherNav,
  {
    text: "About",
    icon: "info",
    children: [
      { text: "About Me", icon: "people", link: "/intro" },
      { text: "About This Site", icon: "info", link: "/about" },
    ],
  },
]);
