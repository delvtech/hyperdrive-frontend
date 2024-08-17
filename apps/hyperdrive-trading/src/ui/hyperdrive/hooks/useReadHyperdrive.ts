import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ReadHyperdrive | undefined {
  const appConfig = useAppConfig();
  const pool = appConfig.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === address,
  );
  const publicClient = usePublicClient({ chainId: pool?.chainId });

  const enabled = !!address && !!publicClient;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadHyperdrive", {
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
