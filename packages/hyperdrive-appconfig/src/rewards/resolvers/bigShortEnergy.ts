import { parseFixed } from "@delvtech/fixed-point-wasm";
import _ from "lodash";
import { fetchJson } from "src/base/fetchJson";
import { AnyReward, RewardConfig, RewardResolver } from "src/rewards/types";
import { Address } from "viem";
import { gnosis, mainnet } from "viem/chains";

interface MerklV3RewardsResult {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        apr: number;
        /**
         * in seconds
         */
        startTimestamp: number;
        /**
         * in seconds
         */
        endTimestamp: number;
        campaignParameters: {
          baseToken: Address;
        };
      };
    };
  };
}

export const fetchBigShortEnergyRewards: RewardResolver = async (
  publicClient,
): Promise<AnyReward[]> => {
  const chainId = publicClient.chain?.id as number;

  const result = (await fetchJson(
    `https://api.merkl.xyz/v3/campaigns?types=21&chainIds=${chainId}`,
  )) as Record<string, any>;

  const { apr, baseToken, endTimestamp, startTimestamp } =
    parseMerklRewards(result);

  return [
    {
      chainId,
      type: "apy",
      apy: apr,
      tokenAddress: baseToken,
      moreInfoUrl: "https://blog.delv.tech/big-short-energy-2/",
      endTimestamp,
      startTimestamp,
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
function parseMerklRewards(data: MerklV3RewardsResult): {
  apr: bigint;
  baseToken: Address;
  startTimestamp: number;
  endTimestamp: number;
} {
  const apr = _.chain(data)
    .values()
    .flatMap(_.values)
    .flatMap(_.values)
    .map("apr")
    .first()
    .value();

  const startTimestamp = _.chain(data)
    .values()
    .flatMap(_.values)
    .flatMap(_.values)
    .map("startTimestamp")
    .first()
    .value();

  const endTimestamp = _.chain(data)
    .values()
    .flatMap(_.values)
    .flatMap(_.values)
    .map("endTimestamp")
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
    apr: parseFixed(apr)
      // the apr is returned from merkl already formatted as a percent, so we
      // need to divide by 100
      .div(100, 0).bigint,
    startTimestamp,
    endTimestamp,
    baseToken,
  };
}
