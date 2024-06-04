import { useQuery } from "@tanstack/react-query";

import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useCurrentFixedAPR(hyperdriveAddress: Address): {
  fixedAPR: { apr: bigint; formatted: string } | undefined;
  fixedAPRStatus: "loading" | "error" | "success";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("fixedAPR", { address: hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => {
          const fixedRate = await readHyperdrive.getFixedApr();
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
