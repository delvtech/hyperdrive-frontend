import { createFileRoute } from "@tanstack/react-router";
import { RestrictedCountryMessage } from "src/ui/compliance/RestrictedCountryMessage";

export const Route = createFileRoute("/restricted_countries")({
  component: () => (
    <div className="flex min-h-screen w-screen items-center justify-center px-[2vh]">
      <RestrictedCountryMessage />
    </div>
  ),
});
