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
import { useAccount } from "wagmi";

interface CloseLongPositionFormProps {
  market: Market;
}

export function CloseLongPositionForm({
  market,
}: CloseLongPositionFormProps): ReactElement {
  const { address } = useAccount();

  // const baseTokenBalance = baseTokenData?.value.toString() ?? "0";
  const [balance, setBalance] = useState("0");

  // Current long data for connected account
  const { data: longs } = useLongs(address, market);
  const openLongs = longs?.openLongs ?? [];

  const [selectedLong, setSelectedLong] = useState<Long | undefined>();

  useEffect(() => {
    if (selectedLong) {
      setBalance(selectedLong.amount.toString());
    }
  }, [selectedLong]);

  // TODO maybe
  const shouldApprove = false;

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

  const { config: closeLongConfig } = usePrepareHyperdriveCloseLong({
    address: market.address,
    args: [
      // todo prevent from crashing page, since this gets typed check during runtime
      BigNumber.from(selectedLong?.id ?? "0"),
      parseUnits(balance, market.baseToken.decimals),
      constants.Zero,
      address!,
    ],
    enabled: !!address && !!balance && balance !== "0" && !!selectedLong,
  });

  const { write: writeCloseLong, isLoading: closeLongLoading } =
    useHyperdriveCloseLong(closeLongConfig);

  return (
    <>
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
            {long.id} {formatUnits(long.amount, market.baseToken.decimals)}
          </option>
        ))}
      </select>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">From Position</h3>

        <TokenInput
          token={market.baseToken}
          currentBalance={balance}
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
      {shouldApprove ? (
        <button
          // onClick={() => {
          //   writeApprove && writeApprove();
          // }}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean"
        >
          Approve
        </button>
      ) : (
        <button
          disabled={!balance || closeLongLoading}
          onClick={() => {
            writeCloseLong && writeCloseLong();
          }}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean disabled:bg-lean disabled:text-opacity-100 disabled:bg-opacity-60"
        >
          Close Long
        </button>
      )}
    </>
  );
}
