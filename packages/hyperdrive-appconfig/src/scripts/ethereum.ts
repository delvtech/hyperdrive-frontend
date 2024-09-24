import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { ETHEREUM_REGISTRY_ADDRESS } from "src/registries";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const ethereumRpcUrl = process.env.ETHEREUM_RPC_URL as string;

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(ethereumRpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: ETHEREUM_REGISTRY_ADDRESS,
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${mainnet.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(mainnet.name)}AppConfig`,
});
