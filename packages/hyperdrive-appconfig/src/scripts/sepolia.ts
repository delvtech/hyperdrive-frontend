import "dotenv/config";
import camelCase from "lodash.camelcase";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { SEPOLIA_REGISTRY_ADDRESS } from "src/registries";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const sepoliaNodeRpcUrl = process.env.SEPOLIA_RPC_URL as string;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(sepoliaNodeRpcUrl),
});

const appConfig = await getAppConfig({
  registryAddress: SEPOLIA_REGISTRY_ADDRESS,
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${sepolia.id}.appconfig.ts`,
  appConfig,
  appConfigName: `${camelCase(sepolia.name)}AppConfig`,
});
