import classNames from "classnames";
import { ReactElement } from "react";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { OrderType, PositionType } from "src/ui/hyperdrive/types";

type Status = "Pending..." | "Executed";

interface MakeNewPositionToastOptions {
  order: OrderType;
  position: PositionType;
  hash: string | undefined;
  status?: Status;
}

/**
 * @deprecated Don't use toasts to notify of positions, use RainbowKit instead
 */
export function makeNewPositionToast({
  order,
  position,
  hash,
  status = "Pending...",
}: MakeNewPositionToastOptions): ReactElement {
  return (
    <div
      className={classNames(
        "w-fit border border-primary bg-base-300 px-6 py-2 font-quantico text-hyper-blue-100",
      )}
    >
      <h6>
        Order:{" "}
        <span className="mr-2 font-bold uppercase">
          {order} {position}
        </span>
      </h6>

      <h6>
        Status: <span className="mr-2 font-bold">{status}</span>
      </h6>

      {hash && (
        <h6>
          Hash: <span className="mr-2 font-bold">{formatAddress(hash)}</span>
        </h6>
      )}
    </div>
  );
}
