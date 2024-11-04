import { Address } from "abitype";
import { gql, request } from "graphql-request";
import { fixed, FixedPoint, parseFixed } from "src/base/fixedPoint";
import {
  AnyReward,
  NonTransferableTokenReward,
  RewardsResolver,
  TransferableTokenReward,
} from "src/rewards/types";
import { base } from "viem/chains";
/**
 * Resolver for rewards on Morpho Flagship EURC
 * https://app.morpho.org/vault?vault=0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026&network=base
 */
export const fetchMorphoMweurcRewards: RewardsResolver = async () => {
  return fetchMorphoVaultRewards(
    "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    base.id,
  );
};
/**
 * Resolver for rewards on Morpho Flagship USDC
 * https://app.morpho.org/vault?vault=0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca&network=base
 */
export const fetchMorphoMwusdcRewards: RewardsResolver = async () => {
  return fetchMorphoVaultRewards(
    "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    base.id,
  );
};

/**
 * Resolver for rewards on Morpho Flagship ETH
 * https://app.morpho.org/vault?vault=0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1&network=base
 */
export const fetchMorphoMwethRewards: RewardsResolver = async () => {
  return fetchMorphoVaultRewards(
    "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    base.id,
  );
};

/**
 * Resolver for rewards on Morpho Market cbETH/USDC
 * https://app.morpho.org/market?id=0x1c21c59df9db44bf6f645d854ee710a8ca17b479451447e9f56758aee10a2fad&network=base
 */
export const fetchMorphoCbethUsdcRewards: RewardsResolver = async () => {
  return fetchMorphoMarketRewards("ffbf9c87-73ed-4188-aa50-20b1e1101a15");
};

interface MorphoReward {
  amountPerSuppliedToken: number | string;
  supplyApr: number | null;
  asset: {
    address: Address;
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

interface MorphoMarketRewardsResponse {
  market: {
    loanAsset: {
      priceUsd: number;
    };
    state: {
      collateralAssetsUsd: number;
      // The vault rewards
      rewards: MorphoReward[];
    };
  };
}

async function fetchMorphoMarketRewards(
  marketId: string,
): Promise<AnyReward[]> {
  const response: MorphoMarketRewardsResponse = await request(
    "https://blue-api.morpho.org/graphql",
    gql`
      query MarketRewards($marketId: String!) {
        market(id: $marketId) {
          id
          loanAsset {
            priceUsd
          }
          state {
            collateralAssetsUsd
            rewards {
              supplyApr
              amountPerSuppliedToken
              asset {
                address
                chain {
                  id
                }
              }
            }
          }
        }
      }
    `,
    { marketId },
  );

  return response.market.state.rewards.map((reward) => {
    if (reward.supplyApr) {
      const transferableTokenReward: TransferableTokenReward = {
        type: "transferableToken",
        apy: parseFixed(reward.supplyApr).bigint,
        tokenAddress: reward.asset.address,
        chainId: reward.asset.chain.id,
      };
      return transferableTokenReward;
    }

    const nontransferableTokenReward: NonTransferableTokenReward = {
      type: "nonTransferableToken",
      tokenAddress: reward.asset.address,
      tokensPerThousandUsd:
        // MORPHO amounts are provided with 15 decimals of precision from
        // the Morpho GraphQL API
        fixed(reward.amountPerSuppliedToken, 15)
          .div(parseFixed(response.market.loanAsset.priceUsd))
          .mul(parseFixed(1000)).bigint,
      depositDurationDays: 365,
      chainId: reward.asset.chain.id,
    };

    return nontransferableTokenReward;
  });
}

interface MorphoVaultRewardsResponse {
  vaultByAddress: {
    asset: {
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
async function fetchMorphoVaultRewards(
  vaultAddress: Address,
  chainId: number,
): Promise<AnyReward[]> {
  const response: MorphoVaultRewardsResponse = await request(
    "https://blue-api.morpho.org/graphql",
    gql`
      query VaultRewards($address: String!, $chainId: Int!) {
        vaultByAddress(address: $address, chainId: $chainId) {
          address
          asset {
            priceUsd
          }
          state {
            totalAssetsUsd
            rewards {
              amountPerSuppliedToken
              supplyApr
              asset {
                address
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
    parseVaultReward({
      reward,
      vaultCollateralAsset: response.vaultByAddress.asset,
    }),
  );

  const marketAllocationRewards = parseAllocationRewards({
    totalAssetsUsd: parseFixed(response.vaultByAddress.state.totalAssetsUsd),
    marketAllocations: response.vaultByAddress.state.allocation,
    vaultCollateralAsset: response.vaultByAddress.asset,
  });

  return [...vaultRewards, ...marketAllocationRewards];
}

function parseVaultReward({
  reward,
  vaultCollateralAsset,
}: {
  reward: MorphoReward;
  vaultCollateralAsset: MorphoVaultRewardsResponse["vaultByAddress"]["asset"];
}): NonTransferableTokenReward | TransferableTokenReward {
  // Supply APR only exists if the reward token is actually worth something
  if (reward.supplyApr) {
    const transferableTokenReward: TransferableTokenReward = {
      type: "transferableToken",
      apy: parseFixed(reward.supplyApr).bigint,
      tokenAddress: reward.asset.address,
      chainId: reward.asset.chain.id,
    };
    return transferableTokenReward;
  }

  // Without a supply APR, the reward token is just some nontransferable token.
  const nontransferableTokenReward: NonTransferableTokenReward = {
    type: "nonTransferableToken",
    // Morpho non-transferable token rewards are based on assets deposited
    // for 1 year
    depositDurationDays: 365,
    tokensPerThousandUsd:
      // MORPHO amounts are provided with 15 decimals of precision from
      // the Morpho GraphQL API
      fixed(reward.amountPerSuppliedToken, 15).div(
        parseFixed(vaultCollateralAsset.priceUsd),
      ).bigint,
    tokenAddress: reward.asset.address,
    chainId: reward.asset.chain.id,
  };

  return nontransferableTokenReward;
}

function parseAllocationRewards({
  totalAssetsUsd,
  vaultCollateralAsset,
  marketAllocations,
}: {
  totalAssetsUsd: FixedPoint;
  marketAllocations: MarketAllocation[];
  vaultCollateralAsset: MorphoVaultRewardsResponse["vaultByAddress"]["asset"];
}): (NonTransferableTokenReward | TransferableTokenReward)[] {
  const allocationsWithVaultAdjustedRewards = marketAllocations.map(
    (allocation) => {
      // Step 1: Calculate the percentage of the vault's total assets allocated
      // to this market. This can be seen on the Morpho UI's Vault Allocation
      // Breakdown section.
      const percentOfVaultAllocatedToMarket = parseFixed(
        allocation.supplyAssetsUsd,
      ).div(parseFixed(totalAssetsUsd));

      // Step 2: Calculate the rewards the vault will earn from its allocation
      // to this market
      const marketAllocationRewards = allocation.market.state.rewards.map(
        (reward) => {
          // Calculate "Reward rates" (like APR) for tokens that have monetary
          // value, based on the vault's allocated assets.
          if (reward.supplyApr) {
            return {
              reward,
              vaultAdjustedRewardRate: percentOfVaultAllocatedToMarket.mul(
                parseFixed(reward.supplyApr),
              ),
            };
          }

          // Calculate MORPHO tokens rewards based on the vault's allocated
          // assets.
          return {
            reward,
            vaultAdjustedRewardTokens: percentOfVaultAllocatedToMarket.mul(
              // MORPHO amounts are provided with 15 decimals of precision from
              // the Morpho GraphQL API
              fixed(reward.amountPerSuppliedToken, 15).div(
                parseFixed(vaultCollateralAsset.priceUsd),
              ),
            ),
          };
        },
      );

      return {
        allocation,
        percentOfVaultAllocatedToMarket,
        marketAllocationRewards,
      };
    },
  );

  const rewardApyTotals: Record<number, Record<Address, FixedPoint>> = {
    // chain -> token address -> effective APY
  };
  const rewardTokenTotals: Record<number, Record<Address, FixedPoint>> = {
    // chain -> token address -> effective total emissions
  };

  allocationsWithVaultAdjustedRewards.forEach(({ marketAllocationRewards }) => {
    marketAllocationRewards.forEach(
      ({ reward, vaultAdjustedRewardRate, vaultAdjustedRewardTokens }) => {
        const chainId = reward.asset.chain.id;
        const assetAddress = reward.asset.address;

        // Accumulate APY totals
        if (vaultAdjustedRewardRate?.gt(0)) {
          // Initialize APY totals for this chain and asset if needed
          rewardApyTotals[chainId] = rewardApyTotals[chainId] || {};
          rewardApyTotals[chainId][assetAddress] =
            rewardApyTotals[chainId][assetAddress] || fixed(0);
          rewardApyTotals[chainId][assetAddress] = rewardApyTotals[chainId][
            assetAddress
          ].add(vaultAdjustedRewardRate);
        }

        // Accumulate token totals
        if (vaultAdjustedRewardTokens?.gt(0)) {
          // Initialize emission totals for this chain and asset if needed
          rewardTokenTotals[chainId] = rewardTokenTotals[chainId] || {};
          rewardTokenTotals[chainId][assetAddress] =
            rewardTokenTotals[chainId][assetAddress] || fixed(0);

          rewardTokenTotals[chainId][assetAddress] = rewardTokenTotals[chainId][
            assetAddress
          ].add(vaultAdjustedRewardTokens);
        }
      },
    );
  });

  const transferableTokenRewards = Object.entries(rewardApyTotals).flatMap(
    ([chainId, reward]) => {
      return Object.entries(reward).map(
        ([tokenAddress, rewardApy]): TransferableTokenReward => {
          return {
            type: "transferableToken",
            apy: rewardApy.bigint,
            tokenAddress: tokenAddress as Address, // Safe to cast since Object.entries assumes all keys are strings
            chainId: Number(chainId),
          };
        },
      );
    },
  );

  const nonTransferableTokenRewards = Object.entries(rewardTokenTotals).flatMap(
    ([chainId, rewardEmissions]) => {
      return Object.entries(rewardEmissions).map(
        ([
          tokenAddress,
          rewardTokensPerThousandUsd,
        ]): NonTransferableTokenReward => {
          return {
            type: "nonTransferableToken",
            // Morpho non-transferable token rewards are based on assets deposited
            // for 1 year
            depositDurationDays: 365,
            tokensPerThousandUsd: rewardTokensPerThousandUsd.bigint,
            tokenAddress: tokenAddress as Address, // Safe to cast since Object.entries assumes all keys are strings
            chainId: Number(chainId),
          };
        },
      );
    },
  );

  return [...transferableTokenRewards, ...nonTransferableTokenRewards];
}
