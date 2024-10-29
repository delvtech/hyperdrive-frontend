import { Address } from "abitype";
import { gql, request } from "graphql-request";
import { AnyReward, RewardsResolver } from "src/rewards/types";

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

export const fetchMorphoRewards: RewardsResolver<
  [vaultAddress: Address, chainId: number]
> = () => {
  return async (
    vaultAddress: Address,
    chainId: number,
  ): Promise<AnyReward[]> => {
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
  };
};
