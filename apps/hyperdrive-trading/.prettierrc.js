module.exports = {
  ...require("@hyperdrive/prettier-config"),
  // required for plugin to be used within monorepo
  pluginSearchDirs: ["./"],
  plugins: ["prettier-plugin-organize-imports"],
};
