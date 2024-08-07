import { ReadWriteHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadWriteHyperdrive } from "src/hyperdrive/getReadWriteHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive(
  address: Address | undefined,
): ReadWriteHyperdrive | undefined {
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const appConfig = useAppConfig();

  const enabled = !!address && !!publicClient && !!walletClient;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadWriteHyperdrive", {
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
