import { fixed, FixedPoint } from "@delvtech/fixed-point-wasm";
import {
  HyperdriveConfig,
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
        `https://rewards.morpho.org/v1/programs/?chains=${chainId}&active=true&type=uniform-reward`
      );
      const result = await response.json();
      return result.data[0];
    },
  });

  let morphoRate: FixedPoint | undefined = undefined;

  if (rewardsData) {
    const poolId = marketPoolIds[hyperdriveAddress];
    let matchingRate = rewardsData.current_rates.find((rate) =>
      rate.pool_ids.some((id) => id.toLowerCase().startsWith(poolId))
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

const vaultAddresses: Record<
  Address,
  { vaultAddress: string; assetIcon: string }
> = {
  // Key: Hyperdrive contract address for the market
  // Value: Morpho vault address and asset icon
  // Market: 182d Moonwell Flagship ETH
  "0xceD9F810098f8329472AEFbaa1112534E96A5c7b": {
    vaultAddress: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    assetIcon: WELL_ICON_URL,
  },
};

const endpoint = "https://blue-api.morpho.org/graphql";

type SupplyRewardsResponse = {
  vaultByAddress: {
    state: {
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
  morphoVaultReward:
    | SupplyRewardsResponse["vaultByAddress"]["state"]["rewards"][0]
    | undefined;
  isLoading: boolean;
} {
  const morphoVault = vaultAddresses[hyperdrive.address];
  const queryEnabled = !!morphoVault?.vaultAddress && enabled;
  const { data: morphoVaultRewards, isLoading } = useQuery({
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
                  rewards {
                    supplyApr
                    asset {
                      address
                      symbol
                    }
                  }
                }
              }
            }`,
            { address: morphoVault.vaultAddress, chainId: hyperdrive.chainId }
          );
          return supplyRewards;
        }
      : undefined,
  });

  return {
    // Return the first reward in the rewards array
    morphoVaultReward: morphoVaultRewards?.vaultByAddress?.state?.rewards[0],
    isLoading,
  };
}
