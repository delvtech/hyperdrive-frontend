import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { IneligibleAccountMessage } from "src/ui/compliance/IneligibleAccountMessage";

/**
 * An empty route that does nothing.
 */
export const Route = createFileRoute("/ineligible")({
  component: () => (
    <Page>
      <IneligibleAccountMessage />
    </Page>
  ),
});
