import "dotenv/config";

import { RegistryAddresses } from "src/addresses/RegistryAddresses";
import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromAddressesJson";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchJson } from "src/base/fetchJson";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const sepoliaChainId = +(process.env.SEPOLIA_CHAIN_ID as string);
const sepoliaAddressesUrl = process.env.SEPOLIA_ADDRESSES_URL as string;
const sepoliaNodeRpcUrl = process.env.SEPOLIA_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(sepoliaNodeRpcUrl),
});

fetchJson<RegistryAddresses>(sepoliaAddressesUrl).then(async (addresses) => {
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses,
    chainId: sepoliaChainId,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${sepoliaChainId}.appconfig.ts`,
    appConfig,
    appConfigName: "sepoliaAppConfig",
  });
});
