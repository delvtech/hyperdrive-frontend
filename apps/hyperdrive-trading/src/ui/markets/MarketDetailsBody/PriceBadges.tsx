import { parseFixed } from "@delvtech/fixed-point-wasm";
import { findToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Badge } from "src/ui/base/components/Badge";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";

export function PriceBadges({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const { longPrice, longPriceStatus } = useCurrentLongPrice(
    hyperdrive.address,
  );
  const baseToken = findToken({
    baseTokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });
  if (longPriceStatus !== "success") {
    return (
      <div className="flex w-full flex-row gap-8">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-8 w-64" />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2 font-dmMono md:flex-row md:gap-4">
      <Badge>
        1 hy{baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: longPrice ?? 0n,
          decimals: 18, // price is always 18 decimals
          places: baseToken.places,
        })}{" "}
        {baseToken.symbol}
      </Badge>
      <Badge>
        1 {baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: parseFixed(1, hyperdrive.decimals).div(longPrice || 1n)
            .bigint,
          decimals: hyperdrive.decimals,
          places: baseToken.places,
        })}{" "}
        hy{baseToken.symbol}
      </Badge>
    </div>
  );
}
