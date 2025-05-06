import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import { privacyPolicyUrl } from "src/ui/compliance/privacyPolicy";
import { termsOfUseUrl } from "src/ui/compliance/termsOfUse";

export default function Footer(): ReactElement {
  const footerTitleClassName =
    "daisy-footer-title text-neutral-content opacity-100"; // need to set opacity here to override daisy-footer-title
  return (
    <footer className="daisy-footer flex max-w-6xl justify-center gap-20 p-10 text-base-content">
      <aside>
        <Link
          to="/"
          className="text-h6 inline-flex items-center gap-2 font-extrabold uppercase tracking-widest"
        >
          <HyperdriveLogo width={160} />
        </Link>
      </aside>
      <nav>
        <header className={footerTitleClassName}>Resources</header>
        <ExternalLink
          newTab
          href="https://docs.hyperdrive.box"
          className="daisy-link-hover daisy-link"
        >
          Documentation
        </ExternalLink>
        <ExternalLink
          newTab
          href="https://hyperdrive.blockanalitica.com"
          className="daisy-link-hover daisy-link"
        >
          Analytics
        </ExternalLink>
        <ExternalLink
          newTab
          href="https://docs.hyperdrive.box/security/security-for-the-hyperdrive-protocol"
          className="daisy-link-hover daisy-link"
        >
          Security
        </ExternalLink>
      </nav>
      <nav>
        <header className={footerTitleClassName}>Legal</header>
        <ExternalLink
          newTab
          className="daisy-link-hover daisy-link"
          href={termsOfUseUrl}
        >
          Terms of Use
        </ExternalLink>
        <ExternalLink
          newTab
          className="daisy-link-hover daisy-link"
          href={privacyPolicyUrl}
        >
          Privacy Policy
        </ExternalLink>
      </nav>
    </footer>
  );
}
