import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { gnosisChainConfig } from "src/chains/chains";
import { createPublicClient, http } from "viem";
import { gnosis } from "viem/chains";

const rpcUrl = process.env.GNOSIS_RPC_URL as string;

const publicClient = createPublicClient({
  chain: gnosis,
  transport: http(rpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
  publicClient,
  earliestBlock: gnosisChainConfig.earliestBlock,
});

writeAppConfigToFile({
  filename: `./src/generated/${gnosis.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(gnosis.name)}AppConfig`,
});
