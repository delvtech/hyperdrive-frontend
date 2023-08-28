import { GetMaxShortResult } from "@hyperdrive/core";
import { getMaxShortQuery } from "@hyperdrive/queries";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useHyperdriveContract } from "src/ui/hyperdrive/hooks/useHyperdriveContract";
import { usePublicClient } from "wagmi";

export function useMaxShort(hyperdrive: Hyperdrive): {
  maxShort: GetMaxShortResult | undefined;
  maxShortStatus: QueryStatus;
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();
  const contract = useHyperdriveContract(hyperdrive.address);

  const { data, status } = useQuery(
    getMaxShortQuery({
      contract,
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient,
      queryClient,
    }),
  );

  return {
    maxShort: data,
    maxShortStatus: status,
  };
}
