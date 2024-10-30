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

interface MorphoRewardsResponse {
  vaultByAddress: {
    state: {
      totalAssetsUsd: number;
      allocation: {
        supplyAssetsUsd: number;
        market: {
          state: {
            rewards: {
              amountPerSuppliedToken: number;
              supplyApr: number | null;
              asset: {
                address: Address;
                name: string;
              };
            }[];
          };
        };
      }[];
      rewards: {
        amountPerSuppliedToken: number;
        supplyApr: number | null;
        asset: {
          address: Address;
          name: string;
          chain: {
            id: number;
          };
        };
      }[];
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
  const vaultRewards: AnyReward[] = response.vaultByAddress.state.rewards.map(
    (reward) => {
      // Supply APR only exists if the token reward is a transferable token with
      // a known token price,
      if (reward.supplyApr) {
        const transferableTokenReward: TransferableTokenReward = {
          type: "transferableToken",
          apy: parseFixed(reward.supplyApr).bigint,
          tokenAddress: reward.asset.address,
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
      };
      return nontransferableTokenReward;
    },
  );

  const allocationRewards: AnyReward[] = [];

  return vaultRewards;
}
