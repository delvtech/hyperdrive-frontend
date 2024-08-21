import "dotenv/config";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { cloudChain } from "src/chains/cloudChain";
import { createPublicClient, http } from "viem";

const cloudChainNodeRpcUrl = process.env.CLOUDCHAIN_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: cloudChain,
  transport: http(cloudChainNodeRpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${cloudChain.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${cloudChain.name.toLowerCase()}AppConfig`,
});
