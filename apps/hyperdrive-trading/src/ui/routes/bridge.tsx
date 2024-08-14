import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import Bridge from "src/ui/bridge/Bridge";
import { BRIDGE_ROUTE } from "src/ui/bridge/routes";

export const Route = createFileRoute(BRIDGE_ROUTE)({
  component: () => (
    <Page>
      <Bridge />
    </Page>
  ),
});
