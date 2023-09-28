import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useMaxShort(hyperdrive: Hyperdrive): {
  maxShort: bigint | undefined;
  maxShortFormatted: string | undefined;
  maxShortStatus: "error" | "success" | "pending";
} {
  const { appConfig } = useAppConfig();

  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("maxShort", { appConfig, hyperdrive }),
    queryFn: queryEnabled
      ? async () => await readHyperdrive.getMaxShort()
      : undefined,
    enabled: queryEnabled,
  });

  return {
    maxShort: data,
    maxShortFormatted: data
      ? dnum.format([data, hyperdrive.baseToken.decimals], 2)
      : undefined,
    maxShortStatus: status,
  };
}
