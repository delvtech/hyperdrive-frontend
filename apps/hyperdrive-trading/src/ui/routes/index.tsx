import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Landing } from "src/ui/landing/Landing";
import { LANDING_ROUTE } from "src/ui/landing/routes";

export const Route = createFileRoute(LANDING_ROUTE)({
  component: () => (
    <Page>
      <Landing />
    </Page>
  ),
});
