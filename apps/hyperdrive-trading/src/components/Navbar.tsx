import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar(): ReactElement {
  const { pathname } = useLocation();

  return (
    <div className="navbar bg-bg-base-200 px-8">
      <div className="navbar-start">
        <Link
          to="/"
          className="font-Akira text-2xl normal-case text-hyper-pink"
        >
          HYPERDRIVE TRADING
        </Link>
      </div>

      <div className="navbar-center flex gap-x-12">
        <Link
          to="/markets"
          className={classNames(
            "border-b-2 border-transparent font-Quantico text-xl normal-case text-off-white transition duration-200 hover:border-hyper-green",
            {
              "font-bold": pathname === "/markets",
            },
          )}
        >
          Markets
        </Link>
        <Link
          to="/portfolio"
          className={classNames(
            "border-b-2 border-transparent font-Quantico text-xl normal-case text-off-white transition duration-200 hover:border-hyper-green",
            {
              "font-bold": pathname === "/portfolio",
            },
          )}
        >
          Portfolio
        </Link>
      </div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
}
