import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
} from "@heroicons/react/16/solid";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { DevtoolsMenu } from "src/ui/app/Navbar/DevtoolsMenu";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import VersionPicker from "src/ui/base/components/VersionPicker";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
export function Navbar(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  return (
    <div className="daisy-navbar">
      <div className="daisy-navbar-start ml-2">
        <Link to={"/"} className="hidden items-center sm:inline-flex">
          <HyperdriveLogo />
        </Link>
        <Link to={"/"} className="inline-flex items-center sm:hidden">
          <img className="h-8" src="/hyperdrive-solo-logo-white.svg" />
        </Link>
      </div>
      <div className="daisy-navbar-end gap-2 sm:gap-8">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hyperdrive.blockanalitica.com"
          className="daisy-btn rounded-full text-accent"
        >
          <span className="hidden sm:inline">Analytics</span>
          <span className="inline sm:hidden">
            <ChartBarIcon className="inline h-6" />
          </span>
          <ArrowTopRightOnSquareIcon className="-mt-0.5 inline h-4" />
        </a>
        <VersionPicker />

        {import.meta.env.DEV && !isTailwindSmallScreen ? (
          <DevtoolsMenu />
        ) : null}
        <ConnectWalletButton />
      </div>
    </div>
  );
}
