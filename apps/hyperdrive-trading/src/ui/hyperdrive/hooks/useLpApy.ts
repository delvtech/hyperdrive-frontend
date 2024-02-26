import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber, useChainId } from "wagmi";

export function useLpApy(hyperdriveAddress: Address): {
  lpApy: number | undefined;
  lpApyStatus: "error" | "success" | "loading";
} {
  const chainId = useChainId();
  const isDevnet = !!import.meta.env.VITE_LOCALHOST_NODE_RPC_URL;
  const { data: blockNumber } = useBlockNumber();
  const { poolInfo: currentPoolInfo } = usePoolInfo({ hyperdriveAddress });
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!blockNumber && !!currentPoolInfo;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("getLpApy", {
      chainId,
      blockNumber: blockNumber?.toString(),
      hyperdrive: hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () =>
          readHyperdrive.getLpApy({
            // If on devnet, start from block 1, otherwise start from 7 days ago
            // TODO: Update this on mainnet and testnet according to average daily blocks
            fromBlock: isDevnet ? 1n : blockNumber - 7000n * 7n,
            toBlock: blockNumber,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    lpApy: data?.lpApy,
    lpApyStatus: status,
  };
}
