import { withNextra } from "nextra";
const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
};
module.exports = withNextra(nextraConfig);
