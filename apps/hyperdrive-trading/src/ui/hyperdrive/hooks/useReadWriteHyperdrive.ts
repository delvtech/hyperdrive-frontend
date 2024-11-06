import { getHyperdrive, ReadWriteHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { sdkCache } from "src/sdk/sdkCache";
import { Address } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive({
  address,
  chainId,
}: {
  address: Address | undefined;
  chainId: number;
}): ReadWriteHyperdrive | undefined {
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({ chainId });

  const enabled = !!address && !!publicClient && !!walletClient;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadWriteHyperdrive", {
      chainId,
      address,
    }),
    enabled,
    queryFn: enabled
      ? () =>
          getHyperdrive({
            address,
            publicClient,
            walletClient,
            cache: sdkCache,
          })
      : undefined,
  });

  return data;
}
