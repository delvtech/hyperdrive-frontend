import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { useChainId } from "wagmi";

export function Navbar(): ReactElement {
  const chainId = useChainId();
  return (
    <div className="daisy-navbar bg-base-100 ">
      <div className="daisy-navbar-start ml-2">
        <a className="inline-flex items-center gap-2 font-lato text-h6 font-extrabold uppercase tracking-widest">
          <div className="inline-flex w-full">
            <div className="h-4 w-2.5 -skew-x-12 bg-[#007eed]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#522dae]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#f40000]"></div>
          </div>
          Hyperdrive
        </a>
      </div>
      <div className="daisy-navbar-end gap-8">
        {chainId === +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID ? (
          <a
            href="https://infra.delv.tech/dashboard/"
            className="daisy-link-hover daisy-link inline-flex items-center underline"
            target="_blank"
            rel="noreferrer"
          >
            Leaderboard
          </a>
        ) : null}
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
