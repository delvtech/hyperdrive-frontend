import { LocalAddressesJson } from "src/addresses/LocalAddressesJson";
import { getMockHyperdrive } from "src/appconfig/hyperdrives/getMockHyperdrive";
import { AppConfig } from "src/appconfig/types";
import { yieldSourceProtocols } from "src/appconfig/yieldSources/yieldSourceProtocols";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { PublicClient } from "viem";

/**
 * Retrieves the application config, including hyperdrives and yield sources,
 * from the given addresses.
 */
export async function getAppConfigFromLocalAddresses(
  chainId: number,
  addresses: LocalAddressesJson,
  publicClient: PublicClient,
): Promise<AppConfig> {
  const config: AppConfig = {
    chainId,
    hyperdrives: [
      await getMockHyperdrive(addresses.erc4626Hyperdrive, publicClient),
    ],
    yieldSources,
    yieldSourceProtocols,
  };

  return config;
}
