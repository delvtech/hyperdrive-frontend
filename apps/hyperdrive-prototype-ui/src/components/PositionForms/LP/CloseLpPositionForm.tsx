import { Receipt } from "components/Receipt";
import { Tag } from "components/Tag";
import { TokenInput } from "components/TokenInput";
import { BigNumber, constants } from "ethers";
import { formatEther, formatUnits, parseUnits } from "ethers/lib/utils.js";
import {
  useErc20Allowance,
  useErc20Approve,
  useHyperdriveAddLiquidity,
  useHyperdriveBaseInitialSharePrice,
  useHyperdriveBondReserves,
  useHyperdriveShareReserves,
  usePrepareErc20Approve,
  usePrepareHyperdriveAddLiquidity,
} from "generated";
import { usePreviewOpenLp } from "hyperdrive/hooks/usePreviewOpenLp";
import { Market } from "hyperdrive/types";
import { ReactElement, useState } from "react";
import { formatBalance, isValidTokenAmount } from "utils";
import { useAccount, useBalance } from "wagmi";

interface CloseLpPositionFormProps {
  market: Market;
}

export function CloseLpPositionForm({
  market,
}: CloseLpPositionFormProps): ReactElement {
  const { address } = useAccount();

  // Base token hooks
  const { data: baseTokenData } = useBalance({
    address,
    token: market.baseToken.address,
  });

  const baseTokenBalance = baseTokenData?.value.toString() ?? "0";
  const [balance, setBalance] = useState("0");

  // Preview amounts
  const { data: previewAmountOutBN } = usePreviewOpenLp(
    address,
    market,
    balance,
  );

  const formattedPreviewAmountOut = (
    previewAmountOutBN || BigNumber.from(0)
  ).eq(0)
    ? "0"
    : formatUnits(previewAmountOutBN ?? "0", 0);

  // Market information hooks
  const { data: marketShareReserves } = useHyperdriveShareReserves({
    address: market.address,
  });

  const { data: sharePrice } = useHyperdriveBaseInitialSharePrice({
    address: market.address,
  });
  const baseReserves =
    sharePrice &&
    marketShareReserves &&
    +formatEther(sharePrice) * +formatEther(marketShareReserves);

  const { data: marketBondReserves } = useHyperdriveBondReserves({
    address: market.address,
  });

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

  // Open long hooks
  const prepareHyperdriveAddLiquidityEnabled =
    !!address && !!balance && isValidTokenAmount(balance);
  const { config: openLpConfig, error } = usePrepareHyperdriveAddLiquidity({
    address: market.address,
    enabled: prepareHyperdriveAddLiquidityEnabled,
    args: prepareHyperdriveAddLiquidityEnabled
      ? [
          parseUnits(balance, market.baseToken.decimals),
          constants.Zero,
          address,
          false,
        ]
      : undefined,
  });

  const { write: writeOpenLp, isLoading: openLpLoading } =
    useHyperdriveAddLiquidity(openLpConfig);

  return (
    <div className="flex flex-col animate-ezn gap-y-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">From Wallet</h3>

        <TokenInput
          token={market.baseToken}
          currentBalance={baseTokenBalance}
          showInputError={!!error}
          onChange={(newBalance: string) => {
            setBalance(newBalance || "0");
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">You Receive</h3>

        <div className="flex items-center w-full p-4">
          <div className="w-full mr-4 overflow-x-auto">
            <h4 className="mr-auto text-5xl font-bold">
              {formattedPreviewAmountOut}
            </h4>
          </div>
          <Tag text="LP" />
        </div>
      </div>
      <Receipt
        data={{
          "Bond Reserves": formatBalance(
            formatUnits(marketBondReserves ?? 0, market.baseToken.decimals),
          ),
          "Base Reserves": formatBalance(baseReserves ?? "0"),
        }}
      />
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
        <></>
      ) : (
        <button
          disabled={!isValidTokenAmount(balance) || openLpLoading}
          onClick={() => writeOpenLp && writeOpenLp()}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean disabled:bg-lean disabled:bg-opacity-60 disabled:text-opacity-100"
        >
          Close LP
        </button>
      )}
    </div>
  );
}
