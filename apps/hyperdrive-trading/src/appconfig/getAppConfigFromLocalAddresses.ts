import { LocalAddressesJson } from "src/addresses/LocalAddressesJson";
import { getHyperdriveConfig } from "src/appconfig/hyperdrives/getHyperdriveConfig";
import { AppConfig, HyperdriveConfig } from "src/appconfig/types";
import { yieldSourceProtocols } from "src/appconfig/yieldSources/yieldSourceProtocols";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { PublicClient } from "viem";

/**
 * Retrieves the application config, including hyperdrives and yield sources,
 * from the given addresses.
 */
export async function getAppConfigFromLocalAddresses({
  chainId,
  addresses,
  publicClient,
}: {
  chainId: number;
  addresses: LocalAddressesJson;
  publicClient: PublicClient;
}): Promise<AppConfig> {
  const hyperdrives: HyperdriveConfig[] = [];
  if (addresses.erc4626Hyperdrive) {
    hyperdrives.push(
      await getHyperdriveConfig({
        hyperdriveAddress: addresses.erc4626Hyperdrive,
        publicClient,
        yieldSource: "makerDsr",
      }),
    );
  }
  if (addresses.stethHyperdrive) {
    hyperdrives.push(
      await getHyperdriveConfig({
        hyperdriveAddress: addresses.erc4626Hyperdrive,
        publicClient,
        yieldSource: "lidoSteth",
      }),
    );
  }
  const config: AppConfig = {
    chainId,
    hyperdrives,
    yieldSources,
    yieldSourceProtocols,
  };

  return config;
}
