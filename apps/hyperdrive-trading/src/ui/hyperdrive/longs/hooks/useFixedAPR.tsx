import { getFixedAPRQuery } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export function useFixedAPR(hyperdrive: Hyperdrive): {
  fixedAPR: { apr: bigint; formatted: string } | undefined;
  fixedAPRStatus: "loading" | "error" | "success";
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();

  const { data, status } = useQuery(
    getFixedAPRQuery({
      hyperdriveAddress: hyperdrive.address,
      hyperdriveMathAddress: appConfig?.hyperdriveMath,
      publicClient: publicClient as any,
    }),
  );

  return {
    fixedAPR: data,
    fixedAPRStatus: status,
  };
}
