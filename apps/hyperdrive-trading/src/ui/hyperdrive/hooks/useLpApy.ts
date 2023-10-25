import { useQuery } from "@tanstack/react-query";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";

export function useLpApy(hyperdriveAddress: Address): any {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data: blockNumber } = useBlockNumber();

  const { data: currentPoolInfo, status: poolInfoStatus } = useQuery({
    queryKey: makeQueryKey("poolInfo", { marketAddress: hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getPoolInfo({ blockNumber })
      : undefined,
    enabled: queryEnabled,
  });

  const blocksPerDay = 10n;
  const blockNumber7DaysAgo = blockNumber && blockNumber - blocksPerDay * 7n;

  const { data: previousPoolInfo } = useQuery({
    queryKey: makeQueryKey("poolInfo", { marketAddress: hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getPoolInfo({ blockNumber: blockNumber7DaysAgo })
      : undefined,
    enabled: queryEnabled,
  });

  console.log(
    previousPoolInfo?.lpSharePrice,
    currentPoolInfo?.lpSharePrice,
    blockNumber,
    blockNumber7DaysAgo,
  );

  return calculateAnnualizedPercentageChange({
    amountBefore: previousPoolInfo?.lpSharePrice ?? 0n,
    amountAfter: currentPoolInfo?.lpSharePrice ?? 0n,
    days: 7,
  });
}
