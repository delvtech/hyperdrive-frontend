import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { PointsMarkets } from "src/ui/markets/PointsMarkets/PointsMarkets";
import { POINTS_MARKETS_ROUTE } from "src/ui/markets/routes";
export const Route = createFileRoute(POINTS_MARKETS_ROUTE)({
  component: () => (
    <Page>
      <PointsMarkets />
    </Page>
  ),
});
