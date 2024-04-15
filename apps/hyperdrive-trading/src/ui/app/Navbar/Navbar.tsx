import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { FeatureFlagPicker } from "src/ui/app/Navbar/FeatureFlagPicker";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
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
          href="https://warpcast.com/~/compose?text=Can%20you%20outtrade%20me%20on%20Hyperdrive%3F%20Warp%20your%20best%20Hyperdrive%20trade%20screenshot%20below%20%F0%9F%93%88%20%2Fdelv&embeds[]=https://frames.hyperdrive.trade"
          className="text-white daisy-btn rounded-full bg-warpcast-purple hover:bg-farcaster-purple"
        >
          <span className="hidden sm:inline">Cast on Warpcast</span>
          <span className="inline sm:hidden">Cast</span>
          <img
            className="h-4"
            src="https://raw.githubusercontent.com/vrypan/farcaster-brand/ea95543f6d1308dd52631f5e81f395a60447df0b/icons/icon-transparent/transparent-white.svg"
          />
        </a>
        {import.meta.env.DEV && !isTailwindSmallScreen ? (
          <FeatureFlagPicker />
        ) : null}
        <ConnectWalletButton />
      </div>
    </div>
  );
}
