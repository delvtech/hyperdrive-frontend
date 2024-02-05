import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { makeQueryKey } from "src/base/makeQueryKey";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useMaxShort(hyperdrive: HyperdriveConfig): {
  maxShort: bigint | undefined;
  maxShortFormatted: string | undefined;
  maxShortStatus: "error" | "success" | "loading";
} {
  const { appConfig } = useAppConfigOld();

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
    maxShort: data?.maxBondsOut,
    maxShortFormatted: data
      ? dnum.format([data.maxBondsOut, hyperdrive.baseToken.decimals], 2)
      : undefined,
    maxShortStatus: status,
  };
}
