import { useQuery } from "@tanstack/react-query";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";

import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useCurrentFixedAPR(hyperdrive: HyperdriveConfig): {
  fixedAPR: { apr: bigint; formatted: string } | undefined;
  fixedAPRStatus: "loading" | "error" | "success";
} {
  const { appConfig } = useAppConfigOld();

  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("fixedAPR", { appConfig }),
    queryFn: queryEnabled
      ? async () => {
          const fixedRate = await readHyperdrive.getSpotRate();
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
