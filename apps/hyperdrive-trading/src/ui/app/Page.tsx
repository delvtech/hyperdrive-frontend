import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { ScrollRestoration } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PropsWithChildren, ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
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
              <ExclamationTriangleIcon className="size-5 shrink-0" />
              <div>
                <p>
                  Thank you for using DELV. Unfortunately, we are winding down
                  operations. This site will remain available for withdrawals
                  and redemptions until at least __ 2025.
                </p>
                <p className="font-bold">
                  Please ensure you complete any necessary actions before this
                  period ends, as access cannot be guaranteed afterwards.
                </p>
                <p>
                  To run the UI locally, you can find the source code and setup
                  instructions on{" "}
                  <ExternalLink
                    newTab
                    icon
                    href="https://github.com/delvtech/hyperdrive-frontend"
                    className="daisy-link-hover daisy-link"
                  >
                    GitHub
                  </ExternalLink>
                  .
                </p>
              </div>
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
