import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { Link } from "@tanstack/react-router";
import { ReactElement, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";
import { useAccount } from "wagmi";

export function ManageShortButton({
  hyperdrive,
  account: accountFromProps,
  assetId,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  assetId: bigint;
}): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const { address: connectedAccount } = useAccount();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickAway(dropdownRef, () => setIsOpen(false));
  return (
    <div
      className="relative flex w-full items-center font-inter"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 hover:bg-gray-700"
      >
        <Cog8ToothIcon className="h-5" />
        Manage
      </button>
      {isOpen && (
        <ul className="absolute right-6 top-full z-50 mt-4 w-[300px] rounded-box border border-neutral-content/20 bg-neutral px-4 py-1">
          {accountFromProps === connectedAccount && (
            <button
              className="m-0 flex h-[52px] w-full flex-row items-center justify-start border-b-2 border-b-neutral-content/20 p-0 text-start hover:bg-neutral hover:text-neutral-content"
              onClick={() => {
                const modalId = `${hyperdrive.address}-${assetId}`;
                (
                  document.getElementById(modalId) as HTMLDialogElement
                ).showModal();
              }}
            >
              Close Short
            </button>
          )}
          <Link
            className="m-0 flex h-[52px] w-full flex-row items-center justify-start p-0 text-start hover:bg-neutral hover:text-neutral-content"
            to={MARKET_DETAILS_ROUTE}
            params={{
              chainId: hyperdrive.chainId.toString(),
              address: hyperdrive.address,
            }}
            search={{ position: "short" }}
          >
            Go to pool
          </Link>
        </ul>
      )}
    </div>
  );
}
