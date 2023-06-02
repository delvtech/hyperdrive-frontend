import classNames from "classnames";
import { ReactElement } from "react";
import { YieldSource } from "src/appconfig/types";

interface ProtocolLabelProps {
  protocol: YieldSource;
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
        "flex items-center gap-x-2 font-dm-sans",
      )}
    >
      <img className="h-4" src={protocol.iconUrl} />
      {protocol.name}
    </span>
  );
}
