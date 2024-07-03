import "dotenv/config";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromRegistryAddresses";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fork } from "src/chains/fork";
import { fetchRegistryAddresses } from "src/registry/fetchRegistryAddresses";
import { createPublicClient, http } from "viem";

const forkNodeRpcUrl = process.env.FORK_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: fork,
  transport: http(forkNodeRpcUrl),
});

fetchRegistryAddresses({
  registryAddress: process.env.FORK_REGISTRY_ADDRESS as `0x${string}`,
  publicClient,
}).then(async (addresses) => {
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses,
    chainId: fork.id,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${fork.id}.appconfig.ts`,
    appConfig,
    appConfigName: "forkAppConfig",
  });
});
