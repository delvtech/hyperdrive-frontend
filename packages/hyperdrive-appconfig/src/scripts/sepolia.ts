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
  registryAddress: "0x03f6554299acf544ac646305800f57db544b837a",
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
