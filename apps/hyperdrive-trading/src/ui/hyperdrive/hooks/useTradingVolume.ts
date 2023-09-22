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
  const { data: tradingVolume } = useQuery({
    queryKey: makeQueryKey("tradingVolume", {
      hyperdriveAddress,
      currentBlockNumber: currentBlockNumber?.toString(),
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getTradingVolume() : undefined,
    enabled: queryEnabled,
  });

  return {
    tradingVolume: tradingVolume,
    formatted: tradingVolume
      ? dnum.format([tradingVolume, 18], { digits: 2 })
      : undefined,
  };
}
