import { Long, Short } from "@delvtech/hyperdrive-viem";
import { ClipboardDocumentIcon } from "@heroicons/react/16/solid";

export function PositionActionsMenu({
  position,
}: {
  position: Long | Short;
}): JSX.Element {
  return (
    <>
      <span className="daisy-menu-title text-neutral-content">
        Position actions
      </span>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
          // href={google(calendarDetails)}
        >
          <ClipboardDocumentIcon className="h-4" />
          Copy to clipboard
        </a>
      </li>
    </>
  );
}
