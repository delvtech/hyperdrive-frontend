import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
} from "@heroicons/react/16/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, LinkProps, useRouterState } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAnalyticsUrl } from "src/ui/analytics/useMarketAnalyticsUrl";
import { DevtoolsMenu } from "src/ui/app/Navbar/DevtoolsMenu";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import VersionPicker from "src/ui/base/components/VersionPicker";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { LANDING_ROUTE } from "src/ui/landing/routes";
import { POINTS_MARKETS_ROUTE } from "src/ui/markets/routes";
import { MINT_ROUTE } from "src/ui/mint/routes";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";
import { POINTS_LEADERBOARD_ROUTE } from "src/ui/rewards/routes";
import { sepolia } from "viem/chains";
import { useChainId } from "wagmi";

export function Navbar(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const chainId = useChainId();
  const isTestnet = isTestnetChain(chainId);
  const analyticsUrl = useAnalyticsUrl();

  return (
    <div className="daisy-navbar">
      <div className="daisy-navbar-start ml-2">
        <Link to="/" className="hidden items-center sm:inline-flex">
          <HyperdriveLogo />
        </Link>
        <Link to="/" className="inline-flex items-center sm:hidden">
          <img className="h-8" src="/hyperdrive-solo-logo-white.svg" />
        </Link>
        <div className="ml-16 flex gap-8">
          <NavbarLink to={LANDING_ROUTE} label="All Pools" />
          <NavbarLink to={POINTS_MARKETS_ROUTE} label="Points Markets" />
          <NavbarLink to={PORTFOLIO_ROUTE} label="Portfolio" />
          <NavbarLink to={POINTS_LEADERBOARD_ROUTE} label="Leaderboard" />
          {isTestnet ? (
            <NavbarLink to={MINT_ROUTE} label="Mint Tokens" />
          ) : null}
        </div>
      </div>
      <div className="daisy-navbar-end gap-2 sm:gap-8">
        <ExternalLink
          newTab
          href={analyticsUrl}
          className="daisy-btn rounded-full text-accent"
        >
          <span className="hidden sm:inline">Analytics</span>
          <span className="inline sm:hidden">
            <ChartBarIcon className="inline h-6" />
          </span>
          <ArrowTopRightOnSquareIcon className="-mt-0.5 inline h-4" />
        </ExternalLink>

        {chainId === sepolia.id ? <VersionPicker /> : null}

        {import.meta.env.DEV && !isTailwindSmallScreen ? (
          <DevtoolsMenu />
        ) : null}

        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}

function NavbarLink({ to, label }: { label: string } & LinkProps) {
  const { location } = useRouterState();
  return (
    <Link
      to={
        // safe to cast because LinkProps["to"] provides typesafety to the
        // caller
        to as any
      }
      className="hidden sm:inline"
    >
      <span
        className={classNames("text-md", {
          "text-white": location.pathname === to,
          "text-neutral-content": location.pathname !== to,
        })}
      >
        {label}
      </span>
    </Link>
  );
}
