import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import DiscordIcon from "src/ui/base/icons/discord";
import { privacyPolicyUrl } from "src/ui/compliance/privacyPolicy";
import { termsOfUseUrl } from "src/ui/compliance/termsOfUse";
import { sepolia } from "viem/chains";
import { useChainId } from "wagmi";
export default function Footer(): ReactElement {
  const chainId = useChainId();
  const footerTitleClassName =
    "daisy-footer-title text-neutral-content opacity-100"; // need to set opacity here to override daisy-footer-title
  return (
    <footer className="daisy-footer max-w-6xl p-10 text-base-content">
      <aside>
        <Link
          to="/"
          className="text-h6 inline-flex items-center gap-2 font-extrabold uppercase tracking-widest"
        >
          <HyperdriveLogo />
        </Link>
        <a
          href="https://delv.tech/discord"
          className="daisy-link-hover daisy-link"
          target="_blank"
          rel="noreferrer"
        >
          <DiscordIcon />
        </a>
      </aside>
      <nav>
        <header className={footerTitleClassName}>Services</header>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hyperdrive.delv.tech/docs"
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
        {chainId === sepolia.id ? (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://testnet-v1.hyperdrive.box"
            className="daisy-link-hover daisy-link"
          >
            <span className="">V1 Pools</span>
          </a>
        ) : undefined}
      </nav>
      <nav>
        {/* TODO: Determine if company information is needed here */}
        <header className={footerTitleClassName}>Company</header>
        <a
          className="daisy-link-hover daisy-link"
          href="https://www.delv.tech/"
        >
          About Us
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
