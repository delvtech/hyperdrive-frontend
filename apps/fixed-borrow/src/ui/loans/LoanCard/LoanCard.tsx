import { ReactElement, useState } from "react";
import { Card } from "src/ui/base/Card/Card";
import { Well } from "src/ui/base/Well/Well";

interface LoanCardProps {}

export function LoanCard({}: LoanCardProps): ReactElement {
  const [supplyAmount, setSupplyAmount] = useState<string | undefined>();
  const [borrowAmount, setBorrowAmount] = useState<string | undefined>();
  const [termLength, setTermLength] = useState<string | undefined>();

  return (
    <Card>
      {/* Scaffold two columns */}
      <div className="flex gap-10">
        {/* Form */}
        <div className="flex-1">
          left side here
          {/* Asset Header */}
          <div></div>
          {/* Inputs */}
          <div>
            {/* Supply Input */}
            {/* Borrow Input */}
          </div>
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
                  <span className="text-lightText">Desired borrow amount</span>
                  <span>2,500 DAI</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-lightText">
                    Hyperdrive short<span>( i )</span>
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
  );
}
