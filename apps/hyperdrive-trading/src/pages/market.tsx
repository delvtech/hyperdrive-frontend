import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useDevLogging } from "src/ui/hyperdrive/hooks/useDevLogging";
import { NEW_MARKET_LAYOUT_FEATURE_FLAG } from "src/ui/markets/featureFlags";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { MarketDetailsBodyOld } from "src/ui/markets/MarketDetailsBody/MarketDetailsBodyOld";

export function Market(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as Hyperdrive;

  const { isFlagEnabled: showNewMarketLayout } = useFeatureFlag(
    NEW_MARKET_LAYOUT_FEATURE_FLAG,
  );
  useDevLogging(market);

  return (
    <div className="flex justify-center bg-base-100 py-8 px-4">
      <CommonHeadTags />
      {showNewMarketLayout ? (
        <MarketDetailsBody hyperdrive={market} />
      ) : (
        <MarketDetailsBodyOld hyperdrive={market} />
      )}
    </div>
  );
}
