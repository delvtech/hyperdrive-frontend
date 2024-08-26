import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { getWithdrawalSharesCurrentValue } from "src/ui/hyperdrive/withdrawalShares/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { useAccount } from "wagmi";

export function ManageLpAndWithdrawalSharesButton({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const {
    baseProceeds: baseProceedsFromPreview,
    withdrawalSharesRedeemed: withdrawalSharesRedeemedFromPreview,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: balanceOfWithdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
  });

  const withdrawalSharesCurrentValue = getWithdrawalSharesCurrentValue({
    decimals: hyperdrive.decimals,
    lpSharePrice: poolInfo?.lpSharePrice,
    withdrawalShares: balanceOfWithdrawalShares,
    baseProceedsFromPreview,
    withdrawalSharesRedeemedFromPreview,
  });

  return (
    <div className="daisy-dropdown daisy-dropdown-bottom flex w-full items-center font-inter">
      <button
        tabIndex={0}
        className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 hover:bg-gray-700"
      >
        <Cog8ToothIcon className="h-5" />
        Manage
      </button>
      <ul
        tabIndex={0}
        className="daisy-menu daisy-dropdown-content absolute right-6 top-full z-50 mt-4 w-[270px] rounded-box border border-neutral-content/20 bg-neutral p-4"
      >
        {balanceOfWithdrawalShares ? (
          <>
            <button className="daisy-btn daisy-btn-ghost flex w-full flex-row justify-start rounded-btn px-0 hover:bg-neutral hover:text-neutral-content">
              <span>Claim from queue</span>
              <span className="ml-6 rounded-md border border-success/20 bg-success/20 px-1 text-success">
                {baseProceedsFromPreview !== undefined ? (
                  `+ ${formatBalance({
                    balance: baseProceedsFromPreview,
                    decimals: baseToken.decimals,
                    places: baseToken.places,
                  })}`
                ) : (
                  <Skeleton />
                )}
              </span>
            </button>
            <div className="daisy-divider m-0 p-0" />
          </>
        ) : undefined}
        <button className="daisy-btn daisy-btn-ghost m-0 flex h-[52px] w-full flex-row justify-start rounded-btn p-0 text-start hover:bg-neutral hover:text-neutral-content">
          Add Liquidity
        </button>
        <div className="daisy-divider m-0 p-0" />
        <button className="daisy-btn daisy-btn-ghost m-0 flex w-full flex-row justify-start rounded-btn p-0 text-start hover:bg-neutral hover:text-neutral-content">
          Remove Liquidity
        </button>
      </ul>
    </div>
  );
}
