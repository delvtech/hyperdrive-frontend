import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "src/ui/app/Footer/Footer";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { IneligibleAccountDialog } from "src/ui/compliance/IneligibleAccountMessage";
export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full grow flex-col gap-9">
        <Navbar />
        <IneligibleAccountDialog className="grow" />
        <Outlet />
      </div>
      <Footer />
      {import.meta.env.DEV ? (
        <div className="fixed">
          <TanStackRouterDevtools />
        </div>
      ) : null}
    </div>
  );
}
