import { useQuery } from "@tanstack/react-query";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";
import { useBlockNumber, useChainId } from "wagmi";
import { usePoolInfo } from "./usePoolInfo";
import { useReadHyperdrive } from "./useReadHyperdrive";

export function useLpApy(hyperdriveAddress: Address): {
  lpApy: number | undefined;
} {
  const chainId = useChainId();
  const isCloudchain = chainId && +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID;
  const { data: blockNumber } = useBlockNumber();
  const { poolInfo: currentPoolInfo } = usePoolInfo(hyperdriveAddress);
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!blockNumber && !!currentPoolInfo;
  const { data } = useQuery({
    queryKey: makeQueryKey("getLpApy", {
      chainId,
      blockNumber: blockNumber?.toString(),
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () =>
          readHyperdrive.getLpApy({
            // Cloudchain can go back about half a days worth of blocks, whereas
            // we can just start from "earliest" on a local docker chain, since
            // there won't be enough blocks to start.
            fromBlock: isCloudchain ? blockNumber - 3500n : 0n,
            toBlock: blockNumber,
          })
      : undefined,
    enabled: queryEnabled,
  });
  const lpApy = calculateAnnualizedPercentageChange({
    amountBefore: data?.fromSharePrice ?? 0n,
    amountAfter: data?.toSharePrice ?? 0n,
    // 3.5 is the equivilant of 12 hours on cloudchain, which is the minimum
    days: 3.5,
  });
  return { lpApy };
}
