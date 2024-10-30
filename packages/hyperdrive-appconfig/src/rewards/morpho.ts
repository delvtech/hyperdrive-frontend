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

interface Reward {
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
    };
    state: {
      rewards: Reward[];
    };
  };
}

interface MorphoRewardsResponse {
  vaultByAddress: {
    state: {
      totalAssetsUsd: number;
      // The vault rewards
      rewards: Reward[];

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
    totalAssetsUsd: response.vaultByAddress.state.totalAssetsUsd,
    allocations: response.vaultByAddress.state.allocation,
  });

  return [...vaultRewards, ...marketAllocationRewards];
}

function parseVaultReward(
  reward: Reward,
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
    tokensPerThousandUsd: parseFixed(reward.amountPerSuppliedToken).bigint,
    tokenAddress: reward.asset.address,
    chainId: reward.asset.chain.id,
  };

  return nontransferableTokenReward;
}

function parseAllocationRewards({
  totalAssetsUsd,
  allocations,
}: {
  totalAssetsUsd: number;
  allocations: MarketAllocation[];
}): (NonTransferableTokenReward | TransferableTokenReward)[] {
  const allocationsWithPercents = allocations.map((allocation) => {
    return {
      allocation,
      pctAllocated: allocation.supplyAssetsUsd / totalAssetsUsd,
    };
  });

  const allocationsWithPercentsAndEffectiveRewards =
    allocationsWithPercents.map(({ allocation, pctAllocated }) => {
      console.log(pctAllocated, "pctAllocated", allocation, "allocation");
      const effectiveRewardsRates = allocation.market.state.rewards
        .filter((reward) => reward.supplyApr)
        .map(
          (reward) => {
            return { reward, effectiveRate: pctAllocated * reward.supplyApr! };
          }, // safe to cast thanks to the filtering
        );

      const effectiveRewardsEmissions = allocation.market.state.rewards
        // A missing collateralAsset means that these funds are not allocated
        .filter(
          (reward) => !reward.supplyApr && allocation.market.collateralAsset,
        )
        .map((reward) => {
          return {
            reward,
            effectiveEmissions:
              pctAllocated *
              (reward.amountPerSuppliedToken /
                allocation.market.collateralAsset.priceUsd),
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
  const rewardApyTotals: Record<number, Record<Address, number>> = {
    // mainnet -> usdc address -> effective APY
  };
  const rewardEmissionTotals: Record<number, Record<Address, number>> = {
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
          rewardApyTotals[reward.asset.chain.id][reward.asset.address] = 0;
        }
        rewardApyTotals[reward.asset.chain.id][reward.asset.address] +=
          effectiveRate;
      });
      effectiveRewardsEmissions.forEach(({ reward, effectiveEmissions }) => {
        if (!rewardEmissionTotals[reward.asset.chain.id]) {
          rewardEmissionTotals[reward.asset.chain.id] = {};
        }
        if (
          !rewardEmissionTotals[reward.asset.chain.id][reward.asset.address]
        ) {
          rewardEmissionTotals[reward.asset.chain.id][reward.asset.address] = 0;
        }
        rewardEmissionTotals[reward.asset.chain.id][reward.asset.address] +=
          effectiveEmissions;
      });
    },
  );
  const transferableTokenRewards = Object.entries(rewardApyTotals)
    .map(([chainId, rewardApy]) => {
      return Object.entries(rewardApy).map(
        ([tokenAddress, rewardApyPerToken]): TransferableTokenReward => {
          let apy = 0n;
          try {
            apy = parseFixed(rewardApyPerToken).bigint;
          } catch (e) {
            console.log(
              "FAILED! transferable rewards, rewardApyPerToken",
              rewardApyPerToken,
            );
            throw e;
          }
          return {
            type: "transferableToken",
            apy,
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
          let tokensPerThousandUsd = 0n;
          try {
            tokensPerThousandUsd = parseFixed(rewardEmissionsPerToken).bigint;
          } catch (e) {
            console.log(
              "FAILED! nontransferable rewards, rewardApyPerToken",
              rewardEmissionsPerToken,
            );
            throw e;
          }
          return {
            type: "nonTransferableToken",
            // Morpho non-transferable token rewards are based on assets deposited
            // for 1 year
            depositDurationDays: 365,
            tokensPerThousandUsd,
            tokenAddress: tokenAddress as Address, // Safe to cast since Object.entries assumes all keys are strings, when in fact we have a stronger type
            chainId: Number(chainId),
          };
        },
      );
    })
    .flat();

  return [...transferableTokenRewards, ...nonTransferableTokenRewards];
}
