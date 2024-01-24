import { Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Landing } from "src/pages/Landing";
import Footer from "src/ui/app/Footer/Footer";
import { Navbar } from "src/ui/app/Navbar/Navbar";
export const Route = new RootRoute({
  component: () => (
    <>
      <Navbar />
      <Landing />
      <Footer />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
