import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
} from "@heroicons/react/16/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useRouterState } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { DevtoolsMenu } from "src/ui/app/Navbar/DevtoolsMenu";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import VersionPicker from "src/ui/base/components/VersionPicker";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { sepolia } from "viem/chains";
import { useChainId } from "wagmi";
export function Navbar(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { location } = useRouterState();
  const chainId = useChainId();
  const { isFlagEnabled: isPortfolioEnabled } = useFeatureFlag("portfolio");
  return (
    <div className="daisy-navbar">
      <div className="daisy-navbar-start ml-2">
        <Link to={"/"} className="hidden items-center sm:inline-flex">
          <HyperdriveLogo />
        </Link>
        <Link to={"/"} className="inline-flex items-center sm:hidden">
          <img className="h-8" src="/hyperdrive-solo-logo-white.svg" />
        </Link>
        <div className="ml-16 flex gap-8">
          <Link to={"/"} className="hidden sm:inline">
            <span
              className={classNames("text-md", {
                "text-white border-b-2 border-b-primary/20 pb-1":
                  location.pathname === "/",
                "text-neutral-content": location.pathname !== "/",
              })}
            >
              All Pools
            </span>
          </Link>
          <Link to={"/bridge"}>
            <span
              className={classNames("text-md", {
                "text-white border-b-2 border-b-primary/20 pb-1":
                  location.pathname === "/bridge",
                "text-neutral-content": location.pathname !== "/bridge",
              })}
            >
              Bridge
            </span>
          </Link>
          {isPortfolioEnabled ? (
            <Link to={"/portfolio"}>
              <span
                className={classNames("text-md", {
                  "text-white border-b-2 border-b-primary/20 pb-1":
                    location.pathname === "/portfolio",
                  "text-neutral-content": location.pathname !== "/portfolio",
                })}
              >
                Portfolio
              </span>
            </Link>
          ) : null}
        </div>
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

        {chainId === sepolia.id ? <VersionPicker /> : null}

        {import.meta.env.DEV && !isTailwindSmallScreen ? (
          <DevtoolsMenu />
        ) : null}
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
