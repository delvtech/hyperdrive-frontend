import { useParams } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export function Market(): ReactElement {
  const { address, chainId } = useParams({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfig();

  const market = appConfig?.hyperdrives.find(
    (hyperdrive) =>
      hyperdrive.address === address && hyperdrive.chainId === Number(chainId),
  );

  console.log("Market", market);

  return (
    <div className="flex justify-center bg-base-100 px-4 py-8">
      <Helmet>
        <title>
          {market ? `${market?.name} - Hyperdrive` : "Pool not found"}
        </title>
      </Helmet>
      {appConfig ? (
        <MarketDetailsBody hyperdrive={market ?? appConfig?.hyperdrives[0]} />
      ) : null}
    </div>
  );
}
