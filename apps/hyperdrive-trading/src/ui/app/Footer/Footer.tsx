import { ReactElement } from "react";
import { Link } from "react-router-dom";
import DiscordIcon from "src/ui/base/icons/discord";

export default function Footer(): ReactElement {
  return (
    <footer className="daisy-footer max-w-6xl p-10 text-base-content">
      <aside>
        <Link
          to={"/"}
          className="inline-flex items-center gap-2 font-lato text-h6 font-extrabold uppercase tracking-widest"
        >
          <div className="inline-flex w-full">
            <div className="h-4 w-2.5 -skew-x-12 bg-[#007eed]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#522dae]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#f40000]"></div>
          </div>
          Hyperdrive
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
        <header className="daisy-footer-title">Services</header>
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
        <header className="daisy-footer-title">Company</header>
        <a className="link link-hover">About us</a>
      </nav>
      <nav>
        {/* TODO: Add links to legal pages */}
        <header className="daisy-footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
