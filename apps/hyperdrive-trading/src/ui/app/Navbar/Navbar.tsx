import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";

export function Navbar(): ReactElement {
  return (
    <div className="daisy-navbar bg-base-100 ">
      <div className="daisy-navbar-start ml-2">
        <a className="font-akira text-h6 text-primary">Hyperdrive</a>
      </div>
      <div className="daisy-navbar-end">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
