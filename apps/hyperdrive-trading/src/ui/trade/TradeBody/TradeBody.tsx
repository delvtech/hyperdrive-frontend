import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { AddLiquidityModalButton } from "src/ui/hyperdrive/lp/AddLiquidityModalButton/AddLiquidityModalButton";
import { OpenShortModalButton } from "src/ui/hyperdrive/shorts/OpenShortModalButton/OpenShortModalButton";
import { MarketSelect } from "src/ui/markets/MarketSelect/MarketSelect";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { YieldSourceLabel } from "src/ui/markets/YieldSourceLabel/YieldSourceLabel";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { PositionsSection } from "src/ui/portfolio/PositionsSection/PositionsSection";
import { YourBalanceWell } from "src/ui/portfolio/YourBalanceWell/YourBalanceWell";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}

export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  const { appConfig } = useAppConfig();
  const yieldSource = appConfig?.yieldSources[hyperdrive.yieldSource];

  return (
    <div className="flex max-w-4xl flex-col gap-16 ">
      {/* Name w/ market select */}
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-wrap items-start justify-center md:justify-between">
          <div className="flex shrink-0 flex-col">
            <div className="flex flex-1 justify-between">
              <YieldSourceLabel yieldSource={yieldSource} />
              <MarketSelect markets={[hyperdrive]} />
            </div>
            <p className="my-2 text-h3 font-semibold md:my-0">
              {hyperdrive.name}
            </p>
          </div>
          <YourBalanceWell token={hyperdrive.baseToken} />
        </div>

        {/* Stats row */}
        <MarketStats hyperdrive={hyperdrive} />
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-center gap-5  md:justify-between md:gap-10 ">
          <OpenLongModalButton hyperdrive={hyperdrive} />

          <OpenShortModalButton hyperdrive={hyperdrive} />

          <AddLiquidityModalButton />
        </div>
      </div>

      <PositionsSection hyperdrive={hyperdrive} />

      <FAQ />
    </div>
  );
}
