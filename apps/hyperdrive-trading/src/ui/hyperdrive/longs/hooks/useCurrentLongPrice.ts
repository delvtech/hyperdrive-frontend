import { GetLongPriceResult } from "@hyperdrive/core";
import { getCurrentLongPriceQuery } from "@hyperdrive/queries";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PublicClient } from "viem";
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
      publicClient: publicClient as PublicClient,
      queryClient,
    }),
  );

  return {
    longPrice: data,
    longPriceStatus: status,
  };
}
