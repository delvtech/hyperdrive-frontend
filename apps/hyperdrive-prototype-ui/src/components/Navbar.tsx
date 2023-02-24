import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";

export function Navbar(): ReactElement {
  return (
    <div className="flex w-full bg-zinc-900 navbar">
      <div className="navbar-start hover:bg-racing-green w-min">
        <a
          href="/"
          className="text-4xl normal-case btn btn-ghost font-Akira text-lean hover:text-black"
        >
          Hyperdrive
        </a>
      </div>
      <div className="navbar-end grow">
        <ConnectButton showBalance={false} accountStatus="address" />
      </div>
    </div>
  );
}
