import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getLpApy, LpApyResult } from "src/hyperdrive/getLpApy";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";
export function useLpApy({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): {
  lpApy: LpApyResult | undefined;
  lpApyStatus: "error" | "success" | "loading";
} {
  const { poolInfo: currentPoolInfo } = usePoolInfo({
    hyperdriveAddress,
    chainId,
  });

  const hyperdrive = getHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });

  const { data: blockNumber } = useBlockNumber({ chainId });
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!blockNumber && !!currentPoolInfo;
  const { data, status } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "lpApy",
      params: {
        blockNumber,
        chainId,
        hyperdriveAddress,
      },
    }),
    queryFn: queryEnabled
      ? async () =>
          getLpApy({
            readHyperdrive,
            hyperdrive,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    lpApy: data,
    lpApyStatus: status,
  };
}
