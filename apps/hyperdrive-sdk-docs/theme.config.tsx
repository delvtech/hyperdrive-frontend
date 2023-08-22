import { ThemeConfig } from "nextra";

const config: ThemeConfig = {
  logo: <span>Hyperdrive SDK</span>,
  project: {
    link: "https://github.com/delvtech/hyperdrive-monorepo",
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    autoCollapse: true,
  },
  chat: {
    link: "https://discord.gg/atwMje4P",
  },
  docsRepositoryBase: "https://github.com/delvtech/hyperdrive-monorepo",
  footer: {
    text: "Hyperdrive SDK",
  },
  head: (
    <>
      <title>Hyperdrive SDK</title>
      <meta name="og:title" content="Hyperdrive SDK" />
      <meta
        name="og:description"
        content="Hyperdrive is the next research leap from the Delv team on variable and fixed rate primitives. No preset expiration dates, no fragmented liquidity, and no LP rollovers, aka everlasting liquidity."
      />
    </>
  ),
};

export default config;
