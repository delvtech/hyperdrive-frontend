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
            <div className="flex justify-between">
              <span className="text-h6 font-semibold uppercase text-secondaryText">
                Current Fixed Rate
              </span>
              <span className="text-h6 text-lightText">{"1.5% APR"}</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 ">
                <span className="text-h6 font-semibold uppercase text-secondaryText">
                  Rate expires on
                </span>
                <InformationCircleIcon
                  title="After expiration, this position will no longer provide any fixed rate coverage and will need to be redeemed. You can redeem coverage and re-open new coverage at any time."
                  width={18}
                  className="stroke-secondaryText"
                />
              </div>
              <span className=" text-h6 text-lightText">
                {"December 31, 2023"}
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 ">
                <span className="text-h6 font-bold uppercase text-secondaryText">
                  Total uncovered debt
                </span>
                <InformationCircleIcon
                  title="Your total debt balance minus any existing coverage."
                  width={18}
                  className="stroke-secondaryText"
                />
              </div>
              <span className="text-h6 font-bold text-lightText">
                {"2,300.23 DAI"}
              </span>
            </div>
            <div className="flex justify-between font-bold">
              <div className="flex items-center gap-1 ">
                <span className="text-h6 font-bold uppercase text-secondaryText">
                  Cost of Coverage
                </span>{" "}
                <InformationCircleIcon
                  title="The value of the Hyperdrive short, which acts as a guarantee for the fixed rate coverage, will be transfered to you upon closing coverage."
                  width={18}
                  className="stroke-secondaryText"
                />
              </div>
              <span className="text-h6 font-bold text-lightText ">
                32.14 DAI
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
