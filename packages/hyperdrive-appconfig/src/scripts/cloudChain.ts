import "dotenv/config";

import { RegistryAddresses } from "src/addresses/RegistryAddresses";
import { getAppConfigFromRegistryAddresses } from "src/appconfig/getAppConfigFromAddressesJson";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchJson } from "src/base/fetchJson";
import { cloudChain } from "src/chains/cloudChain";
import { createPublicClient, http } from "viem";

const cloudChainId = +(process.env.CLOUDCHAIN_CHAIN_ID as string);
const cloudChainAddressesUrl = process.env.CLOUDCHAIN_ADDRESSES_URL as string;
const cloudChainNodeRpcUrl = process.env.CLOUDCHAIN_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: cloudChain,
  transport: http(cloudChainNodeRpcUrl),
});

fetchJson<RegistryAddresses>(cloudChainAddressesUrl).then(async (addresses) => {
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
