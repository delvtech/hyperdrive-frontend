import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";
import { Address, useAccount, useToken } from "wagmi";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import Skeleton from "react-loading-skeleton";
import { PreviewRow } from "src/ui/loans/previews/PreviewRow";
import { formatUnits } from "viem";
import { NETWORK_BASE_TOKEN_DECIMALS } from "src/pools/networkBaseToken";
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
              formatUnits(
                userAccountData.totalCollateralBase,
                NETWORK_BASE_TOKEN_DECIMALS,
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
              formatUnits(
                userAccountData.totalDebtBase,
                NETWORK_BASE_TOKEN_DECIMALS,
              ),
            );
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
              formatUnits(
                userAccountData.availableBorrowBase,
                NETWORK_BASE_TOKEN_DECIMALS,
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
            return `${formatUnits(
              userAccountData.ltv,
              NETWORK_BASE_TOKEN_DECIMALS,
            )}%`;
          })()}
        />
      </div>
    </Well>
  );
}
