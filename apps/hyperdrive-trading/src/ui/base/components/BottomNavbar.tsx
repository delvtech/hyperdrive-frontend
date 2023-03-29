import { ChartBarIcon, HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function BottomNavbar(): ReactElement {
  return (
    <div className="grid grid-cols-3 px-4 btm-nav md:hidden bg-base-300">
      <div className="flex-row navbar-start">
        <Link
          to="/"
          className="text-xl uppercase whitespace-nowrap font-akira text-hyper-pink"
        >
          Hyperdrive
        </Link>
      </div>
      <div className="flex-row">
        <Link to="/markets" className="btn btn-ghost">
          <HomeIcon className="w-5 h-5 stroke-hyper-blue-100 fill-transparent" />
        </Link>
        <Link to="/trade" className="btn btn-ghost">
          <ChartBarIcon className="w-5 h-5 stroke-hyper-blue-100 fill-transparent" />
        </Link>
        <Link to="/portfolio" className="btn btn-ghost">
          <UserIcon className="w-5 h-5 stroke-hyper-blue-100 fill-transparent" />
        </Link>
      </div>
      <ConnectButton />
    </div>
  );
}
