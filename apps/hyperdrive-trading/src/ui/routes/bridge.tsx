import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import Bridge from "src/ui/bridge/Bridge";
import { BRIDGE_ROUTE } from "src/ui/bridge/routes";
import { z } from "zod";

const bridgeRouteValidateSearch = z.object({
  token: z.string(),
  destination: z.number(),
});
export const Route = createFileRoute(BRIDGE_ROUTE)({
  validateSearch: bridgeRouteValidateSearch,
  component: () => (
    <Page>
      <Bridge />
    </Page>
  ),
});
