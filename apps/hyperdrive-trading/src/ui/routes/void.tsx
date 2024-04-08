import { createFileRoute } from "@tanstack/react-router";

/**
 * An empty route that does nothing.
 */
export const Route = createFileRoute("/void")({
  component: () => <></>,
});
