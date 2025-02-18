import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useDrift } from "src/ui/drift/useDrift";
import { Address } from "viem";

export function useReadHyperdrive({
  chainId,
  address,
}: {
  chainId: number;
  address: Address | undefined;
}): ReadHyperdrive | undefined {
  const drift = useDrift({ chainId });
  const enabled = !!address && !!drift;
  const appConfig = useAppConfigForConnectedChain();
  const { data } = useQuery({
    queryKey: makeQueryKey("getReadHyperdrive", {
      chainId,
      address,
    }),
    enabled,
    queryFn: enabled
      ? () => {
          const { initializationBlock } = getHyperdriveConfig({
            hyperdriveAddress: address,
            hyperdriveChainId: chainId,
            appConfig,
          });
          return getHyperdrive({
            address,
            drift,
            earliestBlock: initializationBlock,
            zapContractAddress: appConfig.zaps[chainId]?.address,
          });
        }
      : undefined,
  });

  return data;
}
