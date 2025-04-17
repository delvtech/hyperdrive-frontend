import repoConfig from "@hyperdrive/prettier-config";

/** @type {import("prettier").Config} */
export default {
  ...repoConfig,
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss", // must come last
  ],
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
  pluginSearchDirs: false,
};
