import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <div className="bg-zinc-900 navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center hover:bg-racing-green ">
        <a className="text-5xl normal-case btn btn-ghost font-Akira text-lean hover:text-black">
          Hyperdrive UI
        </a>
      </div>
      <div className="navbar-end">
        <ConnectButton showBalance={false} accountStatus="address" />
      </div>
    </div>
  );
}
