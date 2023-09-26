// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTypeDocConfig = require("./typedoc.json");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hyperdrive SDK Docs",
  tagline: "Hyperdrive SDK Docs",

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
        entryPoints: ["../../packages/hyperdrive-sdk/src/index.ts"],
        tsconfig: "../../packages/hyperdrive-sdk/tsconfig.json",
        out: "sdk/api-reference",
        ...defaultTypeDocConfig,
      },
    ],
  ],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./src/components/sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/delvtech/hyperdrive-monorepo",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Hyperdrive SDK",

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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Delv`,
      },
    }),
};

module.exports = config;
