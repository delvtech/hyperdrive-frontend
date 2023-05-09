import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { ShortActionsMenu } from "./DebtDetailsSection";
import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";
import {
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "src/ui/base/Button/Button";

export function UncoveredDebtDetails(): ReactElement {
  return (
    <>
      <div className="space-y-6">
        <p className="text-h6 text-lightText">
          Your DAI debt is currently exposed to variable rate interest.
        </p>
        <p className="text-h6 text-lightText">
          In order to convert this into a fixed interest rate, you can make use
          of the{" "}
          <a
            href="#"
            className="font-semibold underline underline-offset-4 hover:no-underline"
          >
            Hyperdrive protocol
          </a>
          , which allows you to hedge against any fluctuations in the variable
          rate.
        </p>
        <p className="text-h6 text-lightText">
          Note: Your total debt will not change, and you have the option to
          terminate your coverage at any time.
        </p>
        <Well>
          <div className="flex flex-col gap-4 bg-midnight ">
            <div className={"flex justify-between font-bold"}>
              <span className=" text-h6 font-semibold uppercase text-secondaryText">
                Coverage Amount
              </span>
              <span className=" text-h6 text-lightText">{"2,300.23 DAI"}</span>
            </div>
            <div className={"flex justify-between font-bold"}>
              <span className=" text-h6 font-semibold uppercase text-secondaryText">
                Coverage expires on
              </span>
              <span className=" text-h6 text-lightText">
                {"December 31, 2023"}
              </span>
            </div>
            <div className={"flex justify-between font-bold"}>
              <span className=" text-h6 font-semibold uppercase text-secondaryText">
                Fixed Rate
              </span>
              <span className=" text-h6 text-lightText">{"1.5%"}</span>
            </div>
            <div className={"flex justify-between font-bold"}>
              <div className="flex items-center gap-1 text-h6 font-bold uppercase text-secondaryText">
                <span>Cost of Coverage</span>{" "}
                <InformationCircleIcon
                  title="The value of the Hyperdrive short, which acts as a guarantee for the fixed rate coverage, will be transfered to you upon closing coverage."
                  width={18}
                  className="stroke-current"
                />
              </div>
              <span className=" text-h6 font-bold text-pinkSlip">
                {"32.14 DAI"}
              </span>
            </div>
          </div>
        </Well>
        <div className="flex w-full justify-center gap-4 pt-2">
          <Button size="md" variant="pinkSlip" onClick={() => {}} block>
            Open coverage
          </Button>
        </div>
      </div>
    </>
  );
}
