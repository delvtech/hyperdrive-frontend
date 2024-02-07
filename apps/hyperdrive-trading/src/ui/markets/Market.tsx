import { useLoaderData } from "@tanstack/react-router";
import { ReactElement } from "react";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export function Market(): ReactElement {
  const { market: address } = useLoaderData({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfig();

  const market = appConfig?.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === address,
  );

  return (
    <div className="flex justify-center bg-base-100 px-4 py-8">
      <CommonHeadTags />
      {appConfig ? (
        <MarketDetailsBody hyperdrive={market ?? appConfig?.hyperdrives[0]} />
      ) : null}
    </div>
  );
}
