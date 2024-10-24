import { gql, request } from "graphql-request";
import { AnyReward } from "src/rewards/types";

export type MorphoRewardsResponse = {
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

export async function fetchMorphoRewards(
  vaultAddress: `0x${string}`,
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

  console.log(response);
  // TODO: Convert the response into a Rewards[]
  const sampleRewardsList = [
    { type: "apy", apy: 0n, tokenAddress: "0x" },
  ] as AnyReward[];

  return sampleRewardsList;
}
