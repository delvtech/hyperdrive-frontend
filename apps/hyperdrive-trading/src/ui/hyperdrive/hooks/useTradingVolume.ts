import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export function useTradingVolume(
  hyperdriveAddress: Address,
  currentBlockNumber: bigint | undefined,
): { tradingVolume: bigint | undefined; formatted: string | undefined } {
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
    tradingVolume: volume.totalVolume,
    formatted: volume.totalVolume
      ? dnum.format([volume.totalVolume, 18], { digits: 0 })
      : undefined,
  };
}
