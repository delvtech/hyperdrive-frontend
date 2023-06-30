import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";

export function Navbar(): ReactElement {
  return (
    <div className="daisy-navbar bg-base-100 ">
      <div className="daisy-navbar-start ml-2">
        <a className="font-lato text-h6 font-extrabold uppercase tracking-widest text-primary">
          Hyperdrive
        </a>
      </div>
      <div className="daisy-navbar-end">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
