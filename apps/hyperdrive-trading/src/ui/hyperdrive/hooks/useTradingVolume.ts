import { useQuery } from "@tanstack/react-query";
import { DAILY_AVERAGE_BLOCK_TOTAL } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useChainId } from "wagmi";
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
  const chainId = useChainId();
  const fromBlock =
    currentBlockNumber &&
    chainId === +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID
      ? currentBlockNumber - DAILY_AVERAGE_BLOCK_TOTAL
      : "earliest";
  const { data: volume } = useQuery({
    queryKey: makeQueryKey("tradingVolume", {
      hyperdriveAddress,
      currentBlockNumber: currentBlockNumber?.toString(),
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.getTradingVolume({
            fromBlock,
            toBlock: currentBlockNumber,
          })
      : undefined,
    enabled: queryEnabled,
  });
  return {
    totalVolume: volume?.totalVolume,
    longVolume: volume?.longVolume,
    shortVolume: volume?.shortVolume,
  };
}
