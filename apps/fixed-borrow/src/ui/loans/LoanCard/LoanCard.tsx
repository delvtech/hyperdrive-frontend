import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement, useState } from "react";
import { Button } from "src/ui/base/Button/Button";
import { Card } from "src/ui/base/Card/Card";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { InfoTooltip } from "src/ui/base/Tooltip/InfoTooltip";
import { Well } from "src/ui/base/Well/Well";
import { BorrowInput } from "src/ui/loans/BorrowInput/BorrowInput";
import { LoanCardHeader } from "src/ui/loans/LoanCard/LoanCardHeader";
import { SupplyInput } from "src/ui/loans/SupplyInput";
import { TermLength } from "src/ui/shorts/termLength";

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
          {/* Previews */}
          <div className="flex min-w-[320px] flex-1 flex-col justify-between gap-6">
            <div>
              <h3 className="mb-1 text-lg font-bold leading-lg">
                Position Preview
              </h3>
              {/* Position Preview */}
              <Well>
                <div className="space-y-4 leading-sm">
                  <div className="flex justify-between">
                    <span className="text-lightText">Collateral</span>
                    <span>$119,338.90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lightText">Debt</span>
                    <span>7,378 DAI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lightText">Borrow limit</span>
                    <span>85,794.16 DAI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lightText">Loan-to-value</span>
                    <span>6%</span>
                  </div>
                </div>
              </Well>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold  leading-lg">
                Transaction Preview
              </h3>
              {/* Position Preview */}
              <Well>
                <div className="space-y-4 leading-sm">
                  <div className="flex justify-between">
                    <span className="text-lightText">Deposit Amount</span>
                    <span>7 wstETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lightText">
                      Desired borrow amount
                    </span>
                    <span>2,500 DAI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2 text-lightText">
                      Hyperdrive short
                      <InfoTooltip content="The amount required to lock in the fixed rate via a Hyperdrive short." />
                    </span>
                    <span>4.4321 DAI</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-lightText">Total new debt</span>
                    <span>2,504.4321 DAI</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-lightText">You receive</span>
                    <span className="text-right">
                      2,500 DAI
                      <br />
                      2,500 Short
                    </span>
                  </div>
                </div>
              </Well>
            </div>
            {/* Transaction Preview */}
            {/* <Well /> */}
          </div>
        </div>
      </Card>
    </div>
  );
}
