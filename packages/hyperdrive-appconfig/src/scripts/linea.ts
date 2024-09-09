import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { lineaChainConfig } from "src/chains/chains";
import { createPublicClient, http } from "viem";
import { linea } from "viem/chains";

const rpcUrl = process.env.GNOSIS_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: linea,
  transport: http(rpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: "0x6668310631Ad5a5ac92dC9549353a5BaaE16C666",
  publicClient,
  earliestBlock: lineaChainConfig.earliestBlock,
});

writeAppConfigToFile({
  filename: `./src/generated/${lineaChainConfig.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(linea.name)}AppConfig`,
});
