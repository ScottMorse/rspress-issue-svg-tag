# Rspress Issue: SVG Tags

This is a simple repo created via `npm create rspress@latest`, and then I locked the `@rspress/core` version to 2.0.13 in package.json.

The issues can be seen plainly by comparing the `themeConfig.nav` in `rspress.config.ts` with the rendered nav when running the dev server or preview.

### Primary Issue - Commas in SVG Tags

The primary issue is that if an inline SVG element passed to the `tag` property of a nav item contains a comma, the text is rendered
as a plain string instead of as an SVG element. I demonstrated this using an SVG that has a `transform` attribute with a comma in it.

I'm not sure if other characters cause the same issue

### Secondary Issue - Relative Paths in SVG URLs

A secondary potential issue is that if using a URL instead to an SVG file, only a complete URL works, not a relative path from the origin.
So, I also included an example of this in the nav config, where `/my.svg` is not treated as a URL, while `http://localhost:3000/my.svg` is.
It would be nice if relative paths worked as well so that users like myself don't have to dynamically resolve the deployment URL for these.

## Quick Look:

#### Config:

```ts
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
```

#### Screenshot:

<img src="screenshot.jpeg" alt="Screenshot of the issue" />
