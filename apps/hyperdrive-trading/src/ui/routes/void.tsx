import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";

/**
 * An empty route that does nothing.
 */
export const Route = createFileRoute("/void")({
  component: () => <Page />,
});
