import { constants } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import {
  useErc20Allowance,
  useErc20Approve,
  useHyperdriveOpenLong,
  usePrepareErc20Approve,
  usePrepareHyperdriveOpenLong,
} from "generated";
import { useLongs } from "hyperdrive/hooks/useLongs";
import { usePreviewOpenLong } from "hyperdrive/hooks/usePreviewOpenLong";
import { Market, OrderType } from "hyperdrive/types";
import { useMemo, useState } from "react";
import { match } from "ts-pattern";
import { useAccount, useBalance } from "wagmi";
import { Receipt } from "./Receipt";
import { Tag } from "./Tag";
import { TokenInput } from "./TokenInput";

interface LongPositionFormProps {
  order: OrderType;
  market: Market;
}

export function LongPositionForm({ order, market }: LongPositionFormProps) {
  const { address } = useAccount();
  const { data: baseTokenData } = useBalance({
    address,
    token: market.baseToken.address,
  });
  const baseTokenBalance = baseTokenData?.value;

  const [balance, setBalance] = useState("0");

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

  // todo slippage?
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

  const { data: previewAmountOut } = usePreviewOpenLong(
    address,
    market,
    balance,
  );

  // console.log(previewAmountOut);

  const shouldApprove = useMemo(() => {
    if (!balance) {
      return false;
    }

    const baseTokenBalanceBN = parseUnits(balance, market.baseToken.decimals);
    return baseTokenBalanceBN.gt(baseTokenAllowance ?? 0);
  }, [balance, baseTokenAllowance, market]);

  const { data: longs } = useLongs(address, market);
  const openLongs = longs?.openLongs ?? [];
  // console.log(balance, baseTokenAllowance, shouldApprove);

  return match(order)
    .with("OPEN", () => (
      <>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">From Wallet</h3>

          <TokenInput
            token={market.baseToken}
            currentBalance={baseTokenBalance?.toString() ?? "0"}
            onChange={(newBalance) => {
              setBalance(newBalance || "0");
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">You Receive</h3>

          <div className="flex items-center w-full">
            <h4 className="mr-auto text-5xl font-bold">
              {previewAmountOut &&
                formatUnits(previewAmountOut, market.baseToken.decimals).slice(
                  0,
                  6,
                )}
            </h4>
            <Tag text="Long" className="mr-1" />
            <Tag text="June 21st, 2023" />
          </div>
        </div>
        <Receipt
          data={{
            Matures: "June 24th, 2023",
            "Average Exchange Rate": "0.95",
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
    ))
    .with("CLOSE", () => (
      <>
        <div className="flex flex-col gap-4">
          <select
            className="w-full max-w-xs text-white bg-transparent select border-lean"
            defaultValue=""
          >
            <option value="" disabled>
              Select long position
            </option>
            {openLongs.map((long) => (
              <option key={`${long.id}-${long.amount}`} value={long.id}>
                {long.id} {formatUnits(long.amount, market.baseToken.decimals)}
              </option>
            ))}
          </select>
          <h3 className="text-2xl">From Position</h3>

          <TokenInput
            token={market.baseToken}
            currentBalance={baseTokenBalance?.toString() ?? "0"}
            onChange={(newBalance) => {
              console.log("newBalance", newBalance, newBalance || "0");
              setBalance(newBalance || "0");
            }}
          />

          {/* <div className="flex items-center w-full">
            <h4 className="mr-auto text-5xl font-bold">500</h4>
            <Tag text="USDC">
              <img
                className="inline mr-1"
                src={"/src/public/logos/usdc-logo.png"}
                height={16}
                width={16}
              />
            </Tag>
          </div> */}

          <div className="flex w-full text-white">
            <h4 className="mr-auto underline">Max</h4>
            <div className="flex items-center">
              <span className="mr-1">Balance:</span>
              <span className="font-bold">1,000,000</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">You Receive</h3>

          <div className="flex items-center w-full">
            <h4 className="mr-auto text-5xl font-bold">560</h4>
            <Tag text="Long" className="mr-1" />
            <Tag text="June 21st, 2023" />
          </div>
        </div>
        <Receipt
          data={{
            Matures: "June 24th, 2023",
            "Average Exchange Rate": "0.95",
          }}
        />
        <button className="font-bold text-black btn-lg btn bg-racing-green hover:bg-lean">
          Close Long
        </button>
      </>
    ))
    .exhaustive();
}
