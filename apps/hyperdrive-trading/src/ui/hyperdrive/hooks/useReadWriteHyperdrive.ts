import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, ReadWriteHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useReadWriteDrift } from "src/ui/drift/useDrift";
import { Address } from "viem";

export function useReadWriteHyperdrive({
  address,
  chainId,
}: {
  address: Address | undefined;
  chainId: number;
}): ReadWriteHyperdrive | undefined {
  const drift = useReadWriteDrift({ chainId });
  const appConfig = useAppConfigForConnectedChain();
  const enabled = !!address && !!drift;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadWriteHyperdrive", {
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
          });
        }
      : undefined,
  });

  return data;
}
