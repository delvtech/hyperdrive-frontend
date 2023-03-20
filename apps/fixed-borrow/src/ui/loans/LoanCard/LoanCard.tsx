import { ReactElement, useState } from "react";
import { Card } from "src/ui/base/Card/Card";

interface LoanCardProps {}

export function LoanCard({}: LoanCardProps): ReactElement {
  const [supplyAmount, setSupplyAmount] = useState<string | undefined>();
  const [borrowAmount, setBorrowAmount] = useState<string | undefined>();
  const [termLength, setTermLength] = useState<string | undefined>();

  return (
    <Card>
      {/* Scaffold two columns */}
      <div className="flex">
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
        <div className="flex-1">
          right side here
          {/* Position Preview */}
          {/* <Well /> */}
          {/* Transaction Preview */}
          {/* <Well /> */}
        </div>
      </div>
    </Card>
  );
}
