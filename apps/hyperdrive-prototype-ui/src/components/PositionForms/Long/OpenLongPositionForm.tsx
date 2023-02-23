import { Receipt } from "components/Receipt";
import { Tag } from "components/Tag";
import { TokenInput } from "components/TokenInput";
import { constants } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import {
  useErc20Allowance,
  useErc20Approve,
  useHyperdriveBondReserves,
  useHyperdriveOpenLong,
  useHyperdriveShareReserves,
  usePrepareErc20Approve,
  usePrepareHyperdriveOpenLong,
} from "generated";
import { useLongs } from "hyperdrive/hooks/useLongs";
import { usePreviewOpenLong } from "hyperdrive/hooks/usePreviewOpenLong";
import { Market } from "hyperdrive/types";
import { ReactElement, useState } from "react";
import { formatBalance } from "utils";
import { useAccount, useBalance } from "wagmi";

interface OpenLongPositionFormProps {
  market: Market;
}

export function OpenLongPositionForm({
  market,
}: OpenLongPositionFormProps): ReactElement {
  const { address } = useAccount();

  // Base token hooks
  const { data: baseTokenData } = useBalance({
    address,
    token: market.baseToken.address,
  });

  const baseTokenBalance = baseTokenData?.value.toString() ?? "0";
  const [balance, setBalance] = useState("0");

  // Preview amounts
  const { data: previewAmountOutBN } = usePreviewOpenLong(
    address,
    market,
    balance,
  );
  const previewAmountOut = formatUnits(
    previewAmountOutBN ?? "0",
    market.baseToken.decimals,
  );

  // Market information hooks
  const { data: marketShareReserves } = useHyperdriveShareReserves({
    address: market.address,
  });

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
  const { config: openLongConfig } = usePrepareHyperdriveOpenLong({
    address: market.address,
    args: [
      parseUnits(balance, market.baseToken.decimals),
      constants.Zero,
      address!,
    ],
    enabled: !!address && !!balance && balance !== "0",
  });

  const { write: writeOpenLong, isLoading: openLongLoading } =
    useHyperdriveOpenLong(openLongConfig);

  // Current long data for connected account
  const { data: longs } = useLongs(address, market);
  const openLongs = longs?.openLongs ?? [];

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">From Wallet</h3>

        <TokenInput
          token={market.baseToken}
          currentBalance={baseTokenBalance}
          onChange={(newBalance) => {
            setBalance(newBalance || "0");
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">You Receive</h3>

        <div className="flex items-center w-full p-4">
          <div className="w-full mr-4 overflow-x-auto">
            <h4 className="mr-auto text-5xl font-bold">{previewAmountOut}</h4>
          </div>
          <Tag text="Long" />
          {/* <Tag text="June 21st, 2023" /> */}
        </div>
      </div>
      <Receipt
        data={{
          Matures: new Date(
            Date.now() + market.positionDuration,
          ).toLocaleDateString(),
          "Bond Reserves": formatBalance(
            formatUnits(marketBondReserves ?? 0, market.baseToken.decimals),
          ),
          "Share Reserves": formatBalance(
            formatUnits(marketShareReserves ?? 0, market.baseToken.decimals),
          ),
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
      ) : (
        <button
          disabled={!balance || openLongLoading}
          onClick={() => {
            writeOpenLong && writeOpenLong();
          }}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean disabled:bg-lean disabled:text-opacity-100 disabled:bg-opacity-60"
        >
          Open Long
        </button>
      )}
    </>
  );
}
