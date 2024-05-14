import "dotenv/config";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromRegistryAddresses";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchRegistryAddresses } from "src/registry/fetchRegistryAddresses";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const sepoliaNodeRpcUrl = process.env.SEPOLIA_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(sepoliaNodeRpcUrl),
});

fetchRegistryAddresses({
  factoryAddress: "0x7b9e529c4949b97c95928b0da2e0144016f86d92",
  registryAddress: "0x4ba58147e50e57e71177cfedb1fac0303f216104",
  publicClient,
}).then(async (addresses) => {
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses,
    chainId: sepolia.id,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${sepolia.id}.appconfig.ts`,
    appConfig,
    appConfigName: "sepoliaAppConfig",
  });
});
