import { Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "src/ui/app/Footer/Footer";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { IneligibleAccountDialog } from "src/ui/compliance/IneligibleAccountMessage";
export const Route = new RootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="flex flex-col gap-9">
        <Navbar />
        <IneligibleAccountDialog className="grow" />
        <Outlet />
      </div>
      <Footer />
      {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
    </div>
  );
}
