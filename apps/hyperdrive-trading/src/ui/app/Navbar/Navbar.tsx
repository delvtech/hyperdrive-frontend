import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";

export function Navbar(): ReactElement {
  return (
    <div className="daisy-navbar bg-base-100 ">
      <div className="daisy-navbar-start ml-2">
        <a className="inline-flex items-center gap-2 font-lato text-h6 font-extrabold uppercase tracking-widest">
          <div className="inline-flex w-full">
            <div className="h-4 w-2.5 -skew-x-12 bg-primary"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-secondary"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-accent"></div>
          </div>
          Hyperdrive
        </a>
      </div>
      <div className="daisy-navbar-end">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
