import {
  appConfig,
  findHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, ReadHyperdrive } from "@delvtech/hyperdrive-js-core";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
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

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadHyperdrive", {
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
