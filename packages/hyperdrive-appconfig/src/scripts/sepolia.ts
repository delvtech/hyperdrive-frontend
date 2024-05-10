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
  factoryAddress: "0x547D30758Cc841a5a3a7c4ba7e8997659f788b81",
  registryAddress: "0x424E48057CAA978E21E29b2dfD17992024F97F5C",
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
