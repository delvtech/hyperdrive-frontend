import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

function Spinner(): ReactElement {
  return (
    <div className="flex items-center justify-center">
      <ArrowPathIcon className="h-5 w-5 animate-spin text-midnight" />
    </div>
  );
}

export default Spinner;
