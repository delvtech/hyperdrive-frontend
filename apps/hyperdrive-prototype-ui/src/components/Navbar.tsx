import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";

export function Navbar(): ReactElement {
  return (
    <div className="bg-zinc-900 navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center hover:bg-racing-green">
        <a className="text-4xl normal-case btn btn-ghost font-Akira text-lean hover:text-black">
          Hyperdrive
        </a>
      </div>
      <div className="navbar-end">
        <ConnectButton showBalance={false} accountStatus="address" />
      </div>
    </div>
  );
}
