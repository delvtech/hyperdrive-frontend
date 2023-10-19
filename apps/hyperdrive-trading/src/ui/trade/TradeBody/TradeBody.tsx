import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { divideBigInt } from "src/base/divideBigInt";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { useTransactionData } from "src/ui/hyperdrive/TransactionTable/useTransactionData";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { AddLiquidityModalButton } from "src/ui/hyperdrive/lp/AddLiquidityModalButton/AddLiquidityModalButton";
import { OpenShortModalButton } from "src/ui/hyperdrive/shorts/OpenShortModalButton/OpenShortModalButton";
import { AllMarketsBreadcrumb } from "src/ui/markets/MarketSelect/AllMarketsBreadcrumb";
import CustomBanner from "src/ui/markets/MarketStats/CustomBanner";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { PositionsSection } from "src/ui/portfolio/PositionsSection/PositionsSection";
import { YourBalanceWell } from "src/ui/portfolio/YourBalanceWell/YourBalanceWell";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}
export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  const { data: transactionData } = useTransactionData(hyperdrive);
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  const { marketState } = useMarketState(hyperdrive.address);
  return (
    <div className="flex max-w-6xl flex-col gap-16">
      <div className="flex w-full flex-col gap-6">
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
          <CustomBanner description="This market has been paused." />
        )}
      </div>

      <div>
        <div className="flex flex-wrap justify-center gap-16">
          <OpenLongModalButton hyperdrive={hyperdrive} />
          <OpenShortModalButton hyperdrive={hyperdrive} />
          <AddLiquidityModalButton hyperdrive={hyperdrive} />
        </div>
      </div>

      <PositionsSection hyperdrive={hyperdrive} />
      <div>
        <span className="mb-2 text-h5 font-bold ">Transactions</span>
        {transactionData && (
          <TransactionTable data={transactionData} hyperdrive={hyperdrive} />
        )}
      </div>
      <FAQ />
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
