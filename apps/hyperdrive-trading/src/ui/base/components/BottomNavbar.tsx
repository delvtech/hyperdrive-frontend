import { ChartBarIcon, HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function BottomNavbar(): ReactElement {
  return (
    <div className="btm-nav grid h-20 grid-cols-3 bg-base-300 px-4 md:hidden">
      <div className="navbar-start flex-row">
        <Link
          to="/markets"
          className="text-xl whitespace-nowrap font-akira uppercase text-hyper-pink"
        >
          Hyperdrive
        </Link>
      </div>
      <div className="flex-row">
        <Link to="/markets" className="btn-ghost btn">
          <HomeIcon className="h-5 w-5 fill-transparent stroke-hyper-blue-100" />
        </Link>
        <Link to="/trade" className="btn-ghost btn">
          <ChartBarIcon className="h-5 w-5 fill-transparent stroke-hyper-blue-100" />
        </Link>
        <Link to="/portfolio" className="btn-ghost btn">
          <UserIcon className="h-5 w-5 fill-transparent stroke-hyper-blue-100" />
        </Link>
      </div>
      <ConnectButton />
    </div>
  );
}
