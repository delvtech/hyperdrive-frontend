import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar(): ReactElement {
  const { pathname } = useLocation();

  return (
    <div className="grid items-center grid-cols-3 px-8 navbar bg-base-100">
      {/* Navbar start */}
      <div className="justify-self-start">
        {/* Renders in desktop */}
        <div className="hidden lg:block">
          <Link
            to="/markets"
            className="text-3xl uppercase whitespace-nowrap font-akira text-hyper-pink"
          >
            <h4>Hyperdrive</h4>
          </Link>
        </div>

        {/* Renders in mobile */}
        <div className="flex items-center lg:hidden gap-x-2">
          {/* Menu dropdown */}
          <div className="dropdown text-hyper-blue-100">
            <label
              tabIndex={0}
              className="p-0 btn btn-ghost lg:hidden font-akira"
            >
              <Bars3BottomLeftIcon className="w-6 stroke-hyper-blue-100" />
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="hover:bg-hyper-blue-400">
                <Link className="font-akira" to="/markets">
                  <p>Markets</p>
                </Link>
              </li>
              <li className="hover:bg-hyper-blue-400">
                <Link className="font-akira" to="/trade">
                  <p>Trade</p>
                </Link>
              </li>
              <li className="hover:bg-hyper-blue-400">
                <Link className="font-akira" to="/portfolio">
                  <p>Portfolio</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar center */}
      <div className="justify-self-center">
        {/* Renders in desktop */}
        <div className="lg:hidden">
          <Link
            to="/markets"
            className="text-3xl uppercase whitespace-nowrap font-akira text-hyper-pink"
          >
            <h4>HD</h4>
          </Link>
        </div>

        {/* Renders in mobile */}
        <div className="hidden lg:flex gap-x-8">
          <Link
            to="/markets"
            className={classNames(
              "font-akira hover:text-hyper-blue-100 transition duration-200 border-hyper-green hover:hyper-green",
              {
                "font-bold border-b-2 text-hyper-blue-100":
                  pathname.startsWith("/markets"),
                "text-hyper-blue-200": !pathname.startsWith("/markets"),
              },
            )}
          >
            Markets
          </Link>
          <Link
            to="/trade"
            className={classNames(
              "font-akira hover:text-hyper-blue-100 transition duration-200 border-hyper-green hover:hyper-green",
              {
                "font-bold border-b-2 text-hyper-blue-100":
                  pathname.startsWith("/trade"),
                "text-hyper-blue-200": !pathname.startsWith("/trade"),
              },
            )}
          >
            Trade
          </Link>
          <Link
            to="/portfolio"
            className={classNames(
              "font-akira hover:text-hyper-blue-100 transition duration-200 hover:border-hyper-green border-hyper-green",
              {
                "font-bold border-b-2 text-hyper-blue-100":
                  pathname.startsWith("/portfolio"),
                "text-hyper-blue-200": !pathname.startsWith("/portfolio"),
              },
            )}
          >
            Portfolio
          </Link>
        </div>
      </div>

      {/* Navbar end */}
      <div className="justify-self-end">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
