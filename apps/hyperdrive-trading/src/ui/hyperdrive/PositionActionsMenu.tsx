import type { Long, OpenShort } from "@delvtech/hyperdrive-viem";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import { formatAssetId } from "src/ui/base/formatting/formatAssetId";

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
      <span className="daisy-menu-title text-neutral-content">Asset ID</span>
      <li>
        <button
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard();
          }}
          className="group relative flex items-center"
        >
          <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            ID:
          </span>
          <DocumentDuplicateIcon className="absolute size-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          <span>{formatAssetId(position.assetId.toString())}</span>
        </button>
      </li>
    </>
  );
}
