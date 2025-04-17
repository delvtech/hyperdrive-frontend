import repoConfig from "@hyperdrive/prettier-config";

/** @type {import("prettier").Config} */
export default {
  ...repoConfig,
  plugins: ["prettier-plugin-organize-imports"],
};
