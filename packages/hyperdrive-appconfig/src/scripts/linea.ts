import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { lineaChainConfig } from "src/chains/chains";
import { LINEA_REGISTRY_ADDRESS } from "src/registries";
import { createPublicClient, http } from "viem";
import { linea } from "viem/chains";

const rpcUrl = process.env.LINEA_RPC_URL as string;

const publicClient = createPublicClient({
  chain: linea,
  transport: http(rpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: LINEA_REGISTRY_ADDRESS,
  publicClient,
  earliestBlock: lineaChainConfig.earliestBlock,
});

writeAppConfigToFile({
  filename: `./src/generated/${lineaChainConfig.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(linea.name)}AppConfig`,
});
