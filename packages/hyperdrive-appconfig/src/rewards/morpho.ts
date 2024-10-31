import { fixed, FixedPoint } from "@delvtech/fixed-point-wasm";
import { Address } from "abitype";
import { gql, request } from "graphql-request";
import { parseFixed } from "src/base/fixedPoint";
import {
  AnyReward,
  NonTransferableTokenReward,
  RewardsResolver,
  TransferableTokenReward,
} from "src/rewards/types";
import { base } from "viem/chains";

interface MorphoReward {
  amountPerSuppliedToken: number;
  supplyApr: number | null;
  asset: {
    address: Address;
    name: string;
    chain: {
      id: number;
    };
  };
}

interface MarketAllocation {
  supplyAssetsUsd: number;
  market: {
    collateralAsset: {
      priceUsd: number;
    } | null;
    state: {
      rewards: MorphoReward[];
    };
  };
}

interface MorphoRewardsResponse {
  vaultByAddress: {
    asset: {
      name: string;
      priceUsd: number;
    };
    state: {
      totalAssetsUsd: number;
      // The vault rewards
      rewards: MorphoReward[];

      // market allocations can have rewards too
      allocation: MarketAllocation[];
    };
  };
}

export const fetchMweurcRewards: RewardsResolver = async () => {
  return fetchMorphoRewards(
    "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    base.id,
  );
};

export const fetchMwUsdcRewards: RewardsResolver = async () => {
  return fetchMorphoRewards(
    "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    base.id,
  );
};

export const fetchMwEthRewards: RewardsResolver = async () => {
  return fetchMorphoRewards(
    "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    base.id,
  );
};

async function fetchMorphoRewards(
  vaultAddress: Address,
  chainId: number,
): Promise<AnyReward[]> {
  const response: MorphoRewardsResponse = await request(
    "https://blue-api.morpho.org/graphql",
    gql`
      query SupplyRewards($address: String!, $chainId: Int!) {
        vaultByAddress(address: $address, chainId: $chainId) {
          address
          asset {
            priceUsd
          }
          state {
            totalSupply
            totalAssetsUsd
            rewards {
              amountPerSuppliedToken
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
                collateralAsset {
                  priceUsd
                }
                state {
                  rewards {
                    amountPerSuppliedToken
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
      }
    `,
    { address: vaultAddress, chainId: chainId },
  );

  // Morpho Vaults have the ability to earn rewards for deposits into the vault
  // as well as the rewards for the allocations the vault makes into underlying
  // Morpho markets.
  const vaultRewards = response.vaultByAddress.state.rewards.map((reward) =>
    parseVaultReward(reward),
  );

  const marketAllocationRewards = parseAllocationRewards({
    totalAssetsUsd: parseFixed(response.vaultByAddress.state.totalAssetsUsd),
    allocations: response.vaultByAddress.state.allocation,
    vaultCollateralAsset: response.vaultByAddress.asset,
  });

  return [...vaultRewards, ...marketAllocationRewards];
}

function parseVaultReward(
  reward: MorphoReward,
): NonTransferableTokenReward | TransferableTokenReward {
  // Supply APR only exists if the token reward is a transferable token with
  // a known token price
  if (reward.supplyApr) {
    const transferableTokenReward: TransferableTokenReward = {
      type: "transferableToken",
      apy: parseFixed(reward.supplyApr).bigint,
      tokenAddress: reward.asset.address,
      chainId: reward.asset.chain.id,
    };
    return transferableTokenReward;
  }

  // Without a supply APR, the reward is just some nontransferable token
  const nontransferableTokenReward: NonTransferableTokenReward = {
    type: "nonTransferableToken",
    // Morpho non-transferable token rewards are based on assets deposited
    // for 1 year
    depositDurationDays: 365,
    tokensPerThousandUsd: fixed(reward.amountPerSuppliedToken, 16).bigint,
    tokenAddress: reward.asset.address,
    chainId: reward.asset.chain.id,
  };

  return nontransferableTokenReward;
}

function parseAllocationRewards({
  totalAssetsUsd,
  vaultCollateralAsset,
  allocations,
}: {
  totalAssetsUsd: FixedPoint;
  allocations: MarketAllocation[];
  vaultCollateralAsset: MorphoRewardsResponse["vaultByAddress"]["asset"];
}): (NonTransferableTokenReward | TransferableTokenReward)[] {
  // Calculate the percent of the total assets allocated to each underlying
  // market and include that next to the allocation object
  const allocationsWithPercents = allocations.map((allocation) => {
    return {
      allocation,
      pctAllocated: parseFixed(allocation.supplyAssetsUsd).div(
        parseFixed(totalAssetsUsd),
      ),
    };
  });

  const allocationsWithPercentsAndEffectiveRewards =
    allocationsWithPercents.map(({ allocation, pctAllocated }) => {
      // Calculate the actual reward APR for each market the vault allocates to
      const effectiveRewardsRates = allocation.market.state.rewards
        .filter((reward) => reward.supplyApr)
        .map((reward) => {
          return {
            reward,
            effectiveRate: pctAllocated.mul(parseFixed(reward.supplyApr!)), // safe to cast thanks to the filtering
          };
        });

      // Calculate the actual non-transferable token rewards for each market the
      // vault allocates to
      const effectiveRewardsEmissions = allocation.market.state.rewards
        // Note: A missing supplyApr means that the rewards are a non-transferable token
        .filter((reward) => !reward.supplyApr)
        .map((reward) => {
          // If an amount of vault assets are idle, then it's considered
          // "allocated" to the 0x address market. Since there still could be
          // rewards, we need to use the vault's collateral token to calculate
          // rewards instead of the underlying market's collateral token.
          const collateralAssetPrice =
            allocation.market.collateralAsset?.priceUsd ||
            vaultCollateralAsset.priceUsd;
          return {
            reward,
            effectiveEmissions: pctAllocated.mul(
              // example: we earn 100 Morpho per 1 Eth, and ETH is worth $3000, then
              // reduces to 100 Morpho per $3000
              // reduces to 33.33 Morpho per $1000
              // if 1 eth is worth $3000, then how much eth is worth $1000?
              // if you earn 100 morpho per 1 eth, and eth is worth $3000, then how much morpho do you earn for the amount of eth equal to $1,000?
              fixed(reward.amountPerSuppliedToken, 18).mul(
                parseFixed(1000).div(parseFixed(collateralAssetPrice)),
              ),
            ),
          };
        });
      return {
        allocation,
        pctAllocated,
        effectiveRewardsRates,
        effectiveRewardsEmissions,
      };
    });

  // Get the percent of total assets supplied to a market
  // wstETH allocationPct = marketAllocationUsd / totalAssetsUsd (example, gives you 0.1413 for wstETH pool)
  // effective rewards rate for wstETH usdc rewards = allocationPct * usdcRewardsSupplyApr (example: 0.1413 * .016 = 0.00220428)
  // cBTC allocationPct = marketAllocationUsd/ totalAssetsUsd (example: gives you .1269 for cBTC)
  // effective rewards rate for cBTC's usdc rewards = allocationPct * usdcRewardsSupplyApr (example: .1269 * .0157 = 0.00199233)
  // add them together: 0.00199233 + 0.00220428 = 0.00419661
  const rewardApyTotals: Record<number, Record<Address, FixedPoint>> = {
    // mainnet -> usdc address -> effective APY
  };
  const rewardEmissionTotals: Record<number, Record<Address, FixedPoint>> = {
    // mainnet -> usdc address -> effective total emissions
  };

  allocationsWithPercentsAndEffectiveRewards.forEach(
    ({ effectiveRewardsEmissions, effectiveRewardsRates }) => {
      // go through each reward rate and add it to the existing apy total
      effectiveRewardsRates.forEach(({ reward, effectiveRate }) => {
        if (!rewardApyTotals[reward.asset.chain.id]) {
          rewardApyTotals[reward.asset.chain.id] = {};
        }
        if (!rewardApyTotals[reward.asset.chain.id][reward.asset.address]) {
          rewardApyTotals[reward.asset.chain.id][reward.asset.address] =
            fixed(0);
        }

        rewardApyTotals[reward.asset.chain.id][reward.asset.address] =
          rewardApyTotals[reward.asset.chain.id][reward.asset.address].add(
            effectiveRate,
          );
      });
      effectiveRewardsEmissions.forEach(({ reward, effectiveEmissions }) => {
        if (!rewardEmissionTotals[reward.asset.chain.id]) {
          rewardEmissionTotals[reward.asset.chain.id] = {};
        }
        if (
          !rewardEmissionTotals[reward.asset.chain.id][reward.asset.address]
        ) {
          rewardEmissionTotals[reward.asset.chain.id][reward.asset.address] =
            fixed(0);
        }
        rewardEmissionTotals[reward.asset.chain.id][reward.asset.address] =
          rewardEmissionTotals[reward.asset.chain.id][reward.asset.address].add(
            effectiveEmissions,
          );
      });
    },
  );
  const transferableTokenRewards = Object.entries(rewardApyTotals)
    .map(([chainId, rewardApy]) => {
      return Object.entries(rewardApy).map(
        ([tokenAddress, rewardApyPerToken]): TransferableTokenReward => {
          return {
            type: "transferableToken",
            apy: rewardApyPerToken.bigint,
            tokenAddress: tokenAddress as Address, // Safe to cast since Object.entries assumes all keys are strings, when in fact we have a stronger type
            chainId: Number(chainId),
          };
        },
      );
    })
    .flat();

  // Without a supply APR, the reward is just some nontransferable token
  const nonTransferableTokenRewards = Object.entries(rewardEmissionTotals)
    .map(([chainId, rewardEmissions]) => {
      return Object.entries(rewardEmissions).map(
        ([
          tokenAddress,
          rewardEmissionsPerToken,
        ]): NonTransferableTokenReward => {
          return {
            type: "nonTransferableToken",
            // Morpho non-transferable token rewards are based on assets deposited
            // for 1 year
            depositDurationDays: 365,
            tokensPerThousandUsd: rewardEmissionsPerToken.bigint,
            tokenAddress: tokenAddress as Address, // Safe to cast since Object.entries assumes all keys are strings, when in fact we have a stronger type
            chainId: Number(chainId),
          };
        },
      );
    })
    .flat();

  return [...transferableTokenRewards, ...nonTransferableTokenRewards];
}
