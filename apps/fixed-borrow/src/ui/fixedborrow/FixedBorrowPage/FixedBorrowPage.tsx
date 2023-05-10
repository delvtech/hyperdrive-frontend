import { ReactElement } from "react";
import { InfoDisclosure } from "src/ui/base/InfoDisclosure/InfoDisclosure";
import { CoverageTable } from "src/ui/fixedborrow/CoverageTable/CoverageTable";

export function FixedBorrowPage(): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <div className="flex max-w-4xl flex-col gap-28">
          <div>
            <h4 className="mb-4 font-bold text-white">Spark Borrows</h4>
            <CoverageTable />
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">FAQ</h4>
            <InfoDisclosure heading={"How does fixed rate coverage work?"}>
              By opening a Hyperdrive short against the variable rate, you
              effectively lock in a fixed rate for however long the short is
              good for.
            </InfoDisclosure>
            <InfoDisclosure
              heading={"How is the current available fixed rate calculated?"}
            >
              The fixed rate is calculated by first getting the upfront cost of
              the Hyperdrive short and converting it to an APY percentage.
            </InfoDisclosure>
            <InfoDisclosure
              heading={"What happens when my fixed rate coverage expires?"}
            >
              When the coverage expires, your debt will automatically switch
              back to the variable rate. You can close expired coverage and
              re-open new coverage to lock in a fixed rate again.
            </InfoDisclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
