import { getCurrentLongPriceQuery, GetLongPriceResult } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export function useCurrentLongPrice(hyperdrive: Hyperdrive): {
  longPrice: GetLongPriceResult | undefined;
  longPriceStatus: QueryStatus;
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();

  const { data, status } = useQuery(
    getCurrentLongPriceQuery({
      hyperdriveAddress: hyperdrive.address,
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient: publicClient as any,
      queryClient,
    }),
  );

  return {
    longPrice: data,
    longPriceStatus: status,
  };
}
