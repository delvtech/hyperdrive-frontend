import { ReadHyperdrive, ReadRegistry } from "@delvtech/hyperdrive-viem";
import chalk from "chalk";
import uniqBy from "lodash.uniqby";
import { AppConfig } from "src/appconfig/AppConfig";
import { chains } from "src/chains/chains";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getCbethHyperdrive } from "src/hyperdrives/cbeth/getCbethHyperdrive";
import { getCustomHyperdrive } from "src/hyperdrives/custom/getCustomHyperdrive";
import { getGnosisWstethHyperdrive } from "src/hyperdrives/gnosisWsteth/getGnosisWstethHyperdrive";
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
  RSETH_ICON_URL,
  SDAI_ICON_URL,
  STUSD_ICON_URL,
  SUSDS_ICON_URL,
  SXDAI_ICON_URL,
  USDA_ICON_URL,
  USDC_ICON_URL,
  USDS_ICON_URL,
  WELL_ICON_URL,
  WETH_ICON_URL,
  WXDAI_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import { yieldSources } from "src/yieldSources";
import { Address, PublicClient } from "viem";

type HyperdriveConfigResolver = (
  hyperdrive: ReadHyperdrive,
  publicClient: PublicClient,
  /**
   * Block number to clamp the beginning of event requests to. This is useful
   * for L2s that have too many blocks where the default "earliest" blockTag
   * would timeout.
   */
  earliestBlock?: bigint,
) => Promise<{
  hyperdriveConfig: HyperdriveConfig;
  sharesTokenConfig?: TokenConfig;
  baseTokenConfig?: TokenConfig;
}>;

const hyperdriveKindResolvers: Record<
  string /* kind */,
  HyperdriveConfigResolver
> = {
  RsETHLineaHyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    return getCustomHyperdrive({
      hyperdrive,
      yieldSource: "rseth",
      baseTokenIconUrl: ETH_ICON_URL,
      sharesTokenIconUrl: RSETH_ICON_URL,
      tokenPlaces: 4,
      sharesTokenTags: ["liquidStakingToken"],
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawalOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      earliestBlock,
    });
  },

  EzETHLineaHyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    return getCustomHyperdrive({
      hyperdrive,
      yieldSource: "lineaEzeth",
      baseTokenIconUrl: ETH_ICON_URL,
      sharesTokenIconUrl: EZETH_ICON_URL,
      tokenPlaces: 4,
      sharesTokenTags: ["liquidStakingToken"],
      depositOptions: {
        isBaseTokenDepositEnabled: false,
        isShareTokenDepositsEnabled: true,
      },
      withdrawalOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      earliestBlock,
    });
  },
  ChainlinkHyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    const hyperdriveName = await publicClient.readContract({
      address: hyperdrive.address,
      abi: hyperdrive.contract.abi,
      functionName: "name",
    });

    if (hyperdriveName.includes("wstETH Hyperdrive")) {
      return getGnosisWstethHyperdrive({
        hyperdrive,
        earliestBlock,
      });
    }

    if (hyperdriveName.includes("cbETH Hyperdrive")) {
      return getCbethHyperdrive({
        hyperdrive,
        earliestBlock,
      });
    }

    const readSharesToken = await hyperdrive.getSharesToken();
    const sharesTokenSymbol = await readSharesToken.getSymbol();
    throw new Error(
      `Unknown ChainklinkHyperdrive, name: ${hyperdriveName}, sharesTokenSymbol: ${sharesTokenSymbol}, hyperdrive address: ${hyperdrive.address}.`,
    );
  },
  EETHHyperdrive: async (hyperdrive) =>
    getCustomHyperdrive({
      hyperdrive,
      yieldSource: "eeth",
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
      yieldSource: "ezeth",
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

  ERC4626Hyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    const hyperdriveName = await publicClient.readContract({
      address: hyperdrive.address,
      abi: hyperdrive.contract.abi,
      functionName: "name",
    });

    // Sky sUSDS
    if (hyperdriveName.includes("sUSDS Hyperdrive")) {
      return getCustomHyperdrive({
        hyperdrive,
        yieldSource: "usds",
        baseTokenIconUrl: USDS_ICON_URL,
        sharesTokenIconUrl: SUSDS_ICON_URL,
        tokenPlaces: 4,
        sharesTokenTags: ["stablecoin"],
        depositOptions: {
          isBaseTokenDepositEnabled: true,
          isShareTokenDepositsEnabled: true,
        },
        withdrawalOptions: {
          isBaseTokenWithdrawalEnabled: true,
          isShareTokenWithdrawalEnabled: true,
        },
      });
    }

    // Note: this launch has been delayed
    // StakingUSDSHyperdrive: async (hyperdrive) => {
    //   return getSusdsHyperdrive({
    //     hyperdrive,
    //     yieldSourceId: "susds",
    //     baseTokenIconUrl: USDS_ICON_URL,
    //     baseTokenPlaces: 4,
    //     baseTokenTags: ["stablecoin"],
    //   });
    // },

    // Maker DSR
    if (
      [
        "0x4441495f33305f44415900000000000000000000000000000000000000000000",
        "0x4441495f31345f44415900000000000000000000000000000000000000000000",
      ].includes(hyperdriveName) || // sepolia
      hyperdriveName.includes("sDAI Hyperdrive") // mainnet
    ) {
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
    // Gnosis sxDAI
    if (hyperdriveName.includes("sxDAI Hyperdrive")) {
      return getCustomHyperdrive({
        hyperdrive,
        earliestBlock,
        yieldSource: "sxdai",
        depositOptions: {
          isBaseTokenDepositEnabled: true,
          isShareTokenDepositsEnabled: true,
        },
        withdrawalOptions: {
          isBaseTokenWithdrawalEnabled: true,
          isShareTokenWithdrawalEnabled: true,
        },
        baseTokenIconUrl: WXDAI_ICON_URL,
        baseTokenTags: ["stablecoin"],
        sharesTokenIconUrl: SXDAI_ICON_URL,
        tokenPlaces: 2,
      });
    }

    if (hyperdriveName.includes("stUSD Hyperdrive")) {
      return getCustomHyperdrive({
        hyperdrive,
        yieldSource: "stusd",
        depositOptions: {
          isBaseTokenDepositEnabled: true,
          isShareTokenDepositsEnabled: true,
        },
        withdrawalOptions: {
          isBaseTokenWithdrawalEnabled: true,
          isShareTokenWithdrawalEnabled: true,
        },
        baseTokenIconUrl: USDA_ICON_URL,
        baseTokenTags: ["stablecoin"],
        sharesTokenIconUrl: STUSD_ICON_URL,
        tokenPlaces: 2,
      });
    }

    // Moonwell ETH
    if (hyperdriveName.includes("Moonwell ETH Hyperdrive")) {
      return getCustomHyperdrive({
        hyperdrive,
        yieldSource: "mwEth",
        baseTokenIconUrl: WETH_ICON_URL,
        sharesTokenIconUrl: WELL_ICON_URL,
        depositOptions: {
          isBaseTokenDepositEnabled: true,
          isShareTokenDepositsEnabled: true,
        },
        withdrawalOptions: {
          isBaseTokenWithdrawalEnabled: true,
          isShareTokenWithdrawalEnabled: true,
        },
        tokenPlaces: 4,
      });
    }

    const readSharesToken = await hyperdrive.getSharesToken();
    const sharesTokenSymbol = await readSharesToken.getSymbol();
    throw new Error(
      `Unknown ERC4626Hyperdrive, name: ${hyperdriveName}, sharesTokenSymbol: ${sharesTokenSymbol}, hyperdrive address: ${hyperdrive.address}.`,
    );
  },

  StkWellHyperdrive: async (hyperdrive, publicClient) => {
    const hyperdriveName = await publicClient.readContract({
      address: hyperdrive.address,
      abi: hyperdrive.contract.abi,
      functionName: "name",
    });
    // Moonwell Staked WELL
    if (hyperdriveName.includes("Moonwell StkWell")) {
      return getCustomHyperdrive({
        hyperdrive,
        yieldSource: "stkWell",
        baseTokenIconUrl: WELL_ICON_URL,
        sharesTokenIconUrl: WELL_ICON_URL,
        depositOptions: {
          isBaseTokenDepositEnabled: true,
          isShareTokenDepositsEnabled: true,
        },
        withdrawalOptions: {
          isBaseTokenWithdrawalEnabled: false,
          isShareTokenWithdrawalEnabled: true,
        },
        tokenPlaces: 4,
      });
    }

    throw new Error(
      `Unknown MoonwellHyperdrive, name: ${hyperdriveName}, hyperdrive address: ${hyperdrive.address}.`,
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

    if (hyperdriveName.includes("Morpho Blue wstETH/USDA Hyperdrive")) {
      return getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: USDA_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoWstethUsda",
      });
    }

    if (hyperdriveName.includes("Morpho Blue cbETH/USDC Hyperdrive")) {
      return getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: USDC_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoCbethUsdc",
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
  earliestBlock,
}: {
  registryAddress: Address;
  publicClient: PublicClient;
  earliestBlock?: bigint;
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
      console.log(chalk.blue(kind), chalk.yellow(chainId), hyperdrive.address);
      const hyperdriveResolver = hyperdriveKindResolvers[kind];
      if (!hyperdriveResolver) {
        throw new Error(`Missing resolver for hyperdrive kind: ${kind}.`);
      }

      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await hyperdriveResolver(hyperdrive, publicClient, earliestBlock);

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

  return config;
}
