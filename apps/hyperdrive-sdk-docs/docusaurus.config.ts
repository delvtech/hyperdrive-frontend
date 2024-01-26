import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import defaultTypeDocConfig from "./typedoc.json";

const config: Config = {
  title: "Hyperdrive SDK Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hyperdrive.delv.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Plugin / TypeDoc options
      {
        id: "hyperdrive-sdk",
        entryPoints: ["../../packages/hyperdrive-sdk"],
        entryPointStrategy: "packages",
        sidebar: {
          fullNames: true,
        },
        out: "sdk/api-reference",

        ...defaultTypeDocConfig,
      },
    ],
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/delvtech/hyperdrive-monorepo",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Hyperdrive SDK",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "SDK",
        },
        {
          type: "doc",
          position: "left",
          label: "CLI",
          docId: "cli/index",
        },
        {
          href: "https://github.com/delvtech/hyperdrive-monorepo",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "SDK",
              to: "/docs/sdk",
            },
            {
              label: "CLI",
              to: "/docs/cli",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/EEfKmfQdtx",
            },
            {
              label: "X",
              href: "https://twitter.com/delv_tech",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/delvtech/hyperdrive-monorepo",
            },
            {
              label: "DELV Blog",
              href: "https://blog.delv.tech/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Element Finance Inc., dba DELV. All rights reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
