import { FileRoute } from "@tanstack/react-router";

import { ReactElement } from "react";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useDevLogging } from "src/ui/hyperdrive/hooks/useDevLogging";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { z } from "zod";

const marketRouteParams = z.object({
  position: z.enum(["Longs", "Shorts", "LP"]).catch("Longs"),
  openOrClosed: z.enum(["Open", "Closed"]).catch("Open"),
});

export const Route = new FileRoute(MARKET_DETAILS_ROUTE).createRoute({
  component: () => <Market />,
  validateSearch: marketRouteParams,
  loaderDeps: ({ search: { position, openOrClosed } }) => {
    return {
      position,
      openOrClosed,
    };
  },
  loader: ({ params }) => {
    const market = params.address;
    return {
      market,
    };
  },
});
export function Market(): ReactElement {
  const { market: address } = Route.useLoaderData();
  const { appConfig } = useAppConfig();
  const market = appConfig?.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === address,
  ) as HyperdriveConfig;
  useDevLogging(market);
  return (
    <div className="flex justify-center bg-base-100 px-4 py-8">
      <CommonHeadTags />
      <MarketDetailsBody hyperdrive={market ?? appConfig?.hyperdrives[0]} />
    </div>
  );
}
