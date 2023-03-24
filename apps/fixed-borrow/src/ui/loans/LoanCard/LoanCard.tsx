import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement, useState } from "react";
import { Button } from "src/ui/base/Button/Button";
import { Card } from "src/ui/base/Card/Card";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { InfoTooltip } from "src/ui/base/Tooltip/InfoTooltip";
import { BorrowInput } from "src/ui/loans/BorrowInput/BorrowInput";
import { LoanCardHeader } from "src/ui/loans/LoanCard/LoanCardHeader";
import { SupplyInput } from "src/ui/loans/SupplyInput/SupplyInput";
import { TermLength } from "src/ui/shorts/termLength";
import { PositionPreview } from "src/ui/loans/previews/PositionPreview";
import { TransactionPreview } from "src/ui/loans/previews/TransactionPreview";

interface LoanCardProps {}

export function LoanCard({}: LoanCardProps): ReactElement {
  const [activeTab, setActiveTab] = useState(0);
  const [supplyAmount, setSupplyAmount] = useState<string | undefined>();
  const [borrowAmount, setBorrowAmount] = useState<string | undefined>();
  const [termLength, setTermLength] = useState<TermLength | undefined>();

  return (
    <div className="flex flex-col items-center gap-6">
      <Tabs
        tabs={[
          {
            label: "Borrow",
            variant: "sun",
          },
          {
            label: "Portfolio",
            variant: "pinkSlip",
          },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      <Card>
        {/* Scaffold two columns */}
        <div className="flex gap-10">
          {/* Form */}
          <div className="flex min-w-[320px] flex-1 flex-col gap-6">
            <LoanCardHeader />
            <div></div>
            {/* Inputs */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-[26px]">
                <SupplyInput
                  tokenAddress={SparkGoerliAddresses.wstETH_token}
                  value={supplyAmount}
                  onChange={(newValue) => setSupplyAmount(newValue)}
                />

                <BorrowInput
                  tokenAddress={SparkGoerliAddresses.DAI_token}
                  value={borrowAmount}
                  onChange={(newValue) => setBorrowAmount(newValue)}
                />
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-lg text-lightText">
                    <InfoTooltip content="The borrow rate becomes variable after the fixed rate expires." />
                    Fixed rate expires in:
                  </span>
                  <Button
                    onClick={() => {
                      setTermLength("365_DAYS");
                    }}
                  >
                    12 months
                  </Button>
                </div>
              </div>
              <Button size="lg" variant="sun" onClick={() => {}}>
                Borrow
              </Button>
            </div>
          </div>
          {/* Previews */}
          <div className="flex min-w-[320px] flex-1 flex-col justify-between gap-6">
            <div>
              <h3 className="mb-1 text-lg font-bold leading-lg">
                Position Preview
              </h3>
              <PositionPreview
                borrowTokenAddress={SparkGoerliAddresses.DAI_token}
              />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold  leading-lg">
                Transaction Preview
              </h3>
              <TransactionPreview
                borrowAmount={borrowAmount}
                borrowTokenAddress={SparkGoerliAddresses.DAI_token}
                supplyAmount={supplyAmount}
                supplyTokenAddress={SparkGoerliAddresses.wstETH_token}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
