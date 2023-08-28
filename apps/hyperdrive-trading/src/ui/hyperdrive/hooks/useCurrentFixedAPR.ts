import { getFixedRateQuery } from "@hyperdrive/queries";
import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useHyperdriveContract } from "src/ui/hyperdrive/hooks/useHyperdriveContract";
import { usePublicClient } from "wagmi";

export function useCurrentFixedAPR(hyperdrive: Hyperdrive): {
  fixedAPR: { apr: bigint; formatted: string } | undefined;
  fixedAPRStatus: "loading" | "error" | "success";
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();
  const contract = useHyperdriveContract(hyperdrive.address);

  const { data, status } = useQuery(
    getFixedRateQuery({
      contract,
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient,
      queryClient,
    }),
  );

  return {
    fixedAPR: data,
    fixedAPRStatus: status,
  };
}
