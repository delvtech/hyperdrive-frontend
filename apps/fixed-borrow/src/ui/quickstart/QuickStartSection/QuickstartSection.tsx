import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import { BorrowQuickStartButton } from "src/ui/quickstart/BorrowQuickStartButton/BorrowQuickStartButton";
import { SupplyQuickStartButton } from "src/ui/quickstart/SupplyQuickStartButton/SupplyQuickStartButton";
import { MintQuickStartButton } from "src/ui/quickstart/MintQuickStartButton/MintQuickStartButton";
import { ReactElement } from "react";
import { RepayQuickStartButton } from "src/ui/quickstart/RepayQuickStartButton/RepayQuickStartButton";

export function QuickstartSection(): ReactElement {
  return (
    <div className="space-y-6 p-4">
      <p className="text-h6 text-secondaryText">
        After <strong>Step 3</strong>, you will be able to open fixed rate
        coverage in the <strong>Spark Borrows</strong> section below.
      </p>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <MintQuickStartButton
              tokenAddress={SparkGoerliAddresses.wstETH_token}
              amount={parseBigInt("10", 18)}
              label={"Step 1"}
              description={"Mint Collateral"}
            />
          </div>
          <div>
            <SupplyQuickStartButton
              label={"Step 2"}
              stat={"Supply Collateral on Spark"}
              tokenAddress={SparkGoerliAddresses.wstETH_token}
              amount={parseBigInt("10", 18)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <BorrowQuickStartButton
              label={"Step 3"}
              stat={"Borrow DAI on Spark"}
              tokenAddress={SparkGoerliAddresses.DAI_token}
              amount={parseBigInt("10", 18)}
            />
          </div>
          <div>
            <RepayQuickStartButton
              label={"Step 4"}
              stat={"Repay DAI on Spark"}
              tokenAddress={SparkGoerliAddresses.DAI_token}
            />
          </div>
        </div>

        <MintQuickStartButton
          tokenAddress={SparkGoerliAddresses.DAI_token}
          amount={parseBigInt("10000", 18)}
          label={"Just in case"}
          description={"Mint DAI"}
        />
      </div>
    </div>
  );
}
