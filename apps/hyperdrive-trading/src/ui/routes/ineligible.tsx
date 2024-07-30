import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { IneligibleAccountMessage } from "src/ui/compliance/IneligibleAccountMessage";

export const Route = createFileRoute("/ineligible")({
  component: () => (
    <Page>
      <IneligibleAccountMessage />
    </Page>
  ),
});
