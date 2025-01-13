import { ReadHyperdrive, ReadRegistry } from "@delvtech/hyperdrive-viem";
import chalk from "chalk";
import uniqBy from "lodash.uniqby";
import { AppConfig } from "src/appconfig/AppConfig";
import { HyperdriveConfigResolver } from "src/appconfig/HyperdriveConfigResolver";
import { chains } from "src/chains/chains";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getAeroLpHyperdrive } from "src/hyperdrives/aero/getAeroHyperdrive";
import { getCbethHyperdrive } from "src/hyperdrives/cbeth/getCbethHyperdrive";
import { getCustomHyperdrive } from "src/hyperdrives/custom/getCustomHyperdrive";
import { getGnosisWstethHyperdrive } from "src/hyperdrives/gnosisWsteth/getGnosisWstethHyperdrive";
import { getMorphoHyperdrive } from "src/hyperdrives/morpho/getMorphoHyperdrive";
import { getStethHyperdrive } from "src/hyperdrives/steth/getStethHyperdrive";
import { protocols } from "src/protocols";
import { AnyRewardId } from "src/rewards/actions/types";
import { getYieldSourceRewardId } from "src/rewards/actions/yieldSource";
import { parseHyperdriveRewardsMap } from "src/rewards/hyperdrive";
import { RewardResolverKey } from "src/rewards/resolvers";
import {
  AERO_ICON_URL,
  DAI_ICON_URL,
  EETH_ICON_URL,
  ETH_ICON_URL,
  EURC_ICON_URL,
  EZETH_ICON_URL,
  GYD_ICON_URL,
  NARS_ICON_URL,
  RETH_ICON_URL,
  RSETH_ICON_URL,
  SDAI_ICON_URL,
  SGYD_ICON_URL,
  SNARS_ICON_URL,
  STUSD_ICON_URL,
  SUSDE_ICON_URL,
  SUSDS_ICON_URL,
  SXDAI_ICON_URL,
  USDA_ICON_URL,
  USDC_ICON_URL,
  USDE_ICON_URL,
  USDS_ICON_URL,
  WELL_ICON_URL,
  WETH_ICON_URL,
  WXDAI_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import { TokenConfig } from "src/tokens/types";
import { YieldSourceId } from "src/yieldSources/types";
import { yieldSources } from "src/yieldSources/yieldSources";
import { zaps } from "src/zaps/zaps";
import { Address, PublicClient } from "viem";

const hyperdriveKindResolvers: Record<
  string /* kind */,
  HyperdriveConfigResolver
> = {
  RsETHLineaHyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
      await getCustomHyperdrive({
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

    return {
      hyperdriveConfig,
      baseTokenConfig,
      sharesTokenConfig,
      rewards: {
        // Yield Source Rewards
        [getYieldSourceRewardId({
          chainId: hyperdriveConfig.chainId,
          yieldSourceId: "rseth",
        })]: ["fetchLineaRewards"],

        // Hyperdrive Rewards
        ...parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdrive.address,
          chainId: publicClient.chain?.id as number,
          rewardsMap: {
            short: ["fetchLineaRewards"],
            lp: ["fetchLineaRewards", "fetchHypervueMilesRewards"],
          },
        }),
      },
    };
  },

  EzETHLineaHyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
      await getCustomHyperdrive({
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

    return {
      hyperdriveConfig,
      baseTokenConfig,
      sharesTokenConfig,
      rewards: {
        // yield source rewards
        [getYieldSourceRewardId({
          chainId: hyperdriveConfig.chainId,
          yieldSourceId: "lineaEzeth",
        })]: ["fetchLineaRewards"],
        // hyperdrive rewards
        ...parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdrive.address,
          chainId: publicClient.chain?.id as number,
          rewardsMap: {
            short: ["fetchLineaRewards"],
            lp: ["fetchLineaRewards", "fetchHypervueMilesRewards"],
          },
        }),
      },
    };
  },
  ChainlinkHyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    const hyperdriveName = await publicClient.readContract({
      address: hyperdrive.address,
      abi: hyperdrive.contract.abi,
      functionName: "name",
    });

    if (hyperdriveName.includes("wstETH Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
        await getGnosisWstethHyperdrive({
          hyperdrive,
          earliestBlock,
        });
      return {
        baseTokenConfig,
        hyperdriveConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdrive.address,
          chainId: publicClient.chain?.id as number,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    if (hyperdriveName.includes("cbETH Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
        await getCbethHyperdrive({
          hyperdrive,
          earliestBlock,
        });
      return {
        baseTokenConfig,
        hyperdriveConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdrive.address,
          chainId: publicClient.chain?.id as number,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    const readSharesToken = await hyperdrive.getSharesToken();
    const sharesTokenSymbol = await readSharesToken.getSymbol();
    throw new Error(
      `Unknown ChainklinkHyperdrive, name: ${hyperdriveName}, sharesTokenSymbol: ${sharesTokenSymbol}, hyperdrive address: ${hyperdrive.address}.`,
    );
  },
  EETHHyperdrive: async (hyperdrive, publicClient) => {
    const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
      await getCustomHyperdrive({
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
      });
    return {
      hyperdriveConfig,
      baseTokenConfig,
      sharesTokenConfig,
      rewards: {
        // yield source rewards
        [getYieldSourceRewardId({
          chainId: hyperdriveConfig.chainId,
          yieldSourceId: "eeth",
        })]: ["fetchEtherfiRewards"],

        // hyperdrive rewards
        ...parseHyperdriveRewardsMap({
          chainId: publicClient.chain?.id as number,
          hyperdriveAddress: hyperdrive.address,
          rewardsMap: {
            short: ["fetchEtherfiRewards"],
            lp: ["fetchEtherfiRewards", "fetchHypervueMilesRewards"],
          },
        }),
      },
    };
  },
  EzETHHyperdrive: async (hyperdrive: ReadHyperdrive) => {
    const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
      await getCustomHyperdrive({
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
      });
    return {
      hyperdriveConfig,
      baseTokenConfig,
      sharesTokenConfig,
      rewards: parseHyperdriveRewardsMap({
        hyperdriveAddress: hyperdriveConfig.address,
        chainId: hyperdriveConfig.chainId,
        rewardsMap: {
          lp: ["fetchHypervueMilesRewards"],
        },
      }),
    };
  },

  RETHHyperdrive: async (hyperdrive) => {
    const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
      await getCustomHyperdrive({
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
      });
    return {
      hyperdriveConfig,
      baseTokenConfig,
      sharesTokenConfig,
      rewards: parseHyperdriveRewardsMap({
        hyperdriveAddress: hyperdriveConfig.address,
        chainId: hyperdriveConfig.chainId,
        rewardsMap: {
          lp: ["fetchHypervueMilesRewards"],
        },
      }),
    };
  },

  StETHHyperdrive: async (hyperdrive) => {
    const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
      await getStethHyperdrive({ hyperdrive });
    return {
      baseTokenConfig,
      hyperdriveConfig,
      sharesTokenConfig,
      rewards: parseHyperdriveRewardsMap({
        hyperdriveAddress: hyperdriveConfig.address,
        chainId: hyperdriveConfig.chainId,
        rewardsMap: {
          lp: ["fetchHypervueMilesRewards"],
        },
      }),
    };
  },

  ERC4626Hyperdrive: async (hyperdrive, publicClient, earliestBlock) => {
    const hyperdriveName = await publicClient.readContract({
      address: hyperdrive.address,
      abi: hyperdrive.contract.abi,
      functionName: "name",
    });

    if (hyperdriveName.includes("sGYD Hyperdrive")) {
      const yieldSourceByChainId: Record<number, YieldSourceId> = {
        1: "sgyd",
        707: "sgyd", // cloudchain is a mainnet fork
        100: "gnosisSgyd",
      };
      const yieldSource =
        yieldSourceByChainId[publicClient.chain?.id as number];

      if (!yieldSource) {
        throw new Error(
          `Unsupported chainId for sGYD Hyperdrive: ${publicClient.chain?.id}`,
        );
      }
      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
          hyperdrive,
          yieldSource,
          baseTokenIconUrl: GYD_ICON_URL,
          sharesTokenIconUrl: SGYD_ICON_URL,
          tokenPlaces: 2,
          baseTokenTags: ["stablecoin"],
          sharesTokenTags: [],
          depositOptions: {
            isBaseTokenDepositEnabled: true,
            isShareTokenDepositsEnabled: true,
          },
          withdrawalOptions: {
            isBaseTokenWithdrawalEnabled: true,
            isShareTokenWithdrawalEnabled: true,
          },
          earliestBlock,
        });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: {
          // yield source rewards
          [getYieldSourceRewardId({
            yieldSourceId: yieldSource,
            chainId: hyperdriveConfig.chainId,
          })]: ["fetchGyroscopeRewards"],

          // hyperdrive rewards
          ...parseHyperdriveRewardsMap({
            chainId: publicClient.chain?.id as number,
            hyperdriveAddress: hyperdrive.address,
            rewardsMap: {
              short: ["fetchGyroscopeRewards"],
              lp: ["fetchGyroscopeRewards", "fetchHypervueMilesRewards"],
            },
          }),
        },
      };
    }

    // Ethena sUSDe
    if (hyperdriveName.includes("sUSDe Hyperdrive")) {
      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
          hyperdrive,
          yieldSource: "susde",
          baseTokenIconUrl: USDE_ICON_URL,
          sharesTokenIconUrl: SUSDE_ICON_URL,
          tokenPlaces: 4,
          sharesTokenTags: ["stablecoin"],
          depositOptions: {
            isBaseTokenDepositEnabled: true,
            isShareTokenDepositsEnabled: true,
          },
          withdrawalOptions: {
            isBaseTokenWithdrawalEnabled: false,
            isShareTokenWithdrawalEnabled: true,
          },
        });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    // Sky sUSDS
    if (hyperdriveName.includes("sUSDS Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
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
      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
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
      const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
          hyperdrive,
          yieldSource: "skyDsr",
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
      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }
    // Gnosis sxDAI
    if (hyperdriveName.includes("sxDAI Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
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

      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    if (hyperdriveName.includes("stUSD Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
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

      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    // Moonwell ETH
    if (hyperdriveName.includes("Moonwell ETH Hyperdrive")) {
      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
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
      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: {
          // yield source rewards
          [getYieldSourceRewardId({
            chainId: hyperdriveConfig.chainId,
            yieldSourceId: "mwEth",
          })]: ["fetchMorphoMwethRewards"],

          // hyperdrive rewards
          ...parseHyperdriveRewardsMap({
            hyperdriveAddress: hyperdrive.address,
            chainId: publicClient.chain?.id as number,
            rewardsMap: {
              short: ["fetchMorphoMwethRewards"],
              lp: ["fetchMorphoMwethRewards", "fetchHypervueMilesRewards"],
            },
          }),
        },
      };
    }

    if (hyperdriveName.includes("Moonwell USDC Hyperdrive")) {
      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
          hyperdrive,
          yieldSource: "mwUsdc",
          baseTokenIconUrl: USDC_ICON_URL,
          sharesTokenIconUrl: WELL_ICON_URL,
          baseTokenTags: ["stablecoin"],
          depositOptions: {
            isBaseTokenDepositEnabled: true,
            isShareTokenDepositsEnabled: true,
          },
          withdrawalOptions: {
            isBaseTokenWithdrawalEnabled: true,
            isShareTokenWithdrawalEnabled: true,
          },
          tokenPlaces: 2,
        });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: {
          // yield source rewards
          [getYieldSourceRewardId({
            chainId: hyperdriveConfig.chainId,
            yieldSourceId: "mwUsdc",
          })]: ["fetchMorphoMwusdcRewards"],

          // hyperdrive rewards
          ...parseHyperdriveRewardsMap({
            hyperdriveAddress: hyperdrive.address,
            chainId: publicClient.chain?.id as number,
            rewardsMap: {
              short: ["fetchMorphoMwusdcRewards"],
              lp: ["fetchMorphoMwusdcRewards", "fetchHypervueMilesRewards"],
            },
          }),
        },
      };
    }

    if (hyperdriveName.includes("Moonwell EURC Hyperdrive")) {
      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
          hyperdrive,
          yieldSource: "mwEurc",
          baseTokenIconUrl: EURC_ICON_URL,
          sharesTokenIconUrl: WELL_ICON_URL,
          baseTokenTags: ["stablecoin"],
          depositOptions: {
            isBaseTokenDepositEnabled: true,
            isShareTokenDepositsEnabled: true,
          },
          withdrawalOptions: {
            isBaseTokenWithdrawalEnabled: true,
            isShareTokenWithdrawalEnabled: true,
          },
          tokenPlaces: 2,
        });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: {
          // yield source rewards
          [getYieldSourceRewardId({
            chainId: hyperdriveConfig.chainId,
            yieldSourceId: "mwEurc",
          })]: ["fetchMorphoMweurcRewards"],

          // hyperdrive rewards
          ...parseHyperdriveRewardsMap({
            chainId: publicClient.chain?.id as number,
            hyperdriveAddress: hyperdrive.address,
            rewardsMap: {
              short: ["fetchMorphoMweurcRewards"],
              lp: ["fetchMorphoMweurcRewards", "fetchHypervueMilesRewards"],
            },
          }),
        },
      };
    }

    if (hyperdriveName.includes("Num Finance snARS")) {
      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig } =
        await getCustomHyperdrive({
          hyperdrive,
          yieldSource: "snars",
          baseTokenIconUrl: NARS_ICON_URL,
          sharesTokenIconUrl: SNARS_ICON_URL,
          tokenPlaces: 2,
          baseTokenTags: ["stablecoin"],
          depositOptions: {
            isBaseTokenDepositEnabled: true,
            isShareTokenDepositsEnabled: true,
          },
          withdrawalOptions: {
            isBaseTokenWithdrawalEnabled: false,
            isShareTokenWithdrawalEnabled: true,
          },
        });

      return {
        hyperdriveConfig,
        baseTokenConfig,
        sharesTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdrive.address,
          chainId: publicClient.chain?.id as number,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    const readSharesToken = await hyperdrive.getSharesToken();
    const sharesTokenSymbol = await readSharesToken.getSymbol();
    throw new Error(
      `Unknown ERC4626Hyperdrive, name: ${hyperdriveName}, sharesTokenSymbol: ${sharesTokenSymbol}, hyperdrive address: ${hyperdrive.address}.`,
    );
  },
  // TODO: Removed from Hyperdrive registry temporarily until we have a better way of handling withdraws.
  // Will add this back in the near future
  // StkWellHyperdrive: async (hyperdrive, publicClient) => {
  //   const hyperdriveName = await publicClient.readContract({
  //     address: hyperdrive.address,
  //     abi: hyperdrive.contract.abi,
  //     functionName: "name",
  //   });
  //   // Moonwell Staked WELL
  //   if (hyperdriveName.includes("Moonwell StkWell")) {
  //     return getCustomHyperdrive({
  //       hyperdrive,
  //       yieldSource: "stkWell",
  //       baseTokenIconUrl: WELL_ICON_URL,
  //       sharesTokenIconUrl: WELL_ICON_URL,
  //       depositOptions: {
  //         isBaseTokenDepositEnabled: true,
  //         isShareTokenDepositsEnabled: true,
  //       },
  //       withdrawalOptions: {
  //         isBaseTokenWithdrawalEnabled: false,
  //         isShareTokenWithdrawalEnabled: true,
  //       },
  //       tokenPlaces: 4,
  //     });
  //   }

  //   throw new Error(
  //     `Unknown MoonwellHyperdrive, name: ${hyperdriveName}, hyperdrive address: ${hyperdrive.address}.`,
  //   );
  // },

  AerodromeLpHyperdrive: async (hyperdrive, publicClient) => {
    const hyperdriveName = await publicClient.readContract({
      address: hyperdrive.address,
      abi: hyperdrive.contract.abi,
      functionName: "name",
    });
    if (hyperdriveName.includes("Aerodrome LP")) {
      const { hyperdriveConfig, baseTokenConfig } = await getAeroLpHyperdrive({
        hyperdrive,
        baseTokenIconUrl: AERO_ICON_URL,
        yieldSourceId: "aeroUsdcAero",
        baseTokenPlaces: 9, // aero lp tokens are super small
        baseTokenTags: [],
      });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        rewards: {
          // yield source rewards
          [getYieldSourceRewardId({
            yieldSourceId: "aeroUsdcAero",
            chainId: hyperdriveConfig.chainId,
          })]: ["fetchAeroRewards"],

          // hyperdrive rewards
          ...parseHyperdriveRewardsMap({
            chainId: publicClient.chain?.id as number,
            hyperdriveAddress: hyperdrive.address,
            rewardsMap: {
              short: ["fetchAeroRewards"],
              lp: ["fetchAeroRewards", "fetchHypervueMilesRewards"],
            },
          }),
        },
      };
    }
    throw new Error(
      `Unknown AeroLpHyperdrive, name: ${hyperdriveName}, hyperdrive address: ${hyperdrive.address}.`,
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
      const { baseTokenConfig, hyperdriveConfig } = await getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: DAI_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoSusdeDai",
      });

      return {
        hyperdriveConfig,
        baseTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    if (hyperdriveName.includes("Morpho Blue USDe/DAI Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig } = await getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: DAI_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoUsdeDai",
      });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    if (hyperdriveName.includes("Morpho Blue wstETH/USDC Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig } = await getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: USDC_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoWstethUsdc",
      });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    if (hyperdriveName.includes("Morpho Blue wstETH/USDA Hyperdrive")) {
      const { baseTokenConfig, hyperdriveConfig } = await getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: USDA_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoWstethUsda",
      });
      return {
        hyperdriveConfig,
        baseTokenConfig,
        rewards: parseHyperdriveRewardsMap({
          hyperdriveAddress: hyperdriveConfig.address,
          chainId: hyperdriveConfig.chainId,
          rewardsMap: {
            lp: ["fetchHypervueMilesRewards"],
          },
        }),
      };
    }

    if (hyperdriveName.includes("Morpho Blue cbETH/USDC Hyperdrive")) {
      const { hyperdriveConfig, baseTokenConfig } = await getMorphoHyperdrive({
        hyperdrive,
        baseTokenTags: ["stablecoin"],
        baseTokenIconUrl: USDC_ICON_URL,
        baseTokenPlaces: 2,
        yieldSourceId: "morphoCbethUsdc",
      });

      return {
        hyperdriveConfig,
        baseTokenConfig,
        rewards: {
          // yield source rewards
          [getYieldSourceRewardId({
            yieldSourceId: "morphoCbethUsdc",
            chainId: hyperdriveConfig.chainId,
          })]: ["fetchMorphoCbethUsdcRewards"],

          // hyperdrive rewards
          ...parseHyperdriveRewardsMap({
            chainId: publicClient.chain?.id as number,
            hyperdriveAddress: hyperdrive.address,
            rewardsMap: {
              short: ["fetchMorphoCbethUsdcRewards"],
              lp: ["fetchMorphoCbethUsdcRewards", "fetchHypervueMilesRewards"],
            },
          }),
        },
      };
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
  let allRewards: Record<AnyRewardId, RewardResolverKey[]> = {};
  const chainId = publicClient.chain?.id as number;

  // Get ReadHyperdrive instances from the registry to ensure
  // that only registered pools are delivered to the frontend
  const registry = new ReadRegistry({
    address: registryAddress,
    publicClient,
    earliestBlock,
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

      const { hyperdriveConfig, baseTokenConfig, sharesTokenConfig, rewards } =
        await hyperdriveResolver(hyperdrive, publicClient, earliestBlock);

      // Not all hyperdrives have a base or shares token, so only add them if
      // they exist. (Note: `tokens` is deduped at the end)
      if (baseTokenConfig) {
        tokens.push(baseTokenConfig);
      }
      if (sharesTokenConfig) {
        tokens.push(sharesTokenConfig);
      }

      if (rewards) {
        allRewards = {
          ...allRewards,
          ...rewards,
        };
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
    zaps,
    rewards: allRewards,
  };

  return config;
}
