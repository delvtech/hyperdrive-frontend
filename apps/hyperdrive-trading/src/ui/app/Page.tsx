import { ScrollRestoration } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PropsWithChildren, ReactElement } from "react";
import { Plausible } from "src/ui/analytics/Plausible";
import Footer from "src/ui/app/Footer/Footer";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { TermsOfUseAndPrivacyPolicyModal } from "src/ui/compliance/TermsOfUseAndPrivacyPolicyModal";
import { useAddressScreen } from "src/ui/compliance/hooks/useAddressScreen";
import { useDisconnectInReadOnlyRegions } from "src/ui/compliance/hooks/useDisconnectInReadOnlyRegions";
import { useVpnScreen } from "src/ui/compliance/hooks/useVpnScreen";

export function Page({ children }: PropsWithChildren): ReactElement {
  // compliance
  useVpnScreen();
  useAddressScreen();
  useDisconnectInReadOnlyRegions();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-9">
      <div className="flex w-full grow flex-col items-center gap-9">
        <Navbar />

        {/* analytics */}
        <Plausible />

        {/* compliance */}
        <TermsOfUseAndPrivacyPolicyModal />

        {/* This let's us to reset the scroll position to the top of the page
          when linking to other pages. This is useful, for example,  when going
          from the the bottom of the All Markets page to a specific market details
          page. See:
          https://tanstack.com/router/latest/docs/framework/react/guide/scroll-restoration#preventing-scroll-restoration
          */}
        <ScrollRestoration />
        {children}
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
