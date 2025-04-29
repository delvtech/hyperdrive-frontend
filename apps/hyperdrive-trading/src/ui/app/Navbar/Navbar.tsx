import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
} from "@heroicons/react/16/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAnalyticsUrl } from "src/ui/analytics/useMarketAnalyticsUrl";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";

export function Navbar(): ReactElement {
  const analyticsUrl = useAnalyticsUrl();
  const isTailwindSmall = useIsTailwindSmallScreen();

  return (
    <div className="daisy-navbar">
      <div className="daisy-navbar-start ml-2">
        {/* Desktop Logo */}
        <Link to="/" className="hidden md:inline-flex">
          <HyperdriveLogo />
        </Link>
        {/* Mobile Logo */}
        <Link to="/" className="inline-flex items-center md:hidden">
          <img className="h-8" src="/hyperdrive-solo-logo-white.svg" />
        </Link>
      </div>

      <div className="daisy-navbar-end gap-2 md:gap-8">
        <ExternalLink
          newTab
          href={analyticsUrl}
          className="daisy-btn rounded-full text-accent"
        >
          <span className="hidden md:inline">Analytics</span>
          <span className="inline md:hidden">
            <ChartBarIcon className="inline h-6" />
          </span>
          <ArrowTopRightOnSquareIcon className="-mt-0.5 inline h-4" />
        </ExternalLink>

        <ConnectButton
          accountStatus={isTailwindSmall ? "avatar" : "full"}
          showBalance={false}
        />
      </div>
    </div>
  );
}
