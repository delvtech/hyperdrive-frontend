import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function VersionPicker(): JSX.Element {
  return (
    <div className="daisy-dropdown">
      <div tabIndex={0} className="daisy-btn flex items-center justify-center">
        Version 1.0.0
        <ChevronDownIcon className="h-4" />
      </div>
      <ul
        tabIndex={0}
        className="daisy-menu daisy-dropdown-content z-[1] w-52 gap-2 rounded-lg bg-base-100 p-4 shadow"
      >
        <li>
          <a>Version 1.0.0</a>
        </li>
        <li>
          <a>Version 1.0.1</a>
        </li>
        <li>
          <a>Version 1.0.2</a>
        </li>
      </ul>
    </div>
  );
}
