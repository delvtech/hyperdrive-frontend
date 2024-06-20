import { createFileRoute } from "@tanstack/react-router";
import { BRIDGE_ROUTE } from "src/ui/bridge/routes";
export const Route = createFileRoute(BRIDGE_ROUTE)({
  component: () => <div>hi</div>,
});
