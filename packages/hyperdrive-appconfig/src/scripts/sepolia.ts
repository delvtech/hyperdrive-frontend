import "dotenv/config";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromAddressesJson";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchRegistryAddresses } from "src/base/fetchRegistryAddresses";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const sepoliaChainId = +(process.env.SEPOLIA_CHAIN_ID as string);
const sepoliaNodeRpcUrl = process.env.SEPOLIA_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(sepoliaNodeRpcUrl),
});

fetchRegistryAddresses({
  factoryAddress: "0x",
  registryAddress: "0x",
  publicClient,
}).then(async (addresses) => {
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses,
    chainId: sepoliaChainId,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${sepoliaChainId}.appconfig.ts`,
    appConfig,
    appConfigName: "sepolaChainAppConfig",
  });
});
