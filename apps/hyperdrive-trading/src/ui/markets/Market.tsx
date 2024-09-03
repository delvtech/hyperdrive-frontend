import { useParams } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export function Market(): ReactElement {
  const { address, chainId } = useParams({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfig();
  const { isFlagEnabled: isPoolDetailsV2 } = useFeatureFlag("pool-details-v2");

  const market = appConfig?.hyperdrives.find(
    (hyperdrive) =>
      hyperdrive.address === address && hyperdrive.chainId === Number(chainId),
  );

  return (
    <div className="flex justify-center bg-base-100 px-4 py-8">
      <Helmet>
        <title>
          {market ? `${market?.name} - Hyperdrive` : "Pool not found"}
        </title>
      </Helmet>

      {isPoolDetailsV2 ? null : (
        <MarketDetailsBody hyperdrive={market ?? appConfig?.hyperdrives[0]} />
      )}
    </div>
  );
}
