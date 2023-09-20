import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";

import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";
import { useReadHyperdrive } from "./useReadHyperdrive";

export function useCurrentFixedAPR(hyperdrive: Hyperdrive): {
  fixedAPR: { apr: bigint; formatted: string } | undefined;
  fixedAPRStatus: "loading" | "error" | "success";
} {
  const { appConfig } = useAppConfig();
  const publicClient = usePublicClient();
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("fixedAPR", { appConfig }),
    queryFn: queryEnabled
      ? async () => {
          const fixedRate = await readHyperdrive.getFixedRate();
          return { apr: fixedRate, formatted: formatRate(fixedRate) };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    fixedAPR: data,
    fixedAPRStatus: status,
  };
}
