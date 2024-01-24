import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { formatUnits } from "viem";

export function useCurrentLongPrice(hyperdrive: HyperdriveConfig): {
  longPrice: { price: bigint; formatted: string } | undefined;
  longPriceStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("current-long-price", {
      hyperdriveAddress: hyperdrive.address,
    }),
    queryFn: queryEnabled
      ? async () => {
          const price = await readHyperdrive.getLongPrice();
          return {
            price,
            formatted: formatUnits(price, hyperdrive.baseToken.decimals),
          };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    longPrice: data,
    longPriceStatus: status,
  };
}
