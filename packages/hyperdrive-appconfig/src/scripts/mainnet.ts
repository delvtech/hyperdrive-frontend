import "dotenv/config";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromRegistryAddresses";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchRegistryAddresses } from "src/registry/fetchRegistryAddresses";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const mainnetNodeRpcUrl = process.env.MAINNET_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(mainnetNodeRpcUrl),
});

fetchRegistryAddresses({
  registryAddress: "0x------mainnet registry address------",
  publicClient,
}).then(async (addresses) => {
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses,
    chainId: mainnet.id,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${mainnet.id}.appconfig.ts`,
    appConfig,
    appConfigName: "mainnetAppConfig",
  });
});
