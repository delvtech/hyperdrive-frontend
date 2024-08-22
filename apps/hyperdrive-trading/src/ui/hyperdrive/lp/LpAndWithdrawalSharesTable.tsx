import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePortfolioLpData } from "src/ui/portfolio/usePortfolioLpData";

export function LpAndWithdrawalSharesContainer(): ReactElement {
  const { openLpPosition, openLpPositionStatus } = usePortfolioLpData();
  const appConfig = useAppConfig();
  return (
    <div className="mt-10 flex w-[1036px] flex-col gap-10">
      {appConfig.hyperdrives.map((hyperdrive) => {
        const baseToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.poolConfig.baseToken,
        );
        const sharesToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
        );
        // Ensure this hyperdrive pool has open positions before rendering.
        if (
          openLpPositionStatus === "success" &&
          !openLpPosition?.[hyperdrive.address].lpShares &&
          !openLpPosition?.[hyperdrive.address].withdrawalShares
        ) {
          return null;
        }
        return (
          <div className="flex flex-col gap-6" key={hyperdrive.address}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 font-chakraPetch text-h4">
                <div className="daisy-avatar-group inline-flex justify-center -space-x-6 overflow-visible rtl:space-x-reverse">
                  {baseToken &&
                  hyperdrive.depositOptions.isBaseTokenDepositEnabled ? (
                    <div
                      className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                      data-tip={baseToken?.symbol}
                    >
                      <img src={baseToken?.iconUrl} />
                    </div>
                  ) : null}
                  {sharesToken &&
                  hyperdrive.depositOptions.isShareTokenDepositsEnabled ? (
                    <div
                      className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                      data-tip={sharesToken.symbol}
                    >
                      <img src={sharesToken.iconUrl} />
                    </div>
                  ) : null}
                </div>
                <p className="text-h4">{hyperdrive.name}</p>
              </div>
              {/* <TotalOpenLongsValue hyperdrive={hyperdrive} /> */}
            </div>
            {/* <OpenLongsTableDesktopTwo
              hyperdrive={hyperdrive}
              openLongPositionsStatus={openLongPositionsStatus}
            /> */}
          </div>
        );
      })}
    </div>
  );
}
