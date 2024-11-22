import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useAccount } from "wagmi";

// Set in the `index.html` file
const defaultTitle = document.title;

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  const route = useRouterState({
    select: (state) => state.location.pathname,
  });

  const { address: account } = useAccount();
  useEffect(() => {
    window.plausible("pageview", {
      u: route,
      props: {
        connectedWallet: account,
      },
    });
  }, [route]);

  return (
    <>
      <Helmet>
        {/* Ensures the title is reset on route change. */}
        <title>{defaultTitle}</title>
      </Helmet>
      <Outlet />
    </>
  );
}
