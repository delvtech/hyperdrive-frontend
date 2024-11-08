import {
  appConfig,
  findHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, ReadWriteHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
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

  const enabled = !!address && !!drift;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadWriteHyperdrive", {
      chainId,
      address,
    }),
    enabled,
    queryFn: enabled
      ? () => {
          const { initializationBlock } = findHyperdriveConfig({
            hyperdriveAddress: address,
            hyperdriveChainId: chainId,
            hyperdrives: appConfig.hyperdrives,
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
