import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { baseChainConfig } from "src/chains/chains";
import { BASE_REGISTRY_ADDRESS } from "src/registries";
import { createPublicClient, http, PublicClient } from "viem";
import { base } from "viem/chains";

const rpcUrl = process.env.BASE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: base,
  transport: http(rpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: BASE_REGISTRY_ADDRESS,
  publicClient: publicClient as PublicClient,
  earliestBlock: baseChainConfig.earliestBlock,
});

writeAppConfigToFile({
  filename: `./src/generated/${base.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(base.name)}AppConfig`,
});
