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
  factoryAddress: "0x338D5634c391ef47FB797417542aa75F4f71A4a6",
  registryAddress: "0xba5156E697d39a03EDA824C19f375383F6b759EA",
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
