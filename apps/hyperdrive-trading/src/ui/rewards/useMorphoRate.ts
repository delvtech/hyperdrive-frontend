import { fixed, FixedPoint } from "@delvtech/fixed-point-wasm";
import {
  EURC_ICON_URL,
  HyperdriveConfig,
  USDC_ICON_URL,
  WELL_ICON_URL,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";

import { request } from "graphql-request";

const marketPoolIds: Record<Address, string> = {
  // Key: Hyperdrive contract address for the market
  // Value: Corresponding Morpho vault address (for vault rewards) or pool id (for market rewards)
  // Market:Base 182d Morpho cbETH/USDC
  "0x2a1ca35Ded36C531F77c614b5AAA0d4F86edbB06":
    "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
  // Market: 182d Moonwell Flagship ETH
  "0xceD9F810098f8329472AEFbaa1112534E96A5c7b":
    "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
  // Market: 182d Moonwell Flagship USDC
  "0x034f7DB8C03fE0aBa3433952aB0fcf66e332AB72":
    "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
  // Market: 182d Moonwell Flagship EURC
  "0x8eC02F73b9325B2BdC7Eb25f4628600eAad58fCD":
    "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
};

export function useMorphoRate({
  chainId,
  hyperdriveAddress,
  enabled = true,
}: {
  chainId: number;
  hyperdriveAddress: Address;
  enabled?: boolean;
}): {
  morphoRate: FixedPoint | undefined;
} {
  const { data: rewardsData } = useQuery<
    {
      current_rates: {
        per_dollar_per_year: string;
        pool_ids: string[];
      }[];
    },
    Error
  >({
    queryKey: ["morphoRate", chainId, hyperdriveAddress],
    enabled,
    staleTime: Infinity,
    retry: 3,
    queryFn: async () => {
      const response = await fetch(
        `https://rewards.morpho.org/v1/programs/?chains=${chainId}&active=true&type=uniform-reward`,
      );
      const result = await response.json();
      return result.data[0];
    },
  });

  let morphoRate: FixedPoint | undefined = undefined;

  if (rewardsData) {
    const poolId = marketPoolIds[hyperdriveAddress];
    let matchingRate = rewardsData.current_rates.find((rate) =>
      rate.pool_ids.some((id) => id.toLowerCase().startsWith(poolId)),
    )?.per_dollar_per_year;

    // If there is no matching rate, just use the first one in the current_rates array
    if (!matchingRate) {
      matchingRate = rewardsData.current_rates[0]?.per_dollar_per_year;
    }

    // The morpho rate is formatted to 15 decimal places
    morphoRate = fixed(matchingRate ?? 0, 15);
  }

  return {
    morphoRate,
  };
}

export const vaultAddresses: Record<
  Address,
  {
    vaultAddress: string;
    assetIcon: string;
    allocation?: {
      assets: { address: Address; name: string; assetIcon: string }[];
    };
  }
> = {
  // Key: Hyperdrive contract address for the market
  // Value: Morpho vault address and asset icon
  // Market: 182d Moonwell Flagship ETH
  "0xceD9F810098f8329472AEFbaa1112534E96A5c7b": {
    vaultAddress: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    assetIcon: WELL_ICON_URL,
  },
  // Market: 182 Moonwell Flagship USDC
  "0x034f7DB8C03fE0aBa3433952aB0fcf66e332AB72": {
    vaultAddress: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    assetIcon: WELL_ICON_URL,
    allocation: {
      assets: [
        // USDC
        {
          address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          name: "USDC",
          assetIcon: USDC_ICON_URL,
        },
      ],
    },
  },
  // Market: 182d Moonwell Flagship EURC
  "0x8eC02F73b9325B2BdC7Eb25f4628600eAad58fCD": {
    vaultAddress: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    assetIcon: WELL_ICON_URL,
    allocation: {
      assets: [
        // EURC
        {
          address: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
          name: "EURC",
          assetIcon: EURC_ICON_URL,
        },
      ],
    },
  },
};

const endpoint = "https://blue-api.morpho.org/graphql";

type SupplyRewardsResponse = {
  vaultByAddress: {
    state: {
      totalAssetsUsd: number;
      allocation: {
        supplyAssetsUsd: number;
        market: {
          state: {
            rewards: {
              supplyApr: number;
              asset: {
                address: string;
                name: string;
              };
            }[];
          };
        };
      }[];
      rewards: {
        supplyApr: number;
        asset: {
          name: string;
        };
      }[];
    };
  };
};
export function useMorphoVaultRewards({
  hyperdrive,
  enabled,
}: {
  hyperdrive: HyperdriveConfig;
  enabled: boolean;
}): {
  morphoVaultData: {
    vault?: SupplyRewardsResponse["vaultByAddress"];
    reward?: SupplyRewardsResponse["vaultByAddress"]["state"]["rewards"][0];
    allocation?: SupplyRewardsResponse["vaultByAddress"]["state"]["allocation"];
  };
  isLoading: boolean;
} {
  const morphoVault = vaultAddresses[hyperdrive.address];
  const queryEnabled = !!morphoVault?.vaultAddress && enabled;
  const { data, isLoading } = useQuery({
    queryKey: [
      "morphoVaultRewards",
      hyperdrive.address,
      hyperdrive.chainId,
      morphoVault?.vaultAddress,
    ],
    enabled: queryEnabled,
    staleTime: Infinity,
    retry: 3,
    queryFn: queryEnabled
      ? async () => {
          const supplyRewards: SupplyRewardsResponse = await request(
            endpoint,
            `query SupplyRewards($address: String!, $chainId: Int!) {
              vaultByAddress(address: $address, chainId: $chainId) {
                address
                state {
                  totalSupply
                  totalAssetsUsd
                  rewards {
                    supplyApr
                    asset {
                      address
                      name
                      chain {
                        id
                      }
                    }
                  }
                  allocation {
                    supplyAssetsUsd
                    market {
                      state {
                        rewards {
                          supplyApr
                          asset {
                            address
                            name
                            chain {
                              id
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }`,
            { address: morphoVault.vaultAddress, chainId: hyperdrive.chainId },
          );

          return {
            vault: supplyRewards.vaultByAddress,
            reward: supplyRewards.vaultByAddress.state.rewards[0],
            allocation: supplyRewards.vaultByAddress.state.allocation,
          };
        }
      : undefined,
  });

  return {
    morphoVaultData: {
      vault: data?.vault,
      reward: data?.reward,
      allocation: data?.allocation,
    },
    isLoading,
  };
}
