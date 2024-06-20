// TODO: use this import when typescript-swagger-api has esm support:
// https://github.com/acacode/swagger-typescript-api/pull/788

// import { repoConfig } from "@hyperdrive/prettier-config";

const repoConfig = {
  tabWidth: 2,
  useTabs: false,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  printWidth: 80,
};

/** @type {import("prettier").Config} */
module.exports = {
  ...repoConfig,
  plugins: ["prettier-plugin-organize-imports"],
};
