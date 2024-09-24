import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { cloudChain } from "src/chains/cloudChain";
import { CLOUDCHAIN_REGISTRY_ADDRESS } from "src/registries";
import { createPublicClient, http } from "viem";

const cloudChainNodeRpcUrl = process.env.CLOUDCHAIN_RPC_URL as string;

const publicClient = createPublicClient({
  chain: cloudChain,
  transport: http(cloudChainNodeRpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: CLOUDCHAIN_REGISTRY_ADDRESS,
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${cloudChain.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(cloudChain.name)}AppConfig`,
});
