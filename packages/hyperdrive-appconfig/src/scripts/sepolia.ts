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
  factoryAddress: "0xc1b75eab339d7ba9a8015f1c5c22eb8fb0b949ec",
  registryAddress: "0xaec273aaeeac047095774931739213ad0881b89b",
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
