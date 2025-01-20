import { XCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export function RestrictedRegionButton({
  wide,
}: {
  wide?: boolean;
}): JSX.Element {
  return (
    <button
      type="button"
      disabled
      className={classNames(
        "daisy-btn daisy-btn-outline flex gap-2 rounded-full border-error/50 !text-error/75",
        {
          "w-full": wide,
        },
      )}
    >
      <XCircleIcon className="size-6" />
      This feature is not available in your region
    </button>
  );
}
