import { ReadWriteHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadWriteHyperdrive } from "src/hyperdrive/getReadWriteHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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

  const appConfig = useAppConfig();

  const enabled = !!address && !!publicClient && !!walletClient;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadWriteHyperdrive", {
      chainId,
      address,
    }),
    enabled,
    queryFn: enabled
      ? () =>
          getReadWriteHyperdrive({
            hyperdriveAddress: address,
            publicClient,
            walletClient,
            appConfig,
          })
      : undefined,
  });

  return data;
}
