import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { Banner } from "src/ui/base/Banner/Banner";
import { InfoDisclosure } from "src/ui/base/InfoDisclosure/InfoDisclosure";
import { Well } from "src/ui/base/Well/Well";
import { CoverageTable } from "src/ui/coverage/CoverageTable/CoverageTable";
import { useUserCurrentDebt } from "src/ui/loans/hooks/useUserCurrentDebt";
import { QuickstartSection } from "src/ui/quickstart/QuickStartSection/QuickstartSection";
import { useShorts } from "src/ui/shorts/hooks/useShorts";
import { useAccount } from "wagmi";

export function FixedBorrowPage(): ReactElement {
  const { address: account } = useAccount();
  const { currentDebt } = useUserCurrentDebt(
    account,
    SparkGoerliAddresses.DAI_token,
  );
  const { shorts } = useShorts({
    account,
    hyperdriveMarket: HyperdriveGoerliAddresses.makerDsrHyperdrive,
  });

  // TODO: Use a more robust way of calculating hasUncoveredDebt
  const hasUncoveredDebt =
    !!currentDebt &&
    currentDebt >
      parseBigInt(
        // if the user has less than 1 dollar of debt, consider it to be dust
        "1",
        18,
      ) &&
    !shorts?.length;

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
                <p className="text-left text-h6 text-secondaryText">
                  Mint collateral and open a testnet loan before trying out
                  Fixed Borrow.
                </p>
              </Disclosure.Button>
              <Disclosure.Panel>
                <QuickstartSection />
              </Disclosure.Panel>
            </Disclosure>
          </div>

          {/* Borrows table */}
          <div className="flex flex-col gap-8">
            <h4 className="mb-4 font-bold text-white">Spark Borrows</h4>
            <div>
              <CoverageTable />
            </div>
            {hasUncoveredDebt ? (
              <Banner>
                Your DAI debt is currently exposed to variable rate interest. To
                secure fixed rate coverage, choose your borrow position from the
                table above and select <strong>Uncovered Debt</strong>.
              </Banner>
            ) : null}
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
