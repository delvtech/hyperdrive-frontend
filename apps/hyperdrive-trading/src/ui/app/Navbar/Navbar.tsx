import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  ChartBarIcon,
} from "@heroicons/react/16/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useRouterState, type LinkProps } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { PORTFOLIO_ONLY_MODE } from "src/base/constants";
import { isTestnetChain2 } from "src/chains/isTestnetChain";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAnalyticsUrl } from "src/ui/analytics/useMarketAnalyticsUrl";
import { DevtoolsMenu } from "src/ui/app/Navbar/DevtoolsMenu";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import VersionPicker from "src/ui/base/components/VersionPicker";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { RpcForm } from "src/ui/chains/RpcForm";
import { LANDING_ROUTE } from "src/ui/landing/routes";
import { MINT_ROUTE } from "src/ui/mint/routes";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";
import { POINTS_LEADERBOARD_ROUTE } from "src/ui/rewards/routes";
import { useChainId } from "wagmi";
import { sepolia } from "wagmi/chains";

export function Navbar(): ReactElement {
  const chainId = useChainId();
  const isTestnet = isTestnetChain2(chainId);
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

        {/* Full Navbar for Desktop */}
        {!PORTFOLIO_ONLY_MODE && (
          <div className="ml-16 hidden gap-8 lg:flex">
            <NavbarLink to={LANDING_ROUTE} label="All Pools" />
            <NavbarLink to={PORTFOLIO_ROUTE} label="Portfolio" />
            <NavbarLink to={POINTS_LEADERBOARD_ROUTE} label="Leaderboard" />
            {isTestnet && <NavbarLink to={MINT_ROUTE} label="Mint Tokens" />}
          </div>
        )}
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

        {chainId === sepolia.id && !PORTFOLIO_ONLY_MODE ? (
          <VersionPicker />
        ) : null}
        {import.meta.env.DEV && !isTailwindSmall && !PORTFOLIO_ONLY_MODE ? (
          <DevtoolsMenu />
        ) : null}
        <RpcForm />
        <ConnectButton
          accountStatus={isTailwindSmall ? "avatar" : "full"}
          showBalance={false}
        />
        {/* Hamburger Menu for Mobile */}
        {!PORTFOLIO_ONLY_MODE && (
          <div className="daisy-dropdown daisy-dropdown-end lg:hidden">
            <label tabIndex={0} className="daisy-btn daisy-btn-ghost">
              <Bars3Icon className="h-6" />
            </label>
            <ul
              tabIndex={0}
              className="daisy-menu daisy-dropdown-content daisy-dropdown-end mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li className="daisy-dropdown-item">
                <Link to={LANDING_ROUTE}>All Pools</Link>
              </li>
              <li className="daisy-dropdown-item">
                <Link to={POINTS_LEADERBOARD_ROUTE}>Leaderboard</Link>
              </li>
              <li className="daisy-dropdown-item">
                <Link to={PORTFOLIO_ROUTE}>Portfolio</Link>
              </li>
            </ul>
          </div>
        )}
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
