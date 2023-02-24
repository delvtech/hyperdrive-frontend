import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { Tag } from "components/Tag";
import { TokenInput } from "components/TokenInput";
import { constants } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import {
  useErc20Allowance,
  useErc20Approve,
  useHyperdriveOpenShort,
  usePrepareErc20Approve,
  usePrepareHyperdriveOpenShort,
} from "generated";
import { usePreviewOpenShort } from "hyperdrive/hooks/usePreviewOpenShort";
import { Market } from "hyperdrive/types";
import { ReactElement, useState } from "react";
import { isValidTokenAmount } from "utils";
import { useAccount, useBalance } from "wagmi";

interface OpenShortPositionFormProps {
  market: Market;
}

export function OpenShortPositionForm({
  market,
}: OpenShortPositionFormProps): ReactElement {
  const { address } = useAccount();

  // Base token hooks
  const { data: baseTokenData } = useBalance({
    address,
    token: market.baseToken.address,
  });

  const baseTokenBalance = baseTokenData?.value.toString() ?? "0";
  const [balance, setBalance] = useState("0");

  // Preview amounts
  const { data: previewAmountOutBN } = usePreviewOpenShort(
    address,
    market,
    balance,
  );
  const previewAmountOut = formatUnits(
    previewAmountOutBN ?? "0",
    market.baseToken.decimals,
  );
  const formattedPreviewAmountOut =
    previewAmountOut === "0.0" ? "0" : previewAmountOut;

  // ERC-20 approval hooks
  const { config: erc20ApproveConfig } = usePrepareErc20Approve({
    address: market.baseToken.address,
    args: [market.address, constants.MaxUint256],
    enabled: !!address,
  });
  const { data: baseTokenAllowance } = useErc20Allowance({
    address: market.baseToken.address,
    args: [address!, market.address],
    enabled: !!address,
  });
  const { write: writeApprove } = useErc20Approve(erc20ApproveConfig);
  const shouldApprove =
    !!balance &&
    parseUnits(balance, market.baseToken.decimals).gt(baseTokenAllowance ?? 0);

  //Open short hooks
  const prepareHyperdriveOpenShortEnabled =
    !!address && !!balance && isValidTokenAmount(balance);
  const { config: OpenShortConfig, error } = usePrepareHyperdriveOpenShort({
    address: market.address,
    enabled: prepareHyperdriveOpenShortEnabled,
    args: prepareHyperdriveOpenShortEnabled
      ? [
          parseUnits(balance, market.baseToken.decimals),
          // todo slippage
          constants.MaxUint256,
          address,
          false,
        ]
      : undefined,
  });

  const { write: writeOpenShort, isLoading: openShortLoading } =
    useHyperdriveOpenShort(OpenShortConfig);

  return (
    <div className="flex flex-col animate-ezn gap-y-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Short Amount</h3>

        <TokenInput
          token={{
            name: "Short",
            symbol: "SHORT",
            decimals: 18,
          }}
          disableMax
          showInputError={!!error}
          currentBalance={baseTokenBalance}
          onChange={(newBalance: string) => {
            setBalance(newBalance || "0");
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Cost</h3>

        <div className="flex items-center w-full p-4">
          <div className="mr-4 overflow-auto grow basis-0">
            <h4 className="mr-auto text-5xl font-bold">
              {formattedPreviewAmountOut}
            </h4>
          </div>
          <Tag text={market.baseToken.symbol}>
            <img
              className="inline mr-1"
              src={market.baseToken.logoUrl}
              height={16}
              width={16}
            />
          </Tag>
        </div>
      </div>

      {shouldApprove ? (
        <button
          onClick={() => {
            writeApprove && writeApprove();
          }}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean"
        >
          Approve
        </button>
      ) : error ? (
        <button
          disabled
          className="font-bold disabled:text-black btn-lg btn disabled:bg-error"
        >
          <ExclamationCircleIcon className="w-5 mr-1" />
          Can&apos;t swap
        </button>
      ) : (
        <button
          disabled={!isValidTokenAmount(balance) || openShortLoading}
          onClick={() => writeOpenShort && writeOpenShort()}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean disabled:bg-lean disabled:bg-opacity-60 disabled:text-opacity-100"
        >
          Open Short
        </button>
      )}
    </div>
  );
}
