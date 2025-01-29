import {
  getBaseToken,
  getHyperdriveConfig,
  getToken,
} from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { Address } from "viem";

export function AssetStack({
  hyperdriveAddress,
  hyperdriveChainId,
}: {
  hyperdriveAddress: Address;
  hyperdriveChainId: number;
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
  const hyperdrive = getHyperdriveConfig({
    hyperdriveAddress,
    appConfig,
    hyperdriveChainId,
  });
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = getToken({
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    appConfig,
  });
  return (
    <div
      className={
        /* DaisyUI note: overflow-visible enables tooltips to be shown in the daisy-avatar-group */
        "daisy-avatar-group inline-flex justify-center -space-x-6 overflow-visible rtl:space-x-reverse"
      }
    >
      {hyperdrive.depositOptions.isBaseTokenDepositEnabled ? (
        <Tooltip
          className="daisy-avatar w-12 overflow-visible bg-[#ffffff]"
          tooltip={baseToken.symbol}
        >
          <img src={baseToken.iconUrl} className="rounded-full" />
        </Tooltip>
      ) : null}
      {sharesToken && hyperdrive.depositOptions.isShareTokenDepositsEnabled ? (
        <Tooltip
          className="daisy-avatar w-12 overflow-visible bg-[#ffffff]"
          tooltip={sharesToken.symbol}
        >
          <img src={sharesToken.iconUrl} className="rounded-full bg-base-100" />
        </Tooltip>
      ) : null}
    </div>
  );
}
