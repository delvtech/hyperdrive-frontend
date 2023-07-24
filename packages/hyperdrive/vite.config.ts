import { defineConfig } from "vitest/config";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    // https://vitest.dev/config
  },
};

export default defineConfig({
  test: vitestConfig.test,
});
