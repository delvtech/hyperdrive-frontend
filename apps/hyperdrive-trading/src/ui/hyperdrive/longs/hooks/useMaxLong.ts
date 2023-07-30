import { getMaxLongQuery, GetMaxLongResult } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PublicClient } from "viem";
import { usePublicClient } from "wagmi";

export function useMaxLong(hyperdrive: Hyperdrive): {
  maxLong: GetMaxLongResult | undefined;
  maxLongStatus: QueryStatus;
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();

  const { data, status } = useQuery(
    getMaxLongQuery({
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient: publicClient as PublicClient,
      hyperdriveAddress: hyperdrive.address,
      queryClient,
      // TODO: What should this be?
      maxIterations: 15,
    }),
  );

  return {
    maxLong: data,
    maxLongStatus: status,
  };
}
