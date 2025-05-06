import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Portfolio } from "src/ui/portfolio/Portfolio";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";
import { z } from "zod";

export const Route = createFileRoute(PORTFOLIO_ROUTE)({
  component: () => (
    <Page>
      <Portfolio />
    </Page>
  ),
  validateSearch: z.object({
    position: z.enum(["longs", "shorts", "lp", "rewards"]).optional(),
    account: z.string().optional(),
  }),
});
