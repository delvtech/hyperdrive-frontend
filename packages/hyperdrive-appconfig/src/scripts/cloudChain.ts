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
  factoryAddress: "0xc04ee3b4b9456a3186e26babe6dcea95c2493569",
  registryAddress: "0xa17c78648be2188beb70198dbf48f6d322afd5c9",
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
