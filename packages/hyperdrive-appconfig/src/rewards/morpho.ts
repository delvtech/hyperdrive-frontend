import { fixed } from "@delvtech/fixed-point-wasm";
import { AnyReward } from "src/rewards/types";
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

export async function fetchMorphoRewards(
  vaultAddress: `0x${string}`,
  chainId: number,
): Promise<AnyReward[]> {
  const rewards: AnyReward[] = [];
  console.log(`Fetching rewards for ${vaultAddress} on ${chainId}`);
  const uniformRewardResponse = await fetch(
    `https://rewards.morpho.org/v1/programs/?chains=${chainId}&active=true&type=uniform-reward`,
  );
  const uniformRewardResult = await uniformRewardResponse.json();

  const uniformReward = uniformRewardResult.data[0];
  let currentRate = fixed(0n, 15);
  if (uniformReward) {
    currentRate = fixed(uniformReward.current_rates[0].per_dollar_per_year, 15);
  }
  rewards.push({
    type: "nonTransferableToken",
    tokensPerThousandUsd: currentRate.bigint,
    depositDurationDays: 365,
    // TODO: This needs to be the address of the Morpho Token
    tokenAddress: vaultAddress,
  });
  console.log(rewards, "after push");

  // const response: MorphoRewardsResponse = await request(
  //   "https://blue-api.morpho.org/graphql",
  //   gql`
  //     query SupplyRewards($address: String!, $chainId: Int!) {
  //       vaultByAddress(address: $address, chainId: $chainId) {
  //         address
  //         state {
  //           totalSupply
  //           totalAssetsUsd
  //           rewards {
  //             supplyApr
  //             asset {
  //               address
  //               name
  //               chain {
  //                 id
  //               }
  //             }
  //           }
  //           allocation {
  //             supplyAssetsUsd
  //             market {
  //               state {
  //                 rewards {
  //                   supplyApr
  //                   asset {
  //                     address
  //                     name
  //                     chain {
  //                       id
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  //   { address: vaultAddress, chainId: chainId },
  // );

  // console.log(response, "morpho response");
  // // TODO: Convert the response into an AnyRewards[]
  // const sampleRewardsList: AnyReward[] = [
  //   { type: "transferableToken", apy: 0n, tokenAddress: "0x" },
  // ];

  return rewards;
}
