import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Market } from "src/ui/markets/Market";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { z } from "zod";

const marketRouteParams = z.object({
  position: z.enum(["Longs", "Shorts", "LP"]).catch("Longs"),
  openOrClosed: z.enum(["Open", "Closed"]).catch("Open"),
});

export const Route = createFileRoute(MARKET_DETAILS_ROUTE)({
  component: () => (
    <Page>
      <Market />
    </Page>
  ),
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
