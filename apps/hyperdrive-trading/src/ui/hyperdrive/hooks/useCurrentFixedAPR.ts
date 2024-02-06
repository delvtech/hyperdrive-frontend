import { useQuery } from "@tanstack/react-query";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";

import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useCurrentFixedAPR(hyperdrive: HyperdriveConfigOld): {
  fixedAPR: { apr: bigint; formatted: string } | undefined;
  fixedAPRStatus: "loading" | "error" | "success";
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("fixedAPR", { address: hyperdrive.address }),
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
