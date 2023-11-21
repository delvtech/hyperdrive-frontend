import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";

export function MarketBreadcrumbs({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  return (
    <div className="flex flex-1 justify-between">
      <div className="daisy-breadcrumbs md:text-h6">
        <ul>
          <li>
            <Link to="/markets">All Markets</Link>
          </li>
          <li>
            {hyperdrive.baseToken.symbol} / {`hy${hyperdrive.baseToken.symbol}`}
          </li>
        </ul>
      </div>
    </div>
  );
}
