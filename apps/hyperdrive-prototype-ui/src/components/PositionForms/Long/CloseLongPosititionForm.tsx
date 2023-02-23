import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { BigNumber, constants } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement, useEffect, useState } from "react";
import { Tag } from "src/components/Tag";
import { TokenInput } from "src/components/TokenInput";
import {
  useHyperdriveCloseLong,
  usePrepareHyperdriveCloseLong,
} from "src/generated";
import { useLongs } from "src/hyperdrive/hooks/useLongs";
import { usePreviewCloseLong } from "src/hyperdrive/hooks/usePreviewCloseLong";
import { Long, Market } from "src/hyperdrive/types";
import { formatBalance, isValidTokenAmount } from "src/utils";
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

  const { config: closeLongConfig, error } = usePrepareHyperdriveCloseLong({
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

  const { writeAsync: writeCloseLong, isLoading: closeLongLoading } =
    useHyperdriveCloseLong(closeLongConfig);

  return (
    <>
      <select
        className="select border-lean w-full max-w-xs bg-transparent text-white"
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
            setBalance(newBalance || "0");
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">You Receive</h3>

        <div className="flex w-full items-center p-4">
          <div className="mr-2 grow basis-0 overflow-x-auto">
            <div className="mr-4 w-full">
              <h4 className="mr-auto text-5xl font-bold">
                {formattedPreviewAmountOut}
              </h4>
            </div>
          </div>
          <Tag text={market.baseToken.name}>
            <img
              className="mr-1 inline"
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
      {error ? (
        <button
          disabled
          className="btn-lg btn btn-error disabled:bg-error font-bold disabled:text-black"
        >
          <ExclamationCircleIcon className="mr-1 w-5" />
          Can&apos;t swap
        </button>
      ) : (
        <button
          disabled={
            !selectedLong || !isValidTokenAmount(balance) || closeLongLoading
          }
          onClick={() => {
            writeCloseLong && writeCloseLong();
          }}
          className="btn-lg btn hover:bg-racing-green bg-lean disabled:bg-lean font-bold text-black disabled:bg-opacity-60 disabled:text-opacity-100"
        >
          Close Long
        </button>
      )}
    </>
  );
}
