import { ScrollRestoration } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PropsWithChildren, ReactElement } from "react";
import Footer from "src/ui/app/Footer/Footer";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { IneligibleAccountMessage } from "src/ui/compliance/IneligibleAccountMessage";
import { TermsOfUseAndPrivacyPolicyModal } from "src/ui/compliance/TermsOfUseAndPrivacyPolicyModal";

export function Page({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full grow flex-col gap-9">
        <CommonHeadTags />
        <Navbar />

        {/* compliance */}
        <TermsOfUseAndPrivacyPolicyModal />
        <IneligibleAccountMessage className="grow" />

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
