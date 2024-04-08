import { AppConfig, KnownTokenExtensions } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getErc4626Hyperdrive } from "src/hyperdrives/erc4626/getErc4626Hyperdrive";
import { getStethHyperdrive } from "src/hyperdrives/steth/getStethHyperdrive";
import { protocols } from "src/protocols/protocols";
import { RegistryAddresses } from "src/registry/RegistryAddresses";
import { Tag } from "src/tags";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { DAI_ICON_URL, SDAI_ICON_URL } from "src/tokens/tokenIconsUrls";
import { sdaiExtensions, stethExtensions } from "src/yieldSources/extensions";
import { erc4626Tag, stethTag, yieldSourceTag } from "src/yieldSources/tags";
import { PublicClient } from "viem";

export async function getAppConfigFromRegistryAddresses({
  chainId,
  addresses,
  publicClient,
}: {
  chainId: number;
  addresses: RegistryAddresses;
  publicClient: PublicClient;
}): Promise<AppConfig> {
  const hyperdrives: HyperdriveConfig[] = [];
  const tags: Set<Tag> = new Set([yieldSourceTag]);
  const tokens: Set<TokenConfig<KnownTokenExtensions>> = new Set();

  // Add sDAI if present in addresses
  if (addresses.erc4626Hyperdrive) {
    tags.add(erc4626Tag);

    await Promise.all(
      addresses.erc4626Hyperdrive.map(async (address) => {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getErc4626Hyperdrive({
            publicClient,
            hyperdriveAddress: address,
            sharesTokenExtensions: sdaiExtensions,
            baseTokenIconUrl: DAI_ICON_URL,
            sharesTokenIconUrl: SDAI_ICON_URL,
          });
        tokens.add(sharesToken);
        tokens.add(baseToken);
        hyperdrives.push(hyperdriveConfig);
      }),
    );
  }

  // Add stETH if present in addresses
  if (addresses.stethHyperdrive) {
    tags.add(stethTag);

    await Promise.all(
      addresses.stethHyperdrive.map(async (address) => {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getStethHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            sharesTokenExtensions: stethExtensions,
          });

        tokens.add(sharesToken);
        tokens.add(baseToken);
        hyperdrives.push(hyperdriveConfig);
      }),
    );
  }

  const config: AppConfig = {
    chainId,
    tags: [...tags],
    tokens: [...tokens],
    hyperdrives,
    protocols,
  };

  return config;
}
