import { LocalAddressesJson } from "src/addresses/LocalAddressesJson";
import { getMockHyperdrive } from "src/appconfig/hyperdrives/getMockHyperdrive";
import { AppConfig } from "src/appconfig/types";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { PublicClient } from "viem";

/**
 * Retrieves the application config, including hyperdrives and yield sources,
 * from the given addresses.
 */
export async function getAppConfigFromLocalAddresses(
  addresses: LocalAddressesJson,
  publicClient: PublicClient,
): Promise<AppConfig> {
  const config: AppConfig = {
    chainId: await publicClient.getChainId(),
    hyperdriveMath: addresses.mockHyperdriveMath,
    hyperdrives: [
      await getMockHyperdrive(addresses.mockHyperdrive, publicClient),
    ],
    yieldSources,
  };

  return config;
}
