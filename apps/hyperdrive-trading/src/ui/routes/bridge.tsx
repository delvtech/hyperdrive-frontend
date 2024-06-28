import { createFileRoute } from "@tanstack/react-router";
import Bridge from "src/ui/bridge/Bridge";
import { BRIDGE_ROUTE } from "src/ui/bridge/routes";

export const Route = createFileRoute(BRIDGE_ROUTE)({
  component: () => <Bridge />,
});
