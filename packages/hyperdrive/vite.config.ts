import { defineConfig } from "vitest/config";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    // https://vitest.dev/config
  },
};

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: vitestConfig.test,
});
