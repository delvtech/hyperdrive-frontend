import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useMaxLong(hyperdrive: Hyperdrive): {
  maxLong:
    | {
        maxBaseIn: bigint;
        formattedMaxBaseIn: string;
        maxBondsOut: bigint;
        formattedMaxBondsOut: string;
      }
    | undefined;
  maxLongStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey("maxLong", {
      hyperdriveAddress: hyperdrive.address,
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getMaxLong() : undefined,
  });

  return {
    maxLong: data,
    maxLongStatus: status,
  };
}
