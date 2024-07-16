import { createRootRoute, Outlet } from "@tanstack/react-router";
import { EmptyContainer } from "src/ui/app/EmptyContainer";
import { UnexpectedErrorMessage } from "src/ui/base/components/UnexpectedErrorMessage";
import { useVpnScreen } from "src/ui/compliance/hooks/useVpnScreen";
import { VpnDetectedMessage } from "src/ui/compliance/VpnDetectedMessage";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  const response = useVpnScreen();

  if (response?.error) {
    console.error(response.error);
    return (
      <EmptyContainer>
        <UnexpectedErrorMessage />
      </EmptyContainer>
    );
  }

  if (response?.isBlocked) {
    return (
      <EmptyContainer>
        <VpnDetectedMessage />
      </EmptyContainer>
    );
  }

  return response && <Outlet />;
}
