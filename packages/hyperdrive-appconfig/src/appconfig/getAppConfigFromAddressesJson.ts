import { AddressesJson } from "src/addresses/AddressesJson";
import { AppConfig, KnownTokenExtensions } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getErc4626Hyperdrive } from "src/hyperdrives/erc4626/getErc4626Hyperdrive";
import { protocols } from "src/protocols/protocols";
import { Tag } from "src/tags";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { erc4626Tag, yieldSourceTag } from "src/yieldSources/tags";
import { PublicClient } from "viem";

export async function getAppConfigFromAddressesJson({
  chainId,
  addresses,
  publicClient,
}: {
  chainId: number;
  addresses: AddressesJson;
  publicClient: PublicClient;
}): Promise<AppConfig> {
  const hyperdrives: HyperdriveConfig[] = [];
  const tags: Set<Tag> = new Set([yieldSourceTag]);
  const tokens: Set<TokenConfig<KnownTokenExtensions>> = new Set();

  if (addresses.erc4626Hyperdrive) {
    tags.add(erc4626Tag);

    const { sharesToken, baseToken, hyperdriveConfig } =
      await getErc4626Hyperdrive({
        publicClient,
        hyperdriveAddress: addresses.erc4626Hyperdrive,
        sharesTokenExtensions: {
          shortName: "Maker DSR",
          protocol: "maker",
        },
      });

    tokens.add(sharesToken);
    tokens.add(baseToken);
    hyperdrives.push(hyperdriveConfig);
  }

  // TODO: Uncomment this once stethHyperdrive is properly deployed again on devnet
  // if (addresses.stethHyperdrive) {
  // }

  const config: AppConfig = {
    chainId,
    tags: [...tags],
    tokens: [...tokens],
    hyperdrives,
    protocols,
  };

  return config;
}
