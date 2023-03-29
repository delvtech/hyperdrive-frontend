import { ListBulletIcon } from "@heroicons/react/20/solid";
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
          to="/"
          className="text-3xl uppercase whitespace-nowrap font-akira text-hyper-pink"
        >
          Hyperdrive
        </Link>

        <div className="dropdown text-hyper-blue-100">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <ListBulletIcon className="w-5 h-5 stroke-hyper-blue-100" />
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-akira" to="/markets">
                Markets
              </Link>
            </li>
            <li>
              <Link className="font-akira" to="/trade">
                Trade
              </Link>
            </li>
            <li>
              <Link className="font-akira" to="/portfolio">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex navbar-center gap-x-12">
        <Link
          to="/markets"
          className={classNames(
            "font-akira normal-case text-hyper-blue-100 transition duration-200 border-hyper-green hover:hyper-green",
            {
              "font-bold": pathname === "/markets",
              "border-b-2": pathname === "/markets",
            },
          )}
        >
          Markets
        </Link>

        <Link
          to="/trade"
          className={classNames(
            "font-akira normal-case text-hyper-blue-100 transition duration-200 border-hyper-green hover:hyper-green",
            {
              "font-bold": pathname === "/trade",
              "border-b-2": pathname === "/trade",
            },
          )}
        >
          Trade
        </Link>

        <Link
          to="/portfolio"
          className={classNames(
            "font-akira normal-case text-hyper-blue-100 transition duration-200 hover:border-hyper-green border-hyper-green",
            {
              "font-bold": pathname === "/trade",
              "border-b-2": pathname === "/portfolio",
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
