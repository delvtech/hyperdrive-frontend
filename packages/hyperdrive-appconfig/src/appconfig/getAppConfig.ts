import { ReadHyperdrive, ReadRegistry } from "@delvtech/hyperdrive-viem";
import uniqBy from "lodash.uniqby";
import { AppConfig } from "src/appconfig/AppConfig";
import { chains } from "src/chains/chains";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getCustomHyperdrive } from "src/hyperdrives/custom/getCustomHyperdrive";
import { getMorphoHyperdrive } from "src/hyperdrives/morpho/getMorphoHyperdrive";
import { getStethHyperdrive } from "src/hyperdrives/steth/getStethHyperdrive";
import { protocols } from "src/protocols";
import { TokenConfig } from "src/tokens/getTokenConfig";
import {
  DAI_ICON_URL,
  EETH_ICON_URL,
  ETH_ICON_URL,
  EZETH_ICON_URL,
  RETH_ICON_URL,
  SDAI_ICON_URL,
  USDC_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import { yieldSources } from "src/yieldSources";
import { Address, PublicClient } from "viem";

type HyperdriveConfigResolver = (
  hyperdrive: ReadHyperdrive,
  publicClient: PublicClient,
) => Promise<{
  hyperdriveConfig: HyperdriveConfig;
  sharesTokenConfig?: TokenConfig;
  baseTokenConfig?: TokenConfig;
}>;

const hyperdriveKindResolvers: Record<
  string /* kind */,
  HyperdriveConfigResolver
> = {
  EETHHyperdrive: async (hyperdrive) =>
    getCustomHyperdrive({
      hyperdrive,
      yieldSource: "eEth",
      baseTokenIconUrl: ETH_ICON_URL,
      sharesTokenIconUrl: EETH_ICON_URL,
      sharesTokenTags: ["liquidStakingToken"],
      tokenPlaces: 4,
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawalOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
    }),
  EzETHHyperdrive: async (hyperdrive: ReadHyperdrive) =>
    getCustomHyperdrive({
      hyperdrive,
      yieldSource: "ezEth",
      depositOptions: {
        isBaseTokenDepositEnabled: false,
        isShareTokenDepositsEnabled: true,
      },
      withdrawalOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      baseTokenIconUrl: ETH_ICON_URL,
      sharesTokenIconUrl: EZETH_ICON_URL,
      sharesTokenTags: ["liquidStakingToken"],
      tokenPlaces: 4,
    }),

  RETHHyperdrive: async (hyperdrive) =>
    getCustomHyperdrive({
      hyperdrive,
      yieldSource: "reth",
      depositOptions: {
        isBaseTokenDepositEnabled: false,
        isShareTokenDepositsEnabled: true,
      },
      withdrawalOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      baseTokenIconUrl: ETH_ICON_URL,
      sharesTokenIconUrl: RETH_ICON_URL,
      sharesTokenTags: ["liquidStakingToken"],
      tokenPlaces: 4,
    }),

  StETHHyperdrive: (hyperdrive) => getStethHyperdrive({ hyperdrive }),

  ERC4626Hyperdrive: async (hyperdrive) => {
    const readSharesToken = await hyperdrive.getSharesToken();
    const sharesTokenSymbol = await readSharesToken.getSymbol();

    if (sharesTokenSymbol.toUpperCase() === "SDAI") {
      return getCustomHyperdrive({
        hyperdrive,
        yieldSource: "makerDsr",
        depositOptions: {
          isBaseTokenDepositEnabled: true,
          isShareTokenDepositsEnabled: true,
        },
        withdrawalOptions: {
          isBaseTokenWithdrawalEnabled: true,
          isShareTokenWithdrawalEnabled: true,
        },
        baseTokenIconUrl: DAI_ICON_URL,
        baseTokenTags: ["stablecoin"],
        sharesTokenIconUrl: SDAI_ICON_URL,
        tokenPlaces: 2,
      });
    }
    throw new Error(
      `Unknown ERC4626Hyperdrive, sharesTokenSymbol: ${sharesTokenSymbol}, hyperdrive address: ${hyperdrive.address}.`,
    );
  },

  MorphoBlueHyperdrive: async (hyperdrive, publicClient) => {
    // There are several MorphoBlue hyperdrives, each with different yield sources.
    // Once we’ve identified it as a MorphoBlueHyperdrive, we can use the name to
    // determine the exact type of hyperdrive.
    // TODO: Replace this direct call to the publicClient with a call to
    // the sdk's hyperdrive.getName() once overloaded methods are
    // supported (currently only supports the 1155 interface, ie:
    // `name(tokenId)`).
    const hyperdriveName = await publicClient.readContract({
      address: hyperdrive.address,
      abi: hyperdrive.contract.abi,
      functionName: "name",
    });

    if (
      hyperdriveName.includes("MORPHO_BLUE_DAI") || // sepolia
      hyperdriveName.includes("Morpho Blue sUSDe/DAI Hyperdrive") // mainnet
    ) {
      return getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: DAI_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoSusdeDai",
      });
    }

    if (hyperdriveName.includes("Morpho Blue USDe/DAI Hyperdrive")) {
      return getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: DAI_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoUsdeDai",
      });
    }

    if (hyperdriveName.includes("Morpho Blue wstETH/USDC Hyperdrive")) {
      return getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: USDC_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoWstethUsdc",
      });
    }

    throw new Error(
      `Unknown MorphoBlueHyperdrive, name: ${hyperdriveName}, hyperdrive address: ${hyperdrive.address}.`,
    );
  },
};

export async function getAppConfig({
  registryAddress,
  publicClient,
}: {
  registryAddress: Address;
  publicClient: PublicClient;
}): Promise<AppConfig> {
  const tokens: TokenConfig[] = [];
  const chainId = publicClient.chain?.id as number;

  // Get ReadHyperdrive instances from the registry to ensure
  // that only registered pools are delivered to the frontend
  const registry = new ReadRegistry({
    address: registryAddress,
    publicClient,
  });
  const hyperdrives = await registry.getInstances();

  const configs: HyperdriveConfig[] = await Promise.all(
    hyperdrives.map(async (hyperdrive) => {
      const kind = await hyperdrive.getKind();
      const hyperdriveResolver = hyperdriveKindResolvers[kind];
      if (!hyperdriveResolver) {
        throw new Error(`Missing resolver for hyperdrive kind: ${kind}.`);
      }

      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await hyperdriveResolver(hyperdrive, publicClient);

      console.table({
        chainId: publicClient.chain?.id,
        kind: kind,
        name: hyperdriveConfig.name,
      });

      // Not all hyperdrives have a base or shares token, so only add them if
      // they exist. (Note: `tokens` is deduped at the end)
      if (baseTokenConfig) {
        tokens.push(baseTokenConfig);
      }
      if (sharesTokenConfig) {
        tokens.push(sharesTokenConfig);
      }

      return hyperdriveConfig;
    }),
  );

  const config: AppConfig = {
    tokens: uniqBy(tokens, "address"),
    registries: {
      [chainId]: registryAddress,
    },
    hyperdrives: configs,
    protocols,
    yieldSources,
    chains,
  };

  console.log(
    `App config generated successfully with ${configs.length} hyperdrives`,
  );

  return config;
}
