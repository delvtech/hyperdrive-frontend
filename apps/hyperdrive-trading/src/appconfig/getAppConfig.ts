import { AddressesJson } from "@hyperdrive/core";
import { getDSRHyperdrive } from "src/appconfig/hyperdrives/dsrHyperdrive";
import { AppConfig, Hyperdrive } from "src/appconfig/types";
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
  const hyperdrives: Hyperdrive[] = [];

  if (addresses.dsrHyperdrive) {
    const dsrHyperdrive = await getDSRHyperdrive(
      addresses.dsrHyperdrive,
      publicClient as any,
    );
    hyperdrives.push(dsrHyperdrive);
  }

  return {
    chainId: await publicClient.getChainId(),
    hyperdrives,
    yieldSources,
  };
}
