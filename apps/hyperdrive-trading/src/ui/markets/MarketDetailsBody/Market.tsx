import { useLoaderData } from "@tanstack/react-router";
import { ReactElement } from "react";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";
import { useDevLogging } from "src/ui/hyperdrive/hooks/useDevLogging";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export function Market(): ReactElement {
  const { market: address } = useLoaderData({ from: MARKET_DETAILS_ROUTE });
  const { appConfig } = useAppConfigOld();
  console.log("appConfig", appConfig);
  const market = appConfig?.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === address,
  ) as HyperdriveConfigOld;
  useDevLogging(market);
  return (
    <div className="flex justify-center bg-base-100 px-4 py-8">
      <CommonHeadTags />
      <MarketDetailsBody hyperdrive={market ?? appConfig?.hyperdrives[0]} />
    </div>
  );
}
