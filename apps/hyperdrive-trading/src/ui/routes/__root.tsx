import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Helmet } from "react-helmet";
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

  if (!enabled || !screenResult?.isBlocked) {
    return (
      <>
        <Helmet>
          {/* Ensures the title is reset on route change. */}
          <title>{defaultTitle}</title>

          {/**
           * Analytics
           * @see https://plausible.io/docs/plausible-script
           */}
          <script
            defer={true}
            src="https://plausible.io/js/script.js"
            data-domain={location.host}
          ></script>
        </Helmet>
        <Outlet />
      </>
    );
  }

  if (screenResult?.isBlocked) {
    return (
      <EmptyContainer>
        <VpnDetectedMessage />
      </EmptyContainer>
    );
  }

  if (screenResult?.error || queryError) {
    return (
      <EmptyContainer>
        <UnexpectedErrorMessage />
      </EmptyContainer>
    );
  }
}
