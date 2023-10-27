import {
  BoltIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { divideBigInt } from "src/base/divideBigInt";
import { parseUnits } from "src/base/parseUnits";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { ActionModalButton } from "src/ui/hyperdrive/ActionModalButton";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { useTransactionData } from "src/ui/hyperdrive/TransactionTable/useTransactionData";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { OpenShortForm } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm";
import { AllMarketsBreadcrumb } from "src/ui/markets/MarketSelect/AllMarketsBreadcrumb";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { PositionsSection } from "src/ui/portfolio/PositionsSection/PositionsSection";
import { YourBalanceWell } from "src/ui/portfolio/YourBalanceWell/YourBalanceWell";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}
export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  const { data: transactionData } = useTransactionData(hyperdrive);
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  const { marketState } = useMarketState(hyperdrive.address);
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  const { vaultRate } = useVaultRate({
    // TODO: temporary for now until this available via addresses.json
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });
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
        <CustomBanner
          icon={<ExclamationTriangleIcon className="h-6 w-6 text-warning" />}
          description="Notice! Any positions opened after Wednesday, October 25th, will not mature before the end of the competition."
        />
        {marketState?.isPaused && (
          <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        <ActionModalButton
          title={`Long hy${hyperdrive.baseToken.symbol}`}
          subtitle={`Earn ${fixedAPR?.formatted || "-"}% APR on ${
            hyperdrive.baseToken.symbol
          } `}
          description={`1 hy${hyperdrive.baseToken.symbol} is always worth 1
          ${hyperdrive.baseToken.symbol} at maturity. It's a predictable
          fixed rate yield.`}
          modalId="openLongModal"
          icon={<ClockIcon className="mb-2 h-16" />}
          modalContent={<OpenLongForm hyperdrive={hyperdrive} />}
          checklist={[
            "Fixed rate included in the price",
            "Minimal risk and maintenance",
            "Redeemable before term ends",
          ]}
          buttonText="Long"
        />

        <ActionModalButton
          title={`Short hy${hyperdrive.baseToken.symbol}`}
          subtitle={`Earn ${vaultRate?.formatted || "-"}% APY on ${
            hyperdrive.baseToken.symbol
          }`}
          description={`Profit when hy${hyperdrive.baseToken.symbol} price drops, while
          maximizing exposure to the yield source.`}
          modalId="openShortModal"
          icon={<BoltIcon className="mb-2 h-16" />}
          modalContent={<OpenShortForm market={hyperdrive} />}
          checklist={[
            `Fixed rate up, hy${hyperdrive.baseToken.symbol} price down`,
            "Maximize exposure to yield source",
            "Redeemable before term ends",
          ]}
          buttonText="Short"
        />

        <ActionModalButton
          title="Add Liquidity"
          subtitle={`Earn trading fees and interest`}
          description="Take the other side of every Long and Short. Earn fees and the
          yield source rate."
          modalId="addLpModal"
          icon={<SquaresPlusIcon className="mb-2 h-16" />}
          modalContent={<AddLiquidityForm market={hyperdrive} />}
          checklist={[
            `Single-sided deposit with ${hyperdrive.baseToken.symbol}`,
            "Idle liquidity earns yield source rate",
            "No terms or manual LP rollovers",
          ]}
          buttonText="Add liquidity"
        />
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
