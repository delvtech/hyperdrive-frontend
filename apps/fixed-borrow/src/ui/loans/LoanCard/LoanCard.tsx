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
import { useSupplyBorrowAndOpenShort } from "src/ui/loans/hooks/useSupplyBorrowAndOpenShort";
import { useToken } from "wagmi";
import { useNumericInput } from "src/ui/base/NumericInput/useNumericInput";
import { calculateValueToShort } from "src/shorts/calculateValueToShort";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { ApproveDelegationButton } from "src/ui/loans/ApproveDelegationButton/ApproveDelegationButton";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";

interface LoanCardProps {
  supplyTokenAddress: `0x${string}`;
  borrowTokenAddress: `0x${string}`;
}

// The same buffer that's used in the contract tests:
// https://github.com/element-fi/hyperdrive/blob/main/test/integrations/AaveFixedBorrow.t.sol#L104
const MAX_DEPOSIT_BUFFER = parseBigInt("1.1", 18);
export function LoanCard({
  supplyTokenAddress,
  borrowTokenAddress,
}: LoanCardProps): ReactElement {
  const [activeTab, setActiveTab] = useState(0);
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

  const { supplyBorrowAndOpenShort } = useSupplyBorrowAndOpenShort({
    collateralToken: supplyTokenAddress,
    borrowAmount: borrowAmountBigInt,
    supplyAmount: supplyAmountBigInt,
    bondAmount: bondAmount?.shortAmount,
    maxDeposit: (bondAmount?.shortAmount || 0n) + MAX_DEPOSIT_BUFFER,
  });

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
              <ApproveDelegationButton
                variableDebtTokenAddress={
                  SparkGoerliAddresses.DAI_variableDebtToken
                }
                spender={HyperdriveGoerliAddresses.aaveFixedBorrowAction}
                spenderLabel="aaveFixedBorrowAction"
              />
              <Button
                size="lg"
                variant="sun"
                disabled={!supplyBorrowAndOpenShort}
                onClick={() => supplyBorrowAndOpenShort?.()}
              >
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
