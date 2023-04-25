module.exports = {
  ...require("@hyperdrive/prettier-config"),
  // required.resolve needed for plugins to work in monorepo
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require("prettier-plugin-tailwindcss"), // must come last
  ],
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
  pluginSearchDirs: false,
};
