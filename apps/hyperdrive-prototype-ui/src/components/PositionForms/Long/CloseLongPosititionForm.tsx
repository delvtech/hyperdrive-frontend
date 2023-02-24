import { SwapErrorButton } from "components/SwapErrorButton";
import { Tag } from "components/Tag";
import { TokenInput } from "components/TokenInput";
import { BigNumber, constants } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import {
  useHyperdriveCloseLong,
  usePrepareHyperdriveCloseLong,
} from "generated";
import { useLongs } from "hyperdrive/hooks/useLongs";
import { usePreviewCloseLong } from "hyperdrive/hooks/usePreviewCloseLong";
import { Long, Market } from "hyperdrive/types";
import { ReactElement, useEffect, useState } from "react";
import { formatBalance, isValidTokenAmount } from "utils";
import { useAccount } from "wagmi";

interface CloseLongPositionFormProps {
  market: Market;
}

export function CloseLongPositionForm({
  market,
}: CloseLongPositionFormProps): ReactElement {
  const { address } = useAccount();

  const [balance, setBalance] = useState("0");
  const [totalBalance, setTotalBalance] = useState("0");

  // Current long data for connected account
  const { data: longs } = useLongs(address, market);
  const openLongs = longs?.openLongs ?? [];

  const [selectedLong, setSelectedLong] = useState<Long | undefined>();

  useEffect(() => {
    if (selectedLong) {
      setBalance(selectedLong.amount.toString());
      setTotalBalance(selectedLong.amount.toString());
    }
  }, [selectedLong]);

  const { data: previewCloseLongData } = usePreviewCloseLong(
    address,
    market,
    balance,
    selectedLong?.id,
  );

  const previewAmountOut = formatUnits(
    previewCloseLongData?.toString() ?? "0",
    market.baseToken.decimals,
  );
  const formattedPreviewAmountOut =
    previewAmountOut === "0.0" ? "0" : previewAmountOut;

  const prepareHyperdriveCloseLongEnabled =
    !!address && isValidTokenAmount(balance) && !!selectedLong;
  const { config: closeLongConfig, error } = usePrepareHyperdriveCloseLong({
    address: market.address,
    enabled: prepareHyperdriveCloseLongEnabled,
    args: prepareHyperdriveCloseLongEnabled
      ? [
          BigNumber.from(selectedLong.id),
          parseUnits(balance, market.baseToken.decimals),
          constants.Zero,
          address,
          false,
        ]
      : undefined,
  });

  const { writeAsync: writeCloseLong, isLoading: closeLongLoading } =
    useHyperdriveCloseLong(closeLongConfig);

  return (
    <div className="flex flex-col animate-ezn gap-y-10">
      <select
        className="w-full max-w-xs text-white bg-transparent select border-lean"
        defaultValue=""
        onChange={(event) => {
          const longId = event.target.value;
          // find long with id
          setSelectedLong(openLongs.find((long) => long.id === longId));
        }}
      >
        <option value="" disabled>
          Select long position
        </option>
        {openLongs.map((long) => (
          <option key={`${long.id}-${long.amount}`} value={long.id}>
            Long {long.id}{" "}
            {formatBalance(formatUnits(long.amount, market.baseToken.decimals))}
          </option>
        ))}
      </select>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">From Position</h3>

        <TokenInput
          token={{
            name: "Long",
            symbol: "LONG",
            decimals: 18,
          }}
          disabled={!selectedLong || closeLongLoading}
          currentBalance={totalBalance}
          onChange={(newBalance) => {
            setBalance(newBalance);
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">You Receive</h3>

        <div className="flex items-center w-full p-4">
          <div className="w-full mr-4 overflow-x-auto grow basis-0">
            <h4 className="mr-auto text-5xl font-bold">
              {formattedPreviewAmountOut}
            </h4>
          </div>
          <Tag text={market.baseToken.name}>
            <img
              className="inline mr-1"
              src={market.baseToken.logoUrl}
              height={16}
              width={16}
            />
          </Tag>
        </div>
      </div>
      {/* <Receipt
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
      /> */}
      {!!error ? (
        <SwapErrorButton />
      ) : (
        <button
          disabled={
            !selectedLong || !isValidTokenAmount(balance) || closeLongLoading
          }
          onClick={() => {
            writeCloseLong && writeCloseLong();
          }}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean disabled:bg-lean disabled:bg-opacity-60 disabled:text-opacity-100"
        >
          Close Long
        </button>
      )}
    </div>
  );
}
