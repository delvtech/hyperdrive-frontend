import "dotenv/config";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { http, createPublicClient } from "viem";
import { sepolia } from "viem/chains";

const sepoliaNodeRpcUrl = process.env.SEPOLIA_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(sepoliaNodeRpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: "0x03f6554299acf544ac646305800f57db544b837a",
  chainId: sepolia.id,
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${sepolia.id}.appconfig.ts`,
  appConfig,
  appConfigName: "sepoliaAppConfig",
});
