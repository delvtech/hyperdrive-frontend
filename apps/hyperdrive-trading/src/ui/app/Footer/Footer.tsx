import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import DiscordIcon from "src/ui/base/icons/discord";

export default function Footer(): ReactElement {
  const footerTitleClassName =
    "daisy-footer-title text-neutral-content opacity-100"; // need to set opacity here to override daisy-footer-title
  return (
    <footer className="daisy-footer max-w-6xl p-10 text-base-content">
      <aside>
        <Link
          to={"/"}
          className="text-h6 inline-flex items-center gap-2 font-extrabold uppercase tracking-widest"
        >
          <HyperdriveLogo />
        </Link>
        <a
          href="https://discord.gg/bdn9fxcs"
          className="link link-hover"
          target="_blank"
          rel="noreferrer"
        >
          <DiscordIcon />
        </a>
      </aside>
      <nav>
        <header className={footerTitleClassName}>Services</header>
        <Link
          to={
            "https://delv-tech.notion.site/Hyperdrive-Docs-6c014b9270af4483861b1c2ffa7f3a88"
          }
          className="link link-hover"
        >
          Documentation
        </Link>
      </nav>
      <nav>
        {/* TODO: Determine if company information is needed here */}
        <header className={footerTitleClassName}>Company</header>
        <a className="link link-hover">About us</a>
      </nav>
      <nav>
        {/* TODO: Add links to legal pages */}
        <header className={footerTitleClassName}>Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
