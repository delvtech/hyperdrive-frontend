import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

// Set in the `index.html` file
const defaultTitle = document.title;

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
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
