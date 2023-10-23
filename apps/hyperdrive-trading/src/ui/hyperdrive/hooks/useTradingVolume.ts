import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export function useTradingVolume(
  hyperdriveAddress: Address,
  currentBlockNumber: bigint | undefined,
): {
  totalVolume: bigint;
  longVolume: bigint;
  shortVolume: bigint;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && currentBlockNumber !== undefined;
  const { data: volume } = useQuery({
    queryKey: makeQueryKey("tradingVolume", {
      hyperdriveAddress,
      currentBlockNumber: currentBlockNumber?.toString(),
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getTradingVolume() : undefined,
    enabled: queryEnabled,
  });
  return {
    totalVolume: volume?.totalVolume ?? 0n,
    longVolume: volume?.longVolume ?? 0n,
    shortVolume: volume?.shortVolume ?? 0n,
  };
}
