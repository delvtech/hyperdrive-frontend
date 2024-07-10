import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Changelog } from "src/ui/changelog/Changelog";
import { z } from "zod";

export const Route = createFileRoute("/changelog")({
  component: () => (
    <Page>
      <Changelog />
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
