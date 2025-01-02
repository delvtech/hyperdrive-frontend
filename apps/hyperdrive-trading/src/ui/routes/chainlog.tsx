import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Chainlog } from "src/ui/chainlog/Chainlog";
import { CHAINLOG_ROUTE } from "src/ui/chainlog/routes";
import { z } from "zod";

export const Route = createFileRoute(CHAINLOG_ROUTE)({
  component: () => (
    <Page>
      <Chainlog />
    </Page>
  ),

  validateSearch: z.object({
    tab: z.enum(["pools", "factories"]).optional(),
    version: z.coerce
      .string()
      .regex(/^v\d+(\.\d+\.\d+)?$/)
      .optional(),
  }),
});
