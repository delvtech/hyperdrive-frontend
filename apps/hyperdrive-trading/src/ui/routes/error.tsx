import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { UnexpectedErrorMessage } from "src/ui/base/components/UnexpectedErrorMessage";

export const Route = createFileRoute("/error")({
  component: () => (
    <Page>
      <UnexpectedErrorMessage />
    </Page>
  ),
});
