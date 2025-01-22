import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import FarcasterIcon from "src/ui/base/icons/farcaster";
import LinkedInIcon from "src/ui/base/icons/linkedin";
import XIcon from "src/ui/base/icons/x";
import { CHAINLOG_ROUTE } from "src/ui/chainlog/routes";
import { privacyPolicyUrl } from "src/ui/compliance/privacyPolicy";
import { termsOfUseUrl } from "src/ui/compliance/termsOfUse";
export default function Footer(): ReactElement {
  const footerTitleClassName =
    "daisy-footer-title text-neutral-content opacity-100"; // need to set opacity here to override daisy-footer-title
  return (
    <footer className="daisy-footer max-w-6xl grid-cols-2 p-10 text-base-content sm:grid-cols-5">
      <aside>
        <Link
          to="/"
          className="text-h6 inline-flex items-center gap-2 font-extrabold uppercase tracking-widest"
        >
          <HyperdriveLogo width={160} />
        </Link>
        <span className="text-neutral-content">Yield, Your Way.</span>
        <div className="mt-2 flex flex-row gap-3">
          <ExternalLink
            newTab
            rel="noreferrer"
            href="https://x.com/delv_tech"
            className="daisy-link-hover daisy-link"
          >
            <XIcon />
          </ExternalLink>
          <ExternalLink
            newTab
            rel="noreferrer"
            href="https://warpcast.com/~/channel/delv"
            className="daisy-link-hover daisy-link"
          >
            <FarcasterIcon />
          </ExternalLink>
          <ExternalLink
            newTab
            rel="noreferrer"
            href="https://linkedin.com/company/delv-tech"
            className="daisy-link-hover daisy-link"
          >
            <LinkedInIcon />
          </ExternalLink>
        </div>
      </aside>
      <nav>
        <header className={footerTitleClassName}>Resources</header>

        <ExternalLink
          newTab
          href="https://hyperdrive.box"
          className="daisy-link-hover daisy-link"
        >
          About Hyperdrive
        </ExternalLink>
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
        <ExternalLink
          newTab
          href="https://arxiv.org/pdf/2404.05036"
          className="daisy-link-hover daisy-link"
        >
          Whitepaper
        </ExternalLink>
        <Link to={CHAINLOG_ROUTE} className="daisy-link-hover daisy-link">
          Chainlog
        </Link>
        <ExternalLink
          newTab
          href="https://testnet.hyperdrive.box/"
          className="daisy-link-hover daisy-link"
        >
          Testnet
        </ExternalLink>
      </nav>
      <nav>
        <header className={footerTitleClassName}>Developers</header>

        <ExternalLink
          newTab
          className="daisy-link-hover daisy-link"
          href="https://github.com/delvtech"
        >
          GitHub
        </ExternalLink>

        <ExternalLink
          newTab
          href="https://docs.hyperdrive.box/hyperdrive-trading-bots/quickstart"
          className="daisy-link-hover daisy-link"
        >
          Trading Bots
        </ExternalLink>

        <ExternalLink
          newTab
          href="https://github.com/delvtech/hyperdrive-rs"
          className="daisy-link-hover daisy-link"
        >
          SDK
        </ExternalLink>

        <ExternalLink
          newTab
          href="https://cantina.xyz/bounties/7fa99194-3a19-476d-92dd-f66289baf95e"
          className="daisy-link-hover daisy-link"
        >
          Bug Bounty
        </ExternalLink>
      </nav>
      <nav>
        <header className={footerTitleClassName}>Ecosystem</header>

        <ExternalLink
          newTab
          href="https://docs.hyperdrive.box/hyperdrive-for-developers/integrations"
          className="daisy-link-hover daisy-link"
        >
          Integrations
        </ExternalLink>

        <ExternalLink
          newTab
          href="https://delv.tech/discord"
          className="daisy-link-hover daisy-link"
        >
          Community
        </ExternalLink>

        <ExternalLink
          newTab
          href="https://governance.element.fi/"
          className="daisy-link-hover daisy-link"
        >
          Governance
        </ExternalLink>
      </nav>
      <nav>
        <header className={footerTitleClassName}>About Us</header>

        <ExternalLink
          newTab
          className="daisy-link-hover daisy-link"
          href="https://www.delv.tech/"
        >
          DELV
        </ExternalLink>

        <ExternalLink
          newTab
          className="daisy-link-hover daisy-link"
          href="https://blog.delv.tech/"
        >
          Blog
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
