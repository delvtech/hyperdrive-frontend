import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { divideBigInt } from "src/base/divideBigInt";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { AddLiquidityModalButton } from "src/ui/hyperdrive/lp/AddLiquidityModalButton/AddLiquidityModalButton";
import { OpenShortModalButton } from "src/ui/hyperdrive/shorts/OpenShortModalButton/OpenShortModalButton";
import { AllMarketsBreadcrumb } from "src/ui/markets/MarketSelect/AllMarketsBreadcrumb";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { PositionsSection } from "src/ui/portfolio/PositionsSection/PositionsSection";
import { YourBalanceWell } from "src/ui/portfolio/YourBalanceWell/YourBalanceWell";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}
export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  const { longPrice } = useCurrentLongPrice(hyperdrive);

  return (
    <div className="flex max-w-6xl flex-col gap-16 ">
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-wrap items-start justify-center md:justify-between">
          <div className="flex flex-col">
            {/* Breadcrumbs */}
            <div className="flex flex-1 justify-between">
              <div className="daisy-breadcrumbs md:text-h6">
                <ul>
                  <li>
                    <AllMarketsBreadcrumb />
                  </li>
                  <li>
                    {hyperdrive.baseToken.symbol} /{" "}
                    {`hy${hyperdrive.baseToken.symbol}`}
                  </li>
                </ul>
              </div>
            </div>

            {/* Market name */}
            <h3 className="my-2 inline-flex items-center gap-2 font-semibold md:my-0">
              <div className="daisy-avatar-group -space-x-6">
                <div className="daisy-placeholder daisy-avatar">
                  <div className="w-14 bg-neutral-focus text-neutral-content">
                    <span className="text-sm">
                      <img src={hyperdrive.baseToken.iconUrl} />
                    </span>
                  </div>
                </div>
                <div className="daisy-placeholder daisy-avatar">
                  <div className="w-14 bg-neutral-focus">
                    <span className="text-sm text-secondary">
                      hy{hyperdrive.baseToken.symbol}
                    </span>
                  </div>
                </div>
              </div>
              {hyperdrive.baseToken.symbol} / hy{hyperdrive.baseToken.symbol}
            </h3>

            {/* Price badges */}
            {longPrice ? (
              <div className="mt-4 flex gap-4">
                <div className="daisy-badge daisy-badge-neutral daisy-badge-lg text-base-content">
                  <img
                    className="mr-1 w-4"
                    src={hyperdrive.baseToken.iconUrl}
                  />{" "}
                  1 {hyperdrive.baseToken.symbol} ≈{" "}
                  {formatBalance({
                    balance: divideBigInt(
                      parseUnits("1", 18),
                      longPrice.price,
                      hyperdrive.baseToken.decimals,
                    ),

                    decimals: hyperdrive.baseToken.decimals,
                    places: 3,
                  })}{" "}
                  hy{hyperdrive.baseToken.symbol}
                </div>
                <div className="daisy-badge daisy-badge-neutral daisy-badge-lg text-base-content">
                  <span className="mr-1 text-[6pt] text-secondary">hyBASE</span>{" "}
                  1 hy{hyperdrive.baseToken.symbol} ≈{" "}
                  {formatBalance({
                    balance: longPrice.price,
                    decimals: hyperdrive.baseToken.decimals,
                    places: 3,
                  })}{" "}
                  {hyperdrive.baseToken.symbol}
                </div>
              </div>
            ) : null}
          </div>
          <YourBalanceWell token={hyperdrive.baseToken} />
        </div>

        {/* Stats row */}
        <MarketStats hyperdrive={hyperdrive} />
      </div>

      <div>
        <div className="flex flex-wrap justify-center gap-16">
          <OpenLongModalButton hyperdrive={hyperdrive} />
          <OpenShortModalButton hyperdrive={hyperdrive} />
          <AddLiquidityModalButton hyperdrive={hyperdrive} />
        </div>
      </div>

      <PositionsSection hyperdrive={hyperdrive} />

      <FAQ />
    </div>
  );
}
