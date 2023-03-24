import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";
import { Address, useAccount, useToken } from "wagmi";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import Skeleton from "react-loading-skeleton";
import { PreviewRow } from "src/ui/loans/previews/PreviewRow";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { MARKET_BASE_DECIMALS } from "src/pools/constants";
import { useUserCurrentDebt } from "src/ui/loans/hooks/useUserCurrentDebt";
import { formatUSD } from "src/ui/base/formatting/formatUSD";

// TODO: use previewSupplyBalance to calculate the preview loan to value

interface PositionPreviewProps {
  borrowTokenAddress: Address;
}

export function PositionPreview({
  borrowTokenAddress,
}: PositionPreviewProps): ReactElement {
  const { address: account } = useAccount();
  const { data: borrowTokenData } = useToken({ address: borrowTokenAddress });
  const { formattedCurrentDebt } = useUserCurrentDebt(
    account,
    borrowTokenAddress,
  );
  const { userAccountData } = useUserAccountData(account);

  return (
    <Well>
      <div className="space-y-4 leading-sm">
        <PreviewRow
          label="Total collateral"
          value={(() => {
            if (!account) {
              return "$0";
            }
            if (!userAccountData) {
              return <Skeleton width={120} />;
            }
            return formatUSD(
              formatBigInt(
                userAccountData.totalCollateralBase,
                MARKET_BASE_DECIMALS,
              ),
            );
          })()}
        />
        <PreviewRow
          label="Total debt"
          value={(() => {
            if (!account) {
              return "$0";
            }
            if (!userAccountData) {
              return <Skeleton width={120} />;
            }
            return formatUSD(
              formatBigInt(userAccountData.totalDebtBase, MARKET_BASE_DECIMALS),
            );
          })()}
        />
        <PreviewRow
          label={
            borrowTokenData
              ? `${borrowTokenData.symbol} debt`
              : "Borrow token debt"
          }
          value={(() => {
            if (!account) {
              return "$0";
            }
            if (!formattedCurrentDebt) {
              return <Skeleton width={120} />;
            }
            return `${formattedCurrentDebt} ${borrowTokenData?.symbol}`;
          })()}
        />
        <PreviewRow
          label="Borrow limit"
          value={(() => {
            if (!account) {
              return "$0";
            }
            if (!userAccountData) {
              return <Skeleton width={120} />;
            }
            return formatUSD(
              formatBigInt(
                userAccountData.availableBorrowBase,
                MARKET_BASE_DECIMALS,
              ),
            );
          })()}
        />
        <PreviewRow
          label="Loan-to-value"
          value={(() => {
            if (!account) {
              return "0";
            }
            if (!userAccountData) {
              return <Skeleton width={120} />;
            }
            return `${formatBigInt(
              userAccountData.ltv,
              MARKET_BASE_DECIMALS,
            )}%`;
          })()}
        />
      </div>
    </Well>
  );
}
