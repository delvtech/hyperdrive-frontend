import { getHyperdrive, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { sdkCache } from "src/sdk/sdkCache";
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
          getHyperdrive({
            address,
            publicClient,
            cache: sdkCache,
          })
      : undefined,
  });

  return data;
}
