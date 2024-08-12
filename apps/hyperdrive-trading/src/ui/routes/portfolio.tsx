import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { PORTFOLIO_ROUTE } from "src/ui/markets/routes";
import { Portfolio } from "src/ui/portfolio/Portfolio";

export const Route = createFileRoute(PORTFOLIO_ROUTE)({
  component: () => (
    <Page>
      <Portfolio />
    </Page>
  ),
});
