import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, BlockTag } from "viem";

export function useTradingVolume(
  chainId: number,
  hyperdriveAddress: Address,
  currentBlockNumber: bigint | undefined,
): {
  totalVolume: bigint | undefined;
  longVolume: bigint | undefined;
  shortVolume: bigint | undefined;
  tradingVolumeStatus: "loading" | "error" | "success";
} {
  const hyperdrive = getHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && currentBlockNumber !== undefined;

  const dailyAverageBlocks =
    appConfig.chains[hyperdrive.chainId].dailyAverageBlocks;

  // If we have at least 1 day of blocks, go back by 1 day, otherwise
  // start from the earliest block we have
  let fromBlock: BlockTag | bigint = "earliest";
  if (currentBlockNumber && currentBlockNumber - dailyAverageBlocks > 0) {
    fromBlock = currentBlockNumber - dailyAverageBlocks;
  }

  const { data: volume, status } = useQuery({
    queryKey: makeQueryKey("tradingVolume", {
      chainId,
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
