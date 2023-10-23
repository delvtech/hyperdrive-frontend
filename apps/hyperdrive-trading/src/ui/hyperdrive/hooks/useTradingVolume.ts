import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export function useTradingVolume(
  hyperdriveAddress: Address,
  currentBlockNumber: bigint | undefined,
): {
  totalVolume: bigint | undefined;
  longVolume: bigint | undefined;
  shortVolume: bigint | undefined;
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
    totalVolume: volume?.totalVolume,
    longVolume: volume?.longVolume,
    shortVolume: volume?.shortVolume,
  };
}
