import { ScrollRestoration } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PropsWithChildren, ReactElement } from "react";
import Footer from "src/ui/app/Footer/Footer";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { TermsOfUseAndPrivacyPolicyModal } from "src/ui/compliance/TermsOfUseAndPrivacyPolicyModal";
import { useAddressScreen } from "src/ui/compliance/hooks/useAddressScreen";

export function Page({ children }: PropsWithChildren): ReactElement {
  // compliance
  useAddressScreen();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-9">
      <div className="flex w-full grow flex-col items-center gap-9">
        <Navbar />
        {/* <MilesBanner /> */}
        <CustomBanner
          className="bg-error/20"
          description={
            <div className="flex w-full flex-1 items-center justify-center gap-4">
              <span>
                In an abundance of caution, Hyperdrive pools have been paused
                while we investigate a potential vulnerability. We are not aware
                of any loss in user funds at this time.
              </span>
            </div>
          }
        />

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
