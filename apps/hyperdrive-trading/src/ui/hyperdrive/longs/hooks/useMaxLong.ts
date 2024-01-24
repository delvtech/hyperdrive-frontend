import { ReadHyperdrive } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useMaxLong(hyperdrive: HyperdriveConfig): {
  maxLong: Awaited<ReturnType<ReadHyperdrive["getMaxLong"]>> | undefined;
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
