import { createFileRoute } from "@tanstack/react-router";
import { EmptyContainer } from "src/ui/app/EmptyContainer";
import { RestrictedCountryMessage } from "src/ui/compliance/RestrictedCountryMessage";

export const Route = createFileRoute("/restricted_countries")({
  component: () => (
    <EmptyContainer>
      <RestrictedCountryMessage />
    </EmptyContainer>
  ),
});
