import { FileRoute } from "@tanstack/react-router";

import { Market } from "src/ui/markets/Market";
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
