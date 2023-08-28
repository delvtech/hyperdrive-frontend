import { GetLongPriceResult } from "@hyperdrive/core";
import { getCurrentLongPriceQuery } from "@hyperdrive/queries";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useHyperdriveContract } from "src/ui/hyperdrive/hooks/useHyperdriveContract";
import { PublicClient } from "viem";
import { usePublicClient } from "wagmi";

export function useCurrentLongPrice(hyperdrive: Hyperdrive): {
  longPrice: GetLongPriceResult | undefined;
  longPriceStatus: QueryStatus;
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();
  const contract = useHyperdriveContract(hyperdrive.address);

  const { data, status } = useQuery(
    getCurrentLongPriceQuery({
      contract,
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
