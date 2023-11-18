import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { divideBigInt } from "src/base/divideBigInt";
import { parseUnits } from "src/base/parseUnits";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { AllMarketsBreadcrumb } from "src/ui/markets/MarketSelect/AllMarketsBreadcrumb";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { PositionsSection } from "src/ui/portfolio/PositionsSection/PositionsSection";
import { YourBalanceWell } from "src/ui/portfolio/YourBalanceWell/YourBalanceWell";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}
export function MarketDetailsBody({
  hyperdrive,
}: PositionsTableProps): ReactElement {
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  const { marketState } = useMarketState(hyperdrive.address);
  return (
    <div className="flex w-full max-w-screen-xl flex-col">
      <div className="mb-12 flex w-full flex-col gap-6">
        <div className="flex flex-wrap items-start justify-center md:justify-between">
          <div className="flex flex-col">
            <MarketBreadcrumbs hyperdrive={hyperdrive} />
            <MarketHeader hyperdrive={hyperdrive} longPrice={longPrice} />
          </div>
          <YourBalanceWell token={hyperdrive.baseToken} />
        </div>

        {/* Stats row */}
        <MarketStats hyperdrive={hyperdrive} />
        {marketState?.isPaused && (
          <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
        )}
      </div>

      <PositionsSection hyperdrive={hyperdrive} />
      {/* TODO: Move this to its own tab
      <div>
        <span className="mb-2 text-h5 font-bold ">Transactions</span>
        {transactionData && (
          <TransactionTable data={transactionData} hyperdrive={hyperdrive} />
        )}
      </div> */}
    </div>
  );
}

function MarketBreadcrumbs({ hyperdrive }: { hyperdrive: Hyperdrive }) {
  return (
    <div className="flex flex-1 justify-between">
      <div className="daisy-breadcrumbs md:text-h6">
        <ul>
          <li>
            <AllMarketsBreadcrumb />
          </li>
          <li>
            {hyperdrive.baseToken.symbol} / {`hy${hyperdrive.baseToken.symbol}`}
          </li>
        </ul>
      </div>
    </div>
  );
}

function MarketHeader({
  hyperdrive,
  longPrice,
}: {
  hyperdrive: Hyperdrive;
  longPrice: { price: bigint; formatted: string } | undefined;
}) {
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="daisy-avatar-group shrink-0 -space-x-4 p-2 font-semibold ">
        <div className="daisy-placeholder daisy-avatar">
          <div className="w-16 bg-base-200">
            <span className="text-body font-bold">
              {hyperdrive.baseToken.symbol}
            </span>
          </div>
        </div>
        <div className="daisy-placeholder daisy-avatar">
          <div className="w-16 bg-base-200">
            <span className="text-body font-bold">
              hy{hyperdrive.baseToken.symbol}
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <h3 className="items-center font-semibold md:my-0">
          {hyperdrive.baseToken.symbol} / hy{hyperdrive.baseToken.symbol}
        </h3>
        {longPrice ? (
          <PriceBadges hyperdrive={hyperdrive} longPrice={longPrice} />
        ) : null}
      </div>
    </div>
  );
}

function PriceBadges({
  hyperdrive,
  longPrice,
}: {
  hyperdrive: Hyperdrive;
  longPrice: { price: bigint; formatted: string };
}) {
  return (
    <div className="flex gap-4">
      <div className="daisy-badge daisy-badge-ghost daisy-badge-lg border border-base-300/5">
        1 hy{hyperdrive.baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: longPrice.price,
          decimals: hyperdrive.baseToken.decimals,
          places: 6,
        })}{" "}
        {hyperdrive.baseToken.symbol}
      </div>
      <div className="daisy-badge daisy-badge-ghost daisy-badge-lg border border-base-300/5">
        1 {hyperdrive.baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: divideBigInt(
            parseUnits("1", 18),
            longPrice.price,
            hyperdrive.baseToken.decimals,
          ),

          decimals: hyperdrive.baseToken.decimals,
          places: 6,
        })}{" "}
        hy{hyperdrive.baseToken.symbol}
      </div>
    </div>
  );
}
