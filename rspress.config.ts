import * as path from "node:path";
import { defineConfig } from "@rspress/core";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "My Site",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    nav: [
      {
        text: "SVG Element: Comma",
        link: "/",
        tag: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" transform="translate(0, 0)" stroke="white" ><text x="0" y="15">test</text></svg>',
      },
      {
        text: "SVG Element: NO Comma",
        link: "/",
        tag: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" stroke="white" ><text x="0" y="15">test</text></svg>',
      },
      {
        text: "SVG URL: Relative",
        link: "/",
        tag: "/my.svg",
      },
      {
        text: "SVG URL: Full",
        link: "/",
        tag: "http://localhost:3000/my.svg",
      },
    ],
  },
});
