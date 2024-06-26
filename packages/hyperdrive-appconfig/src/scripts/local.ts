import "dotenv/config";
import { AddressesJson } from "src/addresses/AddressesJson";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromRegistryAddresses";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchJson } from "src/base/fetchJson";
import { localChain } from "src/chains/local";
import { fetchRegistryAddresses } from "src/registry/fetchRegistryAddresses";
import { createPublicClient, http } from "viem";

const localChainId = +(process.env.LOCAL_CHAIN_ID as string);
const localAddressesUrl = process.env.LOCAL_ADDRESSES_URL as string;
const localNodeRpcUrl = process.env.LOCAL_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: localChain,
  transport: http(localNodeRpcUrl),
});

fetchJson<AddressesJson>(localAddressesUrl)
  .then((addresses) =>
    fetchRegistryAddresses({
      registryAddress: addresses.hyperdriveRegistry,
      publicClient,
    }),
  )
  .then(async (registryAddresses) => {
    const appConfig = await getAppConfigFromRegistryAddresses({
      addresses: registryAddresses,
      chainId: localChainId,
      publicClient,
    });

    writeAppConfigToFile({
      filename: `./src/generated/${localChainId}.appconfig.ts`,
      appConfig,
      appConfigName: "localChainAppConfig",
    });
  });
