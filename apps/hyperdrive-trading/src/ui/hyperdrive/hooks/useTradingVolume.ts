import { useQuery } from "@tanstack/react-query";
import { DAILY_AVERAGE_BLOCK_TOTAL } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address, BlockTag } from "viem";
export function useTradingVolume(
  hyperdriveAddress: Address,
  currentBlockNumber: bigint | undefined,
): {
  totalVolume: bigint | undefined;
  longVolume: bigint | undefined;
  shortVolume: bigint | undefined;
  tradingVolumeStatus: "loading" | "error" | "success";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && currentBlockNumber !== undefined;

  // If we have at least 1 day of blocks, go back by 1 day, otherwise
  // start from the earliest block we have
  let fromBlock: BlockTag | bigint = "earliest";
  if (
    currentBlockNumber &&
    currentBlockNumber - DAILY_AVERAGE_BLOCK_TOTAL > 0
  ) {
    fromBlock = currentBlockNumber - DAILY_AVERAGE_BLOCK_TOTAL;
  }

  const { data: volume, status } = useQuery({
    queryKey: makeQueryKey("tradingVolume", {
      hyperdriveAddress,
      currentBlockNumber: currentBlockNumber?.toString(),
      fromBlock: fromBlock.toString(),
    }),
    queryFn: queryEnabled
      ? () => {
          return readHyperdrive.getTradingVolume({
            fromBlock,
            toBlock: currentBlockNumber,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });
  return {
    totalVolume: volume?.totalVolume,
    longVolume: volume?.longVolume,
    shortVolume: volume?.shortVolume,
    tradingVolumeStatus: status,
  };
}
