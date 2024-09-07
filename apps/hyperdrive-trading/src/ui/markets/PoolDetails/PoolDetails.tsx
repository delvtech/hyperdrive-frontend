import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { Link, useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { AccordionSection2 } from "src/ui/base/components/AccordionSection/AccordionSection";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenLongForm2 } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm2";
import { AddLiquidityForm2 } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm2";
import { OpenShortForm2 } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm2";
import { AssetStack } from "src/ui/markets/AssetStack";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { faqData2 } from "src/ui/onboarding/FAQ/faqData2";

export function PoolDetails({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const {
    // If no search param is specified, we default to showing the
    // Longs side of the market
    position: activePosition = "longs",
  } = useSearch({
    from: MARKET_DETAILS_ROUTE,
  });

  const { marketState } = useMarketState({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  return (
    <div className="flex w-[515px] flex-col gap-9">
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="flex items-center py-2 text-xs font-semibold text-neutral-content"
        >
          <ArrowLeftIcon className="mr-1 size-3" />
          Back to home
        </Link>
        <h1 className="flex items-center gap-2 text-h2">
          <AssetStack hyperdriveAddress={hyperdrive.address} />
          {appConfig.yieldSources[hyperdrive.yieldSource].shortName}
        </h1>
        {marketState?.isPaused && (
          <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
        )}
      </div>
      <div className="flex flex-col gap-16">
        {(() => {
          switch (activePosition) {
            case "longs":
              return <OpenLongForm2 hyperdrive={hyperdrive} />;
            case "shorts":
              return <OpenShortForm2 hyperdrive={hyperdrive} />;
            case "lp":
              return <AddLiquidityForm2 hyperdrive={hyperdrive} />;
          }
        })()}

        <FAQ />
      </div>
    </div>
  );
}
function FAQ() {
  return (
    // Add mx-2 so the FAQ lines up with the rest of the form
    <div className="mx-2 flex flex-col gap-6">
      <h4>FAQ</h4>

      <div className="flex flex-col gap-6">
        {faqData2.map(({ question, answer }, i) => (
          <AccordionSection2
            key={i}
            heading={
              <div
                className={classNames(
                  "pb-1 text-left text-md font-normal text-base-content/80 hover:text-white group-data-[open]:text-white",
                )}
              >
                {question}
              </div>
            }
          >
            <div className="flex flex-col gap-4 text-bodyText text-md text-base-content/80">
              {answer}
            </div>
          </AccordionSection2>
        ))}
      </div>
    </div>
  );
}
