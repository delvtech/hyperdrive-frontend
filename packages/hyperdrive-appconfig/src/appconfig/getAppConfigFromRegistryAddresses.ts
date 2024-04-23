import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { AppConfig, KnownTokenExtensions } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getErc4626Hyperdrive } from "src/hyperdrives/erc4626/getErc4626Hyperdrive";
import { getStethHyperdrive } from "src/hyperdrives/steth/getStethHyperdrive";
import { protocols } from "src/protocols/protocols";
import { Tag } from "src/tags";
import { TokenConfig } from "src/tokens/getTokenConfig";
import {
  DAI_ICON_URL,
  ETH_ICON_URL,
  SDAI_ICON_URL,
  STETH_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import {
  metaMorphoExtensions,
  sdaiExtensions,
  stethExtensions,
} from "src/yieldSources/extensions";
import { yieldSourceTag } from "src/yieldSources/tags";
import { Address, PublicClient, erc20Abi } from "viem";
import { YieldSourceExtensions } from "..";

// Summary
// Move bucketing logic to this function
// Create known tokens mapping for share and base token metadatas
// Throw if cannot find mapping

// These hardcoded lists of shares token symbols help us to identify what kind
// of hyperdrive a pool is, eg: steth, sDai, etc.
const stethHyperdriveSharesTokenSymbols: Uppercase<string>[] = ["STETH"];
const erc4626HyperdriveSharesTokenSymbols: Uppercase<string>[] = [
  "DELV",
  "SDAI",
  "MMHYDAI",
];

type KnownYieldSourceMetadata = {
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
  sharesTokenExtensions: YieldSourceExtensions;
};

const knownYieldSourceMetadata: Record<
  Uppercase<string>,
  KnownYieldSourceMetadata
> = {
  DELV: {
    sharesTokenExtensions: sdaiExtensions,
    baseTokenIconUrl: DAI_ICON_URL,
    sharesTokenIconUrl: SDAI_ICON_URL,
  },
  SDAI: {
    sharesTokenExtensions: sdaiExtensions,
    baseTokenIconUrl: DAI_ICON_URL,
    sharesTokenIconUrl: SDAI_ICON_URL,
  },
  MMHYDAI: {
    sharesTokenExtensions: metaMorphoExtensions,
    baseTokenIconUrl: DAI_ICON_URL,
    sharesTokenIconUrl: SDAI_ICON_URL,
  },
  STETH: {
    sharesTokenExtensions: stethExtensions,
    baseTokenIconUrl: ETH_ICON_URL,
    sharesTokenIconUrl: STETH_ICON_URL,
  },
};

export async function getAppConfigFromRegistryAddresses({
  chainId,
  addresses,
  publicClient,
}: {
  chainId: number;
  addresses: Address[];
  publicClient: PublicClient;
}): Promise<AppConfig> {
  const tags: Set<Tag> = new Set([yieldSourceTag]);
  const tokens: Set<TokenConfig<KnownTokenExtensions>> = new Set();

  const hyperdrives: HyperdriveConfig[] = await Promise.all(
    addresses.map(async (address) => {
      const hyperdrive = new ReadHyperdrive({
        address,
        publicClient,
      });
      const { vaultSharesToken } = await hyperdrive.getPoolConfig();

      const tokenSymbol = (
        await publicClient.readContract({
          address: vaultSharesToken,
          abi: erc20Abi,
          functionName: "symbol",
        })
      ).toUpperCase() as Uppercase<string>;

      const yieldSourceMetadata = knownYieldSourceMetadata[tokenSymbol];

      if (!yieldSourceMetadata) {
        throw new Error(
          `Yield source metadata not configured: Missing entry for ${tokenSymbol}`,
        );
      }

      if (erc4626HyperdriveSharesTokenSymbols.includes(tokenSymbol)) {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getErc4626Hyperdrive({
            publicClient,
            hyperdriveAddress: address,
            ...yieldSourceMetadata,
          });

        tokens.add(sharesToken);
        tokens.add(baseToken);

        return hyperdriveConfig;
      } else if (stethHyperdriveSharesTokenSymbols.includes(tokenSymbol)) {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getStethHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            chainId,
            ...yieldSourceMetadata,
          });

        tokens.add(sharesToken);
        tokens.add(baseToken);

        return hyperdriveConfig;
      } else {
        throw new Error("Missing impl");
      }
    }),
  );

  const config: AppConfig = {
    chainId,
    tags: [...tags],
    tokens: [...tokens],
    hyperdrives,
    protocols,
  };

  return config;
}
