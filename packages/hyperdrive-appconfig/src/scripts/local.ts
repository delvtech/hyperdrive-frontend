import "dotenv/config";

import { AddressesJson } from "src/addresses/AddressesJson";
import { getAppConfigFromAddressesJson } from "src/appconfig/getAppConfigFromAddressesJson";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchJson } from "src/base/fetchJson";
import { cloudChain } from "src/chains/cloudChain";
import { createPublicClient, http } from "viem";

const localChainId = +(process.env.LOCAL_CHAIN_ID as string);
const localAddressesUrl = process.env.LOCAL_ADDRESSES_URL as string;
const localNodeRpcUrl = process.env.LOCAL_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: cloudChain,
  transport: http(localNodeRpcUrl),
});

fetchJson<AddressesJson>(localAddressesUrl).then(async (addresses) => {
  const appConfig = await getAppConfigFromAddressesJson({
    addresses,
    chainId: localChainId,
    publicClient,
  });

  writeAppConfigToFile({
    filename: `./src/generated/${localChainId}.appconfig.ts`,
    appConfig,
    appConfigName: "localChainAppConfig",
  });
});
