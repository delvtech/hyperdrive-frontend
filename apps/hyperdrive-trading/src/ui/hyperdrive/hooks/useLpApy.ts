import { useQuery } from "@tanstack/react-query";
import { HyperdriveConfig } from "src/appconfig/HyperdriveConfig";
import { makeQueryKey } from "src/base/makeQueryKey";
import { usePoolConfig } from "src/ui/hyperdrive/hooks/usePoolConfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useBlockNumber, useChainId } from "wagmi";

export function useLpApy(hyperdrive: HyperdriveConfig): {
  lpApy: number | undefined;
} {
  const chainId = useChainId();
  const isDevnet = !!import.meta.env.VITE_LOCALHOST_NODE_RPC_URL;
  const { data: blockNumber } = useBlockNumber();
  const { poolInfo: currentPoolInfo } = usePoolInfo(hyperdrive.address);
  const { poolConfig } = usePoolConfig(hyperdrive.address);
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled =
    !!readHyperdrive && !!blockNumber && !!currentPoolInfo && !!poolConfig;
  const { data } = useQuery({
    queryKey: makeQueryKey("getLpApy", {
      chainId,
      blockNumber: blockNumber?.toString(),
      hyperdrive: hyperdrive.address,
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
  };
}
