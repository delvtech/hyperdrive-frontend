import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
type UseTradingVolumeResult = {
  tradingVolume: string | undefined;
};
export function useTradingVolume(
  hyperdriveAddress: Address,
  currentBlockNumber: bigint,
): UseTradingVolumeResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data: tradingVolume } = useQuery({
    queryKey: makeQueryKey("tradingVolume", {
      hyperdriveAddress,
      currentBlockNumber,
    }),
    queryFn: queryEnabled
      ? () => {
          const tradingVolume = readHyperdrive.getTradingVolume();
          return {
            tradingVolume: tradingVolume,
            formatted: tradingVolume?.toString(),
          };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return { tradingVolume: tradingVolume?.formatted };
}
