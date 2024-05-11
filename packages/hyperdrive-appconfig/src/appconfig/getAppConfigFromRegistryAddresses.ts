import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import uniqBy from "lodash.uniqby";
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
  EZETH_ICON_URL,
  MORPHO_ICON_URL,
  RETH_ICON_URL,
  SDAI_ICON_URL,
  STETH_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import {
  ezethExtensions,
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

type KnownHyperdriveMetadata = {
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
  sharesTokenExtensions: YieldSourceExtensions;
  tags?: string[];
  tokenPlaces: number;
};

const knownHyperdriveMetadata: Record<
  Uppercase<string>,
  KnownHyperdriveMetadata
> = {
  DELV: {
    sharesTokenExtensions: sdaiExtensions,
    baseTokenIconUrl: DAI_ICON_URL,
    sharesTokenIconUrl: SDAI_ICON_URL,
    tokenPlaces: 4,
  },
  SDAI: {
    sharesTokenExtensions: sdaiExtensions,
    baseTokenIconUrl: DAI_ICON_URL,
    sharesTokenIconUrl: SDAI_ICON_URL,
    tags: ERC4626_SHARE_TOKEN_TAGS,
    tokenPlaces: 2,
  },
  MMHYDAI: {
    sharesTokenExtensions: metaMorphoExtensions,
    baseTokenIconUrl: DAI_ICON_URL,
    sharesTokenIconUrl: MORPHO_ICON_URL,
    tags: ERC4626_SHARE_TOKEN_TAGS,
    tokenPlaces: 2,
  },
  STETH: {
    sharesTokenExtensions: stethExtensions,
    baseTokenIconUrl: ETH_ICON_URL,
    sharesTokenIconUrl: STETH_ICON_URL,
    tokenPlaces: 4,
  },
  RETH: {
    sharesTokenExtensions: rethExtensions,
    baseTokenIconUrl: ETH_ICON_URL,
    sharesTokenIconUrl: RETH_ICON_URL,
    tags: ["reth"],
    tokenPlaces: 4,
  },
  EZETH: {
    sharesTokenExtensions: ezethExtensions,
    baseTokenIconUrl: ETH_ICON_URL,
    sharesTokenIconUrl: EZETH_ICON_URL,
    tags: ["ezeth"],
    tokenPlaces: 4,
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
  const tags: Tag[] = [yieldSourceTag];
  const tokens: TokenConfig<KnownTokenExtensions>[] = [];

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

      const hyperdriveMetadata = knownHyperdriveMetadata[tokenSymbol];
      if (!hyperdriveMetadata) {
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
            ...hyperdriveMetadata,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      // Lido stETH
      if (tokenSymbol === "STETH") {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getStethHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            chainId,
            ...hyperdriveMetadata,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      // Rocket Pool
      if (tokenSymbol === "RETH") {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            depositOptions: {
              // don't let users deposit sepolia eth into the testnet
              isBaseTokenDepositEnabled: false,
              isShareTokenDepositsEnabled: true,
            },
            withdrawalOptions: {
              // you can't withdraw eth from staking protocols
              isBaseTokenWithdrawalEnabled: false,
              isShareTokenWithdrawalEnabled: true,
            },
            ...hyperdriveMetadata,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      // Renzo ezETH
      if (tokenSymbol === "EZETH") {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            publicClient,
            hyperdriveAddress: address,
            depositOptions: {
              // don't let users deposit sepolia eth into the testnet
              isBaseTokenDepositEnabled: false,
              isShareTokenDepositsEnabled: true,
            },
            withdrawalOptions: {
              // you can't withdraw eth from staking protocols
              isBaseTokenWithdrawalEnabled: false,
              isShareTokenWithdrawalEnabled: true,
            },
            ...hyperdriveMetadata,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

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
            ...hyperdriveMetadata,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      throw new Error(
        `Missing Hyperdrive config implementation for address: ${address}`,
      );
    }),
  );

  const config: AppConfig = {
    chainId,
    tags: uniqBy(tags, "id"),
    tokens: uniqBy(tokens, "address"),
    hyperdrives,
    protocols,
  };

  return config;
}
