import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { FeatureFlagPicker } from "src/ui/app/Navbar/FeatureFlagPicker";

export function Navbar(): ReactElement {
  return (
    <div className="daisy-navbar">
      <div className="daisy-navbar-start ml-2">
        <Link
          to={"/"}
          className="text-h6 inline-flex items-center gap-2 font-extrabold uppercase tracking-widest"
        >
          <div className="inline-flex w-full">
            <div className="h-4 w-2.5 -skew-x-12 bg-[#007eed]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#522dae]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#f40000]"></div>
          </div>
          Hyperdrive
        </Link>
      </div>
      <div className="daisy-navbar-end gap-8">
        {import.meta.env.DEV ? <FeatureFlagPicker /> : null}
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
