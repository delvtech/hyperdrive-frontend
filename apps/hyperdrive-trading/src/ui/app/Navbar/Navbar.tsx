import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { FeatureFlagPicker } from "src/ui/app/Navbar/FeatureFlagPicker";
import { HyperdriveLogo } from "src/ui/app/Navbar/HyperdriveLogo";

export function Navbar(): ReactElement {
  return (
    <div className="daisy-navbar bg-base-100 ">
      <div className="daisy-navbar-start ml-2">
        <Link
          to={"/"}
          className="inline-flex items-center gap-2 font-lato text-h6 font-extrabold uppercase tracking-widest"
        >
          <HyperdriveLogo />
        </Link>
      </div>
      <div className="daisy-navbar-end gap-8">
        {import.meta.env.DEV ? <FeatureFlagPicker /> : null}
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
