import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

const HYPERDRIVE_PROJECT_PATH = import.meta.env.VITE_HYPERDRIVE_PROJECT_PATH;

if (!HYPERDRIVE_PROJECT_PATH) {
  throw new Error("Provide an HYPERDRIVE_PROJECT_PATH variable in .env");
}

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    foundry({
      project: HYPERDRIVE_PROJECT_PATH,
      exclude: [
        "IERC20.sol",
        "Common.sol/**",
        "Components.sol/**",
        "Script.sol/**",
        "StdAssertions.sol/**",
        "StdError.sol/**",
        "StdCheats.sol/**",
        "StdMath.sol/**",
        "StdJson.sol/**",
        "StdStorage.sol/**",
        "StdUtils.sol/**",
        "Vm.sol/**",
        "console.sol/**",
        "console2.sol/**",
        "test.sol/**",
        "**.s.sol/*.json",
        "**.t.sol/*.json",
      ],
      forge: {
        clean: true,
        build: true,
      },
    }),
    react(),
  ],
});
