import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import FarcasterIcon from "src/ui/base/icons/farcaster";
import LinkedInIcon from "src/ui/base/icons/linkedin";
import XIcon from "src/ui/base/icons/x";
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
          <HyperdriveLogo />
        </Link>
        <span className="text-neutral-content">Yield, Your Way.</span>
        <div className="mt-2 flex flex-row gap-3">
          <a
            href="https://x.com/delv_tech"
            className="daisy-link-hover daisy-link"
            target="_blank"
            rel="noreferrer"
          >
            <XIcon />
          </a>
          <a
            href="https://warpcast.com/~/channel/delv"
            className="daisy-link-hover daisy-link"
            target="_blank"
            rel="noreferrer"
          >
            <FarcasterIcon />
          </a>
          <a
            href="https://linkedin.com/company/delv-tech"
            className="daisy-link-hover daisy-link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </aside>
      <nav>
        <header className={footerTitleClassName}>Resources</header>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hyperdrive.box/docs"
          className="daisy-link-hover daisy-link"
        >
          Documentation
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hyperdrive.blockanalitica.com"
          className="daisy-link-hover daisy-link"
        >
          Analytics
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs-delv.gitbook.io/hyperdrive/security/security-for-the-hyperdrive-protocol"
          className="daisy-link-hover daisy-link"
        >
          Security
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/delvtech/hyperdrive/blob/main/docs/Hyperdrive_Whitepaper.pdf"
          className="daisy-link-hover daisy-link"
        >
          Whitepaper
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://testnet.hyperdrive.box/"
          className="daisy-link-hover daisy-link"
        >
          Testnet
        </a>
      </nav>
      <nav>
        <header className={footerTitleClassName}>Developers</header>
        <a
          target="_blank"
          rel="noreferrer"
          className="daisy-link-hover daisy-link"
          href="https://github.com/delvtech"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs-delv.gitbook.io/hyperdrive/hyperdrive-trading-bots/quickstart"
          className="daisy-link-hover daisy-link"
        >
          Trading Bots
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/delvtech/hyperdrive-rs"
          className="daisy-link-hover daisy-link"
        >
          SDK
        </a>
        {/* TODO: Add this when the bug bounty program goes live */}
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://cantina.xyz/bounties/7fa99194-3a19-476d-92dd-f66289baf95e"
          className="daisy-link-hover daisy-link"
        >
          Bug Bounty
        </a> */}
      </nav>
      <nav>
        <header className={footerTitleClassName}>Ecosystem</header>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.hyperdrive.box/hyperdrive-for-developers/integrations"
          className="daisy-link-hover daisy-link"
        >
          Integrations
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://delv.tech/discord"
          className="daisy-link-hover daisy-link"
        >
          Community
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://governance.element.fi/"
          className="daisy-link-hover daisy-link"
        >
          Governance
        </a>
      </nav>
      <nav>
        {/* TODO: Determine if company information is needed here */}
        <header className={footerTitleClassName}>About Us</header>
        <a
          target="_blank"
          rel="noreferrer"
          className="daisy-link-hover daisy-link"
          href="https://www.delv.tech/"
        >
          DELV
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="daisy-link-hover daisy-link"
          href="https://blog.delv.tech/"
        >
          Blog
        </a>
      </nav>
      <nav>
        {/* TODO: Add links to legal pages */}
        <header className={footerTitleClassName}>Legal</header>
        <a className="daisy-link-hover daisy-link" href={termsOfUseUrl}>
          Terms of Use
        </a>
        <a className="daisy-link-hover daisy-link" href={privacyPolicyUrl}>
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
}
