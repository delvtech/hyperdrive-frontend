import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement, useState } from "react";
import { Button } from "src/ui/base/Button/Button";
import { Card } from "src/ui/base/Card/Card";
import { InfoTooltip } from "src/ui/base/Tooltip/InfoTooltip";
import { BorrowInput } from "src/ui/loans/BorrowInput/BorrowInput";
import { LoanCardHeader } from "src/ui/graveyard/LoanCard/LoanCardHeader";
import { SupplyInput } from "src/ui/loans/SupplyInput/SupplyInput";
import { TermLength } from "src/ui/shorts/termLength";
import { TransactionPreview } from "src/ui/loans/previews/TransactionPreview";
import { useToken } from "wagmi";
import { useNumericInput } from "src/ui/base/NumericInput/useNumericInput";
import { calculateValueToShort } from "src/shorts/calculateValueToShort";
import { parseUnits } from "viem";

interface LoanCardProps {
  supplyTokenAddress: `0x${string}`;
  borrowTokenAddress: `0x${string}`;
}

// The same buffer that's used in the contract tests:
// https://github.com/delvtech/hyperdrive/blob/main/test/integrations/AaveFixedBorrow.t.sol#L104
const MAX_DEPOSIT_BUFFER = parseUnits("1.1", 18);

export function LoanCard({
  supplyTokenAddress,
  borrowTokenAddress,
}: LoanCardProps): ReactElement {
  const [termLength, setTermLength] = useState<TermLength | undefined>();

  // Supply input state
  const { data: supplyTokenMetadata } = useToken({
    address: supplyTokenAddress,
  });
  const {
    amount: supplyAmount,
    amountAsBigInt: supplyAmountBigInt,
    setAmount: setSupplyAmount,
  } = useNumericInput({
    decimals: supplyTokenMetadata?.decimals,
  });

  // Borrow input state
  const { data: borrowTokenMetadata } = useToken({
    address: borrowTokenAddress,
  });
  const {
    amountAsBigInt: borrowAmountBigInt,
    amount: borrowAmount,
    setAmount: setBorrowAmount,
  } = useNumericInput({
    decimals: borrowTokenMetadata?.decimals,
  });

  // Simple calc for how many bonds (aka longs) are needed to short the borrow
  // amount
  const bondAmount =
    borrowAmountBigInt && borrowTokenMetadata?.decimals
      ? calculateValueToShort(borrowAmountBigInt, borrowTokenMetadata.decimals)
      : undefined;

  return (
    <div className="flex flex-col items-center gap-6">
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
              <Button size="lg" variant="sun" disabled onClick={() => {}}>
                Borrow
              </Button>
            </div>
          </div>
          {/* Previews */}
          <div className="flex min-w-[320px] flex-1 flex-col justify-between gap-6">
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
