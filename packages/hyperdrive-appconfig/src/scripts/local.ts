import "dotenv/config";
import { RegistryAddresses } from "src/addresses/RegistryAddresses";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromAddressesJson";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchJson } from "src/base/fetchJson";
import { localChain } from "src/chains/local";
import { Address, createPublicClient, http } from "viem";

const localChainId = +(process.env.LOCAL_CHAIN_ID as string);
const localAddressesUrl = process.env.LOCAL_ADDRESSES_URL as string;
const localNodeRpcUrl = process.env.LOCAL_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: localChain,
  transport: http(localNodeRpcUrl),
});

fetchJson<{ stethHyperdrive: Address; erc4626Hyperdrive: Address }>(
  localAddressesUrl,
).then(async (addresses) => {
  const converted: RegistryAddresses = {
    erc4626Hyperdrive: [addresses.erc4626Hyperdrive],
    stethHyperdrive: [addresses.stethHyperdrive],
  };
  const appConfig = await getAppConfigFromRegistryAddresses({
    addresses: converted,
    chainId: localChainId,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${localChainId}.appconfig.ts`,
    appConfig,
    appConfigName: "localChainAppConfig",
  });
});
