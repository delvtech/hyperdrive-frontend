import classNames from "classnames";
import { ReactElement } from "react";

interface TokenLabelProps {
  token: string;
  className?: string;
}

export function TokenLabel({
  token,
  className,
}: TokenLabelProps): ReactElement {
  // TODO: autocomplete token string from config
  // TODO: get token image from config
  return (
    <span
      className={classNames(
        "flex items-center gap-x-2 font-dm-sans",
        className,
      )}
    >
      <img
        className="h-4"
        src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024"
      />
      {token}
    </span>
  );
}
