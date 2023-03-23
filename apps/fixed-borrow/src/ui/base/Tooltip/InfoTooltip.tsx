import { ReactElement } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip, TooltipProps } from "./Tooltip";

interface InfoTooltipProps extends TooltipProps {}

export function InfoTooltip(props: InfoTooltipProps): ReactElement {
  return (
    <Tooltip {...props}>
      <InformationCircleIcon width={18} className="stroke-current" />
    </Tooltip>
  );
}
