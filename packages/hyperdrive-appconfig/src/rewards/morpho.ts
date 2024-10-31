import { Address } from "abitype";
import { gql, request } from "graphql-request";
import { AnyReward } from "src/rewards/types";
import { base } from "viem/chains";
import { RewardsFn } from "..";

interface MorphoRewardsResponse {
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
}

export const fetchMweurcRewards: RewardsFn = async () => {
  return fetchMorphoRewards(
    "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    base.id,
  );
};

export const fetchMwUsdcRewards: RewardsFn = async () => {
  return fetchMorphoRewards(
    "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    base.id,
  );
};

export const fetchMwEthRewards: RewardsFn = async () => {
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
      }
    `,
    { address: vaultAddress, chainId: chainId },
  );

  // TODO: Convert the response into an AnyRewards[]
  const sampleRewardsList: AnyReward[] = [
    { type: "transferableToken", apy: 0n, tokenAddress: "0x" },
  ];

  return sampleRewardsList;
}
