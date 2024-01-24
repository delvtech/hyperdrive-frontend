import { LocalAddressesJson } from "src/addresses/LocalAddressesJson";
import { AppConfig } from "src/appconfig/AppConfig";
import { getErc4626HyperdriveConfig } from "src/appconfig/hyperdrives/getErc4626HyperdriveConfig";
import { getStethHyperdriveConfig } from "src/appconfig/hyperdrives/getStethHyperdriveConfig";
import { yieldSourceProtocols } from "src/appconfig/yieldSources/yieldSourceProtocols";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { PublicClient } from "viem";
import { HyperdriveConfig } from "./HyperdriveConfig";

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
      await getErc4626HyperdriveConfig({
        hyperdriveAddress: addresses.erc4626Hyperdrive,
        publicClient,
        yieldSource: "makerDsr",
      }),
    );
  }
  if (addresses.stethHyperdrive) {
    hyperdrives.push(
      await getStethHyperdriveConfig({
        hyperdriveAddress: addresses.stethHyperdrive,
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
