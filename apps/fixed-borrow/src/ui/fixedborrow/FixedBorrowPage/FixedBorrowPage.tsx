import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { InfoDisclosure } from "src/ui/base/InfoDisclosure/InfoDisclosure";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import { MintStatWell } from "src/ui/faucet/MintStatWell";
import { CoverageTable } from "src/ui/fixedborrow/CoverageTable/CoverageTable";
import { BorrowStatWell } from "src/ui/loans/BorrowStatWell/BorrowStatWell";
import { SupplyStatWell } from "src/ui/loans/SupplyStatWell/SupplyStatWell";

export function FixedBorrowPage(): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <div className="flex max-w-4xl flex-col gap-28">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-white">Quick start</h4>
            <QuickstartSection />
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Spark Borrows</h4>
            <CoverageTable />
          </div>
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

function QuickstartSection() {
  return (
    <>
      <span className="mb-2 text-h6 text-secondaryText">
        After <strong>Step 2</strong>, you will be able to open fixed rate
        coverage in the <strong>Spark Borrows</strong> section below.
      </span>
      <div className="grid grid-cols-4 gap-4">
        <MintStatWell
          tokenAddress={SparkGoerliAddresses.wstETH_token}
          amount={parseBigInt("100", 18)}
          label={"Step 1"}
          stat={"Mint Collateral wstETH"}
        />
        <SupplyStatWell
          label={"Step 2"}
          stat={"Supply Collateral on Spark"}
          tokenAddress={SparkGoerliAddresses.wstETH_token}
          amount={parseBigInt("10", 18)}
        />
        <BorrowStatWell
          label={"Step 2"}
          stat={"Borrow DAI on Spark"}
          tokenAddress={SparkGoerliAddresses.DAI_token}
          amount={parseBigInt("10", 18)}
        />
        <StatWell
          label={"Step 3"}
          stat={"Repay DAI on Spark"}
          onClick={() => {}}
        ></StatWell>
        <MintStatWell
          tokenAddress={SparkGoerliAddresses.DAI_token}
          amount={parseBigInt("10000", 18)}
          label={"Just in case"}
          stat={"Mint DAI"}
        />
      </div>
    </>
  );
}
