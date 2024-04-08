import "dotenv/config";
import { AddressesJson } from "src/addresses/AddressesJson";

import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromRegistryAddresses";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchJson } from "src/base/fetchJson";
import { fetchRegistryAddresses } from "src/base/fetchRegistryAddresses";
import { cloudChain } from "src/chains/cloudChain";
import { createPublicClient, http } from "viem";

const cloudChainId = +(process.env.CLOUDCHAIN_CHAIN_ID as string);
const cloudChainAddressesUrl = process.env.CLOUDCHAIN_ADDRESSES_URL as string;
const cloudChainNodeRpcUrl = process.env.CLOUDCHAIN_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: cloudChain,
  transport: http(cloudChainNodeRpcUrl),
});

fetchJson<AddressesJson>(cloudChainAddressesUrl)
  .then((addresses) =>
    fetchRegistryAddresses({
      factoryAddress: addresses.factory,
      registryAddress: addresses.hyperdriveRegistry,
      publicClient,
    }),
  )
  .then(async (addresses) => {
    const appConfig = await getAppConfigFromRegistryAddresses({
      addresses,
      chainId: cloudChainId,
      publicClient,
    });

    writeAppConfigToFile({
      filename: `./src/generated/${cloudChainId}.appconfig.ts`,
      appConfig,
      appConfigName: "cloudChainAppConfig",
    });
  });
