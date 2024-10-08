import {
  appConfig,
  findBaseToken,
  findToken,
} from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import { Address } from "viem";

export function AssetStack({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  const hyperdrive = appConfig.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === hyperdriveAddress,
  )!;
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokens: appConfig.tokens,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });
  return (
    <div
      className={
        /* DaisyUI note: overflow-visible enables tooltips to be shown in the daisy-avatar-group */
        "daisy-avatar-group inline-flex justify-center -space-x-6 overflow-visible rtl:space-x-reverse"
      }
    >
      {hyperdrive.depositOptions.isBaseTokenDepositEnabled ? (
        <div
          className="daisy-avatar daisy-tooltip daisy-tooltip-top w-12 overflow-visible bg-[#ffffff] before:bg-base-100"
          data-tip={baseToken.symbol}
        >
          <img src={baseToken.iconUrl} className="rounded-full" />
        </div>
      ) : null}
      {hyperdrive.poolConfig.vaultSharesToken &&
      hyperdrive.depositOptions.isShareTokenDepositsEnabled ? (
        <div
          className="daisy-avatar daisy-tooltip daisy-tooltip-top w-12 overflow-visible before:bg-base-100"
          data-tip={sharesToken?.symbol}
        >
          <img
            src={sharesToken?.iconUrl}
            className="rounded-full bg-base-100"
          />
        </div>
      ) : null}
    </div>
  );
}
