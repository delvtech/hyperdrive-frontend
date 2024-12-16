import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
} from "@heroicons/react/16/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useRouterState } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { isForkChain } from "src/chains/isForkChain";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { DevtoolsMenu } from "src/ui/app/Navbar/DevtoolsMenu";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import VersionPicker from "src/ui/base/components/VersionPicker";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useRegionInfo } from "src/ui/compliance/hooks/useRegionInfo";
import { LANDING_ROUTE } from "src/ui/landing/routes";
import { MINT_ROUTE } from "src/ui/mint/routes";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";
import { sepolia } from "viem/chains";
import { useChainId } from "wagmi";
export function Navbar(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { location } = useRouterState();
  const chainId = useChainId();
  const { isReadOnly } = useRegionInfo();
  const canMintTokens = isTestnetChain(chainId) && !isForkChain(chainId);

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
          <Link to={LANDING_ROUTE} className="hidden sm:inline">
            <span
              className={classNames("text-md", {
                "text-white": location.pathname === LANDING_ROUTE,
                "text-neutral-content": location.pathname !== LANDING_ROUTE,
              })}
            >
              All Pools
            </span>
          </Link>
          <Link to={PORTFOLIO_ROUTE}>
            <span
              className={classNames("text-md", {
                "text-white": location.pathname === PORTFOLIO_ROUTE,
                "text-neutral-content": location.pathname !== PORTFOLIO_ROUTE,
              })}
            >
              Portfolio
            </span>
          </Link>
          {canMintTokens ? (
            <Link to={MINT_ROUTE}>
              <span
                className={classNames("text-md", {
                  "text-white": location.pathname === MINT_ROUTE,
                  "text-neutral-content": location.pathname !== MINT_ROUTE,
                })}
              >
                Mint Tokens
              </span>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="daisy-navbar-end gap-2 sm:gap-8">
        <ExternalLink
          newTab
          href="https://hyperdrive.blockanalitica.com"
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

        {!isReadOnly && <ConnectButton showBalance={false} />}
      </div>
    </div>
  );
}
