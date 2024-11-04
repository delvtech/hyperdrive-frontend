import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { parseAbi } from "abitype";
import { RewardsResolver } from "src/rewards/types";
import { getDefiLlamaTokenPrice } from "src/tokens/prices";

const AERO_TOKEN_ADDRESS = "0x940181a94A35A4569E4529A3CDfB74e38FD98631";
export const fetchAeroRewards: RewardsResolver = async (publicClient) => {
  // Amount of AERO rewarded per second (~1.9 AERO per second)
  const rewardRate = await publicClient.readContract({
    address: "0x4F09bAb2f0E15e2A078A227FE1537665F55b8360",
    functionName: "rewardRate",
    abi: parseAbi(gaugeAbi),
  });
  const fixedPointRate = fixed(rewardRate);

  // Multiply this by the number of seconds in a year
  const secondsPerYear = 31_536_000;
  const fixedSecondsPerYear = parseFixed(secondsPerYear);
  const aeroRewardsPerYear = fixedPointRate.mul(fixedSecondsPerYear);

  // TODO: DRY this up by importing the correct fiat price resolver
  const aeroPrice = await getDefiLlamaTokenPrice({
    // price per AERO token
    tokenAddress: AERO_TOKEN_ADDRESS,
    chainId: 8543,
  });

  const dollarAmountRewardedPerYear = aeroRewardsPerYear.mul(fixed(aeroPrice));

  const totalSupply = await publicClient.readContract({
    address: "0x4F09bAb2f0E15e2A078A227FE1537665F55b8360",
    functionName: "totalSupply",
    abi: parseAbi(gaugeAbi),
  });

  const fixedTotalSupply = fixed(totalSupply);

  // TODO: DRY this up by importing the correct fiat price resolver
  const aeroLpPrice = await getDefiLlamaTokenPrice({
    // price per LP token
    tokenAddress: "0x6cDcb1C4A4D1C3C6d054b27AC5B77e89eAFb971d",
    chainId: 8543,
  });

  const dollarValueOfPool = fixed(aeroLpPrice).mul(fixedTotalSupply);

  let apr = fixed(0n);
  if (!dollarValueOfPool.eq(0n)) {
    apr = dollarAmountRewardedPerYear
      .div(dollarValueOfPool)
      .mul(parseFixed(100n));
  }
  return [
    {
      type: "transferableToken",
      apy: apr.bigint,
      chainId: 8543,
      tokenAddress: AERO_TOKEN_ADDRESS,
    },
  ];
};

export const gaugeAbi = [
  "function rewardRate() view returns (uint256)",
  "function totalSupply() view returns (uint256)",
] as const;
