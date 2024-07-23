import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Helmet } from "react-helmet";
import { Plausible } from "src/ui/analytics/Plausible";
import { EmptyContainer } from "src/ui/app/EmptyContainer";
import { UnexpectedErrorMessage } from "src/ui/base/components/UnexpectedErrorMessage";
import { useVpnScreen } from "src/ui/compliance/hooks/useVpnScreen";
import { VpnDetectedMessage } from "src/ui/compliance/VpnDetectedMessage";

// Set in the `index.html` file
const defaultTitle = document.title;

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  const { enabled, screenResult, queryError } = useVpnScreen();

  if (!enabled || screenResult?.isBlocked === false) {
    return (
      <>
        <Helmet>
          {/* Ensures the title is reset on route change. */}
          <title>{defaultTitle}</title>
        </Helmet>
        <Plausible />
        <Outlet />
      </>
    );
  }

  if (screenResult?.isBlocked) {
    return (
      <EmptyContainer>
        <Plausible page="/vpn" />
        <VpnDetectedMessage />
      </EmptyContainer>
    );
  }

  if (screenResult?.error || queryError) {
    return (
      <EmptyContainer>
        <Plausible page="/error" />
        <UnexpectedErrorMessage />
      </EmptyContainer>
    );
  }
}
