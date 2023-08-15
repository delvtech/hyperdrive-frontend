import { getCurrentFixedAPRQuery } from "@hyperdrive/queries";
import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PublicClient } from "viem";
import { usePublicClient } from "wagmi";

export function useCurrentFixedAPR(hyperdrive: Hyperdrive): {
  fixedAPR: { apr: bigint; formatted: string } | undefined;
  fixedAPRStatus: "loading" | "error" | "success";
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();

  const { data, status } = useQuery(
    getCurrentFixedAPRQuery({
      hyperdriveAddress: hyperdrive.address,
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient: publicClient as PublicClient,
      queryClient,
    }),
  );

  return {
    fixedAPR: data,
    fixedAPRStatus: status,
  };
}
