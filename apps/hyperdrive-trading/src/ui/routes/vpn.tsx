import { createFileRoute } from "@tanstack/react-router";
import { VpnDetectedMessage } from "src/ui/compliance/VpnDetectedMessage";

export const Route = createFileRoute("/vpn")({
  component: () => (
    <div className="flex min-h-screen w-screen items-center justify-center px-[2vh]">
      <VpnDetectedMessage />
    </div>
  ),
});
