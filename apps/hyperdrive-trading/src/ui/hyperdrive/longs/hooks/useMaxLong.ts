import { GetMaxLongResult } from "@hyperdrive/core";
import { getMaxLongQuery } from "@hyperdrive/queries";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useHyperdriveContract } from "src/ui/hyperdrive/hooks/useHyperdriveContract";
import { usePublicClient } from "wagmi";

export function useMaxLong(hyperdrive: Hyperdrive): {
  maxLong: GetMaxLongResult | undefined;
  maxLongStatus: QueryStatus;
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();
  const contract = useHyperdriveContract(hyperdrive.address);

  const { data, status } = useQuery(
    getMaxLongQuery({
      contract,
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient,
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
