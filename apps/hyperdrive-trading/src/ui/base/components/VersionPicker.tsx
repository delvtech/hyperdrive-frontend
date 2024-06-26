import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function VersionPicker(): JSX.Element {
  return (
    <div className="daisy-dropdown">
      <div
        tabIndex={0}
        className="daisy-btn flex items-center justify-center rounded-full"
      >
        Latest Version
        <ChevronDownIcon className="hidden h-4 sm:inline" />
      </div>
      <ul
        tabIndex={0}
        className="daisy-menu daisy-dropdown-content z-[1] w-auto gap-2 rounded-lg bg-base-100 p-4 shadow"
      >
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://testnet-v1.hyperdrive.box/"
          >
            V1 Pools
          </a>
        </li>
      </ul>
    </div>
  );
}
