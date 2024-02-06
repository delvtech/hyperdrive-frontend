import { LocalAddressesJson } from "src/addresses/LocalAddressesJson";
import { AppConfigOld } from "src/appconfig/AppConfigOld";
import { getErc4626HyperdriveConfig } from "src/hyperdrive/getErc4626HyperdriveConfig";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { yieldSourceProtocolsOld } from "src/yieldSources/yieldSourceProtocolsOld";
import { yieldSourcesOld } from "src/yieldSources/yieldSources";
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
}): Promise<AppConfigOld> {
  const hyperdrives: HyperdriveConfigOld[] = [];
  if (addresses.erc4626Hyperdrive) {
    hyperdrives.push(
      await getErc4626HyperdriveConfig({
        hyperdriveAddress: addresses.erc4626Hyperdrive,
        publicClient,
        yieldSource: "makerDsr",
      }),
    );
  }
  // TODO: Uncomment this once stethHyperdrive is properly deployed again on devnet
  // if (addresses.stethHyperdrive) {
  //   hyperdrives.push(
  //     await getStethHyperdriveConfig({
  //       hyperdriveAddress: addresses.stethHyperdrive,
  //       publicClient,
  //       yieldSource: "lidoSteth",
  //     }),
  //   );
  // }
  const config: AppConfigOld = {
    chainId,
    hyperdrives,
    yieldSources: yieldSourcesOld,
    yieldSourceProtocols: yieldSourceProtocolsOld,
  };

  return config;
}
