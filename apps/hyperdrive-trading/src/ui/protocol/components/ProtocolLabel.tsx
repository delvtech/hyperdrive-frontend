import classNames from "classnames";
import { ReactElement } from "react";
import { Protocol } from "src/config/HyperdriveConfig";

interface ProtocolLabelProps {
  protocol: Protocol;
  className?: string;
}

export function ProtocolLabel({
  protocol,
  className,
}: ProtocolLabelProps): ReactElement {
  return (
    <span
      className={classNames(
        className,
        "flex items-center gap-x-2 font-quantico",
      )}
    >
      <img className="h-4" src={protocol.iconUrl} />
      {protocol.name}
    </span>
  );
}
