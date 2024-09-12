import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { appConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useReadHyperdrive({
  chainId,
  address,
}: {
  chainId: number;
  address: Address | undefined;
}): ReadHyperdrive | undefined {
  const publicClient = usePublicClient({ chainId });

  const enabled = !!address && !!publicClient;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadHyperdrive", {
      chainId,
      address,
    }),
    enabled,
    queryFn: enabled
      ? () =>
          getReadHyperdrive({
            hyperdriveAddress: address,
            publicClient,
            appConfig,
          })
      : undefined,
  });

  return data;
}
