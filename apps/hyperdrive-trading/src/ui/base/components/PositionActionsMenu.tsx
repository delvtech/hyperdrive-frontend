import { Long, OpenShort } from "@delvtech/hyperdrive-viem";
import { formatAddress } from "src/ui/base/formatting/formatAddress";

export function PositionActionsMenu({
  position,
}: {
  position: Long | OpenShort;
}): JSX.Element {
  function copyToClipboard() {
    navigator.clipboard.writeText(position.assetId.toString());
  }
  return (
    <>
      <span className="daisy-menu-title text-neutral-content">
        Position Details
      </span>
      <li>
        <button
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard();
          }}
        >
          <span>ID:</span>
          {/* <DocumentDuplicateIcon className="h-4" /> */}
          {formatAddress(position.assetId.toString())}
        </button>
      </li>
    </>
  );
}
