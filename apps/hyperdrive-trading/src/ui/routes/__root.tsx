import { createRootRoute, Outlet } from "@tanstack/react-router";
import { EmptyContainer } from "src/ui/app/EmptyContainer";
import { UnexpectedErrorMessage } from "src/ui/base/components/UnexpectedErrorMessage";
import { useVpnScreen } from "src/ui/compliance/hooks/useVpnScreen";
import { VpnDetectedMessage } from "src/ui/compliance/VpnDetectedMessage";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  const { enabled, screenResult } = useVpnScreen();

  if (!enabled) {
    return <Outlet />;
  }

  if (screenResult?.error) {
    console.error(screenResult.error);
    return (
      <EmptyContainer>
        <UnexpectedErrorMessage />
      </EmptyContainer>
    );
  }

  if (screenResult?.isBlocked) {
    return (
      <EmptyContainer>
        <VpnDetectedMessage />
      </EmptyContainer>
    );
  }

  return screenResult && <Outlet />;
}
