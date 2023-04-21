import { Bars3BottomLeftIcon, WalletIcon } from "@heroicons/react/20/solid";
import { ConnectButton, useAccountModal } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAccount } from "wagmi";

export function Navbar(): ReactElement {
  const { pathname } = useLocation();
  const { isConnected } = useAccount();
  const { openAccountModal } = useAccountModal();

  return (
    <div className="navbar grid grid-cols-3 items-center bg-base-100 px-8">
      {/* Navbar start */}
      <div className="justify-self-start">
        {/* Renders in desktop */}
        <div className="hidden lg:block">
          <Link
            to="/markets"
            className="text-3xl whitespace-nowrap font-akira uppercase text-hyper-pink"
          >
            <h4>Hyperdrive</h4>
          </Link>
        </div>

        {/* Renders in mobile */}
        <div className="flex items-center gap-x-2 lg:hidden">
          {/* Menu dropdown */}
          <div className="dropdown text-hyper-blue-100">
            <label
              tabIndex={0}
              className="btn-ghost btn p-0 font-akira lg:hidden"
            >
              <Bars3BottomLeftIcon className="w-6 stroke-hyper-blue-100" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
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
            className="text-3xl whitespace-nowrap font-akira uppercase text-hyper-pink"
          >
            <h4>HD</h4>
          </Link>
        </div>

        {/* Renders in mobile */}
        <div className="hidden gap-x-8 lg:flex">
          <Link
            to="/markets"
            className={classNames(
              "hover:hyper-green border-hyper-green font-akira transition duration-200 hover:text-hyper-blue-100",
              {
                "border-b-2 font-bold text-hyper-blue-100":
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
              "hover:hyper-green border-hyper-green font-akira transition duration-200 hover:text-hyper-blue-100",
              {
                "border-b-2 font-bold text-hyper-blue-100":
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
              "border-hyper-green font-akira transition duration-200 hover:border-hyper-green hover:text-hyper-blue-100",
              {
                "border-b-2 font-bold text-hyper-blue-100":
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
        {isConnected ? (
          <WalletIcon
            type="button"
            onClick={() => openAccountModal?.()}
            className="h-6 cursor-pointer fill-hyper-blue-100 hover:opacity-80"
          />
        ) : (
          <ConnectButton showBalance={false} />
        )}
      </div>
    </div>
  );
}
