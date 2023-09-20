import { GetMaxShortResult } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useMaxShort(hyperdrive: Hyperdrive): {
  maxShort: GetMaxShortResult | undefined;
  maxShortStatus: QueryStatus;
} {
  const { appConfig } = useAppConfig();

  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("maxShort", { appConfig, hyperdrive }),
    queryFn: queryEnabled
      ? async () => readHyperdrive.getMaxShort()
      : undefined,
    enabled: queryEnabled,
  });

  return {
    maxShort: data,
    maxShortStatus: status,
  };
}
