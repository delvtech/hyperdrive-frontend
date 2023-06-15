import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CircleStackIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import { PropsWithChildren, ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { PositionType } from "src/ui/hyperdrive/types";
import { OpenLongPositionForm } from "src/ui/trading/OpenLongPositionForm";
import { OpenShortPositionForm } from "src/ui/trading/OpenShortPositionForm";
import { match } from "ts-pattern";

interface PositionFormProps {
  market: Hyperdrive;
  handleClose?: () => void;
}

export function PositionForm({
  market,
  handleClose,
}: PositionFormProps): ReactElement {
  const [position, setPosition] = useState<PositionType>("Long");

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-end">
        {handleClose && (
          <div>
            <XMarkIcon
              className="h-6 cursor-pointer stroke-hyper-blue-100 stroke-2  hover:opacity-50"
              onClick={handleClose}
            />
          </div>
        )}
      </div>

      {/* Position button group */}
      <div className="daisy-join mb-8 mt-2 w-full">
        <PositionFormButton
          onClick={() => setPosition("Long")}
          active={position === "Long"}
        >
          <ArrowTrendingUpIcon className="mr-1 w-5" />
          Long
        </PositionFormButton>
        <PositionFormButton
          onClick={() => setPosition("Short")}
          active={position === "Short"}
        >
          <ArrowTrendingDownIcon className="mr-1 w-5" />
          Short
        </PositionFormButton>
        <PositionFormButton
          onClick={() => setPosition("LP")}
          active={position === "LP"}
        >
          <CircleStackIcon className="mr-1 w-4" />
          LP
        </PositionFormButton>
      </div>

      {match(position)
        .with("Long", () => <OpenLongPositionForm market={market} />)
        .with("Short", () => <OpenShortPositionForm market={market} />)
        .with("LP", () => <div></div>)
        .exhaustive()}
    </div>
  );
}

interface PositionFormButtonProps extends PropsWithChildren {
  onClick: () => void;
  active?: boolean;
}

function PositionFormButton({
  onClick,
  children,
  active = false,
}: PositionFormButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "daisy-btn-ghost daisy-join-item daisy-btn flex-1",
        {
          "daisy-btn-active": active,
        },
      )}
    >
      {children}
    </button>
  );
}
