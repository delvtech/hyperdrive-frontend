import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Market } from "src/ui/markets/Market";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { z } from "zod";

export const Route = createFileRoute(MARKET_DETAILS_ROUTE)({
  component: () => (
    <Page>
      <Market />
    </Page>
  ),
  validateSearch: z.object({
    position: z.enum(["longs", "shorts", "lp"]).optional(),
    openOrClosed: z.enum(["open", "closed"]).optional(),
  }),
});
