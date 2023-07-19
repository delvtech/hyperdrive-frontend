import { AddressesJson } from "@hyperdrive/core";
import { getDSRHyperdrive } from "src/appconfig/hyperdrives/dsrHyperdrive";
import { AppConfig } from "src/appconfig/types";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { PublicClient } from "wagmi";

/**
 * Retrieves the application config, including hyperdrives and yield sources,
 * from the given addresses.
 */
export async function getAppConfig(
  addresses: AddressesJson,
  publicClient: PublicClient,
): Promise<AppConfig> {
  const config: AppConfig = {
    chainId: await publicClient.getChainId(),
    hyperdriveMath: addresses.mockHyperdriveMath,
    hyperdrives: [],
    yieldSources,
  };

  if (addresses.dsrHyperdrive) {
    const dsrHyperdrive = await getDSRHyperdrive(
      addresses.dsrHyperdrive,
      publicClient as PublicClient,
    );
    config.hyperdrives.push(dsrHyperdrive);
  }

  return config;
}
