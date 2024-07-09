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
  registryAddress: process.env.CLOUDCHAIN_REGISTRY_ADDRESS as `0x${string}`,
  chainId: cloudChain.id,
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${cloudChain.id}.appconfig.ts`,
  appConfig,
  appConfigName: "cloudChainAppConfig",
});
