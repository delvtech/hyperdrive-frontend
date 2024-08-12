import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { PORTFOLIO_ROUTE } from "src/ui/markets/routes";
import { Portfolio } from "src/ui/portfolio/Portfolio";
import { z } from "zod";
export const Route = createFileRoute(PORTFOLIO_ROUTE)({
  component: () => (
    <Page>
      <Portfolio />
    </Page>
  ),
  validateSearch: z.object({
    position: z.enum(["longs", "shorts", "lp"]).optional(),
    openOrClosed: z.enum(["open", "closed"]).optional(),
  }),
});
