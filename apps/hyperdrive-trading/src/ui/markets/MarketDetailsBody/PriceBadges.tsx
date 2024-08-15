import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { divideBigInt } from "src/base/divideBigInt";
import { parseUnits } from "src/base/parseUnits";
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
  const baseToken = findBaseToken({
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
          decimals: baseToken.decimals,
          places: baseToken.places,
        })}{" "}
        {baseToken.symbol}
      </Badge>
      <Badge>
        1 {baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: divideBigInt(
            parseUnits("1", 18),
            longPrice ?? 0n,
            baseToken.decimals,
          ),

          decimals: baseToken.decimals,
          places: baseToken.places,
        })}{" "}
        hy{baseToken.symbol}
      </Badge>
    </div>
  );
}
