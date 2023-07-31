import { getMaxShortQuery, GetMaxShortResult } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PublicClient } from "viem";
import { usePublicClient } from "wagmi";

export function useMaxShort(hyperdrive: Hyperdrive): {
  maxShort: GetMaxShortResult | undefined;
  maxShortStatus: QueryStatus;
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();

  const { data, status } = useQuery(
    getMaxShortQuery({
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient: publicClient as PublicClient,
      hyperdriveAddress: hyperdrive.address,
      queryClient,
    }),
  );

  return {
    maxShort: data,
    maxShortStatus: status,
  };
}
