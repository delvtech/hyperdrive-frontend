import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar(): ReactElement {
  const { pathname } = useLocation();

  return (
    <div className="hidden px-8 navbar bg-base-100 grow-0 md:flex">
      <div className="navbar-start">
        <Link
          to="/markets"
          className="text-3xl uppercase whitespace-nowrap font-akira text-hyper-pink"
        >
          Hyperdrive
        </Link>
      </div>

      <div className="flex navbar-center gap-x-12">
        <div className="dropdown text-hyper-blue-100 lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Squares2X2Icon className="w-5 h-5 outline-hyper-blue-100" />
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li className="hover:bg-hyper-blue-400">
              <Link className="font-akira" to="/markets">
                Markets
              </Link>
            </li>
            <li className="hover:bg-hyper-blue-400">
              <Link className="font-akira" to="/trade">
                Trade
              </Link>
            </li>
            <li className="hover:bg-hyper-blue-400">
              <Link className="font-akira" to="/portfolio">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex gap-x-6">
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
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
}
