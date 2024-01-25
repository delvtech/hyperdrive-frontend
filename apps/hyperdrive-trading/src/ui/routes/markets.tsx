import { FileRoute } from "@tanstack/react-router";
import { Markets } from "src/ui/markets/AllMarketsTable/AllMarketsTable";
import { ALL_MARKETS_ROUTE } from "src/ui/markets/routes";
export const Route = new FileRoute(ALL_MARKETS_ROUTE).createRoute({
  component: () => <Markets />,
});
