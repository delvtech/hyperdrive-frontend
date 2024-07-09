import "dotenv/config";
import { AddressesJson } from "src/addresses/AddressesJson";
import { getAppConfig } from "src/appconfig/getAppConfig";
import { writeAppConfigToFile } from "src/appconfig/writeAppConfigToFile";
import { fetchJson } from "src/base/fetchJson";
import { localChain } from "src/chains/local";
import { createPublicClient, http } from "viem";

const localChainId = +(process.env.LOCAL_CHAIN_ID as string);
const localAddressesUrl = process.env.LOCAL_ADDRESSES_URL as string;
const localNodeRpcUrl = process.env.LOCAL_NODE_RPC_URL as string;

const publicClient = createPublicClient({
  chain: localChain,
  transport: http(localNodeRpcUrl),
});
const addresses = await fetchJson<AddressesJson>(localAddressesUrl);
const appConfig = await getAppConfig({
  registryAddress: addresses.hyperdriveRegistry,
  chainId: localChainId,
  publicClient,
});

writeAppConfigToFile({
  filename: `./src/generated/${localChainId}.appconfig.ts`,
  appConfig,
  appConfigName: "localChainAppConfig",
});
