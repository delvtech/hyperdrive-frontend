import "dotenv/config";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromRegistryAddresses";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { clone } from "src/chains/clone";
import { fetchRegistryAddresses } from "src/registry/fetchRegistryAddresses";
import { createPublicClient, http } from "viem";

const cloneNodeRpcUrl = process.env.CLONE_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: clone,
  transport: http(cloneNodeRpcUrl),
});

fetchRegistryAddresses({
  registryAddress: process.env.CLONE_REGISTRY_ADDRESS as `0x${string}`,
  publicClient,
}).then(async (addresses) => {
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses,
    chainId: clone.id,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${clone.id}.appconfig.ts`,
    appConfig,
    appConfigName: "cloneAppConfig",
  });
});
