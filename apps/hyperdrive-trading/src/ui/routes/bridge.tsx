import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { BRIDGE_ROUTE } from "src/ui/bridge/routes";

export const Route = createFileRoute(BRIDGE_ROUTE)({
  component: () => (
    <Page>
      <div>hi</div>
    </Page>
  ),
});
