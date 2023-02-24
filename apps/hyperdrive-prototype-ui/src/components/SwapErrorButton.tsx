import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";

export function SwapErrorButton(): ReactElement {
  return (
    <button
      disabled
      className="font-bold disabled:text-black btn-lg btn disabled:bg-error"
    >
      <ExclamationCircleIcon className="w-5 mr-1" />
      Can&apos;t swap
    </button>
  );
}
