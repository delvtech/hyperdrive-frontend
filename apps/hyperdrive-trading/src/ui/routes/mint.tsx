import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { MintView } from "src/ui/mint/MintView";
import { MINT_ROUTE } from "src/ui/mint/routes";
export const Route = createFileRoute(MINT_ROUTE)({
  component: () => (
    <Page>
      <MintView />
    </Page>
  ),
});
