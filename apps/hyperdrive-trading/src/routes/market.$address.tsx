import { FileRoute } from "@tanstack/react-router";

import { ReactElement } from "react";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { z } from "zod";

const marketRouteParams = z.object({
  position: z.enum(["Longs", "Shorts", "LP"]).catch("Longs"),
  openOrClosed: z.enum(["Open", "Closed"]).catch("Open"),
});

export const Route = new FileRoute("/market/$address").createRoute({
  component: () => <Market />,
  validateSearch: marketRouteParams,
  loaderDeps: ({ search: { position, openOrClosed } }) => {
    return {
      position,
      openOrClosed,
    };
  },
  loader: ({ params, deps }) => {
    const market = params.address;
    const position = deps.position ?? "Longs";
    const openOrClosed = deps.openOrClosed ?? "Open";
    return {
      market,
      position,
      openOrClosed,
    };
  },
});
export function Market(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  // const market = useLoaderData({ from: "/market" }) as Hyperdrive;
  const { market: address } = Route.useLoaderData();
  const { appConfig } = useAppConfig();
  const market = appConfig?.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === address,
  );
  // useDevLogging(market);
  if (!market) {
    return <div>Market not found</div>;
  }

  return (
    <div className="flex justify-center bg-base-100 px-4 py-8">
      <CommonHeadTags />
      <MarketDetailsBody hyperdrive={market} />
    </div>
  );
}
