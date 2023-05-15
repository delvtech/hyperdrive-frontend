import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { InfoDisclosure } from "src/ui/base/InfoDisclosure/InfoDisclosure";
import { CoverageTable } from "src/ui/fixedborrow/CoverageTable/CoverageTable";
import { QuickstartSection } from "src/ui/quickstart/QuickStartSection/QuickstartSection";

export function FixedBorrowPage(): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <div className="flex max-w-4xl flex-col gap-28">
          <div className="flex flex-col">
            {/* Quick start */}
            <Disclosure>
              <Disclosure.Button
                className={
                  "flex w-full cursor-pointer flex-col justify-between rounded-lg border-b border-dawn p-6 text-h6 text-lightText hover:bg-inputBg ui-open:rounded-b-none ui-open:border-b ui-open:bg-inputBg ui-not-open:border-dawn"
                }
              >
                <div className="flex w-full justify-between">
                  <h4 className="flex justify-between gap-2 font-bold text-white">
                    Quick start
                  </h4>
                  <ChevronDownIcon
                    className="transition duration-500 ui-open:rotate-180 "
                    width={24}
                  />
                </div>
                <p className=" text-h6 text-secondaryText">
                  Pre-requisite transactions for minting collateral and opening
                  a testnet loan before trying out Fixed Borrow.
                </p>
              </Disclosure.Button>
              <Disclosure.Panel>
                <QuickstartSection />
              </Disclosure.Panel>
            </Disclosure>
          </div>

          {/* Borrows table */}
          <div>
            <h4 className="mb-4 font-bold text-white">Spark Borrows</h4>
            <CoverageTable />
          </div>

          {/* FAQ */}
          <div>
            <h4 className="mb-4 font-bold text-white">FAQ</h4>
            <InfoDisclosure heading="How does fixed rate coverage work?">
              By opening a Hyperdrive short against the variable rate, you
              effectively lock in a fixed rate for however long the short is
              good for.
            </InfoDisclosure>
            <InfoDisclosure heading="How is the current available fixed rate calculated?">
              The fixed rate is calculated by first getting the upfront cost of
              the Hyperdrive short and converting it to an APY percentage.
            </InfoDisclosure>
            <InfoDisclosure heading="What happens when my fixed rate coverage expires?">
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
