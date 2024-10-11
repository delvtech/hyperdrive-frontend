import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Landing } from "src/ui/landing/Landing";
import { LANDING_ROUTE } from "src/ui/landing/routes";
import { z } from "zod";

export const Route = createFileRoute(LANDING_ROUTE)({
  component: () => (
    <Page>
      <Landing />
    </Page>
  ),
  validateSearch: z.object({
    chains: z.array(z.number()).optional(),
    assets: z.array(z.string()).optional(),
  }),
});
