import "dotenv/config";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromRegistryAddresses";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { cloudChain } from "src/chains/cloudChain";
import { fetchRegistryAddresses } from "src/registry/fetchRegistryAddresses";
import { createPublicClient, http } from "viem";

const cloudChainNodeRpcUrl = process.env.CLOUDCHAIN_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: cloudChain,
  transport: http(cloudChainNodeRpcUrl),
});

fetchRegistryAddresses({
  registryAddress: process.env.CLOUDCHAIN_REGISTRY_ADDRESS as `0x${string}`,
  publicClient,
}).then(async (addresses) => {
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses,
    chainId: cloudChain.id,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${cloudChain.id}.appconfig.ts`,
    appConfig,
    appConfigName: "cloudChainAppConfig",
  });
});
