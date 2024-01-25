import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";

export function MarketBreadcrumbs(): ReactElement {
  return (
    <div className="flex flex-1 justify-between">
      <div className="daisy-breadcrumbs md:text-md">
        <ul>
          <li>
            <Link to="/markets" className="text-accent">
              <ArrowLeftIcon className="mr-1 h-4" />
              Back to markets
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
