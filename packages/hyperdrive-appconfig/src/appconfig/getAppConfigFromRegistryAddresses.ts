import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { AppConfig, KnownTokenExtensions } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getCustomHyperdrive } from "src/hyperdrives/custom/getCustomHyperdrive";
import { getStethHyperdrive } from "src/hyperdrives/steth/getStethHyperdrive";
import { protocols } from "src/protocols/protocols";
import { Tag } from "src/tags";
import { TokenConfig } from "src/tokens/getTokenConfig";
import {
  DAI_ICON_URL,
  ETH_ICON_URL,
  MORPHO_ICON_URL,
  RETH_ICON_URL,
  SDAI_ICON_URL,
  STETH_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import {
  metaMorphoExtensions,
  rethExtensions,
  sdaiExtensions,
  stethExtensions,
} from "src/yieldSources/extensions";
import { yieldSourceTag } from "src/yieldSources/tags";
import { Address, PublicClient, erc20Abi } from "viem";
import { YieldSourceExtensions } from "..";

// Token Symbols
const erc4626HyperdriveSharesTokenSymbols: Uppercase<string>[] = [
  "DELV",
  "SDAI",
];
const metaMorphoSharesTokenSymbols: Uppercase<string>[] = ["MMHYDAI"];

// Tags
const ERC4626_SHARE_TOKEN_TAGS = ["erc4626"];

type KnownYieldSourceMetadata = {
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
  sharesTokenExtensions: YieldSourceExtensions;
  tags?: string[];
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
    tags: ERC4626_SHARE_TOKEN_TAGS,
  },
  MMHYDAI: {
    sharesTokenExtensions: metaMorphoExtensions,
    baseTokenIconUrl: DAI_ICON_URL,
    sharesTokenIconUrl: MORPHO_ICON_URL,
    tags: ERC4626_SHARE_TOKEN_TAGS,
  },
  STETH: {
    sharesTokenExtensions: stethExtensions,
    baseTokenIconUrl: ETH_ICON_URL,
    sharesTokenIconUrl: STETH_ICON_URL,
  },
  RETH: {
    sharesTokenExtensions: rethExtensions,
    baseTokenIconUrl: ETH_ICON_URL,
    sharesTokenIconUrl: RETH_ICON_URL,
    tags: ["reth"],
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

      // Generic ERC-4626
      if (erc4626HyperdriveSharesTokenSymbols.includes(tokenSymbol)) {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            depositOptions: {
              isBaseTokenDepositEnabled: true,
              isShareTokenDepositsEnabled: true,
            },
            withdrawalOptions: {
              isBaseTokenWithdrawalEnabled: true,
              isShareTokenWithdrawalEnabled: true,
            },
            ...yieldSourceMetadata,
          });

        tokens.add(sharesToken);
        tokens.add(baseToken);

        return hyperdriveConfig;
      }

      // Lido stETH
      if (tokenSymbol === "STETH") {
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
      }

      // Rocket Pool
      if (tokenSymbol === "RETH") {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            depositOptions: {
              isBaseTokenDepositEnabled: false,
              isShareTokenDepositsEnabled: true,
            },
            withdrawalOptions: {
              isBaseTokenWithdrawalEnabled: false,
              isShareTokenWithdrawalEnabled: true,
            },
            ...yieldSourceMetadata,
          });

        tokens.add(sharesToken);
        tokens.add(baseToken);

        return hyperdriveConfig;
      }

      // MetaMorpho
      if (metaMorphoSharesTokenSymbols.includes(tokenSymbol)) {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            depositOptions: {
              isBaseTokenDepositEnabled: true,
              isShareTokenDepositsEnabled: false,
            },
            withdrawalOptions: {
              isBaseTokenWithdrawalEnabled: true,
              isShareTokenWithdrawalEnabled: false,
            },
            ...yieldSourceMetadata,
          });

        tokens.add(sharesToken);
        tokens.add(baseToken);

        return hyperdriveConfig;
      }

      throw new Error(
        `Missing Hyperdrive config implementation for address: ${address}`,
      );
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
