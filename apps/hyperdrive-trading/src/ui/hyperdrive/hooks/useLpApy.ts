import { ContractReadOptions } from "@hyperdrive/sdk";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { Address } from "viem";
import { useBlockNumber, useChainId } from "wagmi";
import { usePoolInfo } from "./usePoolInfo";

export function useLpApy(hyperdriveAddress: Address): { LpApy: string } {
  const chainId = useChainId();
  const { data: blockNumber } = useBlockNumber();
  const { poolInfo: currentPoolInfo } = usePoolInfo(hyperdriveAddress);

  //TODO: Change this to blocks per day for the chain currently in use.
  const blocksPerDay = 4175n;
  const blockNumber7DaysAgo = blockNumber && blockNumber - blocksPerDay * 7n;
  const poolInfoArgs =
    chainId === +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID
      ? { blockNumber: blockNumber7DaysAgo }
      : { blockTag: "earliest" };

  const { poolInfo: previousPoolInfo } = usePoolInfo(
    hyperdriveAddress,
    poolInfoArgs as ContractReadOptions,
  );

  return {
    LpApy: calculateAnnualizedPercentageChange({
      amountBefore: previousPoolInfo?.lpSharePrice ?? 0n,
      amountAfter: currentPoolInfo?.lpSharePrice ?? 0n,
      days: 365,
    }),
  };
}
