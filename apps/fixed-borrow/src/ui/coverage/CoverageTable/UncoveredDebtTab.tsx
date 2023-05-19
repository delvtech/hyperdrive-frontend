import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "src/ui/base/Button/Button";

export function UncoveredDebtTab(): ReactElement {
  return (
    <>
      <div className="space-y-6">
        <Well>
          <div className="flex flex-col gap-4 bg-midnight ">
            <div className="flex justify-between font-bold">
              <span className="text-h6 font-semibold uppercase text-secondaryText">
                Coverage Amount
              </span>
              <span className="text-h6 text-lightText">{"2,300.23 DAI"}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-h6 font-semibold uppercase text-secondaryText">
                Coverage expires on
              </span>
              <span className=" text-h6 text-lightText">
                {"December 31, 2023"}
              </span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-h6 font-semibold uppercase text-secondaryText">
                Fixed Rate
              </span>
              <span className="text-h6 text-lightText">{"1.5% APY"}</span>
            </div>
            <div className="flex justify-between font-bold">
              <div className="flex items-center gap-1 text-h6 font-bold uppercase text-secondaryText">
                <span>Cost of Coverage</span>{" "}
                <InformationCircleIcon
                  title="The value of the Hyperdrive short, which acts as a guarantee for the fixed rate coverage, will be transfered to you upon closing coverage."
                  width={18}
                  className="stroke-current"
                />
              </div>
              <span className="text-h6 font-bold text-pinkSlip">32.14 DAI</span>
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
