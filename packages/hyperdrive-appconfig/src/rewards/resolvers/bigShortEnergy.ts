import { parseFixed } from "@delvtech/fixed-point-wasm";
import _ from "lodash";
import { fetchJson } from "src/base/fetchJson";
import { RewardConfig, RewardResolver } from "src/rewards/types";
import { Address } from "viem";
import { gnosis, mainnet } from "viem/chains";

interface MerklV3RewardsResult {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        apr: number;
        campaignParameters: {
          baseToken: Address;
        };
      };
    };
  };
}

export const fetchBigShortEnergyRewards: RewardResolver = async (
  publicClient,
) => {
  const chainId = publicClient.chain?.id as number;

  const result = (await fetchJson(
    `https://api.merkl.xyz/v3/campaigns?types=21&chainIds=${chainId}`,
  )) as Record<string, any>;

  const { apr, baseToken } = getAprAndBaseToken(result);

  return [
    {
      chainId,
      type: "apy",
      apy: apr,
      tokenAddress: baseToken,
    },
  ];
};

export const bigShortEnergyRewards: RewardConfig = {
  id: "bigShortEnergyRewards",
  chainIds: [gnosis.id, mainnet.id],
  resolver: fetchBigShortEnergyRewards,
};

/**
 * Returns the apr and base token address from Merkl's v3 rewards api
 */
function getAprAndBaseToken(data: MerklV3RewardsResult): {
  apr: bigint;
  baseToken: Address;
} {
  const apr = _.chain(data)
    .values()
    .flatMap(_.values)
    .flatMap(_.values)
    .map("apr")
    .first()
    .value();

  const baseToken = _.chain(data)
    .values()
    .flatMap(_.values)
    .flatMap(_.values)
    .map("campaignParameters.baseToken")
    .first()
    .value();

  return {
    apr: parseFixed(
      // the apr is returned from merkl already formatted as a percent, so we
      // need to divide by 100
      apr / 100,
    ).bigint,
    baseToken,
  };
}
