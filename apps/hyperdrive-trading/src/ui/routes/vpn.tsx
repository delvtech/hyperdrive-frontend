import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { VpnDetectedMessage } from "src/ui/compliance/VpnDetectedMessage";

export const Route = createFileRoute("/vpn")({
  component: () => (
    <Page>
      <VpnDetectedMessage />
    </Page>
  ),
});
