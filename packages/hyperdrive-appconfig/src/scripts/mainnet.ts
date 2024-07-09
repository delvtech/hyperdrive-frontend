import "dotenv/config";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const mainnetNodeRpcUrl = process.env.MAINNET_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(mainnetNodeRpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  chainId: mainnet.id,
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${mainnet.id}.appconfig.ts`,
  appConfig,
  appConfigName: "mainnetAppConfig",
});
