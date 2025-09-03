import { parseFixed } from "@delvtech/fixed-point-wasm";
import _ from "lodash";

import { Address } from "viem";

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
fetchBigShortEnergyRewards();

async function fetchBigShortEnergyRewards() {
  const chainId = 1;

  const result = (await fetchJson(
    `https://api.merkl.xyz/v3/campaigns?types=21&chainIds=${chainId}`,
  )) as Record<string, any>;

  const { apr, baseToken } = getAprAndBaseToken(result);
  console.log("baseToken", baseToken);
  console.log("apr", apr);

  return [
    {
      chainId,
      type: "apy",
      apy: BigInt(apr),
      tokenAddress: baseToken,
    },
  ];
}

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

  return { apr: parseFixed(apr).bigint, baseToken: baseToken };
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return (await response.json()) as Promise<T>;
}
