import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { usePoolConfig } from "src/ui/hyperdrive/hooks/usePoolConfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useBlockNumber, useChainId } from "wagmi";

export function useLpApy(hyperdrive: Hyperdrive): {
  lpApy: number | undefined;
} {
  const chainId = useChainId();
  const isCloudchain = chainId && +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID;
  const { data: blockNumber } = useBlockNumber();
  console.log("blockNumber", blockNumber);
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
            // Cloudchain can go back about half a days worth of blocks, whereas
            // we can just start from "earliest" on a local docker chain, since
            // there won't be enough blocks to start.
            fromBlock: isCloudchain ? blockNumber - 3500n : 0n,
            toBlock: blockNumber,
            positionDuration: poolConfig.positionDuration,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    lpApy: data?.lpApy,
  };
}
