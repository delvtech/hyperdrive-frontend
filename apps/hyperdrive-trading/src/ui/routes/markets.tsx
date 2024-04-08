import { createFileRoute } from "@tanstack/react-router";
import { Markets } from "src/ui/markets/Markets";
import { ALL_MARKETS_ROUTE } from "src/ui/markets/routes";
export const Route = createFileRoute(ALL_MARKETS_ROUTE)({
  component: () => <Markets />,
});
